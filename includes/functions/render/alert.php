<?php
/**
 * Alert
 *
 * @package BuilderBlvd
 */

namespace BuilderBlvd\Blocks;

/**
 * Render `alert` block.
 *
 * @since 1.0.0
 *
 * @param  array  $atts    Block attributes.
 * @param  string $content Rich-text content.
 * @return string          Final block output.
 */
function alert( $atts, $content ) {

	$atts = wp_parse_args( $atts, array(
		'type'  => 'alert', // Used for format_block().
		'style' => 'info'
	) );

	$block = sprintf(
		'<div class="alert %s">%s</div>',
		esc_attr( $atts['style'] ),
		wp_kses_post( $content )
	);

	/**
	 * Filters the `alert` block render.
	 *
	 * @since 1.0.0
	 *
	 * @param string       Block HTML.
	 * @param array  $atts Block attributes.
	 */
	$block = apply_filters( 'builderblvd_block_alert', $block, $atts );

	return format_block( $block, $atts );

}
