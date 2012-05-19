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
	ok( $.narayam, '$.narayam is defined' );
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
			$input.val( $input.val() + character ) ;
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
			$.narayam.setScheme( opt.scheme );
			for ( var i = 0 ; i < opt.tests.length; i++ ) {
				// Simulate pressing keys for each of the sample characters
				typeChars( opt.$input, opt.tests[i].input );
				equals( opt.$input.val() || opt.$input.text(), opt.tests[i].output, opt.tests[i].description );
				opt.$input.val( '' );
				opt.$input.text( '' );
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
	description: 'Malayalam Transliteration test on contenteditable div',
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
	$input: $( '<div contenteditable>' ).attr( { id: 'ml', type: 'text' } )
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
	description: 'Telugu InScript test',
	tests: [
		{ input: 'k-', output: 'కః', description: 'Telugu k- (visarga)' },
		{ input: '}', output: 'ఞ', description: 'Telugu } (nya)' },
		{ input: 'J', output: 'ఱ', description: 'Telugu J (rra)' },
		{ input: '/', output: 'య', description: 'Telugu / (ya)' },
		{ input: 'pz', output: 'జె', description: 'Telugu pz (je)' },
		{ input: 'p`', output: 'జొ', description: 'Telugu p` (jo)' },
		{ input: 'kX', output: 'కఁ', description: 'Telugu kX (ka@m, candrabindu)' },
		{ input: 'hx', output: 'పం', description: 'Telugu hx (paM, anusvara)' },
		{ input: '\\>', output: '।', description: 'Telugu > (danda)' },
		{ input: [ [ '\\;', true ] ], output: 'ౘ', description: 'Telugu Alt ; (tsa)'},
		{ input: [ [ 'p', true ] ], output: 'ౙ', description: 'Telugu Alt p (dza)'},
		{ input: [ [ '4', true ] ], output: '₹', description: 'Alt 4; (rupee sign)'},
		{ input: [ [ '\\=', true ] ], output: 'ౄ', description: 'Telugu Alt = (RRuu, vowel)'},
		{ input: [ [ '\\+', true ] ], output: 'ౠ', description: 'Telugu Alt + (RRuu)'}
	],
	scheme: 'te-inscript',
	$input: $( '<input>' ).attr( { id: 'te-inscript', type: 'text' } )
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
	description: 'Tamil 99 test',
	tests: [
		//hfW should give non-conjunct form of ksha க்‌ஷ
		//T still gives the conjunct form க்ஷ
		{ input: 'lshfWslf', output: 'திக்‌ஷித்', description: 'lshfWslf in Tamil99 for திக்‌ஷித் non conjunct form' },
		{ input: 'lsTslf', output: 'திக்ஷித்', description: 'lsTslf in Tamil99 for திக்ஷித் conjunct form' },
		{ input: 'hfWtkakf', output: 'க்‌ஷேமம்', description: 'hfWtkakf in Tamil99 for க்‌ஷேமம் hfW -> க்‌ஷ non conjunct form' },
		{ input: 'Ttkakf', output: 'க்ஷேமம்', description: 'Ttkakf in Tamil99 for க்ஷேமம் T -> க்ஷ conjunct form' }
	],
	scheme: 'ta-99',
	$input: $( '<input>' ).attr( { id: 'ta-99', type: 'text' } )
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
		{ input: 'ka', output: 'ካ', description: 'Amharic ka -> ካ' },
		{ input: 'dwa', output: 'ዷ', description: 'Amharic dwa -> ዷ' }
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

narayamTest ( {
	description : 'Kannada Transliteration test',
	tests: [
		{ input: 'd~ha', output: 'ದ್ಹ', description: 'd~ha for ದ್ಹ in Kannada transliteration' },
		{ input: 'W', output: 'ಔ', description: 'W for ಔ in Kannada transliteration' },
		{ input: 'Y', output: 'ಐ', description: 'Y for ಐ in Kannada transliteration' },
		{ input: 'Yeso', output: 'ಐಎಸೊ', description: 'Yeso for ಐಎಸೊ in Kannada transliteration' },
		{ input: 'nAkYdu', output: 'ನಾಕೈದು', description: 'nAkYdu for ನಾಕೈದು in Kannada transliteration' },
		{ input: 'gautam', output: 'ಗೌತಮ್', description: 'gautam for ಗೌತಮ್ in Kannada transliteration' },
		{ input: 'nAkaidu', output: 'ನಾಕೈದು', description: 'nAkaidu for ನಾಕೈದು in Kannada transliteration' },
		{ input: 'gWtam', output: 'ಗೌತಮ್', description: 'gWtam for ಗೌತಮ್ in Kannada transliteration' },
		{ input: 'WShadhi', output: 'ಔಷಧಿ', description: 'WShadhi for ಔಷಧಿ in Kannada transliteration' },
		{ input: 'auShadhi', output: 'ಔಷಧಿ', description: 'auShadhi for ಔಷಧಿ in Kannada transliteration' },
		{ input: 'Ydu', output: 'ಐದು', description: 'Ydu for ಐದು in Kannada transliteration' },
		{ input: 'kY', output: 'ಕೈ', description: 'kY for ಕೈ in Kannada transliteration' },
		{ input: 'kW', output: 'ಕೌ', description: 'kW for ಐದು in Kannada transliteration' }
	],
	scheme: 'kn',
	$input: $( '<input>' ).attr( {id: 'kn', type: 'text' } )
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
		// The first case is a regular hyphen-minus ('-'), which is the same
		// when it is pressed by itself without Alt.
		// The second case is hyphen-minus with Alt, which produces the Hebrew
		// hyphen (maqaf).
		{ input: [ [ '-', false ] ], output: '-', description: 'Hebrew regular -' },
		{ input: [ [ '-', true ] ], output: '־', description: 'Hebrew extended -' }
	],
	scheme: 'he-standard-2011-extonly',
	$input: $( '<input>' ).attr( { id: 'he-standard-2011-extonly', type: 'text' } )
} );

