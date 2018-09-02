import wp from 'wp';
import { colorChoices } from 'builderblvd';
import { setBackgroundColor } from '../../utils/colors';
import { handleAvatarImageChange } from './utils';

/**
 * Advanced options for Testimonial block.
 */
const TestimonialInspector = props => {
  const { __ } = wp.i18n;

  const { InspectorControls, MediaUpload } = wp.editor;

  const {
    PanelBody,
    PanelColor,
    BaseControl,
    TextControl,
    SelectControl,
    ColorPalette,
    Button
  } = wp.components;

  const { className, setAttributes } = props;

  const {
    size,
    backgroundColor,
    authorName,
    authorTitle,
    authorCompany,
    authorURL,
    authorImage
  } = props.attributes;

  return (
    <InspectorControls key="builderblvd-testimonial-sidebar">
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
      </PanelBody>
      <PanelBody title={__('Author', 'builderblvd')}>
        <TextControl
          label={__('Name', 'builderblvd')}
          placeholder={__('Ex: John Smith', 'builderblvd')}
          value={authorName}
          onChange={authorName => setAttributes({ authorName })}
        />
        <TextControl
          label={__('Title or Position', 'builderblvd')}
          placeholder={__('Ex: Vice President', 'builderblvd')}
          value={authorTitle}
          onChange={authorTitle => setAttributes({ authorTitle })}
        />
        <TextControl
          label={__('Company or Organization', 'builderblvd')}
          placeholder={__('Ex: Google', 'builderblvd')}
          value={authorCompany}
          onChange={authorCompany => setAttributes({ authorCompany })}
        />
        <TextControl
          label={__('URL', 'builderblvd')}
          placeholder={__('Ex: https://google.com', 'builderblvd')}
          value={authorURL}
          onChange={authorURL => setAttributes({ authorURL })}
        />
        <BaseControl label={__('Image', 'builderblvd')}>
          {!authorImage ? (
            <MediaUpload
              onSelect={image => handleAvatarImageChange(image, setAttributes)}
              type="image"
              value={authorImage}
              render={({ open }) => (
                <Button className="editor-post-featured-image__toggle" onClick={open}>
                  {__('Upload Author Image', 'builderblvd')}
                </Button>
              )}
            />
          ) : (
            <div className="image-wrapper">
              <div className="image-preview">
                <img src={authorImage} width={50} />
              </div>
              <Button
                className="button button-large remove-image"
                onClick={() => setAttributes({ authorImage: null })}
              >
                {__('Remove Image', 'builderblvd')}
              </Button>
            </div>
          )}
        </BaseControl>
      </PanelBody>
      {size !== 'lg' && (
        <PanelColor
          title={__('Colors', 'builderblvd')}
          initialOpen={false}
          colorValue={backgroundColor}
        >
          <BaseControl label={__('Background Color', 'builderblvd')}>
            <ColorPalette
              colors={colorChoices}
              value={backgroundColor}
              onChange={backgroundColor => setBackgroundColor(backgroundColor, setAttributes)}
            />
          </BaseControl>
        </PanelColor>
      )}
    </InspectorControls>
  );
};

export default TestimonialInspector;
