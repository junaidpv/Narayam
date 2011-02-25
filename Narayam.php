<?php

/**
 * NAME
 * 	Narayam
 *
 * SYNOPSIS
 *
 * INSTALL
 * 	Put this whole directory under your Mediawiki extensions directory
 * 	Then add this line to LocalSettings.php to load the extension
 *
 * 		require_once("$IP/extensions/Narayam.php");
 *
 *      Currently Vector and Monobook skins are supported
 *
 * AUTHOR
 * 	Junaid P V <http://junaidpv.in>
 *
 * @file
 * @ingroup extensions
 * @version 0.2
 * @copyright Copyright 2010 Junaid P V
 * @license GPLv3
 */
if ( !defined( 'MEDIAWIKI' ) ) {
	exit( 1 );
}


/* Configuration */

// Whether the input method should be active as default or not
$wgNarayamEnabledByDefault = true;

// Shortcut key for enabling and disabling Narayam
// Defaults to Ctrl+M
$wgNarayamShortcutKey = array(
	'altKey' => false,
	'ctrlKey' => true,
	'shiftKey' => false,
	'key' => 'm'
);

// Array mapping language codes and scheme names to module names
// Custom schemes can be added here
$wgNarayamSchemes = array(
	'bn' => array(
		'bn-avro' => 'ext.narayam.rules.bn-avro',
		'bn-inscript' => 'ext.narayam.rules.bn-inscript',
		'bn-nkb' => 'ext.narayam.rules.bn-nkb',
	),
	'ml' => array(
		'ml' => 'ext.narayam.rules.ml',
		'ml-inscript' => 'ext.narayam.rules.ml-inscript',
	),
	'sa' => array(
		'sa' => 'ext.narayam.rules.sa',
	),
	'ta' => array(
		'ta' => 'ext.narayam.rules.ta',
		'ta99' => 'ext.narayam.rules.ta99',
	),
);

/* Setup */

// Register extension credits
$wgExtensionCredits['other'][] = array(
	'path' => __FILE__,
	'name' => 'Narayam',
	'version' => 0.1,
	'author' => array( 'Junaid P V (http://junaidpv.in)', 'Roan Kattouw' ),
	'url' => 'http://www.mediawiki.org/wiki/Extension:Narayam',
	'descriptionmsg' => 'narayam-desc'
);

// Localization
$wgExtensionMessagesFiles['Narayam'] = dirname( __FILE__ ) . '/Narayam.i18n.php';

// Register hook function
$wgHooks['BeforePageDisplay'][] = 'NarayamHooks::addModules';
$wgHooks['ResourceLoaderGetConfigVars'][] = 'NarayamHooks::addConfig';
$wgHooks['MakeGlobalVariablesScript'][] = 'NarayamHooks::addVariables';

// Autoloader
$wgAutoloadClasses['NarayamHooks'] = dirname( __FILE__ ) . '/Narayam.hooks.php';

// ResourceLoader module registration
$narayamTpl = array(
	'localBasePath' => dirname( __FILE__ ),
	'remoteExtPath' => 'Narayam',
);
$wgResourceModules['ext.narayam'] = $narayamTpl + array(
	'scripts' => 'ext.narayam.js',
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.core'] = $narayamTpl + array(
	'scripts' => 'Narayam.js', // TODO: Rename files
	'styles' => 'ext.narayam.core.css',
	'skinStyles' => array(
		'monobook' => 'ext.narayam.core-monobook.css',
		'vector' => 'ext.narayam.core-vector.css',
	),
	'messages' => array(
		'narayam-checkbox-tooltip',
		'narayam-help-page',
		'narayam-toggle-ime',
	),
	'dependencies' => array( 'mediawiki.util', 'jquery.textSelection' ),
);
$wgResourceModules['ext.narayam.rules.bn-avro'] = $narayamTpl + array(
	'scripts' => 'bn_avro_rules.js',
	'messages' => array( 'narayam-bn-avro' ),
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.bn-inscript'] = $narayamTpl + array(
	'scripts' => 'bn_inscript_rules.js',
	'messages' => array( 'narayam-bn-inscript' ),
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.bn-nkb'] = $narayamTpl + array(
	'scripts' => 'bn_nkb_rules.js',
	'messages' => array( 'narayam-bn-nkb' ),
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ml-inscript'] = $narayamTpl + array(
	'scripts' => 'ml_inscript_rules.js',
	'messages' => array( 'narayam-ml-inscript' ),
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ml'] = $narayamTpl + array(
	'scripts' => 'ml_rules.js',
	'messages' => array( 'narayam-ml' ),
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.sa'] = $narayamTpl + array(
	'scripts' => 'sa_rules.js',
	'messages' => array( 'narayam-sa' ),
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ta99'] = $narayamTpl + array(
	'scripts' => 'ta99_rules.js',
	'messages' => array( 'narayam-ta99' ),
	'dependencies' => 'ext.narayam.core',
);
$wgResourceModules['ext.narayam.rules.ta'] = $narayamTpl + array(
	'scripts' => 'ta_rules.js',
	'messages' => array( 'narayam-ta' ),
	'dependencies' => 'ext.narayam.core',
);
