/**
 * Narayam On Screen Keyboad
 *  
 * @author Santhosh Thottingal
 * License: GPLv3
 */
( function ( $ ) {
$.narayam.osk = ( function () {
	var osk = {};

	/**
	 * @param element Jquery selector for the field
	 * @param schemename The Narayam scheme name.
	 */
	osk.bind = function ( $element, schemename ) {
		var layout = 'qwerty';
		var $keyboard = $element.data( 'keyboard' );
		if ( $keyboard && $keyboard.options.layout === schemename ) {
			return;
		}
		this.unbind( $element );
		build( schemename, layout );
		// TODO position it correctly. And show the kyboard only on click of that.
		// $element.parent().append( '<span id="narayam-osk-box">&nbsp;&nbsp;</span>' );
		$element.keyboard( {
				layout : schemename,
				usePreview: false,
				autoAccept: true,
				position : {
					of : null, // optional - null (attach to input/textarea) or a jQuery object (attach elsewhere)
					my : 'left top',
					at : 'center top',
					at2: 'left bottom', // used when "usePreview" is false (centers keyboard at bottom of the input/textarea)
					collision: 'flip'
				}
		} );
	};

	osk.unbind = function ( $element ) {
		var $keyboard = $element.data( 'keyboard' );
		if ( $keyboard ) {
			$keyboard.destroy();
		}
	};

	/* 
	 * @param scheme Name of the input method, eg: hi-inscript
	 */
	function build( scheme, layout ){
		if ( $.keyboard.layouts[scheme] ) {
			 return;
		}
		$.keyboard.layouts[scheme] = {};
		for ( var level in $.keyboard.layouts[layout] ) {
			$.keyboard.layouts[scheme][level] = [];
			for ( var i = 0 ; i< $.keyboard.layouts[layout][level].length; i++ ) {
				var layoutLine = $.keyboard.layouts[layout][level][i];
				var keys = layoutLine.split( ' ' );
				var keyLine = '';
				for ( var j = 0; j < keys.length ; j++ ) {
					var key = $.trim( keys[j] );
					if( key.match( '^{' ) && key.match( '}$' ) ){
						keyLine += key + ' ';
					} else {
						var transliteratedKey = $.narayam.transliterate( key , '', false ) ;
						if ( transliteratedKey === '\u200C' ){
							transliteratedKey = 'zwnj';
						}
						if ( transliteratedKey === '\u200D' ){
							transliteratedKey = 'zwj';
						}

						keyLine += transliteratedKey + ' ';
					}
				}
				$.keyboard.layouts[scheme][level][i] = keyLine;
			}
		}
	}

	return osk;

}() );

}( jQuery ) );
