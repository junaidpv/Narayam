/**
 * Narayam
 * Input field rewriter tool for web pages
 * @author Junaid P V ([[User:Junaidpv]]) (http://junaidpv.in)
 * @date 2010-12-18 (Based on naaraayam transliteration tool I first wrote on 2010-05-19)
 * @version 3.0
 * Last update: July 2012
 * License: GPLv3
 */

/**
 * NOTE: For documentation on writing schemes and rulesets, see the
 * documentation for addScheme().
 */

( function ( $, mw ) {
'use strict';

$.narayam = ( function () {
	/* Private members */

	var
		// Reference to the narayam API
		narayam = {},

		// jQuery array holding all text inputs Narayam applies to
		$inputs = $( [] ),

		// Whether Narayam is enabled
		enabled = false,

		// Registered schemes
		schemes = {},

		// List of scheme names, ordered for presentation purposes
		// Schemes not in this list won't be allowed to register
		// This object is formatted as { 'schemename': '', 'schemename2': '', ... }
		// for easy searching
		availableSchemes = mw.config.get( 'wgNarayamAvailableSchemes', {} ),

		// All input methods. This will be used for selecting input methods from languages
		// other than uselang- optionally
		allImes = mw.config.get( 'wgNarayamAllSchemes', {} ),

		// Currently selected scheme
		currentScheme,

		// Shortcut key for turning Narayam on and off
		shortcutKey = getShortCutKey(),

		// Number of recent input methods to be shown
		recentItemsLength = mw.config.get( 'wgNarayamRecentItemsLength' );


	/* Private functions */

	/**
	 * Check whether a keypress event corresponds to the shortcut key
	 * @param e Event object
	 * @return bool
	 */
	function isShortcutKey( e ) {
		return e.altKey === shortcutKey.altKey &&
			e.ctrlKey === shortcutKey.ctrlKey &&
			e.shiftKey === shortcutKey.shiftKey &&
			String.fromCharCode( e.which ) === shortcutKey.key;
	}

	/**
	 * Get the shortcut key for the tool, depending on OS, browser
	 * @return shortcutKey
	 */
	function getShortCutKey() {
		var defaultShortcut = {
			altKey: false,
			ctrlKey: true,
			shiftKey: false,
			cmdKey: false,
			key: 'M'
		};
		// Browser sniffing to determine the available shortcutKey
		// Refer: mediawiki.util.js and en.wikipedia.org/wiki/Access_key
		var profile = $.client.profile();
		// Safari/Konqueror on any platform, but not Safari on Windows
		// or any browser on Mac except chrome and opera
		if ( !( profile.platform === 'win' && profile.name === 'safari' ) &&
			( profile.name === 'safari'|| profile.platform === 'mac' || profile.name === 'konqueror' ) &&
			!( profile.name === 'opera' || profile.name === 'chrome' ) )
		{
			defaultShortcut.key = 'G';
		}
		// For Opera in OSX, shortcut is control+command+m.
		if ( profile.name === 'opera' && profile.platform === 'mac' ) {
			defaultShortcut.cmdKey = true;
		}
		return defaultShortcut;
	}

	/**
	 * Get a description of the shortcut key, e.g. "Ctrl-M"
	 * @return string
	 */
	function shortcutText() {
		var text = '';
		// TODO: Localize these things (in core, too)
		if ( shortcutKey.ctrlKey ) {
			text += 'Ctrl-';
		}
		if ( shortcutKey.shiftKey ) {
			text += 'Shift-';
		}
		if ( shortcutKey.altKey ) {
			text += 'Alt-';
		}
		if ( shortcutKey.cmdKey ) {
			text += 'Command-';
		}
		text += shortcutKey.key.toUpperCase();
		return text;
	}

	/**
	 * Change visual appearance of element (text input, textarea) according
	 * to the current state of Narayam
	 * @param {jQuery} $element
	 */
	function changeVisual( $element ) {
		if ( enabled ) {
			$element.addClass( 'narayam-input' );
			if ( $.narayam.osk ) {
				$.narayam.osk.bind( $element, currentScheme.namemsg );
			}
		} else {
			$element.removeClass( 'narayam-input' );
			/*
			if ( $.narayam.osk ) {
				$.narayam.osk.unbind( $element );
			}
			*/
		}
	}

	/**
	 * Replace text part from startPos to endPos with peri
	 * This function is specifically for webkit browsers,
	 * because of bug: https://bugs.webkit.org/show_bug.cgi?id=66630
	 * TODO: remove when webkit bug is handled in jQuery.textSelection.js
	 *
	 * @param {jQuery} $element jQuery object to wich replacement to be taked place
	 * @param startPos Starting position of text range to be replaced
	 * @param endPos Ending position of text range to be replaced
	 * @param peri String to be substituted
	 */
	function replaceString( $element, startPos, endPos, peri ) {
		// Take entire text of the element
		var text = $element.val();
		var pre = text.substring( 0, startPos );
		var post = text.substring( endPos, text.length );

		// Then replace
		$element.val( pre + peri + post );
	}

	/**
	 * Keydown event handler. Handles shortcut key presses
	 * @context {HTMLElement}
	 * @param {jQuery.Event} e
	 */
	function onkeydown( e ) {
		// If the current scheme uses the alt key, ignore keydown for Alt+? combinations
		if ( enabled && currentScheme.extended_keyboard && e.altKey && !e.ctrlKey ) {
			e.stopPropagation();
			return false; // Not in original code -- does this belong here?
		} else if ( isShortcutKey( e ) ) {
			narayam.toggle();
			changeVisual( $( this ) );
			e.stopPropagation();
			return false;
		}
		return true;
	}

	/**
	 * Keypress event handler. This is where the real work happens
	 * @context {HTMLElement}
	 * @param {jQuery.Event} e
	 */
	function onkeypress( e ) {
		if ( !enabled ) {
			return true;
		}

		if ( e.which === 8 ) { // Backspace
			// Blank the keybuffer
			$( this ).data( 'narayamKeyBuffer', '' );
			return true;
		}

		// Don't process ASCII control characters (except linefeed),
		// as well as anything involving
		// Alt (except for extended keymaps), Ctrl and Meta
		if ( ( e.which < 32 && e.which !== 13 ) ||
			( e.altKey && !currentScheme.extended_keyboard )
			|| e.ctrlKey
			|| e.metaKey )
		{
			return true;
		}

		var $this = $( this );
		var c = String.fromCharCode( e.which );
		// Get the current caret position. The user may have selected text to overwrite,
		// so get both the start and end position of the selection. If there is no selection,
		// startPos and endPos will be equal.
		var pos = getCaretPosition( this );
		var startPos = pos[0];
		var endPos = pos[1];
		// Get the last few characters before the one the user just typed,
		// to provide context for the transliteration regexes.
		// We need to append c because it hasn't been added to $this.val() yet
		var input = narayam.lastNChars(  $this.val() || $this.text(), startPos, currentScheme.lookbackLength ) + c;
		var keyBuffer = $this.data( 'narayamKeyBuffer' );
		var replacement = narayam.transliterate( input, keyBuffer, e.altKey );

		// Update the key buffer
		keyBuffer += c;
		if ( keyBuffer.length > currentScheme.keyBufferLength ) {
			// The buffer is longer than needed, truncate it at the front
			keyBuffer = keyBuffer.substring( keyBuffer.length - currentScheme.keyBufferLength );
		}
		$this.data( 'narayamKeyBuffer', keyBuffer );

		// textSelection() magic is expensive, so we avoid it as much as we can
		if ( replacement === input ) {
			return true;
		}
		// Drop a common prefix, if any
		// TODO: Profile this, see if it's any faster
		var divergingPos = narayam.firstDivergence( input, replacement );
		input = input.substring( divergingPos );
		replacement = replacement.substring( divergingPos );
		replaceText( this, replacement, startPos - input.length + 1, endPos );
		e.stopPropagation();
		return false;
	}

	function getCaretPosition( element ){
		var isDiv = ( element.nodeName === 'DIV' );
		if ( !isDiv ) {
			return $( element ).textSelection( 'getCaretPosition', {
				startAndEnd: true
			} );
		}
		return window.getDivCaretPos( element );
	}

	function replaceText( element, replacement, start, end ) {
		var isDiv = ( element.nodeName === 'DIV' );
		var $this = $( element );
		if ( !isDiv ) {
			 $this.textSelection( 'encapsulateSelection', {
				peri: replacement,
				replace: true,
				selectPeri: false,
				selectionStart: start,
				selectionEnd: end
			} );
		} else {
			// Replace the text in the selection part with translterated text.
			$this.text( $this.text().substr( 0, start ) + replacement + $this.text().substr( end, $this.text().length ) );
			// Move the cursor to the end of the replaced text.
			window.setDivCaretPos( element, {
				start: start + replacement.length,
				end:  start + replacement.length
			} );
		}
	}

	/**
	 * Focus event handler.
	 * @context {HTMLElement}
	 * @param {jQuery.Event} e
	 */
	function onfocus( e ) {
		if ( !$( this ).data( 'narayamKeyBuffer' ) ) {
			// First-time focus on the input field
			// So, initialise a key buffer for it
			$( this ).data( 'narayamKeyBuffer', '' );
		}
		changeVisual( $( this ) );
	}

	/**
	 * Blur event handler.
	 * @context {HTMLElement}
	 * @param {jQuery.Event} e
	 */
	function onblur( e ) {
		$( this ).removeClass( 'narayam-input' );
	}


	/* Public functions */

	/**
	 * Transliterate a string using the current scheme
	 * @param str String to transliterate
	 * @param keyBuffer The key buffer
	 * @param useExtended Whether to use the extended part of the scheme
	 * @return Transliterated string, or str if no applicable transliteration found.
	 */
	narayam.transliterate = function ( str, keyBuffer, useExtended ) {
		var rules = currentScheme.extended_keyboard && useExtended ?
			currentScheme.rules_x : currentScheme.rules;
		for ( var i = 0; i < rules.length; i++ ) {
			var regex = new RegExp( rules[i][0] + '$' );
			if ( regex.test( str ) && // Input string match
				(
					rules[i][1].length === 0 || // Keybuffer match not required
					( // Keybuffer match specified, so it should be met
						rules[i][1].length > 0 &&
						new RegExp( rules[i][1] + '$' ).test( keyBuffer )
					)
				)
			)
			{
				return str.replace( regex, rules[i][2] );
			}
		}
		// No matches, return the input
		return str;
	};

	/**
	 * Get the n characters in str that immediately precede pos
	 * Example: lastNChars( 'foobarbaz', 5, 2 ) == 'ba'
	 * @param str String to search in
	 * @param pos Position in str
	 * @param n Number of characters to go back from pos
	 * @return Substring of str, at most n characters long, immediately preceding pos
	 */
	narayam.lastNChars = function ( str, pos, n ) {
		if ( n === 0 ) {
			return '';
		} else if ( pos <= n ) {
			return str.substr( 0, pos );
		} else {
			return str.substr( pos - n, n );
		}
	};

	/**
	 * Find the point at which a and b diverge, i.e. the first position
	 * at which they don't have matching characters.
	 * @param {String} a
	 * @param {String} b
	 * @return {Number} Position at which a and b diverge, or -1 if a == b
	 */
	narayam.firstDivergence = function ( a, b ) {
		var minLength = a.length < b.length ? a.length : b.length;
		for ( var i = 0; i < minLength; i++ ) {
			if ( a.charCodeAt( i ) !== b.charCodeAt( i ) ) {
				return i;
			}
		}
		return -1;
	};

	/**
	 * Add more inputs to apply Narayam to
	 * @param inputs A jQuery object holding one or more input or textarea elements,
	 *               or an array of DOM elements, or a single DOM element, or a selector
	 */
	narayam.addInputs = function ( inputs ) {
		var $newInputs = $( inputs );
		$inputs = $inputs.add( $newInputs );
		$newInputs.on({
			'keydown.narayam': onkeydown,
			'keypress.narayam': onkeypress,
			'focus': onfocus,
			'blur': onblur
		});
	};

	/**
	 * Enable Narayam
	 */
	narayam.enable = function () {
		if ( !enabled ) {
			$.cookie( 'narayam-enabled', '1', {
				path: '/',
				expires: 30
			} );
			$( '#narayam-toggle' ).prop( 'checked', true );
			$( '#pt-narayam' )
				.removeClass( 'narayam-inactive' )
				.addClass( 'narayam-active' );
			enabled = true;
		}
	};

	/**
	 * Disable Narayam
	 */
	narayam.disable = function () {
		if ( enabled ) {
			$.cookie( 'narayam-enabled', '0', {
				path: '/',
				expires: 30
			} );
			$( '#narayam-toggle' ).prop( 'checked', false );
			$( '#pt-narayam' )
				.removeClass( 'narayam-active' )
				.addClass( 'narayam-inactive' );
			enabled = false;
		}
	};

	/**
	 * Toggle the enabled/disabled state.
	 */
	narayam.toggle = function () {
		if ( enabled ) {
			narayam.disable();
		} else {
			narayam.enable();
		}
	};

	narayam.enabled = function () {
		return enabled;
	};

	/**
	 * Add a transliteration scheme. Schemes whose name is not in
	 * wgNarayamAvailableSchemes will be ignored.
	 *
	 * A scheme consists of rules used for transliteration. A rule is an
	 * array of three strings. The first string is a regex that is matched
	 * against the input string (the last few characters before the cursor
	 * followed by the character the user entered), the second string is a
	 * regex that is matched against the end of the key buffer (the last
	 * few keys the user pressed), and the third string is the replacement
	 * string (may contain placeholders like $1 for subexpressions). You do
	 * not need to add $ to the end of either of the regexes so they match
	 * at the end, this is done automagically.
	 *
	 * The transliteration algorithm processes the rules in the order they
	 * are specified, and applies the first rule that matches. For a rule
	 * to match, both the first and second regex have to match (the first
	 * for the input, the second for the key buffer). Most rules do not use
	 * the keybuffer and specify an empty string as the second regex.
	 *
	 * The scheme data object must have the following keys:
	 * namemsg: Message key for the name of the scheme
	 * extended_keyboard: Whether this scheme has an extended ruleset (bool)
	 * lookbackLength: Number of characters before the cursor to include
	 *                 when matching the first regex of each rule. This is
	 *                 usually the maximum number of characters a rule
	 *                 regex can match minus one.
	 * keyBufferLength: Length of the key buffer. May be zero if not needed
	 * rules: Array of rules, which themselves are arrays of three strings.
	 * rules_x: Extended ruleset. This is used instead of the normal
	 *          ruleset when Alt is held. This key is only required if
	 *          extended_keyboard is true
	 *
	 * NOTE: All keys are REQUIRED (except rules_x when not used). Missing
	 *       keys may result in JS errors.
	 *
	 * @param {String} name Name of the scheme, must be unique.
	 * @param {Object} data Scheme data.
	 * @return {Boolean} True if added, false if not.
	 */
	narayam.addScheme = function ( name, data ) {
		schemes[name] = data;
		return true;
	};

	/**
	 * Get the transliteration rules for the given input method name.
	 * @param {String} name
	 */
	narayam.getScheme = function ( name ) {
		return schemes[name];
	};

	/**
	 * Change the current transliteration scheme
	 * @param {String} name
	 * @param {Function} callback To be called when the scheme is ready/dynamically loaded.- Optional
	 */
	narayam.setScheme = function ( name, callback ) {
		var recent = $.cookie( 'narayam-scheme' ) || [];
		if ( typeof recent === 'string' ) {
			recent = recent.split( ',' );
		}
		recent = $.grep( recent, function ( value ) {
			return value !== name;
		} );
		recent.unshift( name );
		recent = recent.slice( 0, recentItemsLength );
		recent = recent.join( ',' );
		$.cookie( 'narayam-scheme', recent, {
			path: '/',
			expires: 30
		} );
		if ( name in schemes ) {
			currentScheme = schemes[name];
			if ( callback ) {
				callback.call();
			}
		} else {
			// load the rules dynamically.
			mw.loader.using( 'ext.narayam.rules.' + name, function () {
				currentScheme = schemes[name];
				if ( callback ) {
					callback.call();
				}
			} );
		}
		return true;
	};

	/**
	 * Set up Narayam. This adds the scheme dropdown, binds the handlers
	 * and initializes the enabled/disabled state and selected scheme
	 * from a cookie or wgNarayamEnabledByDefault
	 */
	narayam.setup = function () {
		// Disable Narayam if CodeEditor is requested on this page (bug 39557)
		if ( mw.config.get( 'wgCodeEditorCurrentLanguage' ) ) {
			return;
		}

		narayam.buildMenu();
		// Restore state from cookies
		var recent = $.cookie( 'narayam-scheme' );
		var lastScheme;
		if ( typeof recent === 'string' ) {
			lastScheme = recent.split( ',' )[0];
		}
		if ( lastScheme ) {
			narayam.setScheme( lastScheme );
			$( '#narayam-' + lastScheme ).prop( 'checked', true );
		} else {
			//if no saved input scheme, select the first.
			var $firstScheme = $( 'input.narayam-scheme:first' );
			if ( $firstScheme.val() === undefined ){
				return;
			}
			narayam.setScheme( $firstScheme.val() );
			$firstScheme.prop( 'checked', true );
		}

		var enabledCookie = $.cookie( 'narayam-enabled' );
		if ( enabledCookie === '1' ||
			( mw.config.get( 'wgNarayamEnabledByDefault' ) && enabledCookie !== '0' )
		) {
			narayam.enable();
		} else {
			$( '#pt-narayam' ).addClass( 'narayam-inactive' );
		}
		// Renew the narayam-enabled cookie. narayam-scheme is renewed by setScheme()
		if ( enabledCookie ) {
			$.cookie( 'narayam-enabled', enabledCookie, { path: '/', expires: 30 } );
		}
	};

	/**
	 * Construct the menu item, for the given scheme name.
	 */
	narayam.buildMenuItem = function ( scheme ) {
		var $input = $( '<input type="radio" name="narayam-input-method" class="narayam-scheme" />' );
		$input.attr( 'id', 'narayam-' + scheme ).val( scheme );

		var $narayamMenuItemLabel = $( '<label>' )
			.attr( 'for' ,'narayam-' + scheme )
			.append( $input )
			.append( mw.message( 'narayam-' + scheme ).escaped() );

		return $( '<li>' )
			.append( $input )
			.append( $narayamMenuItemLabel );
	};

	/**
	 * prepare the menu list for all the input methods.
	 * @return The div containing the constructed menu.
	 */
	narayam.buildMenuItems = function () {
		var haveSchemes = false;
		// Build schemes option list
		var $narayamMenuItems = $( '<ul>' );
		var count = 1;
		var seen = [];

		var recent = $.cookie( 'narayam-scheme' ) || [];
		if ( typeof recent === 'string' ) {
			recent = recent.split( ',' );
		}

		// Prepare the recent inputmethods menu items
		for ( var recentIndex = 0; recentIndex < recent.length; recentIndex++ ) {
			var recentScheme = recent[recentIndex];
			if ( $.inArray( recentScheme, seen ) !== -1 ) {
				continue;
			}
			seen.push( recentScheme );
			if ( count++ > recentItemsLength ) {
				break;
			}
			var $narayamRecentMenuItem = narayam.buildMenuItem( recentScheme );
			$narayamRecentMenuItem.addClass( 'narayam-recent-menu-item' );
			$narayamMenuItems.append( $narayamRecentMenuItem );
		}

		// menu items for the language of wiki.
		var requested = [
			mw.config.get( 'wgUserVariant' ),
			mw.config.get( 'wgContentLanguage' ),
			mw.config.get( 'wgUserLanguage' )
		];
		$( 'textarea[lang]' ).each( function () {
			requested.push( this.lang );
		});
		for ( var requestedIndex = 0; requestedIndex < requested.length; requestedIndex++ ) {
			var requestedLang = requested[requestedIndex];
			var requestedLangSchemes = allImes[requestedLang];
			if ( !requestedLangSchemes ) {
				continue;
			}

			for ( var requestedScheme in requestedLangSchemes ) {
				haveSchemes = true;
				if ( $.inArray( requestedScheme, seen ) !== -1 ) {
					continue;
				}
				seen.push( requestedScheme );
				var $narayamRequestedMenuItem = narayam.buildMenuItem( requestedScheme );
				$narayamMenuItems.append( $narayamRequestedMenuItem );
			}
		}

		if ( !haveSchemes ) {
			// No schemes available, don't show the tool
			return null;
		}

		// Build enable/disable checkbox and label
		var $checkbox = $( '<input type="checkbox" id="narayam-toggle" />' );
		$checkbox
			.attr( 'title', mw.msg( 'narayam-checkbox-tooltip' ) )
			.click( narayam.toggle );

		var $label = $( '<label>' ).attr( 'for', 'narayam-toggle' );
		$label
			.text( mw.msg( 'narayam-toggle-ime', shortcutText() ) )
			.prepend( $checkbox )
			.prop( 'title', mw.msg( 'narayam-checkbox-tooltip' ) );

		var $moreLink = $( '<a>' )
			.text( mw.msg( 'narayam-more-imes' ) )
			.attr( 'href', '#' )
			.click( function ( e ) {
				$( '.narayam-scheme-dynamic-item' ).toggle( 'fast' );
				$( 'li.narayam-more-imes-link' ).toggleClass( 'open' );

				e.stopPropagation();
			} );

		$narayamMenuItems.append( $( '<li>' )
			.addClass( 'narayam-more-imes-link' )
			.append( $moreLink )
		);

		for ( var lang in allImes ) {
			var langSchemes = allImes[lang];
			for ( var scheme in langSchemes ) {
				// Do not repeat the input methods in more input methods section
				// if already shown on recent items.
				if ( $.inArray( scheme, seen ) !== -1 ) {
					continue;
				}
				seen.push( scheme );

				var $narayamMenuItem = narayam.buildMenuItem( scheme );
				$narayamMenuItem.addClass( 'narayam-scheme-dynamic-item' );
				$narayamMenuItems.append( $narayamMenuItem );
			}
		}

		// Event listener for scheme selection - dynamic loading of rules.
		$narayamMenuItems.on( 'click',  'input:radio', function () {
			var selection;
			narayam.setScheme( $( this ).val() );
			if ( $( this ).parent().hasClass( 'narayam-scheme-dynamic-item' ) ) {
				// rebuild the menu items with recent items.
				$( '#narayam-menu' ).html( $.narayam.buildMenuItems() );
				$( '#narayam-menu-items' ).css( 'left', $( '#pt-narayam' ).offset().left );
				selection = document.getElementById( 'narayam-' + $( this ).val() );
				if ( selection ) {
					selection.checked = true;
				}
				if ( enabled ) {
					$( '#narayam-toggle' ).prop( 'checked', true );
				}
			}
		} );

		var helppage = mw.config.get( 'wgNarayamHelpPage' );
		if ( helppage ) {
			var $link = $( '<a>' )
				.text( mw.msg( 'narayam-help' ) )
				.attr( 'href',  helppage )
				.prop( 'target', '_blank' );
			var $liHelpLink = $( '<li>' ).addClass( 'narayam-help-link' );
			$narayamMenuItems.append( $liHelpLink.append( $link ) );
		}

		$narayamMenuItems.prepend( $( '<li>' ).append( $label ) );

		return $( '<div>' )
			.attr( 'id', 'narayam-menu-items' )
			.addClass( 'menu-items' )
			.append( $narayamMenuItems );
	};

	/**
	 * Construct the menu for Narayam
	 */
	narayam.buildMenu = function () {
		// Remove the menu if already exists
		$( '#pt-narayam, #narayam-menu' ).remove();
		var $menuItemsDiv = narayam.buildMenuItems();
		if ( $menuItemsDiv === null ) {
			return false;
		}
		var $menu = $( '<div>' )
			.attr( 'id', 'narayam-menu' )
			.addClass( 'narayam-menu' );
		var $link = $( '<a>' )
			.attr( 'href', '#' )
			.text( mw.msg( 'narayam-menu' ) )
			.attr( 'title', mw.msg( 'narayam-menu-tooltip' ) );

		$menu.append( $menuItemsDiv );
		var $liMenu = $( '<li>' )
			.attr( 'id', 'pt-narayam' )
			.append( $link );

		// If rtl, add to the right of top personal links. Else, to the left
		var rtlEnv = $( 'body' ).hasClass( 'rtl' );
		var positionFunction = rtlEnv ? 'append' : 'prepend';
		$( '#p-personal ul:first' )[positionFunction]( $liMenu );
		$( 'body' ).prepend( $menu );
		$menu.hide();
		$liMenu.click( function ( e ) {
			var menuSide, menuOffset, distanceToEdge;

			if ( rtlEnv ) {
				distanceToEdge = $liMenu.outerWidth() + $liMenu.offset().left;
				if ( $menuItemsDiv.outerWidth() > distanceToEdge ) {
					menuSide = 'left';
					menuOffset = $liMenu.offset().left;
				} else {
					menuSide = 'right';
					menuOffset = $( window ).width() - distanceToEdge;
				}
			} else {
				distanceToEdge = $( window ).width() - $liMenu.offset().left;
				if ( $menuItemsDiv.outerWidth() > distanceToEdge ) {
					menuSide = 'right';
					menuOffset = distanceToEdge - $liMenu.outerWidth();
				} else {
					menuSide = 'left';
					menuOffset = $liMenu.offset().left;
				}
			}

			$menuItemsDiv.css( menuSide, menuOffset );

			if ( $menu.hasClass( 'open' ) ){
				$menu
					.removeClass( 'open' )
					.hide();
			} else {
				// TOOD: "div.open" way too generic
				$( 'div.open' ).removeClass( 'open' );
				$menu
					.addClass( 'open' )
					.show();
				e.stopPropagation();
			}
		} );

		$( document ).click( function () {
			$menu
				.removeClass( 'open' )
				.hide();
		} );
		$menu.click( function ( e ) {
			e.stopPropagation();
		} );

		// Workaround for IE bug - ActiveX components like input fields
		// coming on top of everything.
		// TODO: is there a better solution other than hiding it on hover?
		if ( $.browser.msie ) {
			$( '#narayam-menu' ).hover( function () {
				$( '#searchform' ).css( 'visibility', 'hidden' );
			}, function () {
				$( '#searchform' ).css( 'visibility', 'visible' );
			} );
		}
		$( '.narayam-scheme-dynamic-item' ).hide();

		// Narayam controls setup complete, returns true
		return true;
	};

	return narayam;
}() );

}( jQuery, mediaWiki ) );
