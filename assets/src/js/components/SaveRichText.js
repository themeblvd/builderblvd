/**
 * Standarize saving rich-text.
 *
 * For dynamic blocks with a single rich-text element,
 * we save out a static block containing just that
 * rendered content, and then render out the rest of
 * the block with PHP on the front-end. This provides
 * a more future-proof solution for rendering blocks.
 *
 * This component creates a standard way of rendering
 * out the rich-text content and saving it to the database.
 *
 * @param {Object} props           Component properties.
 * @param {string} props.content   Rich-text content.
 * @param {string} props.textAlign How to align text.
 * @return {Component}
 */
const SaveRichText = props => {
  const { content, textAlignment } = props;

  return (
    <div className="rich-text" style={{ textAlign: textAlignment }}>
      {content}
    </div>
  );
};

export default SaveRichText;
