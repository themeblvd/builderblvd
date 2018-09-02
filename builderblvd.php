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
require_once BUILDER_BLVD_INC . 'functions/settings.php';
require_once BUILDER_BLVD_INC . 'functions/frontend.php';
require_once BUILDER_BLVD_INC . 'functions/blocks.php';
require_once BUILDER_BLVD_INC . 'functions/render/alert.php';
require_once BUILDER_BLVD_INC . 'functions/render/testimonial.php';

/**
 * Register text domain for localization.
 *
 * @since 1.0.0
 */
add_action( 'init', function() {
	load_plugin_textdomain('builderblvd');
} );
