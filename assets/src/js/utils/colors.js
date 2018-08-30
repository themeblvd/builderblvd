import tinycolor from 'tinycolor2';

/**
 * Set both backgroundColor and textColor values,
 * based on a user-selected background color.
 *
 * @param {string}   backgroundColor Background color hex value, like `#000`.
 * @param {function} setAttributes   Function passed from props to set an attribute in editor.
 */
export function setBackgroundColor(backgroundColor, setAttributes) {
  setAttributes({
    backgroundColor,
    textColor: backgroundColor && tinycolor(backgroundColor).isDark() ? 'light' : 'dark'
  });
}
