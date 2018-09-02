import wp from 'wp';
import isRtl from 'isRtl';
import classNames from 'classnames';
import { handleAvatarImageChange } from './utils';

/**
 * Testimonial block editor preview.
 */
const TestimonialPreview = props => {
  const { __ } = wp.i18n;

  const { RichText, PlainText, BlockControls, BlockAlignmentToolbar, MediaUpload } = wp.editor;

  const { setAttributes } = props;

  const {
    content,
    size,
    backgroundColor,
    textColor,
    blockAlignment,
    authorName,
    authorTitle,
    authorCompany,
    authorURL,
    authorImage
  } = props.attributes;

  const classes = classNames('fs-testimonial', `testimonial-${size}`);

  const quoteClasses = classNames({
    'testimonial-text': true,
    'text-light': size !== 'lg' && textColor === 'light'
  });

  const style = {};

  if (size !== 'lg' && backgroundColor) {
    style.backgroundColor = backgroundColor;
  }

  let arrow = <span className="testimonial-arrow" style={{ borderTopColor: backgroundColor }} />;

  if (size === 'md') {
    if (isRtl) {
      arrow = <span className="testimonial-arrow" style={{ borderLeftColor: backgroundColor }} />;
    } else {
      arrow = <span className='testimonial-arrow' style={{ borderRightColor: backgroundColor }} />; // prettier-ignore
    }
  }

  let tagline;

  if (authorTitle && authorCompany && authorURL) {
    tagline = (
      <span className="author-tagline">
        {authorTitle}, <a href="#">{authorCompany}</a>
      </span>
    );
  } else if (authorTitle && authorCompany) {
    tagline = (
      <span className="author-tagline">
        {authorTitle}, {authorCompany}
      </span>
    );
  } else if (authorTitle) {
    tagline = <span className="author-tagline">{authorTitle}</span>;
  } else if (authorCompany) {
    tagline = <span className="author-tagline">{authorCompany}</span>;
  }

  return (
    <div className={classes}>
      <BlockControls>
        <BlockAlignmentToolbar
          value={blockAlignment}
          onChange={blockAlignment => setAttributes({ blockAlignment })}
        />
      </BlockControls>
      <blockquote className={quoteClasses} style={style}>
        {size !== 'lg' && backgroundColor && arrow}
        <RichText
          multiline="p"
          placeholder={__('Add testimonial content...', 'builderblvd')}
          onChange={content => setAttributes({ content })}
          value={content}
        />
      </blockquote>
      <ul className="testimonial-author">
        {authorImage && (
          <MediaUpload
            onSelect={image => handleAvatarImageChange(image, setAttributes)}
            type="image"
            value={authorImage}
            render={({ open }) => (
              <li className="author-image" onClick={open}>
                <img src={authorImage} />
              </li>
            )}
          />
        )}
        <li className="author-info">
          <h5 className="author-name">
            <PlainText
              placeholder={__('Enter an author name...', 'builderblvd')}
              value={authorName}
              onChange={authorName => setAttributes({ authorName })}
            />
          </h5>
          {tagline && tagline}
        </li>
      </ul>
    </div>
  );
};

export default TestimonialPreview;
