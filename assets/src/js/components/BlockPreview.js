import classNames from 'classnames';

/**
 * Wrap plugin's blocks in editor.
 *
 * Wrap all blocks in the editor to create a
 * similar markup structure to frontend display.
 */
const BlockPreview = props => {
  const { type, className, blockAlignment, children } = props;

  const classes = classNames('builderblvd-block', `block-${type}`, className, {
    [`align${blockAlignment}`]: blockAlignment && blockAlignment !== 'none',
    alignnone: !blockAlignment || blockAlignment === 'none'
  });

  return <div className={classes}>{children}</div>;
};

export default BlockPreview;
