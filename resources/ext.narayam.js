/**
 * Narayam startup script
 */
jQuery( function ( $ ) {
	$.narayam.addInputs( 'input:not([type]), input[type=text], input[type=search], textarea, div[contenteditable=true]' );
	$.narayam.setup();
} );
