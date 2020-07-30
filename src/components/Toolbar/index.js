import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import ToolbarButton from './ToolbarButton';
import ToolbarLink from './ToolbarLink';

const Left = (props) => {
  return <div className="toolbar__left">{props.children}</div>;
};

Left.propTypes = {
  children: PropTypes.node.isRequired,
};

const Right = (props) => {
  return <div className="toolbar__right">{props.children}</div>;
};

Right.propTypes = {
  children: PropTypes.node.isRequired,
};

const Toolbar = (props) => {
  const toolbarContentClasses = classNames({
    toolbar__content: true,
    'toolbar__content--bare': props.toolbarStyle.includes('bare'),
    'toolbar__content--tight': props.toolbarStyle.includes('tight'),
    'background--white': props.isBottomToolbar,
    'border--top': props.isBottomToolbar,
    'no-border--bottom':
      props.isBottomToolbar || props.toolbarStyle.includes('bare'),
    'hard--left': props.isBottomToolbar,
  });

  return (
    <div
      data-oui-component={ true }
      className="toolbar"
      data-test-section={ props.testSection }>
      <div className={ toolbarContentClasses }>{props.children}</div>
    </div>
  );
};

Toolbar.defaultProps = {
  isBottomToolbar: false,
  toolbarStyle: [],
};

Toolbar.propTypes = {
  /** Items to render for the toolbar */
  children: PropTypes.node.isRequired,
  /** Whether this toolbar sits at the bottom of a page */
  isBottomToolbar: PropTypes.bool,
  /** Hook to uze for automated testing */
  testSection: PropTypes.string,
  /** The style to use for this toolbar */
  toolbarStyle: PropTypes.arrayOf(PropTypes.oneOf(['bare', 'tight'])),
};

Toolbar.Button = ToolbarButton;
Toolbar.Link = ToolbarLink;
Toolbar.Right = Right;
Toolbar.Left = Left;

export default Toolbar;
