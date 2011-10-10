/**
 * Trasliteration regular expression rules table for Amharic script
 * @author Junaid P V ([[user:Junaidpv]])
 * @date 2011-10-08
 * @credits http://www.lexilogos.com/keyboard/amharic.htm
 * License: GPLv3
 */

var rules = [
['፻0', '', '፲፻'], // NUM_100 and 0 becomes 10 and 100

['፻0', '', '፲፻'], // 1000

['፳0', '', '፪፻'], // 200
['፴0', '', '፫፻'], // 300
['፵0', '', '፬፻'], // 400
['፶0', '', '፭፻'], // 500
['፷0', '', '፮፻'], // 600
['፸0', '', '፯፻'], // 700
['፹0', '', '፰፻'], // 800
['፺0', '', '፱፻'], // 900

['ጕe', '', 'ጐ'], // gwe
['ጕi', '', 'ጒ'], // gwi
['ጕa', '', 'ጓ'], // gwa
['ጐe', '', 'ጔ'], // gwee

['ዅe', '', 'ዀ'], // kxwe
['ዅi', '', 'ዂ'], // kxwi
['ዅa', '', 'ዃ'], // kxwa
['ዀe', '', 'ዄ'], // kxwee

['ኵe', '', 'ኰ'], // kwe
['ኵi', '', 'ኲ'], // kwi
['ኵa', '', 'ኳ'], // kwa
['ኰe', '', 'ኴ'], // kwee

['ኍe', '', 'ኈ'], // xwe, TODO: wrong?
['ኍi', '', 'ኊ'], // xwi, TODO: wrong?
['ኍa', '', 'ኋ'], // xwa, TODO: wrong?
['ኈe', '', 'ኌ'], // xwee, TODO: wrong?

['ቝe', '', 'ቘ'], // qhwe, TODO: wrong?
['ቝi', '', 'ቚ'], // qhwi, TODO: wrong?
['ቝa', '', 'ቛ'], // qhwa, TODO: wrong?
['ቘe', '', 'ቜ'], // qhwee, TODO: wrong?

['ቍe', '', 'ቈ'], // qwe
['ቍi', '', 'ቊ'], // qwi
['ቍa', '', 'ቋ'], // qwa
['ቈe', '', 'ቌ'], // qwee

['ፕe', '', 'ፐ'], // pe
['ፕu', '', 'ፑ'], // pu
['ፕi', '', 'ፒ'], // pi
['ፕa', '', 'ፓ'], // pa
['ፐe', '', 'ፔ'], // pee
['ፕo', '', 'ፖ'], // po
['ፓa', '', 'ፗ'], // paa

['ፍe', '', 'ፈ'], // fe
['ፍu', '', 'ፉ'], // fu
['ፍi', '', 'ፊ'], // fi
['ፍa', '', 'ፋ'], // fa
['ፈe', '', 'ፌ'], // fee
['ፍo', '', 'ፎ'], // fo
['ፋa', '', 'ፏ'], // faa

['ፅe', '', 'ፀ'], // tze
['ፅu', '', 'ፁ'], // tzu
['ፅi', '', 'ፂ'], // tzi
['ፅa', '', 'ፃ'], // tza
['ፀe', '', 'ፄ'], // tzee
['ፅo', '', 'ፆ'], // tzo
['ፃa', '', 'ፇ'], // tzaa

['ጽe', '', 'ጸ'], // tse
['ጽu', '', 'ጹ'], // tsu
['ጽi', '', 'ጺ'], // tsi
['ጽa', '', 'ጻ'], // tsa
['ጸe', '', 'ጼ'], // tsee
['ጽo', '', 'ጾ'], // tso
['ጻa', '', 'ጿ'], // tsaa

['ጵe', '', 'ጰ'], // phe or ppe (ph is alias for pp)
['ጵu', '', 'ጱ'], // phu
['ጵi', '', 'ጲ'], // phi
['ጵa', '', 'ጳ'], // pha
['ጰe', '', 'ጴ'], // phee
['ጵo', '', 'ጶ'], // pho
['ጳa', '', 'ጷ'], // phaa

['ጭe', '', 'ጨ'], // che
['ጭu', '', 'ጩ'], // chu
['ጭi', '', 'ጪ'], // chi
['ጭa', '', 'ጫ'], // cha
['ጨe', '', 'ጬ'], // chee
['ጭo', '', 'ጮ'], // cho
['ጫa', '', 'ጯ'], // chaa

['ጥe', '', 'ጠ'], // the or tte (th is alias for tt)
['ጥu', '', 'ጡ'], // thu
['ጥi', '', 'ጢ'], // thi
['ጥa', '', 'ጣ'], // tha
['ጠe', '', 'ጤ'], // thee
['ጥo', '', 'ጦ'], // tho
['ጣa', '', 'ጧ'], // thaa

['ጝe', '', 'ጘ'], // gge
['ጝu', '', 'ጙ'], // ggu
['ጝi', '', 'ጚ'], // ggi
['ጝa', '', 'ጛ'], // gga
['ጘe', '', 'ጜ'], // ggee
['ጝo', '', 'ጞ'], // ggo
['ጛa', '', 'ጟ'], // ggaa

['ግe', '', 'ገ'], // ge
['ግu', '', 'ጉ'], // gu
['ግi', '', 'ጊ'], // gi
['ግa', '', 'ጋ'], // ga
['ገe', '', 'ጌ'], // gee
['ግo', '', 'ጎ'], // go
['ጋa', '', 'ጓ'], // gaa, TODO: wrong?

['ጅe', '', 'ጀ'], // je
['ጅu', '', 'ጁ'], // ju
['ጅi', '', 'ጂ'], // ji
['ጅa', '', 'ጃ'], // ja
['ጀe', '', 'ጄ'], // jee
['ጅo', '', 'ጆ'], // jo
['ጃa', '', 'ጇ'], // jaa

['ዽe', '', 'ዸ'], // dde
['ዽu', '', 'ዹ'], // ddu
['ዽi', '', 'ዺ'], // ddi
['ዽa', '', 'ዻ'], // dda
['ዸe', '', 'ዼ'], // ddee
['ዽo', '', 'ዾ'], // ddo
['ዻa', '', 'ዿ'], // ddaa

['ድe', '', 'ደ'], // de
['ድu', '', 'ዱ'], // du
['ድi', '', 'ዲ'], // di
['ድa', '', 'ዳ'], // da
['ደe', '', 'ዴ'], // dee
['ድo', '', 'ዶ'], // do
['ዳa', '', 'ዷ'], // daa

['ይe', '', 'የ'], // ye
['ይu', '', 'ዩ'], // yu
['ይi', '', 'ዪ'], // yi
['ይa', '', 'ያ'], // ya
['የe', '', 'ዬ'], // yee
['ይo', '', 'ዮ'], // yo
['ያa', '', 'ዯ'], // yaa

['ዥe', '', 'ዠ'], // zhe or zze (zh is alias for zz)
['ዥu', '', 'ዡ'], // zhu
['ዥi', '', 'ዢ'], // zhi
['ዥa', '', 'ዣ'], // zha
['ዠe', '', 'ዤ'], // zhee
['ዥo', '', 'ዦ'], // zho
['ዣa', '', 'ዧ'], // zhaa

['ዝe', '', 'ዘ'], // ze
['ዝu', '', 'ዙ'], // zu
['ዝi', '', 'ዚ'], // zi
['ዝa', '', 'ዛ'], // za
['ዘe', '', 'ዜ'], // zee
['ዝo', '', 'ዞ'], // zo
['ዛa', '', 'ዟ'], // zaa

['ዕe', '', 'ዐ'], // "e
['ዕu', '', 'ዑ'], // "u
['ዕi', '', 'ዒ'], // "i
['ዕa', '', 'ዓ'], // "a
['ዐe', '', 'ዔ'], // "ee
['ዕo', '', 'ዖ'], // "o

['ውe', '', 'ወ'], // we
['ውu', '', 'ዉ'], // wu
['ውi', '', 'ዊ'], // wi
['ውa', '', 'ዋ'], // wa
['ወe', '', 'ዌ'], // wee, TODO: wrong?
['ውo', '', 'ዎ'], // wo

['ኽe', '', 'ኸ'], // kxe
['ኽu', '', 'ኹ'], // kxu
['ኽi', '', 'ኺ'], // kxi
['ኽa', '', 'ኻ'], // kxa
['ኸe', '', 'ኼ'], // kxee
['ኽo', '', 'ኾ'], // kxo

['ክe', '', 'ከ'], // ke
['ክu', '', 'ኩ'], // ku
['ክi', '', 'ኪ'], // ki
['ክa', '', 'ካ'], // ka
['ከe', '', 'ኬ'], // kee
['ክo', '', 'ኮ'], // ko
['ካa', '', 'ኳ'], // kaa, TODO: wrong?

['እe', '', 'አ'], // 'e
['እu', '', 'ኡ'], // 'u
['እi', '', 'ኢ'], // 'i
['እa', '', 'ኣ'], // 'a
['አe', '', 'ኤ'], // 'ee
['እo', '', 'ኦ'], // 'o
['ኣa', '', 'ኧ'], // 'aa

['ኝe', '', 'ኘ'], // Ne or nne (N is alias for nn)
['ኝu', '', 'ኙ'], // Nu
['ኝi', '', 'ኚ'], // Ni
['ኝa', '', 'ኛ'], // Na
['ኘe', '', 'ኜ'], // Nee, TODO: wrong?
['ኝo', '', 'ኞ'], // No
['ኛa', '', 'ኟ'], // Naa

['ንe', '', 'ነ'], // ne
['ንu', '', 'ኑ'], // nu
['ንi', '', 'ኒ'], // ni
['ንa', '', 'ና'], // na
['ነe', '', 'ኔ'], // nee
['ንo', '', 'ኖ'], // no
['ናa', '', 'ኗ'], // naa

['ኅe', '', 'ኀ'], // xe
['ኅu', '', 'ኁ'], // xu
['ኅi', '', 'ኂ'], // xi
['ኅa', '', 'ኃ'], // xa
['ኀe', '', 'ኄ'], // xee
['ኅo', '', 'ኆ'], // xo
['ኃa', '', 'ኋ'], // xaa

['ችe', '', 'ቸ'], // ce
['ችu', '', 'ቹ'], // cu
['ችi', '', 'ቺ'], // ci
['ችa', '', 'ቻ'], // ca
['ቸe', '', 'ቼ'], // cee
['ችo', '', 'ቾ'], // co
['ቻa', '', 'ቿ'], // caa

['ትe', '', 'ተ'], // te
['ትu', '', 'ቱ'], // tu
['ትi', '', 'ቲ'], // ti
['ትa', '', 'ታ'], // ta
['ተe', '', 'ቴ'], // tee
['ትo', '', 'ቶ'], // to
['ታa', '', 'ቷ'], // taa

['ቭe', '', 'ቨ'], // ve
['ቭu', '', 'ቩ'], // vu
['ቭi', '', 'ቪ'], // vi
['ቭa', '', 'ቫ'], // va
['ቨe', '', 'ቬ'], // vee
['ቭo', '', 'ቮ'], // vo
['ቫa', '', 'ቯ'], // vaa

['ብe', '', 'በ'], // be
['ብu', '', 'ቡ'], // bu
['ብi', '', 'ቢ'], // bi
['ብa', '', 'ባ'], // ba
['በe', '', 'ቤ'], // bee
['ብo', '', 'ቦ'], // bo
['ባa', '', 'ቧ'], // baa

['ቕe', '', 'ቐ'], // qhe
['ቕu', '', 'ቑ'], // qhu
['ቕi', '', 'ቒ'], // qhi
['ቕa', '', 'ቓ'], // qha
['ቐe', '', 'ቔ'], // qhee
['ቕo', '', 'ቖ'], // qho

['ቅe', '', 'ቀ'], // qe
['ቅu', '', 'ቁ'], // qu
['ቅi', '', 'ቂ'], // qi
['ቅa', '', 'ቃ'], // qa
['ቀe', '', 'ቄ'], // qee
['ቅo', '', 'ቆ'], // qo
['ቃa', '', 'ቇ'], // qaa

['ሽe', '', 'ሸ'], // she
['ሽu', '', 'ሹ'], // shu
['ሽi', '', 'ሺ'], // shi
['ሽa', '', 'ሻ'], // sha
['ሸe', '', 'ሼ'], // shee
['ሽo', '', 'ሾ'], // sho
['ሻa', '', 'ሿ'], // shaa

['ስe', '', 'ሰ'], // se
['ስu', '', 'ሱ'], // su
['ስi', '', 'ሲ'], // si
['ስa', '', 'ሳ'], // sa
['ሰe', '', 'ሴ'], // see
['ስo', '', 'ሶ'], // so
['ሳa', '', 'ሷ'], // saa

['ርe', '', 'ረ'], // re
['ርu', '', 'ሩ'], // ru
['ርi', '', 'ሪ'], // ri
['ርa', '', 'ራ'], // ra
['ረe', '', 'ሬ'], // ree
['ርo', '', 'ሮ'], // ro
['ራe', '', 'ሯ'], // raa

['ሥe', '', 'ሠ'], // sze or sse (sz is alias for ss)
['ሥu', '', 'ሡ'], // szu
['ሥi', '', 'ሢ'], // szi
['ሥa', '', 'ሣ'], // sza
['ሠe', '', 'ሤ'], // szee
['ሥo', '', 'ሦ'], // szo
['ሣe', '', 'ሧ'], // szaa

['ምe', '', 'መ'], // me
['ምu', '', 'ሙ'], // mu
['ምi', '', 'ሚ'], // mi
['ምa', '', 'ማ'], // ma
['መe', '', 'ሜ'], // mee
['ምo', '', 'ሞ'], // mo
['ማa', '', 'ሟ'], // maa

['ሕe', '', 'ሐ'], // hhe
['ሕu', '', 'ሑ'], // hhu
['ሕi', '', 'ሒ'], // hhi
['ሕa', '', 'ሓ'], // hha
['ሐe', '', 'ሔ'], // hhee
['ሕo', '', 'ሖ'], // hho
['ሓa', '', 'ሗ'], // hhaa

['ልe', '', 'ለ'], // le
['ልu', '', 'ሉ'], // lu
['ልi', '', 'ሊ'], // li
['ልa', '', 'ላ'], // la
['ለe', '', 'ሌ'], // lee
['ልo', '', 'ሎ'], // lo
['ላa', '', 'ሏ'], // laa

['ህe', '', 'ሀ'], // he
['ህu', '', 'ሁ'], // hu
['ህi', '', 'ሂ'], // hi
['ህa', '', 'ሃ'], // ha
['ሀe', '', 'ሄ'], // hee
['ህo', '', 'ሆ'], // ho

['ህh', '', 'ሕ'], // hh
['ስ(s|z)', '', 'ሥ'], // ss or sz
['ስh', '', 'ሽ'], // sh
['ቅh', '', 'ቕ'], // qh
['ክx', '', 'ኽ'], // kx
['ዝ(h|z)', '', 'ዥ'], // zh or zz
['ድd', '', 'ዽ'], // dd
['ግg', '', 'ጝ'], // gg
['ት(h|t)', '', 'ጥ'], // th or tt
['ችh', '', 'ጭ'], // ch
['ፕ(h|p)', '', 'ጵ'], // ph or pp
['ትs', '', 'ጽ'], // ts
['ትz', '', 'ፅ'], // tz
['ቅw', '', 'ቍ'], // qw
['ቕw', '', 'ቝ'], // qhw
['ኅw', '', 'ኍ'], // xw
['ክw', '', 'ኵ'], // kw
['ኽw', '', 'ዅ'], // kxw
['ግw', '', 'ጕ'], // gw

['(N|ንn)', '', 'ኝ'], // nn or N

['፩0', '', '፲'], // 10
['፪0', '', '፳'], // 20
['፫0', '', '፴'], // 30
['፬0', '', '፵'], // 40
['፭0', '', '፶'], // 50
['፮0', '', '፷'], // 60
['፯0', '', '፸'], // 70
['፰0', '', '፹'], // 80
['፱0', '', '፺'], // 90
['፲0', '', '፻'], // 100

['h', '', 'ህ'],
['l', '', 'ል'],
['m', '', 'ም'],
['r', '', 'ር'],
['s', '', 'ስ'],
['q', '', 'ቅ'],
['b', '', 'ብ'],
['v', '', 'ቭ'],
['t', '', 'ት'],
['c', '', 'ች'],
['x', '', 'ኅ'],
['n', '', 'ን'],
["'", '', 'እ'],
['k', '', 'ክ'],
['w', '', 'ው'],
['"', '', 'ዕ'],
['z', '', 'ዝ'],
['y', '', 'ይ'],
['d', '', 'ድ'],
['j', '', 'ጅ'],
['g', '', 'ግ'],
['f', '', 'ፍ'],
['p', '', 'ፕ'],

// vowels
['a', '', 'ኣ'],
['e', '', 'አ'],
['i', '', 'ኢ'],
['o', '', 'ኦ'],
['u', '', 'ኡ'],

['\\;', '', '፥'],
['\\.', '', '።'],
[',', '', '፣'],
['\\:', '', '፤'],
['\\:', '', '፥'],
['/', '', '፨'],
['\\?', '', '፧'],
['\\-', '', '፡'],
['\\!', '', '፦'],

['1', '', '፩'],
['2', '', '፪'],
['3', '', '፫'],
['4', '', '፬'],
['5', '', '፭'],
['6', '', '፮'],
['7', '', '፯'],
['8', '', '፰'],
['9', '', '፱']
];

jQuery.narayam.addScheme( 'am', {
	'namemsg': 'narayam-am',
	'extended_keyboard': false,
	'lookbackLength': 2,
	'keyBufferLength': 0,
	'rules': rules
} );
