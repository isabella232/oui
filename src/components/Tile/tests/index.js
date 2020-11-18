/* eslint-disable no-console */
import React from 'react';
import Tile from '../index';
import { shallow, mount } from 'enzyme';
import Dropdown from '../../Dropdown';

describe('components/Tile', () => {
  it('should render default, basic tile', () => {
    const component = shallow(<Tile name="Goose" />);
    expect(
      component.find('.oui-tile').containsMatchingElement(<p>Goose</p>)
    ).toBe(true);
  });

  it('should render a description when provided', () => {
    const component = shallow(<Tile name="Goose" description="Duck" />);
    expect(
      component.find('.oui-tile').containsMatchingElement(<p>Duck</p>)
    ).toBe(true);
  });

  it('should render a button when onTileClick is provided', () => {
    const mockClickFunction = jest.fn();
    const component = mount(
      <Tile name="Goose" description="Duck" onTileClick={ mockClickFunction } />
    );
    expect(component.find('.oui-button').length).toBe(1);
  });

  it('should not render a button when onTileClick is not provided', () => {
    const component = shallow(<Tile name="Goose" description="Duck" />);
    expect(component.find('.oui-button').length).toBe(0);
  });

  it('should call the function passed in for `onTileClick` when the main tile is clicked', () => {
    const mockClickFunction = jest.fn();
    const component = shallow(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
      />
    );
    component.find('Button').simulate('click');
    expect(mockClickFunction).toHaveBeenCalled();
  });

  it('should call the function passed in for an action item when the button icon is clicked', () => {
    const mockClickFunction = jest.fn();
    const mockDeleteClick = jest.fn();
    const component = mount(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        onDismiss={ mockDeleteClick }
      />
    );
    component.find('.oui-button-icon').simulate('click');
    expect(mockClickFunction).not.toHaveBeenCalled();
    expect(mockDeleteClick).toHaveBeenCalled();
  });

  it('should render the corresponding ButtonIcons when functions are passed in', () => {
    const mockClickFunction = jest.fn();
    const mockDeleteClick = jest.fn();
    const mockCopyClick = jest.fn();
    const mockEditClick = jest.fn();

    console.error = jest.fn();
    const component = mount(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        onCopy={ mockCopyClick }
        onDismiss={ mockDeleteClick }
        onEdit={ mockEditClick }
        resultsLink="http://google.com"
      />
    );
    expect(component.find('.oui-button-icon').length).toBe(4);
  });

  it('should render the title in monospace when `usesMonospaceTitle` is true', () => {
    const mockClickFunction = jest.fn();

    const component = shallow(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        usesMonospaceName={ true }
      />
    );
    expect(component.find('.monospace').length).toBe(1);
  });

  it('should not render the drag handle when `isDraggable` is false', () => {
    const mockClickFunction = jest.fn();

    const component = shallow(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        isDraggable={ false }
      />
    );
    expect(component.find('.oui-tile__drag-handle').length).toBe(0);
  });

  it('should render the drag handle when `isDraggable` is true', () => {
    const mockClickFunction = jest.fn();

    const component = shallow(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        isDraggable={ true }
      />
    );
    expect(component.find('.oui-tile__drag-handle').length).toBe(1);
  });

  it('should render the error popover when `hasWarning` is true', () => {
    const mockClickFunction = jest.fn();

    const component = mount(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        warningTitleAndBodyContent={ ['Test Warning', ' Warning Content'] }
        testSection="test-tile"
      />
    );
    expect(
      component.find('[data-test-section="test-tile-warning-popover"]').length
    ).toBe(1);
  });

  it('should not show the unsaved changes indicator if `warningTitleAndBodyContent` is provided', () => {
    const mockClickFunction = jest.fn();

    const component = mount(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        testSection="test-tile"
        warningTitleAndBodyContent={ ['Test Warning', ' Warning Content'] }
        unsavedChangesText='You have unsaved changes'
      />
    );
    expect(
      component.find('[data-test-section="test-tile-warning-popover"]').length
    ).toBe(1);
    expect(
      component.find('[data-test-section="test-tile-unsaved-changes-indicator"]').length
    ).toBe(0);
  });

  it('should NOT render the unsaved changes status indicator when `unsavedChangesText` is not provided', () => {
    const mockClickFunction = jest.fn();

    const component = mount(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        testSection="test-tile"
      />
    );
    expect(
      component.find(
        '[data-test-section="test-tile-unsaved-changes-indicator"]'
      ).length
    ).toBe(0);
  });

  it('should NOT render the unsaved changes status indicator when `unsavedChangesText` is an empty string', () => {
    const mockClickFunction = jest.fn();

    const component = mount(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        testSection="test-tile"
        unsavedChangesText=""
      />
    );
    expect(
      component.find(
        '[data-test-section="test-tile-unsaved-changes-indicator"]'
      ).length
    ).toBe(0);
  });

  it('should render the unsaved changes status indicator when `unsavedChangesText` is non-empty string', () => {
    const mockClickFunction = jest.fn();

    const component = mount(
      <Tile
        name="Alpha"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        testSection="test-tile"
        unsavedChangesText="This has unsaved changes"
      />
    );
    expect(
      component.find(
        '[data-test-section="test-tile-unsaved-changes-indicator"]'
      ).length
    ).toBe(1);
    expect(component.find('Poptip').props().content).toBe(
      'This has unsaved changes'
    );
  });

  it('should render a `status` when provided', () => {
    const component = shallow(
      <Tile name="Goose" description="Duck" status="Running" />
    );
    expect(
      component.find('.oui-tile').containsMatchingElement(<p>Running</p>)
    ).toBe(true);
  });

  it('should render a dropdown menu when `dropdownItems` are passed in', () => {
    const mockClickFunction = jest.fn();
    const mockDropdownAFunction = jest.fn();

    const component = mount(
      <Tile
        name="Alpha"
        testSection="test-tile"
        description="ID:12345678"
        onTileClick={ mockClickFunction }
        dropdownItems={ [
          <Dropdown.ListItem key={ 2 } removeBorderTop={ true }>
            <Dropdown.BlockLink
              onClick={ mockDropdownAFunction }
              testSection={ 'dropdown-block-link-duplicate' }>
              <Dropdown.BlockLinkText text={ 'Duplicate' } />
            </Dropdown.BlockLink>
          </Dropdown.ListItem>,
        ] }
      />
    );
    expect(component.find('.oui-button-icon').length).toBe(1);
    component.find('.oui-button-icon').simulate('click');
    expect(component.find('.oui-dropdown').length).toBe(1);
    expect(component.find('.oui-dropdown__item').length).toBe(1);
    component
      .find('[data-test-section="dropdown-block-link-duplicate"]')
      .simulate('click');
    expect(mockDropdownAFunction).toHaveBeenCalledTimes(1);
  });
});
