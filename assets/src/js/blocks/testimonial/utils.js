export const handleAvatarImageChange = (image, setAttributes) => {
  let url = image.url;

  if (image.sizes) {
    if (image.sizes.tb_thumb) {
      url = image.sizes.tb_thumb;
    } else if (image.sizes.thumbnail) {
      url = image.sizes.thumbnail;
    }
  }

  setAttributes({ authorImage: url });
};
