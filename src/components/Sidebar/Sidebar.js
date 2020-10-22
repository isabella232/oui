import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Resizable } from 're-resizable';

/**
 * Sidebar
 *
 * Example:
 *
 *  <Sidebar
 *    anchor='left'
 *    border={ true }
 *    docked={ true }
 *    isOpen={ false }
 *    width={ 100 }>
 *     sidebar content goes here
 *  </Sidebar>
 *
 */

const Sidebar = (props) => {
  const {
    anchor,
    border,
    boxShadow,
    children,
    docked,
    sticky,
    isResizable,
    isOpen,
    width,
    minWidth,
    maxWidth,
    testSection,
  } = props;

  const baseClasses = classNames(
    'background--white',
    'flex',
    'flex--1',
    'flex--column',
    'oui-sidebar',
    'overflow--hidden'
  );

  const classes = classNames(baseClasses, {
    'border--right': border && anchor === 'left',
    'border--left': border && anchor === 'right',
    'oui-shadow': boxShadow,
    'position--relative': docked,
    'position--absolute height--1-1': !docked && !sticky,
    'position--fixed height--1-1': !docked && sticky,
    'visibility--hidden': !isOpen,
  });

  const anchorPosition = anchor === 'left' ? -1 * width : 0;

  const styles = {
    width: isOpen ? width : 0,
    maxWidth: isOpen ? width : 0,
    [anchor]: isOpen ? 0 : anchorPosition,
  };

  const resizeEnabled = {
    top: false,
    right: anchor === 'left' && isResizable,
    bottom: false,
    left: anchor === 'right' && isResizable,
    topRight: false,
    bottomRight: false,
    bottomLeft: false,
    topLeft: false,
  };

  const defaultSize = {
    width: isOpen ? width : 0,
    height: 'auto',
  };

  if (isResizable && !docked) {
    return (
      <Resizable
        defaultSize={ defaultSize }
        minWidth={ minWidth }
        maxWidth={ maxWidth }
        data-oui-component={ true }
        data-test-section={ testSection }
        className={ classes }
        style={ styles }
        enable={ resizeEnabled }>
        { isOpen && children }
      </Resizable>
    );
  }

  return (
    <div
      data-oui-component={ true }
      data-test-section={ testSection }
      className={ classes }
      style={ styles }>
      { isOpen && children }
    </div>
  );
};

Sidebar.defaultProps = {
  anchor: 'right',
  border: false,
  docked: false,
  sticky: false,
  isResizable: false,
  isOpen: false,
  width: 0,
};

Sidebar.propTypes = {
  /**
   * Determines whether the sidebar should render on
   * the left or right side of the page
   */
  anchor: PropTypes.oneOf([
    'left',
    'right',
  ]),
  /** Determines if the sidebar should have a border */
  border: PropTypes.bool,
  /** Determines if the sidebar should have a box shadow */
  boxShadow: PropTypes.bool,
  /** Sidebar children */
  children: PropTypes.node.isRequired,
  /**
   * Docked sidebars push page-content to left or right when open.
   * Un-docked sidebars render open over page-content (i.e postition absolute)
   */
  docked: PropTypes.bool,
  /**
   * Sticky sidebars render open over page-content (i.e postition fixed).
   * And maintain their position on the screen on scroll.
   * This prop is only in effect when docked is false.
   */
  isOpen: PropTypes.bool,
  /** Determines if the sidebar is visible */
  isResizable: PropTypes.bool,
  /** When resizable, The maximum pixel width of the sidebar */
  maxWidth: PropTypes.number,
  /** When resizable, The minimum pixel width of the sidebar */
  minWidth: PropTypes.number,
  /** Determines if the sidebar is resizable.
      Resizable only works for undocked sidebars. */
  sticky: PropTypes.bool,
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** The pixel width of the sidebar */
  width: PropTypes.number.isRequired,
};

export default Sidebar;
