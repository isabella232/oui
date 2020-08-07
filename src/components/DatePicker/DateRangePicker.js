/* eslint-disable react/jsx-no-bind */
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import OutsideClickHandler from 'react-outside-click-handler';
import moment from 'moment';
import momentPropTypes from 'react-moment-proptypes';
import Button from '../Button';
import ButtonRow from '../ButtonRow';
import Input from '../Input';
import CalendarNavButton from './CalendarNavButton';
import { constants } from './constants';
import {
  getDateString,
  getTimeString,
  getCustomMonthElement,
  isOutsideAcceptableDateRange,
  preserveTime,
} from './fns';

class DateRangePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      endDate: this.props.initialEndDate,
      focusedInput: this.props.focusedInput || null,
      dayPickerIsOpen: !!this.props.focusedInput || this.props.keepOpenAlways,
      startDate: this.props.initialStartDate,
      startDateString: getDateString(this.props.initialStartDate),
      endDateString: getDateString(this.props.initialEndDate),
      startTimeString: getTimeString(this.props.initialStartDate),
      endTimeString: getTimeString(this.props.initialEndDate),
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.focusedInput !== this.props.focusedInput) {
      this.onFocusChange(this.props.focusedInput);
    }
  }

  onFocusChange = (focusedInput) => {
    if (this.props.keepOpenOnDateSelect || this.props.keepOpenAlways) {
      this.setState({
        focusedInput: !focusedInput ? 'startDate' : focusedInput,
        dayPickerIsOpen: true,
      });
    } else {
      this.setState({
        focusedInput: focusedInput,
        dayPickerIsOpen: !!focusedInput,
      });
    }
  };

  onTimeChange(event, timeToUpdate) {
    const newTime = event.target.value;
    const [hour, minute] = newTime.split(':');
    let startDate = this.state.startDate;
    let endDate = this.state.endDate;
    if (timeToUpdate === 'startTime') {
      startDate.set({ hour, minute });
    } else if (timeToUpdate === 'endTime') {
      if (!endDate) {
        endDate = moment(startDate);
      }
      endDate.set({ hour, minute });
    }
    this.setState({
      startDate: startDate,
      endDate: endDate,
      startTimeString: getTimeString(startDate),
      endTimeString: getTimeString(endDate),
    });
    this.props.onDatesChange && this.props.onDatesChange({ startDate, endDate });
  }

  /**
   * Function called when either a start date
   * or end date has been changed.
   * The dates are passed as a parameter object with startDate and endDate
   * as keys as well as resetTime which is used to handle time defaults
   * and time preservation.
   *
   * The new dates are used to set the internal component state, before
   * passing those dates to this.props.onDatesChange() implemented by the
   * consumer.
   *
   * When resetTime = false (default behavior):
   *  - By default, when selecting dates, resetTime will be false, since
   *    we want to initally set startDate to 12:00am
   *    and endDate to 11:59(:59.999)pm
   *  - If the previous date (prevStartDate & prevEndDate) are not null,
   *    we want to preserve the time of the previous selection since
   *    the react-dates component blindly resets the time to 12pm.
   * When resetTime = true (primarily helpful for panelButtons):
   *  - If resetTime is true, we allow the time of both startDate and endDate
   *    to be the source of truth for time, ignoring what was previously set
   */
  onDatesChange = ({ startDate, endDate, resetTime = false }) => {
    let newStartDate = startDate && moment(startDate);
    let newEndDate = endDate && moment(endDate);
    const { startDate: prevStartDate, endDate: prevEndDate } = this.state;
    if (!resetTime) {
      if (!prevStartDate && newStartDate) {
        newStartDate.startOf('day');
      } else if (newStartDate) {
        newStartDate = preserveTime(prevStartDate, newStartDate);
      }
      if (!prevEndDate && newEndDate) {
        newEndDate.endOf('day');
      } else if (newEndDate) {
        newEndDate = preserveTime(prevEndDate, newEndDate);
      }
    }

    // if no endDate selected, set to the end of the startDate by default
    newEndDate = newEndDate || (newStartDate && moment(newStartDate).endOf('day'));

    this.setState({
      startDate: newStartDate,
      endDate: newEndDate,
      startDateString: getDateString(newStartDate),
      endDateString: getDateString(newEndDate),
      startTimeString: getTimeString(newStartDate),
      endTimeString: getTimeString(newEndDate),
    });
    this.props.onDatesChange && this.props.onDatesChange({
      startDate: newStartDate,
      endDate: newEndDate,
    });
  };

  onOutsideClick = () => {
    !this.props.keepOpenAlways && this.setState({
      dayPickerIsOpen: false,
    });
  };

  onClose = () => {
    const dayPickerShouldRemainOpen = this.props.keepOpenOnDateSelect || this.props.keepOpenAlways;
    if (dayPickerShouldRemainOpen) {
      this.setState({
        dayPickerIsOpen: true,
      });
    }
  };

  isOutsideAcceptableDateRange = (day) => {
    const { isOutsideRange, isFutureDateSelectable, isPastDateSelectable } = this.props;
    return isOutsideAcceptableDateRange(day, isOutsideRange, isFutureDateSelectable, isPastDateSelectable);
  };

  renderPresetButtons = (presetPanelOptions) => {
    var presetButtons = presetPanelOptions.map(({label, startDate, endDate, resetTime = true}, index) => {
      const isSelected = startDate === this.state.startDate && endDate === this.state.endDate;
      const classes = classNames(
        'oui-date-picker__range-preset-option',
        isSelected && 'oui-date-picker__range-preset-option--active',
      );

      return (
        <li
          className={ classes }
          key={ index }>
          <Button style="unstyled" width="full" onClick={ () => this.onDatesChange({startDate, endDate, resetTime}) }>
            <span className="link">
              {label}
            </span>
          </Button>
        </li>
      );
    });
    return presetButtons;
  }

  renderSidePanel = () => {
    const {
      endDate,
      startDate,
    } = this.state;
    const presetPanelOptions = this.props.presetPanelOptions;
    const panelOptionsArePresent = presetPanelOptions && presetPanelOptions.length > 0;
    const panelButtons = this.props.panelButtons;
    return (<div className="oui-date-picker__range-panel">
      { panelOptionsArePresent &&
        <div className="oui-date-picker__range-presets">
          <ul className="oui-date-picker__range-preset-list push-triple--bottom">
            {this.renderPresetButtons(presetPanelOptions)}
          </ul>
        </div>
      }
      { // render panel buttons via render props if a function is provided
        panelButtons && (
          typeof panelButtons === 'function' ? (
            <ButtonRow rightGroup={ panelButtons({ endDate, startDate, onDatesChange: this.onDatesChange }) }/>
          ) : (
            <ButtonRow rightGroup={ panelButtons }/>
          )
        )
      }
    </div>);
  };

  onClearButtonClick = (rangeSide) => {
    if (rangeSide === 'start') {
      this.setState({
        startDateString: '',
        startDate: null,
      });
    } else {
      this.setState({
        endDateString: '',
        endDate: null,
      });
    }
  }

  render() {
    const {
      endDateInputId,
      endDateInputLabel,
      endDateInputPlaceholder,
      endTimeInputId,
      endTimeInputLabel,
      hasClearButton,
      hasTimeInputs,
      isAbsolutelyPositioned,
      initialVisibleMonth,
      isBorderless,
      panelButtons,
      presetPanelOptions,
      startDateInputId,
      startDateInputLabel,
      startDateInputPlaceholder,
      startTimeInputId,
      startTimeInputLabel,
    } = this.props;
    const {
      dayPickerIsOpen,
      endDateString,
      endTimeString,
      startDateString,
      startTimeString,
    } = this.state;

    let infoPanelPosition = null;
    if (presetPanelOptions) {
      infoPanelPosition = 'after';
    } else if (!presetPanelOptions && panelButtons) {
      infoPanelPosition = 'bottom';
    }

    const computedClassNames = classNames(
      'oui-date-picker',
      isBorderless && 'oui-date-picker--borderless',
      isAbsolutelyPositioned && 'oui-date-picker--absolute',
    );

    return (
      <OutsideClickHandler onOutsideClick={ this.onOutsideClick }>
        <div className={ computedClassNames }>
          <div className="oui-date-picker__input-row">
            <div className={ classNames('push--right', isBorderless && 'flex--1') }>
              <Input
                hasClearButton={ hasClearButton }
                id={ startDateInputId }
                isReadOnly={ true }
                label={ startDateInputLabel }
                name="startDate"
                onClearButtonClick={ () => this.onClearButtonClick('start') }
                onFocus={ () => this.onFocusChange('startDate') }
                placeholder={ startDateInputPlaceholder }
                testSection="date-range-picker-start-date-input"
                type="text"
                value={ startDateString }
              />
            </div>
            { hasTimeInputs && <div className={ classNames('push--right', isBorderless && 'flex--1') }>
              <Input
                id={ startTimeInputId }
                isReadOnly={ false }
                label={ startTimeInputLabel }
                name="startTime"
                onChange={ e => this.onTimeChange(e, 'startTime') }
                testSection="date-range-picker-start-time-input"
                type="time"
                value={ startTimeString }
              />
            </div>}
            <div className={ classNames(isBorderless && 'flex--1', hasTimeInputs && 'push--right') }>
              <Input
                hasClearButton={ hasClearButton }
                id={ endDateInputId }
                isReadOnly={ true }
                label={ endDateInputLabel }
                name="endDate"
                onClearButtonClick={ () => this.onClearButtonClick('end') }
                onFocus={ () => this.onFocusChange('endDate') }
                placeholder={ endDateInputPlaceholder }
                testSection="date-range-picker-end-date-input"
                type="text"
                value={ endDateString }
              />
            </div>
            { hasTimeInputs && <div className={ classNames(isBorderless && 'flex--1') }>
              <Input
                id={ endTimeInputId }
                isReadOnly={ false }
                label={ endTimeInputLabel }
                name="endTime"
                onChange={ e => this.onTimeChange(e, 'endTime') }
                testSection="date-range-picker-end-time-input"
                type="time"
                value={ endTimeString }
              />
            </div>}
          </div>
          { dayPickerIsOpen &&
            <DayPickerRangeController
              calendarInfoPosition={ infoPanelPosition }
              daySize={ constants.DAY_SIZE }
              endDate={ this.state.endDate }
              focusedInput={ this.state.focusedInput }
              hideKeyboardShortcutsPanel={ true }
              initialVisibleMonth={ initialVisibleMonth }
              isOutsideRange={ this.isOutsideAcceptableDateRange }
              navNext={ <CalendarNavButton type="next"/> }
              navPrev={ <CalendarNavButton type="previous"/> }
              numberOfMonths={ 2 }
              onClose={ this.onClose }
              onDatesChange={ this.onDatesChange }
              onFocusChange={ this.onFocusChange }
              phrases={ constants.PHRASES }
              renderCalendarInfo={ this.renderSidePanel }
              renderMonthElement={ getCustomMonthElement }
              startDate={ this.state.startDate }
              transitionDuration={ constants.TRANSITION_DURATION }
            />
          }
        </div>
      </OutsideClickHandler>
    );
  }
}

