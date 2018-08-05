<?php
/*
Plugin Name: Builder Blvd
Description: Content building blocks for a new era of WordPress.
Version: 1.0.0
Author: Theme Blvd
Author URI: http://themeblvd.com
License: GPL2+
*/

define( 'BUILDER_BLVD_VERSION', '1.0.0' );
define( 'BUILDER_BLVD_URL', plugin_dir_url( __FILE__ ) );
define( 'BUILDER_BLVD_PATH', dirname( __FILE__ ) . '/' );
define( 'BUILDER_BLVD_INC', BUILDER_BLVD_PATH . 'includes/' );

// Include files.
require_once BUILDER_BLVD_INC . 'functions/editor.php';
require_once BUILDER_BLVD_INC . 'functions/frontend.php';

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
