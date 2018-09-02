<?php
/**
 * Testimonial
 *
 * @package BuilderBlvd
 */

namespace BuilderBlvd\Blocks;

/**
 * Render `testimonial` block.
 *
 * @since 1.0.0
 *
 * @param  array  $atts    Block attributes.
 * @param  string $content Rich-text content.
 * @return string          Final block output.
 */
function testimonial( $atts, $content ) {

	$atts = wp_parse_args( $atts, array(
		'type'            => 'testimonial', // Used for format_block().
		'content'         => '',
		'size'            => 'sm',
		'backgroundColor' => '',
		'textColor'       => 'dark',
		'blockAlignment'  => 'none',
		'authorName'      => '',
		'authorTitle'     => '',
		'authorCompany'   => '',
		'authorURL'       => '',
		'authorImage'     => '',
	) );

	$tagline = '';

	if ( $atts['authorTitle'] || $atts['authorCompany'] ) {

		$tagline = '<span class="author-tagline">';

		if ( $atts['authorTitle'] && $atts['authorCompany'] && $atts['authorURL'] ) {

			$tagline .= sprintf(
				'%1$s, <a href="%2$s" title="%3$s" target="_blank">%3$s</a>',
				esc_html( $atts['authorTitle'] ),
				esc_url( $atts['authorURL'] ),
				esc_html( $atts['authorCompany'] )
			);

		} else if ( $atts['authorTitle'] && $atts['authorCompany'] ) {

			$tagline .= sprintf(
				'%s, %s',
				esc_html( $atts['authorTitle'] ),
				esc_html( $atts['authorCompany'] )
			);

		} else if ( $atts['authorTitle'] ) {

			$tagline .= esc_html( $atts['authorTitle'] );

		} else if ( $atts['authorCompany'] ) {

			$tagline .= esc_html( $atts['authorCompany'] );

		}

		$tagline .= '</span><!-- .author-tagline -->';

	}

	$block = '<div class="fs-testimonial testimonial-' . esc_attr( $atts['size'] ) . '">';

	if ( $atts['backgroundColor'] && 'lg' !== $atts['size'] ) {

		$class = 'testimonial-text';

		if ( 'light' === $atts['textColor'] ) {
			$class .= ' text-light';
		}

		$block .= sprintf(
			'<div class="%s" style="background-color: %s;">',
			$class,
			esc_attr( $atts['backgroundColor'] )
		);

		$block .= sprintf(
			'<span class="testimonial-arrow" style="border-top-color: %s"></span>', // Used instead of :before styling with custom background color.
			esc_attr( $atts['backgroundColor'] )
		);

	} else {

		$block .= '<div class="testimonial-text">';

	}

	$block .= wp_kses_post( $content );

	$block .= '</div><!-- .testimonial-text -->';

	if ( $atts['authorImage'] || $atts['authorName'] ) {

		$block .= '<ul class="testimonial-author">';

		if ( $atts['authorImage'] ) {

			$block .= sprintf(
				'<li class="author-image"><img src="%s" alt="%s"></li><!-- .author-image -->',
				esc_url( $atts['authorImage'] ),
				esc_attr( $atts['authorName'] )
			);

		}

		if ( $atts['authorName'] ) {

			$block .= '<li class="author-info">';

			$block .= '<h5 class="author-name">' . esc_html( $atts['authorName'] ) . '</h5>';

			if ( $tagline ) {

				$block .= $tagline;

			}

			$block .= '</li><!-- .author-image -->';

		}

		$block .= '</ul><!-- .testimonial-author -->';

	}

	$block .= '</div><!-- .fs-testimonial -->';

	/**
	 * Filters the `alert` block render.
	 *
	 * @since 1.0.0
	 *
	 * @param string       Block HTML.
	 * @param array  $atts Block attributes.
	 */
	$block = apply_filters( 'builderblvd_block_testimonial', $block, $atts );

	return format_block( $block, $atts );

}
