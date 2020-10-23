import React from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Button from '../Button';
import Icon from 'react-oui-icons';

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */

const CopyButton = ({
  style,
  testSection,
  textToCopy,
  usesTextLabel,
  textLabel,
  onCopy,
}) => {

  return (
    <CopyToClipboard
      text={ textToCopy }
      onCopy={ onCopy }>
      <Button
        style={ style === 'none' ? null : style }
        size={ usesTextLabel ? 'tiny' : null }
        ariaLabel="Copy code snippet"
        testSection={ testSection ? `${testSection}-copy-button` : null }>
        { usesTextLabel ? textLabel : <Icon name='clipboard' /> }
      </Button>
    </CopyToClipboard>
  );
};

CopyButton.propTypes = {
  /** Function to perform when content is copied.
      This callback is passed as onCopy prop to CopyToClipboard component.
      onCopy(text, result)
      result (bool): Returns true if copied successfully, else false.
  */
  onCopy: PropTypes.func,
  /** Style option for the button */
  style: PropTypes.oneOf([
    'highlight',
    'danger',
    'danger-outline',
    'outline',
    'outline-reverse',
    'plain',
    'toggle',
    'underline',
    'unstyled',
    'none',
  ]),
  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
  /** String label to use when usesTextLabel is true */
  textLabel: PropTypes.string,
  /** The text or code that will be copied */
  textToCopy: PropTypes.string.isRequired,
  /**
   * Whether or not this should use a string label
   * instead of an icon
   */
  usesTextLabel: PropTypes.bool,
};

CopyButton.defaultProps = {
  style: 'plain',
  usesTextLabel: false,
  textLabel: 'Copy',
};

export default CopyButton;
