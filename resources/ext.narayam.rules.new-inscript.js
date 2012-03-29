/**
 * InScript regular expression rules table for Newari language
 * Based on Sanskrit InScript
 * @author Santhosh Thottingal
 * @date 2012-03-29
 * License: GPLv3
 */

// copy the rules from Sanskrit InScript.
new_inscript_scheme = $.narayam.getScheme( 'sa-inscript' );
new_inscript_scheme.namemsg = 'narayam-new-inscript';
jQuery.narayam.addScheme( 'new-inscript', new_inscript_scheme );
