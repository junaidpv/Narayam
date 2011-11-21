/**
 * Transliteration regular expression rules table for Gujarathi
 * @author Jaldeep R Vasavada ([[user:JaldeepVasavada]])
 * @date 2011-11-19
 * License: GPLv3, CC-BY-SA 3.0
 */

 // Normal rules
var rules = [
['ક्h','c','ચ'],
['\\\\([A-Za-z\\>_~\\.0-9])','\\\\','$1'],

['([ક-હ]़?)्a', '','$1'],
['([ક-હ]़?)्A', '','$1ા'],
['([ક-હ]़?)a', '','$1ા'],
['([ક-હ]़?)्i', '','$1િ'],
['([ક-હ]़?)(्I|િi|ॆe)', '','$1ી'],
['([ક-હ]़?)्u', '','$1ુ'],
['([ક-હ]़?)(ુu|्U|ોo)', '','$1ૂ'],
['([ક-હ]़?)्R', '','$1ृ'],
['([ક-હ]़?)ृR', '','$1ॄ'],
['([ક-હ]़?)्ળl', '','$1ॢ'],
['([ક-હ]़?)ॢl', '','$1ॣ'],
['([ક-હ]़?)ॆ\\^', '','$1ॅ'],
['([ક-હ]़?)्e', '','$1ॆ'],
['([ક-હ]़?)्E', '','$1ૅ'],
['([ક-હ]़?)ો\\^', '','$1ૉ'],
['([ક-હ]़?)i', '','$1ૈ'],
['([ક-હ]़?)्o', '','$1ો'],
['([ક-હ]़?)्O', '','$1ો'],
['([ક-હ]़?)u', '','$1ૌ'],

['([ક-હ]़?)ृa', '','$1्ऱ'],
['([ક-હ]़?)ृA', '','$1्ऱા'],
['([ક-હ]़?)ृi', '','$1्ऱિ'],
['([ક-હ]़?)ृI', '','$1्ऱી'],
['([ક-હ]़?)ृu', '','$1्ऱુ'],
['([ક-હ]़?)ृU', '','$1्ऱૂ'],
['([ક-હ]़?)ृ\\^', '','$1्ऱॅ'],
['([ક-હ]़?)ृe', '','$1्ऱॆ'],
['([ક-હ]़?)ृE', '','$1्ऱૅ'],
['([ક-હ]़?)ृo', '','$1्ऱો'],
['([ક-હ]़?)ृO', '','$1्ऱો'],
['([ક-હ]़?)ृ\\~', '','$1्ऱ्'],

['([ક-હ])्\\`', '','$1़्'],

['અa', '','આ'],
['(ઑo|ઉu)', '','ઊ'],
['ઍ\\^', '','એ'],
['અi', '','એ'],
['અ\\^', '','ઍ'],
['(ઇi|ઍe)', '','ઈ'],
['ઑ\\^', '','ઓ'],
['અu', '','ઔ'],
['ઋR', '','ૠ'],
['ળl', '','ઌ'],
['ઌl', '','ૡ'],//problem
['ं\\^', '','ँ'],
['ंm', '','ँ'],
['ઓM', '','ૐ'],

['રY', '','ऱ्ય'],

['ક्h', '','ખ'],//kh
['ગh', '','ઘ'],
['નg', '','ઙ'],
['ચh', '','છ'],
['જh', '','ઝ'],
['નj', '','ઞ'],
['ટh', '','ઠ'],
['ડh', '','ઢ'],
['તh', '','થ'],
['દh', '','ધ'],
['પh', '','ફ'],
['બh', '','ભ'],

['ઋa', '','ऱ'],
['ઋA', '','ऱા'],
['ઋi', '','ऱિ'],
['ઋI', '','ऱી'],
['ઋu', '','ऱુ'],
['ઋU', '','ऱૂ'],
['ઋ\\^', '','ऱॅ'],
['ઋe', '','ऱॆ'],
['ઋE', '','ऱૅ'],
['ઋo', '','ऱો'],
['ઋO', '','ऱો'],
['ઋ\\~', '','ऱ्'],

['સh', '','ષ'],
['ક़्h', '','ખ'],
['જh', '','ऴ्'],
['।\\.', '','॥'],

['a', '','અ'],
['b', '','બ'],
['c', '','ક्'],
['d', '','દ'],
['e', '','ઍ'],
['(f|F)', '','ફ'],
['g', '','ગ'],
['h', '','હ'],
['i', '','ઇ'],
['j', '','જ'],
['k', '','ક्'],
['l', '','લ'],
['m', '','મ'],
['n', '','ન'],
['o', '','ઑ'],
['p', '','પ'],
['q', '','ક़्'],
['r', '','ર'],
['s', '','સ'],
['t', '','ત'],
['u', '','ઉ'],
['(v|w)', '','વ'],
['x', '','ક्ષ'],
['y', '','ય'],
['(z|Z)', '','જ'],
['A', '','આ'],
['B', '','બ'], //double
['C', '','ક्ક्'],
['D', '','ડ'],
['E', '','એ'],
//'F', '','ફ'],
['G', '','ગ'],//double
['H', '','ः'],
['I', '','ઈ'],
['J', '','જ'],//double
['K', '','ક्ક्'],
['L', '','ળ'],
['M', '','ं'],
['N', '','ણ'],
['O', '','ઓ'],
['P', '','પ'],//double
//'Q', '','અ'],
['R', '','ઋ'],
['S', '','શ'],
['T', '','ટ'],
['U', '','ઊ'],
['(V|W)', '','વ'],//double
['X', '','ક्ષ'],
['Y', '','ય'],//double
//'z', '','અ'
['0', '','૦'],
['1', '','૧'],
['2', '','૨'],
['3', '','૩'],
['4', '','૪'],
['5', '','૫'],
['6', '','૬'],
['7', '','૭'],
['8', '','૮'],
['9', '','૯'],
['~', '','्'],
['\\.', '','।'],
['//', '','ऽ'],
['\\`', '','़'],
['(\u200C)*_', '', '\u200c']
];


jQuery.narayam.addScheme( 'gu', {
	'namemsg': 'narayam-gu',
	'extended_keyboard': false,
	'lookbackLength': 4,
	'keyBufferLength': 2,
	'rules': rules
} );
