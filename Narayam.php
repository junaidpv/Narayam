<?php
/**
 * A Mediawiki extension to provide input methods in various languages.
 *
 * @file
 * @ingroup extensions
 * @version 0.2
 *
 * @author Junaid P V
 * @author Niklas Laxström
 * @author Roan Kattouw
 * @author Santhosh Thottingal
 * @author Amir Aharoni
 * @copyright Copyright 2010-2012 Junaid P V, Niklas Laxström, Roan Kattouw, Santhosh Thottingal, Amir Aharoni
 * @license GPLv3
 */

if ( !defined( 'MEDIAWIKI' ) ) {
	exit( 1 );
}

$wgExtensionCredits['other'][] = array(
	'path' => __FILE__,
	'name' => 'Narayam',
	'version' => 0.2,
	'author' => array( '[http://junaidpv.in Junaid P V]', 'Roan Kattouw', 'Santhosh Thottingal', 'Niklas Laxström', 'Amir Aharoni' ),
	'url' => 'https://www.mediawiki.org/wiki/Extension:Narayam',
	'descriptionmsg' => 'narayam-desc'
);

/* Configuration */

// Whether the input method should be active as default or not
$wgNarayamEnabledByDefault = true;

// Number of recently used input methods to be shown
$wgNarayamRecentItemsLength = 3;

// Whether the extension should load input methods in beta status
$wgNarayamUseBetaMapping = false;

// Enable experimental onscreen keyboard feature.
$wgNarayamUseOSK = false;

// This layout is repeated many times
$cyrlPalochkaScheme = array(
	'cyrl-palochka' => array( 'ext.narayam.rules.cyrl-palochka', 'beta' ),
);

