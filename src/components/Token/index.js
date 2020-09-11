import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-oui-icons';
import DismissButton from './DismissButton';
import classNames from 'classnames';
import { FILL_COLOR_MAP_LIGHT } from '../../utils/accessibility';

const LIGHT_BACKGROUND_STYLES = ['tertiary'];

// Light backgrounds require a dark font and dismiss Icon color.
const getStylingInfo = (style, backgroundColor) =>
  LIGHT_BACKGROUND_STYLES.includes(style) || backgroundColor
    ? { fontClass: 'oui-token--font-dark', dismissFillColor: 'black' }
    : { fontClass: 'oui-token--font-light', dismissFillColor: 'white' };

/**
 * Token to be used to make token lists.
 * @param {Object} props - Properties passed to component
 * @returns {ReactElement}
 */
const Token = ({
  description,
  dragHandleProps,
  backgroundColor,
  hasSnugWrap,
  hasWrap,
  isDismissible,
  isDraggable,
  isFullWidth,
  name,
  onDismiss,
  order,
  style,
  showWell,
  testSection,
  usesDragHandle,
}) => {
  const tokenContainerClasses = classNames({
    'oui-token-wrap': hasWrap && !hasSnugWrap,
    'oui-token-wrap--snug': hasSnugWrap,
    'oui-token-wrap--well': showWell,
    'oui-token--full-width': isFullWidth,
  });
  const tokenClasses = classNames({
    'oui-token': true,
    [`oui-token--${style}`]: style,
    'flex-align--center': !description,
  });
  const tokenToolsClasses = classNames({
    'oui-token-tool': isDraggable || order,
    'cursor--grab': isDraggable,
  });
  const { fontClass, dismissFillColor } = getStylingInfo(style, backgroundColor);

  // ensure valid backgroundColor name
  // (in the case that propType errors are ignored)
  const tokenFillColor =
    backgroundColor && Object.keys(FILL_COLOR_MAP_LIGHT).includes(backgroundColor)
      ? FILL_COLOR_MAP_LIGHT[backgroundColor]
      : null;

  if (usesDragHandle) {
    return (
      /* eslint-disable react/jsx-boolean-value */
      <div
        data-oui-component={ true }
        className={ tokenContainerClasses }
        data-test-section={ testSection }>
        <div
          className={ tokenClasses }
          style={{ backgroundColor: tokenFillColor }}>
          <div className="flex flex-align--center">
            <div className={ tokenToolsClasses } data-token-handle>
              {order && (
                <span className="oui-token__number push--right">{order}</span>
              )}
              {isDraggable && (
                <div
                  className="oui-icon oui-token__move push--right oui-token__move--drag-handle"
                  { ...dragHandleProps }>
                  <Icon name="hamburger" fill="#ffffff" />
                </div>
              )}
            </div>
            <div className={ fontClass }>
              {name}
              {description && (
                <div className="oui-token__description">{description}</div>
              )}
            </div>
          </div>
          {isDismissible && onDismiss && (
            <DismissButton
              onClick={ onDismiss }
              fill={ dismissFillColor }
              testSection={ testSection }
              backgroundColor={ backgroundColor }
            />
          )}
        </div>
      </div>
      /* eslint-enable */
    );
  }

  return (
    /* eslint-disable react/jsx-boolean-value */
    <div
      data-oui-component={ true }
      className={ tokenContainerClasses }
      data-test-section={ testSection }>
      <div className={ tokenToolsClasses } data-token-handle>
        {order && (
          <span className="oui-token__number push--right">{order}</span>
        )}
        {isDraggable && (
          <div className="oui-icon oui-token__move">
            <Icon name="ellipsis" fill="#c7c7c7" />
          </div>
        )}
      </div>
      <div
        className={ tokenClasses }
        style={{ backgroundColor: tokenFillColor }}>
        <div className={ fontClass }>
          {name}
          {description && (
            <div className="oui-token__description">{description}</div>
          )}
        </div>
        {isDismissible && onDismiss && (
          <DismissButton
            onClick={ onDismiss }
            fill={ dismissFillColor }
            testSection={ testSection }
          />
        )}
      </div>
    </div>
    /* eslint-enable */
  );
};

Token.propTypes = {
  /**
   *  Color to use for the background of the token
   */
  backgroundColor: PropTypes.oneOf(Object.keys(FILL_COLOR_MAP_LIGHT)),

  /** Description explaining the token */
  description: PropTypes.string,

  /**
   * Set of props provided by react-beautiful-dnd to configure
   * this token's drag handle
   */
  dragHandleProps: PropTypes.object,

  /** Whether or not the token should have a tighter wrap */
  hasSnugWrap: PropTypes.bool,

  /** Whether or not the token should have a wrap */
  hasWrap: PropTypes.bool,

  /**
   * Determines if token has dismissible feature or not. If true, `onDismiss`
   * is required.
   */
  isDismissible: PropTypes.bool,

  /** Shows an icon indicating that the token is draggable */
  isDraggable: PropTypes.bool,

  /** Makes the component full width of container */
  isFullWidth: PropTypes.bool,

  /** Name label on token */
  name: PropTypes.oneOf([PropTypes.string, PropTypes.node]).isRequired,

  /**
   * Function to call that dismisses the token. Required if the token is
   * dismissible.
   */
  onDismiss: PropTypes.func,

  /** Show a number indicating the token's order */
  order: PropTypes.number,

  /** Whether or not a well is presented around the token. */
  showWell: PropTypes.bool,

  /** Determines style of token depending on priority level or error */
  style: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'error']),

  /** Hook for automated JavaScript tests */
  testSection: PropTypes.string,

  /** Used to switch drag handle */
  usesDragHandle: PropTypes.bool,
};

Token.defaultProps = {
  dragHandleProps: {},
  hasWrap: true,
  isDismissible: false,
  style: 'secondary',
  showWell: true,
  usesDragHandle: true,
};

export default Token;
