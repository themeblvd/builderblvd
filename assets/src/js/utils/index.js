/**
 * Block Alignment
 *
 * This method is needed for implmenting block
 * alignment option. At this time, it must be called
 * getEditWrapperProps.
 */
export function getEditWrapperProps({ blockAlignment }) {
  if (blockAlignment === 'left' || blockAlignment === 'right' || blockAlignment === 'full') {
    return { 'data-align': blockAlignment };
  }
}
