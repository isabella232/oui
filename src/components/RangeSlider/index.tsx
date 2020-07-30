import React, { ChangeEvent } from 'react';
import classnames from 'classnames';

import { FILL_COLOR_MAP } from '../../utils/accessibility';

const DEFAULT_FILL_COLOR_NAME = 'default';

interface RangeSliderProps {
  /** Custom color for slider **/
  fillColorName?: keyof typeof FILL_COLOR_MAP;
  /** Whether it is disabled, will render as greyscale if so **/
  isDisabled?: boolean;
  /** onChange function */
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  /** Hook for automated JavaScript tests */
  testSection?: string;
  /** When true, uses 'Off' instead of '0%' */
  useOffForLabel?: boolean;
  /** The value */
  value: number;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  fillColorName = DEFAULT_FILL_COLOR_NAME,
  isDisabled = false,
  onChange,
  testSection,
  useOffForLabel = false,
  value,
}) => {
  const rangeClasses = classnames({
    'oui-rangeslider': true,
    'oui-rangeslider--disabled': isDisabled,
  });

  // ensure valid fillColor name (in the case that propType errors are ignored)
  const validFillColorName = (Object.keys(FILL_COLOR_MAP) as Array<
    keyof typeof FILL_COLOR_MAP
  >).includes(fillColorName)
    ? fillColorName
    : DEFAULT_FILL_COLOR_NAME;
  const fillColor = FILL_COLOR_MAP[validFillColorName];

  return (
    <div className={rangeClasses} data-test-section={testSection}>
      <div className="oui-grid">
        <div className="oui-grid__cell position--relative">
          <div className="range-labels flex">
            <label className="oui-label muted flush flex--1">
              {useOffForLabel ? 'Off' : '0%'}
            </label>
            <label className="oui-label muted flush">100%</label>
          </div>
          <div className="range-display">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100">
              <path
                fill={fillColor}
                d="M0 100h100V0z"
                shapeRendering="geometricPrecision"
              />
            </svg>
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
              style={{ position: 'absolute', left: 0, top: 0 }}>
              <path
                d={`M${value} 100H100V0L${value} ${100 - value - 1}z`}
                fill="white"
                opacity="0.9"
                shapeRendering="geometricPrecision"
              />
            </svg>
          </div>
          <div className="range-grid">
            <div className="gridline grid-1"></div>
            <div className="gridline grid-2"></div>
            <div className="gridline grid-3"></div>
            <div className="gridline grid-4"></div>
            <div className="gridline grid-5"></div>
            <div className="gridline gridline-half grid-h1"></div>
            <div className="gridline gridline-half grid-h2"></div>
            <div className="gridline gridline-half grid-h3"></div>
            <div className="gridline gridline-half grid-h4"></div>
          </div>
          <input
            className="hard position--relative width--1-1"
            data-traffic-group="1"
            type="range"
            min="0"
            max="100"
            step="1"
            value={value}
            onChange={onChange}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default RangeSlider;