// Array mapping language codes and scheme names to module names
// Custom schemes can be added here
$wgNarayamSchemes = array(
	'ady' => $cyrlPalochkaScheme,
	'ady-cyrl' => $cyrlPalochkaScheme,
	'ahr' => array(
		'ahr' => 'ext.narayam.rules.ahr',
		'ahr-inscript' => 'ext.narayam.rules.ahr-inscript',
	),
	'am' => array(
		'am' => array( 'ext.narayam.rules.am', 'beta' ),
	),
	'as' => array(
		'as' => 'ext.narayam.rules.as',
		'as-avro' => 'ext.narayam.rules.as-avro',
		'as-bornona' => 'ext.narayam.rules.as-bornona',
		'as-inscript' => 'ext.narayam.rules.as-inscript',
	),
	'bh' => array( // Identical to bho
		'bho' => 'ext.narayam.rules.bho',
		'bho-inscript' => 'ext.narayam.rules.bho-inscript',
	),
	'av' => $cyrlPalochkaScheme,
	'bho' => array(
		'bho' => 'ext.narayam.rules.bho',
		'bho-inscript' => 'ext.narayam.rules.bho-inscript',
	),
	'bn' => array(
		'bn-avro' => 'ext.narayam.rules.bn-avro',
		'bn-inscript' => 'ext.narayam.rules.bn-inscript',
		'bn-nkb' => 'ext.narayam.rules.bn-nkb',
		'bn-probhat' => array( 'ext.narayam.rules.bn-probhat', 'beta' ),
	),
	'brx' => array(
		'brx-inscript' => array( 'ext.narayam.rules.brx-inscript', 'beta' ),
	),
	'hne' => array(
		'hne-inscript' => array( 'ext.narayam.rules.hne-inscript', 'beta' ),
	),
	'ce' => $cyrlPalochkaScheme,
	'de' => array(
		'de' => 'ext.narayam.rules.de',
	),
	'eo' => array(
		'eo' => 'ext.narayam.rules.eo',
	),
	'gom-deva' => array(
		'gom-deva' =>  array( 'ext.narayam.rules.gom-deva', 'beta' ),
		'gom-deva-inscript' => array( 'ext.narayam.rules.gom-deva-inscript', 'beta' ),
	),
	'gu' => array(
		'gu' => 'ext.narayam.rules.gu',
		'gu-inscript' => 'ext.narayam.rules.gu-inscript',
	),
	'he' => array(
		'he-standard-2011-extonly' =>  array( 'ext.narayam.rules.he-standard-2011-extonly', 'beta' ),
		'he-standard-2011' =>  array( 'ext.narayam.rules.he-standard-2011', 'beta' ),
	),
	'hi' => array(
		'hi' => 'ext.narayam.rules.hi',
		'hi-bolnagri' => 'ext.narayam.rules.hi-bolnagri',
		'hi-inscript' => 'ext.narayam.rules.hi-inscript',
	),
	'inh' => $cyrlPalochkaScheme,
	'kbd' => $cyrlPalochkaScheme,
	'kbd-cyrl' => $cyrlPalochkaScheme,
	'ka' => array(
		'ka' => 'ext.narayam.rules.ka'
	),
	'kn' => array(
		'kn' => 'ext.narayam.rules.kn',
		'kn-inscript' => 'ext.narayam.rules.kn-inscript',
	),
	'lbe' => $cyrlPalochkaScheme,
	'lez' => $cyrlPalochkaScheme,
	'mai' => array(
		'mai-inscript' => array( 'ext.narayam.rules.mai-inscript', 'beta' ),
	),
	'ml' => array(
		'ml' => 'ext.narayam.rules.ml',
		'ml-inscript' => 'ext.narayam.rules.ml-inscript',
	),
	'mr' => array(
		'mr' => 'ext.narayam.rules.mr',
		'mr-inscript' => 'ext.narayam.rules.mr-inscript',
	),
	'ne' => array(
		'ne' => array( 'ext.narayam.rules.ne', 'beta' ),
		'ne-inscript' => array( 'ext.narayam.rules.ne-inscript', 'beta' ),
	),
	'new' => array(
		'new' => array( 'ext.narayam.rules.new', 'beta' ),
		'new-inscript' => array( 'ext.narayam.rules.new-inscript', 'beta' ),
	),
	'or' => array(
		'or' => 'ext.narayam.rules.or',
		'or-lekhani' =>  array( 'ext.narayam.rules.or-lekhani', 'beta' ),
		'or-inscript' => 'ext.narayam.rules.or-inscript',
	),
	'pa' => array(
		'pa' => 'ext.narayam.rules.pa',
		'pa-inscript' => 'ext.narayam.rules.pa-inscript',
		'pa-phonetic' => 'ext.narayam.rules.pa-phonetic',
		'pa-mybest' => array( 'ext.narayam.rules.pa-mybest', 'beta'),
	),
	'rif' => array(
		'ber-tfng' => array( 'ext.narayam.rules.ber-tfng', 'beta' ),
	),
	'sa' => array(
		'sa' => 'ext.narayam.rules.sa',
		'sa-inscript' => 'ext.narayam.rules.sa-inscript',
	),
	'shi' => array(
		'ber-tfng' => array( 'ext.narayam.rules.ber-tfng', 'beta' ),
	),
	'si' => array(
		'si-singlish' => 'ext.narayam.rules.si-singlish',
		'si-wijesekara' => 'ext.narayam.rules.si-wijesekara',
	),
	'ta' => array(
		'ta' => 'ext.narayam.rules.ta',
		'ta-99' => 'ext.narayam.rules.ta-99',
		'ta-bamini' => array( 'ext.narayam.rules.ta-bamini', 'beta' ),
		'ta-inscript' => 'ext.narayam.rules.ta-inscript',
	),
	'tcy' => array(
		'tcy' => array( 'ext.narayam.rules.tcy', 'beta' ),
	),
	'te' => array(
		'te' => 'ext.narayam.rules.te',
		'te-inscript' => 'ext.narayam.rules.te-inscript',
	),
	'tkr' => $cyrlPalochkaScheme,
	'ur' => array(
		'ur' => array( 'ext.narayam.rules.ur', 'beta' ),
	),
	'ru' => array(
		'ru-standard' => array( 'ext.narayam.rules.ru-standard', 'beta' ),
	),
	'sah' => array(
		'sah-standard' => array( 'ext.narayam.rules.sah-standard', 'beta' ),
	),
);

