import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../ButtonIcon';
import {
  blueLight,
  aquaLight,
  yellowLight,
  greenLight,
  orangeLight,
  pinkLight,
  redLight,
  magentaLight,
  purpleLight,
} from '../../../tokens/forimport/index.es';

const FILL_COLOR_MAP = {
  aqua: aquaLight,
  yellow: yellowLight,
  blue: blueLight,
  green: greenLight,
  orange: orangeLight,
  pink: pinkLight,
  red: redLight,
  magenta: magentaLight,
  purple: purpleLight,
};

/**
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 * @private
 */
const DismissButton = (props) => (
  <div
    className="oui-pill--dismiss push-half--left flex"
    style={{
      height: '12px',
      width: '12px',
      borderRadius: '50%',
      backgroundColor: FILL_COLOR_MAP[props.backgroundColor],
      color: props.fill,
    }}>
    <ButtonIcon
      iconName="close"
      iconFill={ props.fill }
      size="small"
      onClick={ props.onClick }
      style="unstyled"
      testSection={ props.testSection && `${props.testSection}-dismiss` }
    />
  </div>
);

DismissButton.propTypes = {
  /** Background color of the token */
  backgroundColor: PropTypes.string,

  /** Color of the dismiss X */
  fill: PropTypes.string,

  /** Function to call that dismisses the token */
  onClick: PropTypes.func.isRequired,

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,
};

DismissButton.defaultProps = {
  fill: 'white',
};

DismissButton.displayName = 'DismissButton';

export default DismissButton;
