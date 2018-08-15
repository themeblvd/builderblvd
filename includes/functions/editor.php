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
		esc_url( BUILDER_BLVD_URL . "assets/js/editor{$suffix}.js" ),
		array( 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components' ),
		BUILDER_BLVD_VERSION,
		true
	);

	wp_localize_script(
		'builderblvd-editor',
		'builderBlvdL10n',
		/**
		 * Filters the setting values attached to the
		 * `builderblvd-editor` scripts.
		 *
		 * @param array Settings for editor integration.
		 */
		apply_filters( 'builderblvd_editor_l10n', array(
			'hasThemeSupport' => current_theme_supports( 'builderblvd' ) ? true : false,
			'hasColorLibrary' => '1' === get_option( 'builderblvd_color_lib', '1' ) ? true : false,
		))
	);

	wp_enqueue_style(
		'builderblvd-editor',
		esc_url( BUILDER_BLVD_URL . "assets/css/editor{$suffix}.css" ),
		array( 'wp-blocks' ),
		BUILDER_BLVD_VERSION
	);

	if ( '1' === get_option( 'builderblvd_color_lib', '1' ) ) {

		wp_enqueue_style(
			'builderblvd-editor-colors',
			esc_url( BUILDER_BLVD_URL . "assets/css/editor-colors{$suffix}.css" ),
			array( 'wp-blocks' ),
			BUILDER_BLVD_VERSION
		);

	}
}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\assets' );
