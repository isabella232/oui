import React from 'react';
import classNames from 'classnames';

/**
 * Wrapper component for a set of tabs
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const TabNav = (props) => {
  const tabStyleClasses = props.style ? props.style.map((style) => {
    return 'oui-tabs--' + style;
  }) : '';
  const classes = classNames(tabStyleClasses, 'oui-tabs');
  // This passes the parent prop of active tab to the children elements
  // From http://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
  const childrenWithProps = React.Children.map(props.children, (child) => React.cloneElement(child, {
    activeTab: props.activeTab,
  }));

  return (
    <div data-test-section={ props.testSection } className={ classes }>
      <ul
        className="oui-tabs-nav"
        data-test-section="tabs-menu">
        { childrenWithProps }
      </ul>
    </div>
  );
};

TabNav.propTypes = {
  /** Id corresponding to which tab should be given the active class */
  activeTab: React.PropTypes.string.isRequired,
  /** Set of Tab components */
  children: React.PropTypes.array.isRequired,
  /** Various styles that can be given to the navigation */
  style: React.PropTypes.arrayOf(React.PropTypes.oneOf([
    'small',
    'center',
    'sub',
  ])),
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

/**
 * Individual tab component. Only meant to be used within the
 * TabNav wrapper component
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Tab = (props) => {
  const isActive = props.activeTab === props.tabId;
  const classes = classNames({
    'oui-tabs-nav__item': true,
    'oui-tab-disabled': props.isDisabled,
    'is-active': isActive,
  });
  return (
    <li
      data-test-section={ props.testSection }
      className={ classes }
      onClick={ props.onClick }
      disabled={ props.isDisabled ? 'disabled' : false }>
      { props.children }
    </li>
  );
};

Tab.propTypes = {
  /** Id corresponding to which tab should be given the active class */
  activeTab: React.PropTypes.string.isRequired,
  /** Text or element that appears within the component */
  children: React.PropTypes.node,
  /** Boolean for whether the tab should be given the disabled class */
  isDisabled: React.PropTypes.bool,
  /** Function to perform when tab is clicked */
  onClick: React.PropTypes.func.isRequired,
  /** String to identify tab, used in conjunction with activeTab */
  tabId: React.PropTypes.string.isRequired,
  /** Hook for automated JavaScript tests */
  testSection: React.PropTypes.string,
};

Tab.displayName = 'TabNav.Tab';

TabNav.Tab = Tab;

export default TabNav;