narayamTest( {
	description: 'Punjabi Gurmukhi Transliteration',
	tests: [
		{ input: 'kaI', output: 'ਕਈ', description: 'Punjabi Gurmukhi kaI' },
		{ input: 'hoiaa', output: 'ਹੋਇਆ', description: 'Punjabi Gurmukhi hoiaa' },
		{ input: 'ki', output: 'ਕਿ', description: 'Punjabi Gurmukhi ki' },
		{ input: 'kii', output: 'ਕੀ', description: 'Punjabi Gurmukhi kii' },
		{ input: 'kI', output: 'ਕੀ', description: 'Punjabi Gurmukhi kI' },
		{ input: 'kee', output: 'ਕੀ', description: 'Punjabi Gurmukhi kee' },
		{ input: 'ku', output: 'ਕੁ', description: 'Punjabi Gurmukhi ku' },
		{ input: 'kuu', output: 'ਕੂ', description: 'Punjabi Gurmukhi kuu' },
		{ input: 'kU', output: 'ਕੂ', description: 'Punjabi Gurmukhi kU' },
		{ input: 'koo', output: 'ਕੂ', description: 'Punjabi Gurmukhi koo' },
		{ input: 'kai', output: 'ਕੈ', description: 'Punjabi Gurmukhi kai' },
		{ input: 'kE', output: 'ਕੈ', description: 'Punjabi Gurmukhi kE' },
		{ input: 'ko', output: 'ਕੋ', description: 'Punjabi Gurmukhi ko' },
		{ input: 'kO', output: 'ਕੋ', description: 'Punjabi Gurmukhi ko' },
		{ input: 'kau', output: 'ਕੌ', description: 'Punjabi Gurmukhi kau' },
		{ input: 'g`a', output: 'ਗ਼', description: 'Punjabi Gurmukhi g`a (bindi)' },
		{ input: 'u', output: 'ਉ', description: 'Punjabi Gurmukhi u' },
		{ input: 'uu', output: 'ਊ', description: 'Punjabi Gurmukhi uu' },
		{ input: 'oo', output: 'ਊ', description: 'Punjabi Gurmukhi oo' },
		{ input: 'a^', output: 'ੲ', description: 'Punjabi Gurmukhi a^ (iri)' },
		{ input: 'u^', output: 'ੳ', description: 'Punjabi Gurmukhi u^ (ura)' },
		{ input: 'X', output: 'ੴ', description: 'Punjabi Gurmukhi X (Ek onkar)' },
		{ input: 'kaM', output: 'ਕਂ', description: 'Punjabi Gurmukhi kaM (bindi)' },
		{ input: 'kaMM', output: 'ਕਁ', description: 'Punjabi Gurmukhi kaMM (adak bindi)' },
		{ input: 'kaMm', output: 'ਕਁ', description: 'Punjabi Gurmukhi kaMm (adak bindi)' },
		{ input: 'kaM^', output: 'ਕਁ', description: 'Punjabi Gurmukhi kaM^ (adak bindi)' },
		{ input: 'k`haalasaa', output: 'ਖ਼ਾਲਸਾ', description: 'Punjabi Gurmukhi k`haalasaa' },
		{ input: 'raNajiita', output: 'ਰਣਜੀਤ', description: 'Punjabi Gurmukhi raNajiita (testing NNA)' },
		{ input: 'khadeRhana', output: 'ਖਦੇੜ੍ਹਨ', description: 'Punjabi Gurmukhi khadeRhana (testing R and subjoined h)' },
		{ input: 'siNNgha', output: 'ਸਿੰਘ', description: 'Punjabi Gurmukhi siNNgha (testing Tippi)' },
		{ input: 'hai.', output: 'ਹੈ।', description: 'Punjabi Gurmukhi hai. (testing danda)' },
		{ input: 'phaaga..', output: 'ਫਾਗ॥', description: 'Punjabi Gurmukhi phaaga.. (testing double danda)' }
	],
	scheme: 'pa',
	$input: $( '<input>' ).attr( { id: 'pa', type: 'text' } )
} );

