<?php
/*
Plugin Name: Builder Blvd
Description: Content building blocks for a new era of WordPress.
Version: 1.0.0
Author: Theme Blvd
Author URI: http://themeblvd.com
License: GPL2+
*/

define( 'BUILDERBLVD_VERSION', '1.0.0' );
define( 'BUILDERBLVD_URL', plugin_dir_url( __FILE__ ) );
define( 'BUILDERBLVD_PATH', dirname( __FILE__ ) . '/' );
define( 'BUILDERBLVD_INC', BUILDERBLVD_PATH . 'includes/' );

// Include files.
require_once BUILDERBLVD_INC . 'functions/editor.php';
require_once BUILDERBLVD_INC . 'functions/frontend.php';

/**
 * Run plugin.
 *
 * @since 1.0.0
 */
add_action( 'after_setup_theme', function() {

	/**
	 * Fires just before the plugin initializes.
	 *
	 * @since 1.0.0
	 */
	do_action( 'builderblvd_init' );

	// ...

} );

/**
 * Register text domain for localization.
 *
 * @since 1.0.0
 */
add_action( 'init', function() {
	load_plugin_textdomain('builderblvd');
} );
