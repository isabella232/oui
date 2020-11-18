import React from "react";
import classNames from "classnames";

import Button from "../Button";
import OverlayWrapper from "../OverlayWrapper";
import Popover from "../Popover";
import Poptip from "../Poptip";
import Dropdown from "../Dropdown";
import ButtonIcon from "../ButtonIcon";
import Link from "../Link";
import Icon from "react-oui-icons";

import { greyDark, redBase } from "../../tokens/forimport/index.es";

const renderDropdownActivator = (
  { onClick, buttonRef } // eslint-disable-line
) => (
  <ButtonIcon
    style="plain"
    iconFill="default"
    iconName="ellipsis"
    buttonRef={buttonRef}
    onClick={onClick}
  />
);

export type TileProps = {
  /**
   * Description of the item for this reference Tile
   */
  description?: string | React.ReactNode;

  /**
   * Optional properties to include when using Tile
   * in DragAndDrop component
   */
  dragHandleProps?: object;

  /**
   * Optional dropdown items to add to right side of Tile
   * Should be an array of Dropdown.ListItem items
   */
  dropdownItems?: React.ReactNode[];

  /**
   * Whether or not this Tile has margin on the ends
   * True by default
   */
  hasSpacing?: boolean;

  /**
   * Whether or not this Tile includes a drag handle
   */
  isDraggable?: boolean;

  /**
   * Whether or not this Tile is currently selected/active
   */
  isSelected?: boolean;

  /**
   * Function to call when copy button is clicked
   * Supplying this function adds a copy button
   * to the tile
   */
  onCopy?: (...args: any[]) => any;

  /**
   * Function to call when delete button is clicked
   * Supplying this function adds a delete button
   * to the tile
   */
  onDismiss?: (...args: any[]) => any;

  /**
   * Function to call when edit button is clicked
   * Supplying this function adds an edit button
   * to the tile
   */
  onEdit?: (...args: any[]) => any;

  /**
   * Function to call when the main area of the Tile is clicked
   * If function is not supplied, main content of the Tile
   * will not be clickable (div instead of a button)
   */
  onTileClick?: (...args: any[]) => any;

  /**
   * Optional number used to indicate the order of Tiles
   */
  order?: number;

  /**
   * Link to open in a new tab when results button is clicked
   * Supplying this link adds a results button to the tile
   */
  resultsLink?: string;

  /**
   * Optional string used to indicate status before action items
   */
  status?: string;

  /**
   * String to use for testing
   */
  testSection?: string;

  /**
   * Title of the Tile, required
   */
  name: string | React.ReactNode;

  /**
   * Whether or not the title of this Tile displays in monospace font
   */
  usesMonospaceName?: boolean;

  /**
   * Text to show in unsaved status indicator. If empty or left out no status indicator will be shown
   */
  unsavedChangesText?: string;

  /**
   * The title and body content to show in the warning icon and popover
   */
  warningTitleAndBodyContent?: [] | [string, React.ReactNode];
};

const Tile = ({
  description,
  dragHandleProps,
  dropdownItems,
  hasSpacing = true,
  isDraggable = false,
  isSelected = false,
  name,
  onCopy,
  onDismiss,
  onEdit,
  onTileClick,
  order,
  resultsLink,
  status,
  testSection,
  usesMonospaceName = false,
  unsavedChangesText = "",
  warningTitleAndBodyContent = [],
}: TileProps) => {
  const tileContent = (
    <>
      <p
        className={classNames("oui-tile__name text--left flush", {
          monospace: usesMonospaceName,
        })}
      >
        {name}
      </p>
      <p className="text--left muted flush--bottom push-half--top micro wrap-text">
        {description}
      </p>
    </>
  );
  const hasExtraContent =
    status || onCopy || onEdit || onDismiss || resultsLink || dropdownItems;

  const hasWarning = !!warningTitleAndBodyContent.length;

  return (
    <div
      className={classNames("oui-tile flex flex-align--center soft--sides", {
        "oui-button--danger-outline": hasWarning,
        "oui-tile--selected": isSelected,
        "push-half--ends": hasSpacing,
      })}
      data-test-section={testSection}
      style={hasWarning ? { borderColor: redBase } : {}}
    >
      {order && (
        <span className="oui-tile__order-number milli text--right push--right">
          {order}
        </span>
      )}
      {isDraggable && (
        <div className="oui-tile__drag-handle push--right" {...dragHandleProps}>
          <Icon name="hamburger" fill={greyDark} />
        </div>
      )}
      {unsavedChangesText && !hasWarning && (
        <div
          className="push--right display--inline-block"
          data-test-section={`${testSection}-unsaved-changes-indicator`}
        >
          <Poptip
            content={unsavedChangesText}
            isAnimated={false}
            position="bottom"
            trigger="mouseenter"
          >
            <span
              style={{
                height: "10px",
                width: "10px",
                backgroundColor: "hsla(227, 100%, 50%, 1)",
                borderRadius: "50%",
                display: "inline-block",
              }}
            />
          </Poptip>
        </div>
      )}
      {hasWarning && (
        <div className="push--right push-half--top display--inline-block">
          <OverlayWrapper
            behavior="hover"
            horizontalAttachment="center"
            overlay={
              <Popover
                title={warningTitleAndBodyContent[0] || ""}
                testSection={`${testSection}-warning-popover`}
              >
                {warningTitleAndBodyContent[1] || <></>}
              </Popover>
            }
            shouldHideOnClick={true}
            verticalAttachment="bottom"
          >
            <Icon name="exclamation" color="red" />
          </OverlayWrapper>
        </div>
      )}
      {onTileClick ? (
        <Button
          testSection={`${testSection}-main-tile-button`}
          style="unstyled"
          width="full"
          onClick={onTileClick}
        >
          {tileContent}
        </Button>
      ) : (
        <div className="width--1-1 line--1 soft--ends">{tileContent}</div>
      )}
      {hasExtraContent && (
        <div className="flex flex-justified--between flex-align--center push--left">
          {status && (
            <p className="muted micro flush--bottom weight--bold push-half--sides">
              {status}
            </p>
          )}
          {onCopy && (
            <ButtonIcon
              iconName="clipboard"
              size="medium"
              style="plain"
              iconFill="default"
              onClick={onCopy}
            />
          )}
          {onEdit && (
            <ButtonIcon
              iconName="pencil"
              size="medium"
              style="plain"
              iconFill="default"
              onClick={onEdit}
            />
          )}
          {onDismiss && (
            <ButtonIcon
              iconName="trash"
              size="medium"
              style="plain"
              iconFill="default"
              onClick={onDismiss}
            />
          )}
          {resultsLink && (
            <Link href={resultsLink}>
              <ButtonIcon
                iconName="winner"
                size="medium"
                style="plain"
                iconFill="default"
              />
            </Link>
          )}
          {dropdownItems && (
            <Dropdown
              renderActivator={renderDropdownActivator}
              placement={"bottom-end"}
              key="dropdown"
              testSection={`${testSection}-action-overflow-button`}
            >
              <Dropdown.Contents direction={"right"}>
                {dropdownItems}
              </Dropdown.Contents>
            </Dropdown>
          )}
        </div>
      )}
    </div>
  );
};

export default Tile;