/* Setup */

$dir = dirname( __FILE__ );

// Localization
$wgExtensionMessagesFiles['Narayam'] = $dir . '/Narayam.i18n.php';

// Register hook function
$wgHooks['BeforePageDisplay'][] = 'NarayamHooks::addModules';
$wgHooks['ResourceLoaderGetConfigVars'][] = 'NarayamHooks::addConfig';
$wgHooks['MakeGlobalVariablesScript'][] = 'NarayamHooks::addVariables';
$wgHooks['GetPreferences'][] = 'NarayamHooks::addPreference';
$wgHooks['UserGetDefaultOptions'][] = 'NarayamHooks::addDefaultOptions';
$wgHooks['ResourceLoaderTestModules'][] = 'NarayamHooks::addTestModules';

// Autoloader
$wgAutoloadClasses['NarayamHooks'] = $dir . '/Narayam.hooks.php';

$wgNarayamPreferenceDefaultValue = true;

// ResourceLoader module registration
$narayamTpl = array(
	'localBasePath' => $dir,
	'remoteExtPath' => 'Narayam',
);
$wgResourceModules['ext.narayam'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.core'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.core/ext.narayam.core.js',
	'styles' => 'resources/ext.narayam.core/ext.narayam.core.css',
	'skinStyles' => array(
		'monobook' => 'resources/ext.narayam.core/ext.narayam.core-monobook.css',
		'vector' => 'resources/ext.narayam.core/ext.narayam.core-vector.css',
		'modern' => 'resources/ext.narayam.core/ext.narayam.core-modern.css',
	),
	'messages' => array(
		'narayam-checkbox-tooltip',
		'narayam-menu',
		'narayam-menu-tooltip',
		'narayam-help',
		'narayam-toggle-ime',
		'narayam-more-imes',
		'narayam-ahr',
		'narayam-ahr-inscript',
		'narayam-am',
		'narayam-as',
		'narayam-as-avro',
		'narayam-as-bornona',
		'narayam-as-inscript',
		'narayam-bho',
		'narayam-bho-inscript',
		'narayam-bn-avro',
		'narayam-bn-inscript',
		'narayam-bn-nkb',
		'narayam-bn-probhat',
		'narayam-ber-tfng',
		'narayam-brx-inscript',
		'narayam-cyrl-palochka',
		'narayam-de',
		'narayam-eo',
		'narayam-gom-deva',
		'narayam-gom-deva-inscript',
		'narayam-gu',
		'narayam-gu-inscript',
		'narayam-he-standard-2011-extonly',
		'narayam-he-standard-2011',
		'narayam-hi',
		'narayam-hi-bolnagri',
		'narayam-hi-inscript',
		'narayam-hne-inscript',
		'narayam-mai-inscript',
		'narayam-ka',
		'narayam-kn',
		'narayam-kn-inscript',
		'narayam-ml',
		'narayam-ml-inscript' ,
		'narayam-mr',
		'narayam-mr-inscript',
		'narayam-ne',
		'narayam-ne-inscript',
		'narayam-new',
		'narayam-new-inscript',
		'narayam-or',
		'narayam-or-lekhani',
		'narayam-or-inscript',
		'narayam-pa',
		'narayam-pa-inscript',
		'narayam-pa-phonetic',
		'narayam-pa-mybest',
		'narayam-ru-standard',
		'narayam-sa',
		'narayam-sa-inscript',
		'narayam-sah-standard',
		'narayam-si-singlish',
		'narayam-si-wijesekara',
		'narayam-ta-99',
		'narayam-ta-inscript',
		'narayam-ta',
		'narayam-ta-bamini',
		'narayam-tcy',
		'narayam-te',
		'narayam-te-inscript',
		'narayam-ur',
	),
	'dependencies' => array(
		'mediawiki.util',
		'jquery.textSelection',
		'jquery.cookie',
		'ext.narayam.core.contenteditable',
	),
);

$wgResourceModules['ext.narayam.core.contenteditable'] = $narayamTpl + array(
	'scripts' => array(
		'resources/contenteditable/rangy/rangy-core.js',
		'resources/contenteditable/ext.narayam.contenteditable.js'
		),
);

