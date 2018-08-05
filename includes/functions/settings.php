<?php
/**
 * Plugin Settings
 *
 * @package BuilderBlvd
 */

namespace BuilderBlvd\Settings;

/**
 * Register settings.
 *
 * @since 1.0.0
 */
function register() {

	add_settings_section(
		'builderblvd',
		__( 'Builder Blvd Settings', 'builderblvd' ),
		null,
		'writing'
	);

	add_settings_field(
		'builderblvd_color_lib',
		__( 'Color Library', 'builderblvd' ),
		__NAMESPACE__ . '\display_color_lib',
		'writing',
		'builderblvd'
	);

	register_setting(
		'writing',
		'builderblvd_color_lib',
		__NAMESPACE__ . '\sanitize_checkbox'
	);

}
add_action( 'admin_init', __NAMESPACE__ . '\register' );

/**
 * Dislay setting to enable/disable color
 * library.
 *
 * @since 1.0.0
 */
function display_color_lib() {
	?>

	<label for="builderblvd_color_lib">
		<input name="builderblvd_color_lib" type="checkbox" id="builderblvd_color_lib" value="1" <?php checked( '1', get_option( 'builderblvd_color_lib', '1' ) ); ?> />
		<?php _e( 'Enable color library', 'buidlerblvd' ) ?>
	</label>

	<p class="description"><?php _e( 'The color library gives you predefined colors to choose from when configuring various blocks. This is useful when you prefer not to come up with your own custom color values. However, enabling the color library will add extra bloat to your website.', 'builderblvd' ); ?></p>

	<?php
}

/**
 * Sanitize a checkbox option.
 *
 * @since 1.0.0
 *
 * @param string $input Raw, unsanitized data.
 * @return string Final value to save, `0` or `1`.
 */
function sanitize_checkbox( $input ) {

	if ( $input ) {
		return '1';
	}

	return '0';
}
