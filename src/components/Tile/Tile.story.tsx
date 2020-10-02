import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import Tile from "./index";
import Col from "../Layout/Col";
import Row from "../Layout/Row";
import Container from "../Layout/Container";
import Dropdown from "../Dropdown";

const stories = storiesOf("Informational|Tile", module);

const dropdownItems = [
  <Dropdown.ListItem key={0} role="separator">
    Percentage Rollout
  </Dropdown.ListItem>,
  <Dropdown.ListItem key={1}>
    <Dropdown.BlockLink
      onClick={action("onClick move to top")}
      testSection={"dropdown-block-link-move"}
    >
      <Dropdown.BlockLinkText text={"Move to top"} />
    </Dropdown.BlockLink>
  </Dropdown.ListItem>,
  <Dropdown.ListItem key={2} removeBorderTop={true}>
    <Dropdown.BlockLink
      onClick={action("onClick duplicate")}
      testSection={"dropdown-block-link-duplicate"}
    >
      <Dropdown.BlockLinkText text={"Duplicate"} />
    </Dropdown.BlockLink>
  </Dropdown.ListItem>,
  <Dropdown.ListItem key={3} removeBorderTop={true}>
    <Dropdown.BlockLink
      onClick={action("onClick archive")}
      testSection={"dropdown-block-link-archive"}
    >
      <Dropdown.BlockLinkText text={"Archive"} />
    </Dropdown.BlockLink>
  </Dropdown.ListItem>,
  <Dropdown.ListItem key={4}>
    <Dropdown.BlockLink
      onClick={action("onClick delete")}
      testSection={"dropdown-block-link-delete"}
    >
      <Dropdown.BlockLinkText text={"Delete..."} isDestructive={true} />
    </Dropdown.BlockLink>
  </Dropdown.ListItem>,
];

stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories
  .add("Interactive (content is a Button)", () => {
    return (
      <Container>
        <Row>
          <Col small={6}>
            <Tile
              name="Alpha"
              description="ID: 123456"
              onTileClick={action("onTileClick - Alpha")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", false)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
            />
          </Col>
          <Col small={6}>
            <Tile
              name="Beta: We are buttons"
              description="You can click us!"
              onTileClick={action("onTileClick - Beta")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", false)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
            />
          </Col>
        </Row>
      </Container>
    );
  })
  .add("Static (content is not a Button)", () => {
    return (
      <Tile
        name="Alpha: I am not a button"
        description="Clicking me will do nothing"
        isSelected={boolean("isSelected", false)}
        isDraggable={boolean("isDraggable", false)}
        hasWarning={boolean("hasWarning", false)}
        warningTitle={text("warningText", "This is a warning")}
        warningContent={<p>Warning details</p>}
      />
    );
  })
  .add("With Monospace Name", () => {
    return (
      <Tile
        name="amount"
        description="double"
        usesMonospaceName={boolean("usesMonospaceName", true)}
        onTileClick={action("onTileClick")}
        isSelected={boolean("isSelected", false)}
        isDraggable={boolean("isDraggable", false)}
        hasWarning={boolean("hasWarning", false)}
        warningTitle={text("warningText", "This is a warning")}
        warningContent={<p>Warning details</p>}
        onCopy={action("onCopy called")}
      />
    );
  })
  .add("Draggable, with a warning", () => {
    return (
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={action("onTileClick")}
        isSelected={boolean("isSelected", false)}
        isDraggable={boolean("isDraggable", true)}
        hasWarning={boolean("hasWarning", true)}
        warningTitle={text("warningText", "This is a warning")}
        warningContent={<p>Warning details</p>}
        testSection="with-warning"
      />
    );
  })
  .add("With unsaved changes", () => {
    return (
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={action("onTileClick")}
        isSelected={boolean("isSelected", false)}
        isDraggable={boolean("isDraggable", true)}
        testSection="with-warning"
        unsavedChangesText={text(
          "unsavedChangesText",
          "This rule has unsaved changes"
        )}
      />
    );
  })
  .add("With Action Items on the right", () => {
    return (
      <Container>
        <Row>
          <Col small={6}>
            <Tile
              name="Alpha"
              testSection="alpha-tile"
              description="ID:12345678"
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", false)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              onDismiss={action("onDismiss called")}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name="Beta"
              testSection="beta-tile"
              description="isSelected is true here"
              onTileClick={action("onTileClick")}
              isSelected={true}
              isDraggable={boolean("isDraggable", false)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              status="Archived"
              onDismiss={action("onDismiss called")}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name="Charlie"
              testSection="charlie-tile"
              description="ID:1357"
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", false)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              onDismiss={action("onDismiss called")}
              onEdit={action("onEdit called")}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name="Delta"
              testSection="delta-tile"
              description="ID:2468"
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", false)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              status="Running"
              dropdownItems={dropdownItems}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name="Echo"
              testSection="echo-tile"
              description="Increase in unique conversions per visitor for Recurring deposit complete event"
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", false)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              onCopy={action("onCopy called")}
              dropdownItems={dropdownItems}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name={<em>Foxtrot</em>}
              testSection="foxtrot-tile"
              description="All possibilities, as an example. Don't actually do this, please"
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", true)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              status="Active"
              onCopy={action("onCopy called")}
              onDismiss={action("onDismiss called")}
              onEdit={action("onEdit called")}
              onResultsLink={action("onResultsLink called")}
              dropdownItems={dropdownItems}
            />
          </Col>
        </Row>
      </Container>
    );
  })
  .add("With Ordering", () => {
    return (
      <Container>
        <Row>
          <Col small={6}>
            <Tile
              name="Alpha"
              testSection="alpha-tile"
              description="ID:12345678"
              order={1}
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", true)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              onDismiss={action("onDismiss called")}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name="Beta"
              testSection="beta-tile"
              description="isSelected is true here"
              order={2}
              onTileClick={action("onTileClick")}
              isSelected={true}
              isDraggable={boolean("isDraggable", true)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              status="Archived"
              onDismiss={action("onDismiss called")}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name="Charlie"
              testSection="charlie-tile"
              description="ID:1357"
              order={3}
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", true)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              onDismiss={action("onDismiss called")}
              onEdit={action("onEdit called")}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name="Delta"
              testSection="delta-tile"
              description="ID:2468"
              order={4}
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", true)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              status="Running"
              dropdownItems={dropdownItems}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name={<em>Zeta</em>}
              testSection="zeta-tile"
              description="Increase in unique conversions per visitor for Recurring deposit complete event"
              order={98}
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", true)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              onCopy={action("onCopy called")}
              dropdownItems={dropdownItems}
            />
          </Col>
        </Row>
        <Row>
          <Col small={6}>
            <Tile
              name=""
              testSection="empty-name-tile"
              description="Increase in unique conversions per visitor for Recurring deposit complete event"
              order={99}
              onTileClick={action("onTileClick")}
              isSelected={boolean("isSelected", false)}
              isDraggable={boolean("isDraggable", true)}
              hasWarning={boolean("hasWarning", false)}
              warningTitle={text("warningText", "This is a warning")}
              warningContent={<p>Warning details</p>}
              onCopy={action("onCopy called")}
              dropdownItems={dropdownItems}
            />
          </Col>
        </Row>
      </Container>
    );
  });