// Variables for Cyrillic with palochka transliteration tests.
// All the characters are very similar in appearance,
// so it's better to give them names to avoid confusion.
var palochka = 'Ӏ';
var latinSmallL = 'l';
var latinCapitalI = 'I';
var ukrainianCapitalI = 'І';
var digitOne = '1';

narayamTest( {
	description: 'Cyrillic with palochka transliteration test',
	tests: [
		// Sanity test - palochka should produce itself
		{ input: palochka, output: palochka, description: 'Palochka itself is unchanged' },

		{ input: 'L', output: 'L', description: 'Latin capital L is unchanged' },
		{ input: latinSmallL, output: palochka, description: 'Latin small l becomes palochka' },

		{ input: latinCapitalI, output: palochka, description: 'Latin capital I becomes palochka' },
		{ input: 'i', output: 'i', description: 'Latin small i becomes palochka' },

		{ input: ukrainianCapitalI, output: palochka, description: 'Ukrainian capital І becomes palochka' },

		{ input: digitOne, output: digitOne, description: 'Digit one (1) is unchanged' },
		{ input: [ [ digitOne, true ] ], output: palochka, description: 'Extended digit one (1) becomes palochka' },

		{ input: 'д', output: 'д', description: 'Cyrillic small д is is unchanged' },
		{ input: [ [ 'д', true ] ], output: palochka, description: 'Extended Cyrillic д becomes palochka' },

		{ input: 'ш', output: 'ш', description: 'Cyrillic small ш is is unchanged' },
		{ input: [ [ 'ш', true ] ], output: palochka, description: 'Extended Cyrillic small ш becomes palochka' },

		{ input: 'Ш', output: 'Ш', description: 'Cyrillic capital Ш is is unchanged' },
		{ input: [ [ 'Ш', true ] ], output: palochka, description: 'Extended Cyrillic capital Ш becomes palochka' }
	],
	scheme: 'cyrl-palochka',
	$input: $( '<input>' ).attr( { id: 'cyrl-palochka', type: 'text' } )
} );

narayamTest( {
	description: 'Gujarati Transliteration',
	tests: [
		{ input: '~', output: '~', description: 'Gujarati - tilde must not change' },
		{ input: 'hiMmata', output: 'હિંમત', description: 'Gujarati hiMmata' },
		{ input: 'aM^bara', output: 'અઁબર', description: 'Gujarati aM^bara - testing candrabindu' },
		{ input: '_', output: '_', description: 'Gujarati - underscore must not change' },
		{ input: 'oM', output: 'ઓં', description: 'Gujarati oM' },
		{ input: 'OM', output: 'ૐ', description: 'Gujarati OM' },
		{ input: 'K', output: '।', description: 'Gujarati K - testing danda' },
		{ input: 'KK', output: '॥', description: 'Gujarati KK - testing double danda' },
		{ input: 'ai', output: 'ઐ', description: 'Gujarati ai' },
		{ input: 'eka', output: 'એક', description: 'Gujarati eka' },
		{ input: 'aikya', output: 'ઐક્ય', description: 'Gujarati aikya' },
		{ input: 'kailaasa', output: 'કૈલાસ', description: 'Gujarati kailaasa' },
		{ input: 'EMjiiniyara', output: 'ઍંજીનિયર', description: 'Gujarati EMjiiniyara - testing candra e' },
		{ input: 'sad`bhaava', output: 'સદ્‌ભાવ', description: 'Gujarati sad`bhaava - testing ZWNJ' },
		{ input: 'caDJaavo', output: 'ચડ઼ાવો', description: 'Gujarati caDJaavo - testing nukta' }
	],
	scheme: 'gu',
	$input: $( '<input>' ).attr( { id: 'gu', type: 'text' } )
} );

narayamTest( {
	description: 'Bengali Avro layout test',
	tests: [
		{ input: 'ka', output: 'কা', description: 'Bengali Avro - ka' },
		{ input: 'rri', output: 'ঋ', description: 'Bengali Avro - rri' },
		{ input: 'drri', output: 'দৃ', description: 'Bengali Avro - drri' },
		{ input: 'kee', output: 'কী', description: 'Bengali Avro - kee' }
	],
	scheme: 'bn-avro',
	$input: $( '<input>' ).attr( { id: 'bn-avro', type: 'text' } )
} );

teardown( );

}() );
