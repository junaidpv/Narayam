/**
 * QUnit tests for Narayam
 *
 * @file
 * @author Amir E. Aharoni
 * @author Santhosh Thottingal
 * @copyright Copyright © 2012 Amir E. Aharoni, Santhosh Thottingal
 * @license http://www.gnu.org/copyleft/gpl.html GNU General Public License 2.0 or later
 */
( function () {

module( "ext.narayam", QUnit.newMwEnvironment() );

function setup() {
	$.narayam.setup();
	$.narayam.enable();
}

function teardown() {
	// We need to disable narayam, otherwise many typing simulation based
	// tests, like jquery.byteLimitTest, will fail.
	$.narayam.disable();
}

test( "-- Initial check", function() {
	expect( 2 );

	// Clean up before testing initialization
	teardown();
	// Delete state cookie
	$.cookie( 'narayam-enabled', null );

	setup();
	ok( $.narayam, "$.narayam is defined" );
	equal( $.narayam.enabled(), mw.config.get( 'wgNarayamEnabledByDefault' ), 'Initial state of Narayam matches the configuration' );

	// Init empty cookie of recent schemes
	$.cookie( 'narayam-scheme', '', { path: '/', expires: 30 } );
} );

test( "-- Initialization functions", function() {
	if( isNarayamMenuShown() ){
		expect( 10 );
		setup();

		var stateCookieName = "narayam-enabled";

		// Now it's supposed to be enabled, so toggle() is supposed to disable.
		$.narayam.toggle();
		equal( $.narayam.enabled(), false, "toggle() disables Narayam when it is enabled." );
		equal( $.cookie( stateCookieName ), "0", "The state cookie was set to 0." );
		ok(  $( "li#pt-narayam" ).hasClass( "narayam-inactive" ), "After disabling the Narayam menu header has the narayam-inactive class." );
		ok( !$( "li#pt-narayam" ).hasClass( "narayam-active" ),   "After disabling the Narayam menu header doesn't have the narayam-active class ." );
		ok( !$( "#narayam-toggle" ).attr( "checked" ), "After disabling the Narayam checkbox is not checked." );

		// Now it's supposed to be disabled, so toggle() is supposed to enable.
		$.narayam.toggle();
		equal( $.narayam.enabled(), true, "toggle() enables Narayam when it is disabled." );
		equal( $.cookie( stateCookieName ), "1", "The state cookie was set to 1." );
		ok( !$( "li#pt-narayam" ).hasClass( "narayam-inactive" ), "After enabling the Narayam menu header doesn't have the narayam-inactive class." );
		ok(  $( "li#pt-narayam" ).hasClass( "narayam-active" ),   "After enabling the Narayam menu header has the narayam-active class ." );
		ok(  $( "#narayam-toggle" ).attr( "checked" ), "After enabling the Narayam checkbox is checked." );
		teardown();
	} else {
		expect( 0 );
	}
} );

test( "-- Simple character functions", function() {
	expect( 7 );
	setup();
	equal( $.narayam.lastNChars( "foobarbaz", 5, 2 ), "ba", "lastNChars works with short buffer." );
	equal( $.narayam.lastNChars( "foobarbaz", 2, 5 ), "fo", "lastNChars works with long buffer." );

	equal( $.narayam.firstDivergence( "abc", "abc" ), -1, "firstDivergence - equal strings" );
	equal( $.narayam.firstDivergence( "a", "b" ), 0, "firstDivergence - different one-letter strings" );
	equal( $.narayam.firstDivergence( "a", "bb" ), 0, "firstDivergence - different strings, different lengths" );
	equal( $.narayam.firstDivergence( "abc", "abd" ), 2, "firstDivergence - different strings with equal beginnings" );
	equal( $.narayam.firstDivergence( "abcd", "abd" ), 2, "firstDivergence - different strings, equal beginnings, different lengths" );
	teardown();
} );

test( '-- Build the menu', function() {
	if( isNarayamMenuShown() ){
		expect( 5 );
		setup();
		assertTrue( $.narayam.buildMenu( ), 'Build the menu' );
		equal( $( 'li#pt-narayam' ).length, 1, 'There should be one and only one menu at any time' );
		ok(  $.narayam.buildMenu( ), 'Build the menu again' );
		equal( $( 'li#pt-narayam' ).length, 1, 'There should be one and only one menu at any time' );
		equal( $( 'li.narayam-help-link' ).length, 1, 'Help link exists' );
		teardown();
	} else {
		expect( 0 );
	}
} );

function isNarayamMenuShown() {
	if( mw.config.get( 'wgNarayamAllSchemes' )[mw.config.get( 'wgUserLanguage' )] !== undefined ||
		mw.config.get( 'wgNarayamAllSchemes' )[mw.config.get( 'wgContentLanguage' )] !== undefined ){
			return true;
	}
	return false;
}

}());
