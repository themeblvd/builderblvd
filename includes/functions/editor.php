<?php
/**
 * Editor integration.
 *
 * @package BuilderBlvd
 */

namespace BuilderBlvd\Editor;

/**
 * Enqueue assets for editor.
 *
 * @since 1.0.0
 */
function assets() {

	$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

	wp_enqueue_script(
		'builderblvd-editor',
		esc_url( BUILDERBLVD_URL . "assets/js/editor{$suffix}.js" ),
		array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components' ),
		BUILDERBLVD_VERSION,
		true
	);

	wp_enqueue_style(
		'builderblvd-editor',
		esc_url( BUILDERBLVD_URL . "assets/css/editor{$suffix}.css" ),
		array( 'wp-blocks' ),
		BUILDERBLVD_VERSION
	);
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\assets' );
