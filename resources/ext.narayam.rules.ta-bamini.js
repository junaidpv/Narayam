/**
 * Regular expression rules table for Tamil Bamini Keyboard layout.
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2011-10-13
 * @credits http://help.keymandesktop.com/keyboards/keyboard_ekwbamuni.php
 * License: GPLv3
 */

var rules = [
['`', '', 'ஹ'],
['q', '', 'ங'],
['w', '', 'ற'],
['e', '', 'ந'],
['r', '', 'ச'],
['t', '', 'வ'],
['y', '', 'ல'],
['u', '', 'ர'],
//['i', '', ''],
['o', '', 'ழ'],
['p', '', 'ி'],
['\\[', '', 'ஜ'],
['\\]', '', 'ஸ'],
['\\\\', '', 'ஷ'],
['a', '', 'ய'],
['s', '', 'ள'],
['d', '', 'ன'],
['f', '', 'க'],
['g', '', 'ப'],
['h', '', 'ா'],
['j', '', 'த'],
['k', '', 'ம'],
['l', '', 'ட'],
[';', '', '்'],
['z', '', 'ண'],
['x', '', 'ஒ'],
['c', '', 'உ'],
['v', '', 'எ'],
['b', '', 'டி'],
['m', '', 'அ'],
[',', '', 'இ'],
['/', '', 'ஃ'],

['@', '', ';'],
['#', '', 'சூ'],
['\\$', '', 'கூ'],
['%', '', 'மூ'],
['\\^', '', 'டூ'],
['&', '', 'ரூ'],
['Q', '', 'ஞ'],
['W', '', 'று'],
['E', '', 'நு'],
['R', '', 'சு'],
['T', '', 'வு'],
['Y', '', 'லு'],
['U', '', 'ரு'],
['I', '', 'ஐ'],
['O', '', 'ழு'],
['P', '', 'ீ'],
['\\|', '', "'"],
['A', '', 'யு'],
['S', '', 'ளு'],
['D', '', 'னு'],
['F', '', 'கு'],
['G', '', 'பு'],
['H', '', 'ர்'],
['J', '', 'து'],
['K', '', 'மு'],
['L', '', 'டு'],
['Z', '', 'ணு'],
['X', '', 'ஓ'],
['C', '', 'ஊ'],
['V', '', 'ஏ'],
['B', '', 'டீ'],
['M', '', 'ஆ'],
['\\<', '', 'ஈ'],
['\\>', '', ',']
];

jQuery.narayam.addScheme( 'ta-bamini', {
	'namemsg': 'narayam-ta-bamini',
	'extended_keyboard': false,
	'lookbackLength': 0,
	'keyBufferLength': 0,
	'rules': rules
} );
