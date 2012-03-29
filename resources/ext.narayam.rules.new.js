/**
 * Transliteration regular expression rules table for Newari language (new)
 * Based on Sanskrit Transliteration
 * @author Santhosh Thottingal
 * @date 2012-03-29
 * License: GPLv3
 */

// copy the rules from Sanskrit Transliteration.
new_transliteration_scheme = $.narayam.getScheme( 'sa' );
new_transliteration_scheme.namemsg = 'narayam-new';
jQuery.narayam.addScheme( 'new', new_transliteration_scheme );
