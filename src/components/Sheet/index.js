import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-oui-icons';
import ButtonRow from '../ButtonRow';

const Sheet = props => (
  <div className="oui-sheet__wrapper">
    <div className="oui-sheet__overlay" />
    <div
      data-ui-component={ true }
      className="oui-sheet overflow-y--auto"
      data-test-section={ props.testSection }>
      {props.hasCloseButton && <button className="oui-sheet__close" onClick={ props.onClose }>
        <Icon name="close" />
      </button>}
      <div className="oui-sheet__header">
        <h2 className="push--bottom">{props.title}</h2>
      </div>
      <div className="oui-sheet__body">
        {props.children}
      </div>
      <div className="oui-sheet__footer">
        <ButtonRow rightGroup={ props.footerButtonContent }/>
      </div>
    </div>
  </div>
);

Sheet.propTypes = {
  /**
   *  The body of the sheet to request information and data from the user.
   */
  children: PropTypes.node.isRequired,
  /**
   * Array of buttons used in the footer of the sheet.
   */
  footerButtonContent: PropTypes.array.isRequired,
  /**
   *  Used to determine if the sheet should have a close button.
   */
  hasCloseButton: PropTypes.bool,
  /**
   * Function to perform when the sheet is closed.
   */
  onClose: PropTypes.func,
  /**
   * Identifier used to create data-test-section attributes for testing.
   */
  testSection: PropTypes.string,
  /**
   * Main title of the sheet.
   */
  title: PropTypes.string.isRequired,
};

export default Sheet;