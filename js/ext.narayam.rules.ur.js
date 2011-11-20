/**
Urdu key board layout
Created By:Mohammed Imran Tabani
 */
var rules = [
['X', '', '‌‌‌‌‌‌‌‌‌‌'],
['x', '', 'ف'],
['_', '', '_'],
['D', '', 'ڑ'],
['E', '', 'ذ'],
['F', '', 'ں'],
['R', '', 'ڈ'],
['G', '', 'ۂ'],
['T', '', 'ث'],
['\\+', '', '+'],
['S', '', 'ز'],
['W', '', 'ض'],
['A', '', 'ژ'],
['Q', '', 'ظ'],
['k', '', 'ک'],
['K', '', 'گ'],
['i', '', 'ب'],
['I', '', 'ـ'],
['U', '', 'ۃ'],
['\\;', '', '؛'],
['\\:', '', ':'],
['p', '', 'ح'],
['P', '', 'خ'],
['\\}', '', '{'],
["'", '', '\''],
['"', '', '"'],
['\\[', '',']'],
['\\{', '','{'],
['C', '', 'ۓ'],
['l', '', 'ی'],
['L', '', 'ي'],
['o', '', 'ج'],
['O', '', 'چ'],
['v', '', 'س'],
['h', '', 'ہ'],
['H', '', 'ء'],
['y', '', 'پ'],
['Y', '', 'ّ­'],
['c', '', 'ے'],
['\\?', '','؟'],
['j', '', 'ا'],
['n', '', 'غ'],
['N', '', 'ئ'],
['b', '', 'ش'],
['M', '', '‏‏‏‏'],
['\\<', '','>'],
['m', '', 'ع'],
['u', '', 'ت'],
['\\]', '','['],
['e', '', 'ھ'],
['f', '', 'ن'],
['r', '', 'د'],
['g', '', 'ل'],
['t', '', 'ٹ'],
['\\=', '','='],
['\\\\', '', '\\'],
['s', '', 'و'],
['w', '', 'ص'],
['a', '', 'م'],
['q', '', 'ط'],
['d', '', 'ر'],
['\\|', '', '|'],
['/', '', '/'],
['\\>', '', '<'],
['0', '','0'],
['1', '','1'],
['2', '', '2'],
['3', '', '3'],
['4', '', '4'],
['5', '', '5'],
['6', '', '6'],
['7', '', '7­'],
['8', '', '8'],
['9', '', '9'],
['\\@', '', '@'],
['\\#', '','#'],
['\\$', '','$'],
['\\%', '','٪'],
['\\^', '','^'],
['\\&', '', 'ۖ'],
['\\*', '', '٭'],
['\\(', '', '('],
['\\)', '', ')']
];

jQuery.narayam.addScheme( 'ur', {
	'namemsg': 'narayam-ur',
	'extended_keyboard': false, 
	'lookbackLength': 0,
	'keyBufferLength': 0,
	'rules': rules,
} );
