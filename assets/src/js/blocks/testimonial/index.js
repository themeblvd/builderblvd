import wp from 'wp';
import { getEditWrapperProps } from '../../utils';
import SaveRichText from '../../components/SaveRichText';
import BlockPreview from '../../components/BlockPreview';
import TestimonialInspector from './TestimonialInspector';
import TestimonialPreview from './TestimonialPreview';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

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
  backgroundColor: {
    type: 'string',
    default: ''
  },
  textColor: {
    type: 'string',
    default: 'dark' // dark or light
  },
  blockAlignment: {
    type: 'string',
    default: 'none'
  },
  authorName: {
    type: 'string',
    default: ''
  },
  authorTitle: {
    type: 'string',
    default: ''
  },
  authorCompany: {
    type: 'string',
    default: ''
  },
  authorURL: {
    type: 'string',
    default: ''
  },
  authorImage: {
    type: 'string',
    default: ''
  }
};

/**
 * Editable Block State
 */
const edit = props => {
  return [
    <TestimonialInspector key="builderblvd-testimonial-inspector" {...props} />,
    <BlockPreview
      key="builderblvd-testimonial-preview"
      type="testimonial"
      blockAlignment={props.attributes.blockAlignment}
      className={props.className}
    >
      <TestimonialPreview key="builderblvd-testimonial-preview" {...props} />
    </BlockPreview>
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
