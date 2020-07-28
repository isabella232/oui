import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TR = React.forwardRef(({
  isActive,
  isHighlighted,
  noBorder,
  noHover,
  onRowClick,
  borderStyle,
  backgroundColor,
  testSection,
  children,
}, ref) => {
  let classes = classNames({
    'oui-table-row--active': isActive,
    'oui-table-row--highlighted': isHighlighted,
    'no-border': noBorder,
    'hover--disabled': noHover,
    [`border--${borderStyle}`]: borderStyle,
    [`background--${backgroundColor}`]: backgroundColor,
  });
  return (
    <tr
      className={ classes }
      data-test-section={ testSection }
      onClick={ onRowClick }
      ref={ ref }>
      { children }
    </tr>
  );
});

TR.propTypes = {
  /** Background color for each row */
  backgroundColor: PropTypes.oneOf(['faint', 'light']),
  /** Border style for each row */
  borderStyle: PropTypes.oneOf(['bottom', 'top', 'sides', 'ends', 'none']),
  /** Expects a `Table.TD` or `Table.TH` component */
  children: PropTypes.node,
  /** If true, add active class */
  isActive: PropTypes.bool,
  /** If true, add highlight class */
  isHighlighted: PropTypes.bool,
  /** If true, add class to remove border */
  noBorder: PropTypes.bool,
  /** If true, remove hover on inner TDs */
  noHover: PropTypes.bool,
  /** Function to handle row click action */
  onRowClick: PropTypes.func,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

TR.displayName = 'TR';

export default TR;
