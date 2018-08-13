import wp from 'wp';

const { AlignmentToolbar, BlockControls, BlockAlignmentToolbar } = wp.editor;

/**
 * Standard block toolbar.
 *
 * This components builds out a common, re-usable
 * combination of different default WordPress
 * rich-text toolbars.
 *
 * @param {Object} props Component properties.
 * @return {Component}
 */
const BlockToolbar = props => {
  const { setAttributes, attributes } = props;
  const { textAlignment, blockAlignment } = attributes;

  return (
    <BlockControls>
      <BlockAlignmentToolbar
        value={blockAlignment}
        onChange={blockAlignment => setAttributes({ blockAlignment })}
      />
      <AlignmentToolbar
        value={textAlignment}
        onChange={textAlignment => setAttributes({ textAlignment })}
      />
    </BlockControls>
  );
};

export default BlockToolbar;
