<?php
/**
 * Frontend integration.
 *
 * @package BuilderBlvd
 */

namespace BuilderBlvd\Frontend;

/**
 * Enqueue assets for frontend.
 *
 * @since 1.0.0
 */
function assets() {

	if ( ! get_theme_support( 'builderblvd' ) ) {

		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		/*
		wp_enqueue_script(
			 'builderblvd-frontend',
			 esc_url( BUILDERBLVD_URL . "assets/js/frontend{$suffix}.js" ),
			 [ 'jquery' ],
			 BUILDERBLVD_VERSION,
			 true
		);
		*/

		wp_enqueue_style(
			'builderblvd-frontend',
			esc_url( BUILDERBLVD_URL . "assets/css/frontend{$suffix}.css" ),
			array( 'wp-blocks' ),
			BUILDERBLVD_VERSION
		);

	}

}
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\assets' );
