/**
 * QUnit tests for Narayam typing rules
 *
 * @file
 * @copyright Copyright © 2012 Santhosh Thottingal
 * @license http://www.gnu.org/copyleft/gpl.html GNU General Public License 2.0 or later
 */
( function () {

module( "ext.narayam.rules", QUnit.newMwEnvironment() );

function setup() {
	$.narayam.setup();
	$.narayam.enable();
}

function teardown() {
	// we need to disable narayam, otherwise many typing simulation based test eg: jquery.byteLimitTest will fail.
	$.narayam.disable();
}

test( "-- Initial check", function() {
	expect( 1 );
	ok( $.narayam,  '$.narayam is defined' );
} );

// Basic sendkey-implementation
// $input - the input element
// characters - either
//		- a string
//		- an array of pairs of character and altKey value
typeChars = function( $input, characters ) {
	var len = characters.length;
	for ( var i = 0; i < len; i++ ) {
		// Get the key code
		var character,
			altKeyValue;
		if ( typeof( characters ) === 'string' ) {
			character = characters[i];
			altKeyValue = false;
		} else {
			character = characters[i][0];
			altKeyValue = characters[i][1];
		}

		var code = character.charCodeAt(0);

		// Trigger event and undo if prevented
		var event = new jQuery.Event( 'keypress', {
			keyCode: code,
			which: code,
			charCode: code,
			altKey: altKeyValue
		} );
		if( $input.triggerHandler( event ) ) {
			$input.val(  $input.val() + character ) ;
		}
	}
};

/**
 * Test factory for narayamTest
 */
var narayamTest = function( options ) {
	var opt = $.extend( {
		description: '', // Test description
		$input: null,
		tests: [],
		scheme: '' // The input method name.
	}, options );

	test( opt.description, function() {
		expect( opt.tests.length );
		$.narayam.enable();
		stop();
		$.narayam.setScheme( opt.scheme, function () {
			opt.$input.appendTo( '#qunit-fixture' );
			$.narayam.addInputs( opt.$input );
			$.narayam.setScheme( opt.scheme  );
			for ( var i = 0 ; i < opt.tests.length; i++ ) {
				// Simulate pressing keys for each of the sample characters
				typeChars( opt.$input, opt.tests[i].input );
				equals( opt.$input.val(), opt.tests[i].output, opt.tests[i].description );
				opt.$input.val( '' );
			}
			$.narayam.disable();
			start();
		} );
	} );
};

narayamTest( {
	description: 'Malayalam Transliteration test',
	tests: [
		{ input: 'a', output: 'അ', description: 'Malayalam a' },
		{ input: 'ra', output: 'ര', description: 'Malayalam ra' },
		{ input: 'p', output: 'പ്', description: 'Malayalam p' },
		{ input: 'kh', output: 'ഖ്', description: 'Malayalam kh' },
		{ input: 'nch', output: 'ഞ്ച്', description: 'Malayalam nch' },
		{ input: 'au', output: 'ഔ', description: 'Malayalam au' },
		{ input: 'maU', output: 'മൌ', description: 'Malayalam aU' },
		{ input: 'kshau', output: 'ക്ഷൗ', description: 'Malayalam kshau' },
		{ input: 'ram', output: 'രം', description: 'Malayalam ram' },
		{ input: 'rama', output: 'രമ', description: 'Malayalam rama' },
		{ input: 'baH', output: 'ബഃ', description: 'baH' },
		{ input: 'bah', output: 'ബഹ്', description: 'bah' },
		{ input: 'ai', output: 'ഐ', description: 'ai' },
		{ input: 'lai', output: 'ലൈ', description: 'lai' },
		{ input: 'nta', output: 'ന്റ', description: 'Malayalam nta' }
	],
	scheme: 'ml',
	$input: $( '<input>' ).attr( { id: 'ml', type: 'text' } )
} );

narayamTest( {
	description: 'Telugu Transliteration test',
	tests: [
		{ input: 'c', output: 'చ్', description: 'Telugu c' },
		{ input: 'ch', output: 'చ్', description: 'Telugu ch' }
	],
	scheme: 'te',
	$input: $( '<input>' ).attr( { id: 'te', type: 'text' } )
} );

narayamTest( {
	description: 'Oriya InScript test',
	tests: [{ input: 'ka', output: 'କୋ' }],
	scheme: 'or-inscript',
	$input: $( '<input>' ).attr( { id: 'or', type: 'text' } )
} );

narayamTest( {
	description: 'Malayalam InScript test',
	tests: [{ input: 'ka', output: 'കോ' }],
	scheme: 'ml-inscript',
	$input: $( '<input>' ).attr( { id: 'ml-inscript', type: 'text' } )
} );

narayamTest( {
	description: 'Tamil InScript test',
	tests: [
		{ input: 'ka', output: 'கோ', description: 'Tamil Inscript கோ' }
	],
	scheme: 'ta-inscript',
	$input: $( '<input>' ).attr( { id: 'ta-inscript', type: 'text' } )
} );

narayamTest ( {
	description: 'Amharic Transliteration test',
	tests: [
		{ input: 'ka', output: 'ካ', description: 'Amharic ka->ካ' }
	],
	scheme: 'am',
	$input: $( '<input>' ).attr( { id: 'am', type: 'text' } )
} );

narayamTest ( {
	description: 'Marathi Transliteration test',
	tests: [
		{ input: 'dny', output: 'ज्ञ्', description: 'dny for ज्ञ् in Marathi transliteration' }
	],
	scheme: 'mr',
	$input: $( '<input>' ).attr( { id: 'mr', type: 'text' } )
} );

narayamTest( {
	description: 'German Transliteration and keybuffer test',
	tests: [
		{ input: '~o', output: 'ö', description: 'German ö' },
		{ input: '~O', output: 'Ö', description: 'German Ö' },
		{ input: '~s', output: 'ß', description: 'German ß' }
	],
	scheme: 'de',
	$input: $( '<input>' ).attr( { id: 'de', type: 'text' } )
} );

narayamTest( {
	description: 'Hebrew Transliteration and extended keys test',
	tests: [
		{ input: [ [ '-', false ] ], output: '-', description: 'Hebrew regular -' },
		{ input: [ [ '-', true ]  ], output: '־', description: 'Hebrew extended -' }
	],
	scheme: 'he-standard-2011-extonly',
	$input: $( '<input>' ).attr( { id: 'he-standard-2011-extonly', type: 'text' } )
} );

teardown( );

}() );