$wgResourceModules['ext.narayam.osk'] = $narayamTpl + array(
	'scripts' => 'resources/osk/ext.narayam.osk.js',
	'styles' => 'resources/osk/ext.narayam.osk.css',
	'dependencies' => array( 'jquery.keyboard', 'ext.narayam.core' ),
);

$wgResourceModules['jquery.keyboard'] = $narayamTpl + array(
	'scripts' => 'resources/osk/jquery.keyboard/jquery.keyboard.js',
	'styles' => 'resources/osk/jquery.keyboard/keyboard.css',
	'dependencies' => array( 'jquery.ui.core', 'jquery.ui.position' ),
);

$wgResourceModules['ext.narayam.rules.ahr'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ahr.js',
	'dependencies' => 'ext.narayam.rules.mr',
);
$wgResourceModules['ext.narayam.rules.ahr-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ahr-inscript.js',
	'dependencies' => 'ext.narayam.rules.mr-inscript',
);
$wgResourceModules['ext.narayam.rules.am'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.am.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.as'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.as.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.as-avro'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.as-avro.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.as-bornona'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.as-bornona.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.as-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.as-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ber-tfng'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ber-tfng.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.bho'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.bho.js',
	'dependencies' => 'ext.narayam.rules.hi',
);
$wgResourceModules['ext.narayam.rules.bho-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.bho-inscript.js',
	'dependencies' => 'ext.narayam.rules.hi-inscript',
);
$wgResourceModules['ext.narayam.rules.bn-avro'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.bn-avro.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.bn-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.bn-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.bn-nkb'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.bn-nkb.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.bn-probhat'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.bn-probhat.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.cyrl-palochka'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.cyrl-palochka.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.de'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.de.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.brx-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.brx-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.eo'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.eo.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.he-standard-2011-extonly'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.he-standard-2011-extonly.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.he-standard-2011'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.he-standard-2011.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.hi'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.hi.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.hi-bolnagri'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.hi-bolnagri.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.hi-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.hi-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ka'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ka.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.kn'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.kn.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.kn-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.kn-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ml'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ml.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.mr'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.mr.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.mr-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.mr-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ml-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ml-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ne'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ne.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ne-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ne-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.new'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.new.js',
	'dependencies' => 'ext.narayam.rules.sa',
);
$wgResourceModules['ext.narayam.rules.new-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.new-inscript.js',
	'dependencies' => 'ext.narayam.rules.sa-inscript',
);
$wgResourceModules['ext.narayam.rules.or'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.or.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.or-lekhani'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.or-lekhani.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.or-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.or-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.pa'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.pa.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.pa-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.pa-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.pa-phonetic'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.pa-phonetic.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.pa-mybest'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.pa-mybest.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.sa'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.sa.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.sa-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.sa-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.si-singlish'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.si-singlish.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.si-wijesekara'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.si-wijesekara.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ta'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ta.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ta-99'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ta-99.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ta-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ta-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ta-bamini'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ta-bamini.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.te'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.te.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.te-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.te-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ur'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ur.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.gu'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.gu.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.gu-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.gu-inscript.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ru-standard'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.ru-standard.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.sah-standard'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.sah-standard.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.hne-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.hne-inscript.js',
	'dependencies' => 'ext.narayam.rules.hi-inscript',
);
$wgResourceModules['ext.narayam.rules.gom-deva'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.gom-deva.js',
	'dependencies' => 'ext.narayam.rules.hi',
);
$wgResourceModules['ext.narayam.rules.gom-deva-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.gom-deva-inscript.js',
	'dependencies' => 'ext.narayam.rules.hi-inscript',
);
$wgResourceModules['ext.narayam.rules.mai-inscript'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.mai-inscript.js',
	'dependencies' => 'ext.narayam.rules.hi-inscript',
);
$wgResourceModules['ext.narayam.rules.tcy'] = $narayamTpl + array(
	'scripts' => 'resources/ext.narayam.rules.tcy.js',
	'dependencies' => 'ext.narayam.rules.kn',
);
