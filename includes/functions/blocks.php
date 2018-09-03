<?php
/**
 * Blocks
 *
 * @package BuilderBlvd
 */

namespace BuilderBlvd\Blocks;

/**
 * Register blocks for frontend rendering.
 *
 * @since 1.0.0
 */
add_action( 'init', function() {

	if ( ! function_exists( 'register_block_type' ) ) {
		return;
	}

	register_block_type( 'builderblvd/alert', array(
		'render_callback' => __NAMESPACE__ . '\alert'
	) );

	register_block_type( 'builderblvd/testimonial', array(
		'render_callback' => __NAMESPACE__ . '\testimonial'
	) );

} );

/**
 * Format block output.
 *
 * The goal here is to create a standardized wrapping
 * output for all blocks, to accomdate alignment, custom
 * CSS classes, etc.
 *
 * @since 1.0.0
 *
 * @param  string $block Rendered block.
 * @param  array  $atts  Block attributes from editor, with `type` added.
 * @return string        Final block output.
 */
function format_block( $block, $atts ) {

	$atts = wp_parse_args( $atts, array(
		'type'           => '',
		'blockAlignment' => 'none',
		'className'      => '',
	) );

	$class = array(
		'builderblvd-block',
		'block-' . $atts['type'],
		'align' . $atts['blockAlignment']
	);

	if ( $atts['className'] ) {
		$class = array_merge( $class, explode( ' ', $atts['className'] ) );
	}

	/**
	 * Filter CSS classes used for rendering
	 * a block.
	 *
	 * @param array  $class Block CSS classes.
	 * @param string $atts  Formatting arguments.
	 */
	$class = apply_filters( 'builderblvd_block_class', $class, $atts );

	/**
	 * Filter final output for all blocks.
	 *
	 * @param string        Final block HTML output.
	 * @param array  $atts  Block attributes from editor, with `type` added.
	 * @param array  $class Filtered CSS classes.
	 */
	return apply_filters(
		'builderblvd_block_output',
		sprintf( '<div class="%s">%s</div>', esc_attr( implode( ' ', $class ) ), $block ),
		$atts,
		$class
	);

}
