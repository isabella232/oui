import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Header = (props) => {
  const {
    backLinkHref,
    backLinkOnClick,
    backLinkText,
    hasBackLink,
    isFullHeight,
    primaryTitle,
    projectName,
    secondaryTitle,
    shouldHeaderScroll,
    usesMonospaceStyling,
  } = props;

  const maxCharCount = 22;
  return (
    <div
      className={ classNames({
        'sidenav__header': true,
        'sidenav__header--full-height': isFullHeight,
        'overflow-y--auto': shouldHeaderScroll,
      }) }>
      <div className="micro muted" data-test-section="header-project-name">
        {projectName}
      </div>
      {hasBackLink && (
        <div className="push--bottom">
          <a
            href={ backLinkHref }
            onClick={ backLinkOnClick }
            className="nav-link nav-link--back"
            data-test-section="header-back-link">
            {backLinkText}
          </a>
        </div>
      )}

      {primaryTitle && (
        <h1
          className={ classNames({
            'sidenav__header__title': true,
            'flush--bottom': true,
            'force-break': true,
            'gamma': !usesMonospaceStyling,
            'delta': usesMonospaceStyling && primaryTitle.length <= maxCharCount,
            'zeta': usesMonospaceStyling && primaryTitle.length > maxCharCount,
            'monospace': usesMonospaceStyling,
          }) }
          title={ primaryTitle }
          data-test-section="header-title">
          {primaryTitle}
        </h1>
      )}
      {secondaryTitle && (
        <p>{secondaryTitle}</p>
      )}

      {props.children}
    </div>
  );
};

Header.propTypes = {
  /** Href URL to use for Breadcrumb */
  backLinkHref: PropTypes.string,
  /** Callback to perform when breadcrumb link is clicked */
  backLinkOnClick: PropTypes.func,
  /** Text to use for Breadcrumb */
  backLinkText: PropTypes.string,
  /** Content to render below the main title */
  children: PropTypes.node,
  /** Whether or not a breadcrumb back link is present */
  hasBackLink: PropTypes.bool,
  /** Whether or not the header should be full height */
  isFullHeight: PropTypes.bool,
  /** The title of the current entity */
  primaryTitle: PropTypes.string,
  /** The name of the current project */
  projectName: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  /** A secondary name of the current entity, if applicable */
  secondaryTitle: PropTypes.string,
  /** Whether or not the header should scroll */
  shouldHeaderScroll: PropTypes.bool,
  /** Whether or not the header uses monospace styling */
  usesMonospaceStyling: PropTypes.bool,
};

Header.defaultProps = {
  isFullHeight: false,
  usesMonospaceStyling: false,
  hasBackLink: true,
  primaryTitle: null,
};

export default Header;
