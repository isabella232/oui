import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { FILL_COLOR_MAP } from '../../utils/accessibility';

/**
 * Tiny inline component used to draw attention to an item's state or status.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Badge = ({
  backgroundColor,
  children,
  color,
  testSection,
}) => {
  let classes = classNames({
    'oui-badge': true,
    [`oui-badge--${color}`]: color,
  });

  // ensure valid backgroundColor name
  // (in the case that propType errors are ignored)
  const badgeFillColor = backgroundColor && color === 'default'
    && (Object.keys(FILL_COLOR_MAP).includes(backgroundColor)
      ? FILL_COLOR_MAP[backgroundColor]
      : null);

  return (
    <span
      data-oui-component={ true }
      className={ classes }
      style={{ backgroundColor: badgeFillColor }}
      data-test-section={ testSection }>
      { children }
    </span>
  );
};

Badge.propTypes = {
  /** Color to use for the background of the token */
  backgroundColor: PropTypes.oneOf(Object.keys(FILL_COLOR_MAP)),
  /** Text that appears within the component */
  children: PropTypes.node.isRequired,
  /** Various color schemes */
  color: PropTypes.oneOf(['default', 'draft', 'live', 'primary', 'plain', 'purple', 'bad-news']),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

Badge.defaultProps = {
  color: 'default',
};

export default Badge;
