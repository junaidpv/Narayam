/**
 * Transliteration keyboard regular expression rules table for Georgian
 * @author Srikanth L
 * @date 2012-08-13
 * Based on https://ka.wikipedia.org/wiki/Mediawiki:ConvertInput.js

 * GeoKBD 0.3.3 - Georgian keyboard and text convertation library
 *
 * Copyright (c) 2007 Ioseb Dzmanashvili (http://www.code.ge)
 * Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * Altered by [[m:User:Hoo man]]
*/

 // Normal rules
var rules = [
['\\\\([A-Za-z|\\~|\\`])', '\\\\', '$1'],
['`', '','„'],
['~', '','“'],
['q', '','ქ'],
['w', '','წ'],
['e', '','ე'],
['r', '','რ'],
['t', '','ტ'],
['y', '','ყ'],
['u', '','უ'],
['i', '','ი'],
['o', '','ო'],
['p', '','პ'],

['a', '','ა'],
['s', '','ს'],
['d', '','დ'],
['f', '','ფ'],
['g', '','გ'],
['h', '','ჰ'],
['j', '','ჯ'],
['k', '','კ'],
['l', '','ლ'],

['z', '','ზ'],
['x', '','ხ'],
['c', '','ც'],
['v', '','ვ'],
['b', '','ბ'],
['n', '','ნ'],
['m', '','მ'],

['W', '','ჭ'],
['R', '','ღ'],
['T', '','თ'],
['S', '','შ'],
['J', '','ჟ'],
['Z', '','ძ'],
['C', '','ჩ']

];

jQuery.narayam.addScheme( 'ka', {
	'namemsg': 'narayam-ka',
	'extended_keyboard': false,
	'lookbackLength': 2,
	'keyBufferLength': 2,
	'rules': rules
} );
