/**
 * Phonetic keyboard regular expression rules table for Punjabi
 * @date 2012-08-14
 * @author Srikanth L
 * Based on http://bug-attachment.wikimedia.org/attachment.cgi?id=10949
 */

 // Normal rules
var rules = [
['a1', '','੧'],
['a2', '','੨'],
['a3', '','੩'],
['a4', '','੪'],
['a5', '','੫'],
['a6', '','੬'],
['a7', '','੭'],
['a8', '','੮'],
['a9', '','੯'],
['a0', '','੦'],
['^a', '','ਅ'],
['^A', '','ਥ'],
//['^(', '','\''],
//['^)', '','\''],
//['^{', '','"'],
//['^}', '','"'],
['^^', '','^'],
//['^N', '',''],//Need info
//['^M', '',''],//Need info

['aa', '','ਅ'],
['Q', '','ਥ'],
['q', '','ਤ'],
['W', '','ਾਂ'],
['w', '','ਾ'],
['E', '','ਓ'],
['e', '','ੲ'],
['R', '','੍'],
['r', '','ਰ'],
['T', '','ਠ'],
['t', '','ਟ'],
['Y', '','ੈ'],
['y', '','ੇ'],
['U', '','ੂ'],
['u', '','ੁ'],
['I', '','ੀ'],
['i', '','ਿ'],
['O', '','ੌ'],
['o', '','ੋ'],
['P', '','ਫ'],
['p', '','ਪ'],
['\\[', '','।'],
['\\]', '','॥'],
//['a', '','ਅ'],
['A', '','ੳ'],
['S', '','ਸ਼'],
['s', '','ਸ'],
['D', '','ਧ'],
['d', '','ਦ'],
['F', '','ਢ'],
['f', '','ਡ'],
['G', '','ਘ'],
['g', '','ਗ'],
['h', '','ਹ'],
['J', '','ਝ'],
['j', '','ਜ'],
['K', '','ਖ'],
['k', '','ਕ'],
['L', '','ਲ਼'],
['l', '','ਲ'],
['al','','ਲ਼'],
['aK','','ਖ਼'],
['aS','','ਸ਼'],
['aj','','ਜ਼'],
['ag','','ਗ਼'],
['aP','','ਫ਼'],
['\|', '','ਙ'],
['\\','','ਞ'],
['\\`', '','?ੱ'],
['\\~', '','?੍ '],
//['Z', '','ਗ਼'],Need info
//['z', '','ਜ਼'],Need info
['X', '','ਯ'],
['x', '','ਣ'],
['C', '','ਛ'],
['c', '','ਚ'],
['V', '','ੜ'],
['v', '','ਵ'],
['B', '','ਭ'],
['b', '','ਬ'],
['N', '','ਂ'],
['n', '','ਨ'],
['M', '','ੰ'],
['m', '','ਮ'],
['<', '','ੴ'],
['>', '','☬']
];

jQuery.narayam.addScheme( 'pa-mybest', {
	'namemsg': 'narayam-pa-mybest',
	'extended_keyboard': false,
	'lookbackLength': 1,
	'keyBufferLength': 0,
	'rules': rules
} );