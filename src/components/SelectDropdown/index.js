import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import Button from '../Button';
import Dropdown from '../Dropdown';
import Link from '../Link';

class SelectDropdown extends React.Component {
  static propTypes = {
    /**
     * Button text object with label and content value
     * When this prop is defined, value and initialPlaceholder
     * are not used.
     */
    buttonContent: PropTypes.shape({
      label: PropTypes.string,
      content: PropTypes.string,
    }),
    /**
     * Style value that is passed to the OUI button that controls the dropdown.
     */
    buttonStyle: PropTypes.string,
    /**
     * Show error by default.
     */
    displayError: PropTypes.bool,
    /**
     * Dropdown direction.
     */
    dropdownDirection: PropTypes.oneOf(['right', 'left', 'up']),
    /**
     * Should activator and dropdown be full width of container
     */
    fullWidth: PropTypes.bool,
    /**
     * An initial value for the dropdown before anything is selected
     */
    initialPlaceholder: PropTypes.node,
    /**
     * The select is greyed out if it is disabled.
     */
    isDisabled: PropTypes.bool,
    /**
     * Whether this dropdown supports Multi Select
     * If true, automatically sets shouldHideChildrenOnClick to false
     */
    isMultiSelect: PropTypes.bool,
    /**
     * Whether this dropdown is required
     * Only applies if "label" prop is supplied
     */
    isRequired: PropTypes.bool,
    /**
     * Dropdown items that can be selected from the select dropdown.
     */
    items: PropTypes.arrayOf(
      PropTypes.shape({
        activatorLabel: PropTypes.node,
        description: PropTypes.string,
        isSelected: PropTypes.bool,
        label: PropTypes.node.isRequired,
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.number,
          PropTypes.bool,
        ]).isRequired,
        linkNewWindow: PropTypes.bool,
        linkText: PropTypes.string,
        linkURL: PropTypes.string,
      })
    ).isRequired,
    /**
     * Label to use above the activator
     */
    label: PropTypes.string,
    /**
     * Max width of the activator container.
     */
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * The minimum width of the dropdown list; any valid CSS width value.
     */
    minDropdownWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * Note to use below the activator
     */
    note: PropTypes.string,
    /**
     * Function that is called when user selects
     * an item from dropdown list.
     */
    onChange: PropTypes.func.isRequired,
    /** Control the placement of the dropdown */
    placement: PropTypes.oneOf([
      'top',
      'top-start',
      'top-end',
      'bottom',
      'bottom-start',
      'bottom-end',
      'right',
      'right-start',
      'right-end',
      'left',
      'left-start',
      'left-end',
    ]),
    /**
     * Identifier used to create data-test-section attributes for testing.
     */
    testSection: PropTypes.string,
    /**
     * Identifier used to create data-track-id attributes for Heap testing.
     */
    trackId: PropTypes.string,
    /**
     * Value of currently selected item.
     */
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.bool,
    ]),
    /**
     * Width of the activator container.
     */
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * zIndex of dropdown group
     */
    zIndex: PropTypes.number,
  };

  static defaultProps = {
    buttonStyle: 'outline',
    initialPlaceholder: '',
    displayError: false,
    dropdownDirection: 'right',
    fullWidth: false,
    width: '100%',
    trackId: '',
    testSection: '',
    value: '',
  };

  renderActivator = ({ buttonRef, onClick, onBlur }) => {
    const {
      buttonContent,
      buttonStyle,
      value,
      width,
      isRequired,
      label,
      maxWidth,
      note,
      isDisabled,
      initialPlaceholder,
      trackId,
      testSection,
    } = this.props;
    let selectedItem;
    this.props.items.forEach((item) => {
      if (item.value === value) {
        selectedItem = item;
      }
    });

    const outerClass = classNames({
      ['oui-form-bad-news']: this.props.displayError,
      'oui-dropdown-group__activator': true,
    });

    let activatorLabel = '';
    if (selectedItem) {
      activatorLabel = selectedItem.activatorLabel || selectedItem.label;
    } else if (initialPlaceholder) {
      activatorLabel = initialPlaceholder;
    }

    let adjustedButtonStyle = buttonStyle;

    if (buttonContent) {
      adjustedButtonStyle = '';
    }

    return (
      <div style={{ width: width, maxWidth: maxWidth }} className={ outerClass }>
        {label && (
          <p className="oui-label">
            {label}
            {isRequired && <span className="oui-label--required"></span>}
          </p>
        )}
        <Button
          title={ activatorLabel }
          ariaHasPopup={ true }
          isDisabled={ isDisabled }
          style={ adjustedButtonStyle }
          size="narrow"
          testSection={ testSection }
          width="full"
          buttonRef={ buttonRef }
          onClick={ onClick }
          onBlur={ onBlur }>
          <div className="flex flex-align--center" data-track-id={ trackId }>
            <span className="oui-dropdown-group__activator-label flex--1">
              {buttonContent && buttonContent.label ? (
                <div className="line--tight text--left push--right">
                  <div className="micro muted">
                    {buttonContent.label}
                    <span className="oui-assistive-text">:</span>
                  </div>
                  <div>{buttonContent.content}</div>
                </div>
              ) : (
                activatorLabel
              )}
            </span>
            <span className="push--left oui-arrow-inline--down" />
          </div>
        </Button>
        {note && (
          <div
            className="oui-form-note"
            data-test-section={ testSection && testSection + '-note' }>
            {note}
          </div>
        )}
      </div>
    );
  };

  handleLinkClick = (e) => {
    e.stopPropagation();
  };

  renderContents = () => {
    const {
      buttonContent,
      isMultiSelect,
      items,
      label,
      onChange,
      value,
      minDropdownWidth,
      dropdownDirection,
    } = this.props;

    return (
      <Dropdown.Contents
        minWidth={ minDropdownWidth }
        direction={ dropdownDirection }
        ariaLabel={ (buttonContent && buttonContent.label) || label }>
        {items.map((entry, index) => (
          <Dropdown.ListItem key={ entry.value }>
            <Dropdown.BlockLink
              value={ entry.value }
              onClick={ onChange }
              isLink={ entry.value !== value }
              isItemSelected={ entry.isSelected }
              isMultiSelect={ isMultiSelect }
              testSection={ 'dropdown-block-link-' + entry.value }>
              {entry.label}
              {entry.description && (
                <div className="micro muted">{entry.description}</div>
              )}
            </Dropdown.BlockLink>
            {entry.linkText && entry.linkURL && (
              <div className="micro muted">
                <Link
                  title={ entry.linkText }
                  onClick={ this.handleLinkClick }
                  newWindow={ entry.linkNewWindow }
                  href={ entry.linkURL }>
                  {entry.linkText}
                </Link>
              </div>
            )}
          </Dropdown.ListItem>
        ))}
      </Dropdown.Contents>
    );
  };

  render() {
    const {
      fullWidth,
      isDisabled,
      isMultiSelect,
      placement,
      zIndex,
    } = this.props;

    return (
      <Dropdown
        { ...(zIndex ? { zIndex } : {}) }
        placement={ placement }
        isDisabled={ isDisabled }
        fullWidth={ fullWidth }
        renderActivator={ this.renderActivator }
        shouldHideChildrenOnClick={ !isMultiSelect }>
        {this.renderContents()}
      </Dropdown>
    );
  }
}

export default SelectDropdown;
