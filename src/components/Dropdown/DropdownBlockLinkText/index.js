import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Icon from 'react-oui-icons';

export default function DropdownBlockLinkText(props) {
  const testSection = props.testSection
    ? 'block-link-text-' + props.testSection
    : null;
  return (
    <span
      className={ classNames('flex flex-justified--between', {
        'color--bad-news': props.isDestructive,
        'color--base': !props.isDestructive && props.isItemSelected,
      }) }
      { ...(testSection ? { 'data-test-section': testSection } : {}) }>
      {props.text}
      {props.hasExternalIcon && (
        <span className="oui-dropdown__block-link--icon">
          <Icon name="external" size="small" />
        </span>
      )}
    </span>
  );
}
DropdownBlockLinkText.defaultProps = {
  text: null,
};

DropdownBlockLinkText.propTypes = {
  /** adds external icon when true */
  hasExternalIcon: PropTypes.bool,
  /** Changes text to red when true */
  isDestructive: PropTypes.bool,
  /** Changes text to black when true */
  isItemSelected: PropTypes.bool,
  /** test section from parent */
  testSection: PropTypes.string,
  /** text, if provided */
  text: PropTypes.node,
};
