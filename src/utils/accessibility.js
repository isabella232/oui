import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';

import {
  yellowDark,
  yellowXLight,
  aquaDark,
  aquaXLight,
  brandBlueDark,
  greenDark,
  greenXLight,
  orangeDark,
  orangeXLight,
  pinkDark,
  pinkXLight,
  redDark,
  redXLight,
  magentaDark,
  magentaXLight,
  greyDark,
  blueXLight,
  purpleDark,
  black,
  purpleXLight,
} from '../tokens/forimport/index.es';

/**
 * Map a color class to a human readable word that explains the context of when
 * the class is used. This is helpful for screen readers.
 * @param {String} className - an OUI class
 * @returns {String} English word describing the class provided
 */
export const getAssistiveTextFromColorClass = className => {
  const classMapping = {
    'bad-news': 'Error',
    brand: 'Info',
    'good-news': 'Success',
    warning: 'Alert',
  };

  let text = classMapping[className];

  if (!text) {
    throw new Error('Provided class name does not map to a word.');
  }

  return text;
};

/**
 * HOC that provides support for tracking keyboard actions inside an
 * element with an input. Tracks up & down arrow keys and invokes
 * a callback when enter is pressed.
 * @param {React.Component} Component - The component to wrap.
 * @returns {React.Component}
 */
export const keyboardTracker = Component => {
  const wrappedComponent = props => {
    const { additionalItems, ...rest } = props;
    const [currentFauxFocusIndex, setIndex] = useState(0);
    const [currentItemCount, setItemCount] = useState(0);
    const [onItemSelect, setOnItemSelect] = useState(() => noop);
    /**
     * Event handler for keyboard activity.
     * Increments/decrements the current index on up/down arrow keys
     *  -or-
     * Invokes the onItemSelect callback on enter
     */
    const handleKeyDown = useCallback(
      event => {
        let newIndex;
        switch (event.key) {
          case 'ArrowUp':
            newIndex = Math.max(currentFauxFocusIndex - 1, 0);
            setIndex(newIndex);
            event.preventDefault();
            break;
          case 'ArrowDown':
            const totalItemCount = currentItemCount + additionalItems;
            newIndex = Math.max(Math.min(currentFauxFocusIndex + 1, totalItemCount - 1), 0);
            setIndex(newIndex);
            event.preventDefault();
            break;
          case 'Enter':
            // Select the item for currentFauxFocusIndex
            onItemSelect(currentFauxFocusIndex);
            event.preventDefault();
            break;
          default:
            // No op
            break;
        }
      },
      [currentFauxFocusIndex, currentItemCount, onItemSelect, additionalItems]
    );
    /**
     * Handler to update the item count, which should reset the
     * current index to 0 if the number has changed.
     */
    const handleSetItemCount = useCallback((count) => {
      setItemCount(count);
      if (count !== currentItemCount) {
        setIndex(0);
      }
    }, [currentItemCount]);

    return (
      <Component
        { ...rest }
        currentFauxFocusIndex={ currentFauxFocusIndex }
        handleKeyDown={ handleKeyDown }
        setItemCount={ handleSetItemCount }
        setOnItemSelect={ setOnItemSelect }
      />
    );
  };
  wrappedComponent.displayName = `withkeyboardTracker(${Component.displayName})`;
  wrappedComponent.propTypes = {
    additionalItems: PropTypes.number,
  };
  wrappedComponent.defaultProps = {
    additionalItems: 0,
  };
  return wrappedComponent;
};

// map fillColorName prop values to OUI color tokens
export const FILL_COLOR_MAP = {
  aqua: aquaDark,
  yellow: yellowDark,
  default: brandBlueDark,
  green: greenDark,
  orange: orangeDark,
  pink: pinkDark,
  red: redDark,
  magenta: magentaDark,
  grey: greyDark,
  purple: purpleDark,
  black: black,
};

// map fillColorName prop values to OUI color tokens
export const FILL_COLOR_MAP_LIGHT = {
  aqua: aquaXLight,
  yellow: yellowXLight,
  blue: blueXLight,
  green: greenXLight,
  orange: orangeXLight,
  pink: pinkXLight,
  red: redXLight,
  magenta: magentaXLight,
  purple: purpleXLight,
};

export default {
  FILL_COLOR_MAP,
  FILL_COLOR_MAP_LIGHT,
};
