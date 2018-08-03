import wp from 'wp';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

/**
 * Block Information
 */
const block = {
  title: __('Alert', 'builderblvd'),
  description: __('Notification content.', 'builderblvd'),
  category: 'common',
  icon: 'marker', // @TODO
  keywords: [__('Notice', 'builderblvd')]
};

/**
 * Block Attributes
 */
const attributes = {
  content: {
    type: 'array',
    source: 'children',
    selector: '.alert'
  }
};

/**
 * Editable Block State
 */
const edit = props => {
  const { attributes, className, setAttributes } = props; // @TODO className
  const { content } = attributes;

  const handleChangeContent = content => {
    setAttributes({ content });
  };

  return (
    <div className="alert info">
      <RichText
        tagName="div"
        multiline="p"
        placeholder={__("Add your alert's message...", 'builderblvd')}
        onChange={handleChangeContent}
        value={content}
      />
    </div>
  );
};

/**
 * Saved Block State
 */
const save = props => {
  const { attributes } = props;
  return <div className="alert info">{attributes.content}</div>;
};

export default registerBlockType('builderblvd/alert', { ...block, attributes, edit, save });