const timeInputValidator = (props, propName, componentName) => {
  if (props['hasTimeInputs'] === true) {
    if (props[propName] === undefined) {
      return new Error(
        `Prop \`${propName}\` is marked as required, but its value is \`undefined\`.`
      );
    } else if (typeof props[propName] !== 'string') {
      return new Error(
        `Invalid prop \`${propName}\` of type \`${typeof props[propName]}\`, expected \`string\`.`
      );
    }
  }
};

DateRangePicker.propTypes = {
  /** The id of the end date input, used to associate with a label */
  endDateInputId: PropTypes.string.isRequired,
  /** The label of the end date input */
  endDateInputLabel: PropTypes.string,
  /** The placeholder text of the end date input */
  endDateInputPlaceholder: PropTypes.string,
  /** The id of the end time input, used to associate with a label */
  endTimeInputId: timeInputValidator,
  /** The label of the end time input */
  endTimeInputLabel: PropTypes.string,
  /**
   * Used to indicate the current active input,
   * aka which date is about to be selected,
   * or null if neither is active
   */
  focusedInput: PropTypes.oneOf(['startDate', 'endDate', null]),
  /** Whether or not to add a clear button to right of both inputs */
  hasClearButton: PropTypes.bool,
  /** When true, adds time inputs next to date inputs */
  hasTimeInputs: PropTypes.bool,
  /** An initial end date to populate the end date input with,
   * must be type moment()
   */
  initialEndDate: momentPropTypes.momentObj,
  /** An initial end date to populate the end date input with,
   * must be type moment()
   */
  initialStartDate: momentPropTypes.momentObj,
  /** Function to determine what month the date picker
   *  should show on the left hand side
   */
  initialVisibleMonth: PropTypes.func,
  /** When true, opens the calendar on top of other elements on the page */
  isAbsolutelyPositioned: PropTypes.bool,
  /** When true, removes the border around the calendar portion */
  isBorderless: PropTypes.bool,
  /** Determines if the user can choose a date in the future  */
  isFutureDateSelectable: PropTypes.bool,
  /**
   * Custom function to determine if a date is outside the acceptable range.
   * Function is called for each visible day, with a moment() object
   * passed as the first parameter.
   */
  isOutsideRange: PropTypes.func,
  /** Determines if the user can choose a date in the past  */
  isPastDateSelectable: PropTypes.bool,
  /**
   * Determines if the calendar remains open no matter
   * where the user clicks on the page
   */
  keepOpenAlways: PropTypes.bool,
  /**
   * Determines if the calendar should stay
   * open when a date has been selected,
   * but close when user clicks away
   */
  keepOpenOnDateSelect: PropTypes.bool,
  /**
   * Function callback to perform when either a start date
   * or end date has been selected.
   * The dates are passed as a parameter object with startDate and endDate
   * as keys.
   * For access in panelButtons row items, use render prop function that returns
   * an array.
   */
  onDatesChange: PropTypes.func,
  /**
   * An array of buttons to display with the
   * calendar, such as Cancel and Apply. If presetPanelOptions
   * are also defined, the buttons will be to the right of the calendar.
   * Otherwise, they are directly below the calendar.
   * Use render prop function that returns an array to get access to component's
   * onDatesChange method
   */
  panelButtons: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.func,
  ]),
  /**
   * Array of objects used to render preset buttons to the right
   * of the calendar. Each object must have a startDate, endDate,
   * resetTime (optional), and label.
   */
  presetPanelOptions: PropTypes.arrayOf(PropTypes.shape({
    endDate: momentPropTypes.momentObj.isRequired,
    label: PropTypes.string.isRequired,
    resetTime: PropTypes.bool,
    startDate: momentPropTypes.momentObj.isRequired,
  })),
  /** The id of the start date input, used to associate with a label */
  startDateInputId: PropTypes.string.isRequired,
  /** The label of the start date input */
  startDateInputLabel: PropTypes.string,
  /** The placeholder text of the start date input */
  startDateInputPlaceholder: PropTypes.string,
  /**
   * The id of the start time input, used to associate with a label
   * Required if hasTimeInputs is true
   */
  startTimeInputId: timeInputValidator,
  /** The label of the start time input */
  startTimeInputLabel: PropTypes.string,
};

DateRangePicker.defaultProps = {
  endDateInputLabel: 'End Date',
  endDateInputPlaceholder: 'End Date',
  endTimeInputLabel: 'End Time',
  focusedInput: null,
  isAbsolutelyPositioned: false,
  isFutureDateSelectable: true,
  isPastDateSelectable: true,
  initialStartDate: null,
  initialEndDate: null,
  keepOpenAlways: false,
  keepOpenOnDateSelect: false,
  startDateInputLabel: 'Start Date',
  startDateInputPlaceholder: 'Start Date',
  startTimeInputLabel: 'Start Time',
};

export default DateRangePicker;
