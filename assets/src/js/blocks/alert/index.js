import wp from 'wp';
import classNames from 'classnames';
import { getEditWrapperProps } from '../../utils';
import BlockToolbar from '../../components/BlockToolbar';
import SaveRichText from '../../components/SaveRichText';
import BlockPreview from '../../components/BlockPreview';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText, InspectorControls } = wp.editor;
const { PanelBody, SelectControl } = wp.components;

/**
 * Block Information
 */
const block = {
  title: __('Alert', 'builderblvd'),
  description: __('Notification content.', 'builderblvd'),
  category: 'common',
  icon: 'marker', // @TODO
  keywords: [__('Notice', 'builderblvd'), 'Builder Blvd'],
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
  style: {
    type: 'string',
    default: 'info'
  },
  textAlignment: {
    type: 'string',
    default: ''
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
  const { content, style, textAlignment, blockAlignment } = props.attributes;
  const classes = classNames('alert', style);

  return [
    // Sidebar Options
    <InspectorControls key="builderblvd-alert-inspector">
      <PanelBody>
        <SelectControl
          label={__('Style', 'builderblvd')}
          value={style}
          options={[
            { value: 'info', label: __('Information', 'builderblvd') },
            { value: 'warning', label: __('Warning', 'builderblvd') },
            { value: 'success', label: __('Success', 'builderblvd') },
            { value: 'danger', label: __('Danger', 'builderblvd') }
          ]}
          onChange={style => setAttributes({ style })}
        />
      </PanelBody>
    </InspectorControls>,

    // Editing Preview
    <BlockPreview
      key="builderblvd-alert-preview"
      type="alert"
      blockAlignment={blockAlignment}
      className={className}
    >
      <div className={classes} style={{ textAlign: textAlignment }}>
        <BlockToolbar {...props} />
        <RichText
          tagName="div"
          multiline="p"
          placeholder={__('Add your message...', 'builderblvd')}
          onChange={content => setAttributes({ content })}
          value={content}
        />
      </div>
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
export default registerBlockType('builderblvd/alert', {
  ...block,
  attributes,
  getEditWrapperProps,
  edit,
  save
});
