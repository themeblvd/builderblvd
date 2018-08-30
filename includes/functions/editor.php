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
			'colorChoices'    => color_choices(),
		))
	);

	wp_enqueue_style(
		'builderblvd-editor',
		esc_url( BUILDER_BLVD_URL . "assets/css/editor{$suffix}.css" ),
		array( 'wp-blocks' ),
		BUILDER_BLVD_VERSION
	);

}
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\assets' );

/**
 * Get color choices.
 *
 * @since 1.0.0
 *
 * @return array Colors choices.
 */
function color_choices() {

	$colors = current( (array) get_theme_support( 'editor-color-palette' ) );

	if ( ! $colors ) {
		/**
		 * Filters the default color choices.
		 *
		 * These colors get used when a theme has not
		 * added support for a custom color palette via
		 * `editor-color-palette`.
		 *
		 * @since 1.0.0
		 *
		 * @param array Colors.
		 */
		$colors = apply_filters( 'builderblvd_default_colors', array(
			'light' => array(
				'name'  => __( 'Light', 'builderblvd' ),
				'slug'  => 'light',
				'color' => '#f2f2f2',
			),
			'dark' => array(
				'name'  => __( 'Dark', 'builderblvd' ),
				'slug'  => 'dark',
				'color' => '#1b1b1b',
			),
			'asphalt' => array(
				'name'  => __( 'Asphalt', 'builderblvd' ),
				'slug'  => 'asphalt',
				'color' => '#34495e',
			),
			'black' => array(
				'name'  => __( 'Black', 'builderblvd' ),
				'slug'  => 'black',
				'color' => '#000',
			),
			'blue' => array(
				'name'  => __( 'Blue', 'builderblvd' ),
				'slug'  => 'blue',
				'color' => '#00437f',
			),
			'brown' => array(
				'name'  => __( 'Brown', 'builderblvd' ),
				'slug'  => 'brown',
				'color' => '#825a2c',
			),
			'concrete' => array(
				'name'  => __( 'Concrete', 'builderblvd' ),
				'slug'  => 'concrete',
				'color' => '#95a5a6',
			),
			'cream' => array(
				'name'  => __( 'Cream', 'builderblvd' ),
				'slug'  => 'cream',
				'color' => '#f5d76e',
			),
			'crimson' => array(
				'name'  => __( 'Crimson', 'builderblvd' ),
				'slug'  => 'crimson',
				'color' => '#c3272b',
			),
			'dark-blue' => array(
				'name'  => __( 'Dark Blue', 'builderblvd' ),
				'slug'  => 'dark-blue',
				'color' => '#153f5a',
			),
			'dark-brown' => array(
				'name'  => __( 'Dark Brown', 'builderblvd' ),
				'slug'  => 'dark-brown',
				'color' => '#572f05',
			),
			'dark-green' => array(
				'name'  => __( 'Dark Green', 'builderblvd' ),
				'slug'  => 'dark-green',
				'color' => '#485a21',
			),
			'dark-purple' => array(
				'name'  => __( 'Dark Purple', 'builderblvd' ),
				'slug'  => 'dark-purple',
				'color' => '#5d3f6a',
			),
			'forest' => array(
				'name'  => __( 'Forest', 'builderblvd' ),
				'slug'  => 'forest',
				'color' => '#006442',
			),
			'green' => array(
				'name'  => __( 'Green', 'builderblvd' ),
				'slug'  => 'green',
				'color' => '#26a65b',
			),
			'jungle' => array(
				'name'  => __( 'Jungle', 'builderblvd' ),
				'slug'  => 'jungle',
			    'color' => '#36b3a8',
			),
			'mauve' => array(
				'name'  => __( 'Mauve', 'builderblvd' ),
				'slug'  => 'mauve',
				'color' => '#7b726c',
			),
			'orange' => array(
				'name'  => __( 'Orange', 'builderblvd' ),
				'slug'  => 'orange',
				'color' => '#ff9624',
			),
			'peach' => array(
				'name'  => __( 'Peach', 'builderblvd' ),
				'slug'  => 'peach',
				'color' => '#f47983',
			),
			'pearl' => array(
				'name'  => __( 'Pearl', 'builderblvd' ),
				'slug'  => 'pearl',
				'color' => '#bca89d',
			),
			'pink' => array(
				'name'  => __( 'Pink', 'builderblvd' ),
				'slug'  => 'pink',
				'color' => '#de2e81',
			),
			'pomegranate' => array(
				'name'  => __( 'Pomegranate', 'builderblvd' ),
				'slug'  => 'pomegranate',
				'color' => '#e74c3c',
			),
			'purple' => array(
				'name'  => __( 'Purple', 'builderblvd' ),
				'slug'  => 'purple',
				'color' => '#78498e',
			),
			'red' => array(
				'name'  => __( 'Red', 'builderblvd' ),
				'slug'  => 'red',
				'color' => '#8f1d21',
			),
			'royal' => array(
				'name'  => __( 'Royal', 'builderblvd' ),
				'slug'  => 'royal',
				'color' => '#428bca',
			),
			'slate-grey' => array(
				'name'  => __( 'Slate Grey', 'builderblvd' ),
				'slug'  => 'slate-grey',
				'color' => '#7f8d9c',
			),
			'silver' => array(
				'name'  => __( 'Silver', 'builderblvd' ),
				'slug'  => 'silver',
				'color' => '#bdc3c7',
			),
			'steel-blue' => array(
				'name'  => __( 'Steel Blue', 'builderblvd' ),
				'slug'  => 'steel-blue',
				'color' => '#4b77be',
			),
			'teal' => array(
				'name'  => __( 'Teal', 'builderblvd' ),
				'slug'  => 'teal',
				'color' => '#008080',
			),
			'turquoise' => array(
				'name'  => __( 'Turquoise', 'builderblvd' ),
				'slug'  => 'turquoise',
				'color' => '#36d7b7',
			),
			'yellow' => array(
				'name'  => __( 'Yellow', 'builderblvd' ),
				'slug'  => 'yellow',
				'color' => '#ecc11b',
			),
			'wheat' => array(
				'name'  => __( 'Wheat', 'builderblvd' ),
				'slug'  => 'wheat',
				'color' => '#b4ad8b',
			),
			'white' => array(
				'name'  => __( 'White', 'builderblvd' ),
				'slug'  => 'white',
				'color' => '#fff'
			),
		) );
	}

	/**
	 * Filters the editor color choices.
	 *
	 * @since 1.0.0
	 *
	 * @param array Colors.
	 */
	return apply_filters( 'builderblvd_default_colors', $colors );

}
