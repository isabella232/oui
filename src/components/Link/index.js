import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Icon from 'react-oui-icons';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */

const Link = ({
  ariaLabel,
  children,
  href,
  leftIcon,
  onClick,
  isDisabled = false,
  isFullWidth = false,
  newWindow = false,
  rightIcon,
  style,
  testSection,
}) => {
  const classes = classNames({
    ['link']: true,
    [`link--${style}`]: style,
    ['link--disabled']: isDisabled,
    'pointer-events--none': isDisabled,
    'width--1-1': isFullWidth,
    'display--inline-block ': isFullWidth,
    'flex--inline flex-justified--center flex-align--center': leftIcon || rightIcon,
  });

  const leftIconComp = leftIcon ?
    (<div className={ 'flex flex-self--center push-half--right' }>
      <Icon name={ leftIcon } size={ 'small' }/>
    </div>) : '';

  const rightIconComp = rightIcon ?
    (<div className={ 'flex flex-self--center push-half--left' }>
      <Icon name={ rightIcon } size={ 'small' }/>
    </div>) : '';

  if (!href && !onClick) {
    return (
      <span
        data-oui-component={ true }
        className={ classes }
        data-test-section={ testSection }
        data-track-id={ testSection }
        disabled={ isDisabled }>
        {leftIcon && leftIconComp }
        { children }
        { rightIcon && rightIconComp}
      </span>
    );
  }

  return (
    <a
      aria-label={ ariaLabel }
      data-oui-component={ true }
      href={ href }
      className={ classes }
      data-test-section={ testSection }
      data-track-id={ testSection }
      onClick={ onClick }
      { ...(newWindow ? { target: '_blank', rel: 'noopener noreferrer' } : {}) }
      disabled={ isDisabled }>
      {leftIcon && leftIconComp }
      { children }
      { rightIcon && rightIconComp}
    </a>
  );
};

Link.propTypes = {
  /** Label to use for screen readers */
  ariaLabel: PropTypes.string,
  /** Text/node that is linked */
  children: PropTypes.node.isRequired,
  /** Href for the anchor element */
  href: PropTypes.string,
  /** Disable link and interactivity */
  isDisabled: PropTypes.bool,
  /** Whether or not this link is full width */
  isFullWidth: PropTypes.bool,
  /** Icon to display on the left */
  leftIcon: PropTypes.node,
  /** Open link in new window */
  newWindow: PropTypes.bool,
  /** Click handler function */
  onClick: PropTypes.func,
  /** Icon to display on the right */
  rightIcon: PropTypes.node,
  /** Link style options */
  style: PropTypes.oneOf([
    'default',
    'dark',
    'muted',
    'bad-news',
    'reverse',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

export default Link;
