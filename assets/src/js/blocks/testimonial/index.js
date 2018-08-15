import wp from 'wp';
import classNames from 'classnames';
import { getEditWrapperProps } from '../../utils';
import colors from '../../utils/colors';
import SaveRichText from '../../components/SaveRichText';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls, BlockControls, BlockAlignmentToolbar } = wp.editor;
const { PanelBody, SelectControl } = wp.components;

/**
 * Block Information
 */
const block = {
  title: __('Testimonial', 'builderblvd'),
  description: __('Promotional customer feedback.', 'builderblvd'),
  category: 'common',
  icon: 'marker', // @TODO
  keywords: [
    __('Customer Feedback', 'builderblvd'),
    __('Client Feedback', 'builderblvd'),
    'Builder Blvd'
  ],
  supports: {
    className: false
  }
};

/**
 * Block Attributes
 */
const attributes = {
  content: {
    type: 'array',
    source: 'children',
    selector: '.rich-text',
    default: ''
  },
  size: {
    type: 'string',
    default: 'sm'
  },
  color: {
    type: 'string',
    default: 'light'
  },
  blockAlignment: {
    type: 'string',
    default: 'none'
  }
};

/**
 * Editable Block State
 */
const edit = props => {
  const { className, setAttributes } = props;
  const { content, size, color, blockAlignment } = props.attributes;
  console.log('size: ' + size);
  const classes = classNames(
    'builderblvd-block',
    'fs-testimonial',
    `testimonial-${size}`,
    className
  );
  const quoteClasses = classNames('testimonial-text', {
    'bg-light': size !== 'lg' && color === 'light',
    'bg-dark': size !== 'lg' && color === 'dark',
    [`${color}`]: size !== 'lg' && color !== 'dark' && color !== 'light'
  });

  return [
    // Sidebar Options
    <InspectorControls>
      <PanelBody>
        <SelectControl
          label={__('Size', 'builderblvd')}
          value={size}
          options={[
            { value: 'sm', label: __('Small', 'builderblvd') },
            { value: 'md', label: __('Medium', 'builderblvd') },
            { value: 'lg', label: __('Large', 'builderblvd') }
          ]}
          onChange={size => setAttributes({ size })}
        />
        {size !== 'lg' && (
          <SelectControl
            label={__('Color', 'builderblvd')}
            value={color}
            options={colors}
            onChange={color => setAttributes({ color })}
          />
        )}
      </PanelBody>
    </InspectorControls>,

    // Editing Preview
    <div className={classes}>
      <BlockControls>
        <BlockAlignmentToolbar
          value={blockAlignment}
          onChange={blockAlignment => setAttributes({ blockAlignment })}
        />
      </BlockControls>
      <blockquote className={quoteClasses}>
        <RichText
          multiline="p"
          placeholder={__('Add testimonial content...', 'builderblvd')}
          onChange={content => setAttributes({ content })}
          value={content}
        />
      </blockquote>
      <ul className="testimonial-author">
        <li className="author-image">
          <img src="assets/img/person-1.jpg" />
        </li>
        <li className="author-info">
          <h5 className="author-name">Erik Allen</h5>
          <span className="author-tagline">
            Founder, <a href="">Pacific Revival</a>
          </span>
        </li>
      </ul>
    </div>
  ];
};

/**
 * Saved Block State
 */
const save = props => {
  return <SaveRichText {...props.attributes} />;
};

/**
 * Export Block
 */
export default registerBlockType('builderblvd/testimonial', {
  ...block,
  attributes,
  getEditWrapperProps,
  edit,
  save
});
