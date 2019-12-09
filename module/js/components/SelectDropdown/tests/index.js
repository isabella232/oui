import React from 'react';
import { mount } from 'enzyme';
import Dropdown from '../../Dropdown';
import SelectDropdown from '../index';
describe('components/SelectDropdown', function () {
  var component;
  var onChange;
  var items = [{
    label: 'label 1',
    value: 'value 1',
    description: 'description 1'
  }, {
    label: 'label 2',
    value: 'value 2',
    description: 'description 2'
  }];
  beforeEach(function () {
    onChange = jest.fn();
  });
  it('should render all items in dropdown', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      value: 'value 2',
      onChange: onChange
    }));
    var activator = component.find('Button');
    activator.simulate('click');
    var listItems = component.find(Dropdown.ListItem);
    expect(listItems).toHaveLength(2);
    var item1 = listItems.at(0);
    expect(item1.text()).toContain('label 1');
    expect(item1.text()).toContain('description 1');
    expect(item1.find(Dropdown.BlockLink).props().isLink).toEqual(true);
    var item2 = listItems.at(1);
    expect(item2.text()).toContain('label 2');
    expect(item2.text()).toContain('description 2');
    expect(item2.find(Dropdown.BlockLink).props().isLink).toEqual(false);
  });
  it('should call onChange when another item is selected', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      value: 'value 2',
      onChange: onChange
    }));
    var activator = component.find('Button');
    activator.simulate('click');
    var listItems = component.find('DropdownBlockLink');
    var item1 = listItems.at(0).find('[data-test-section="dropdown-block-link-value 1"]');
    item1.simulate('click');
    expect(onChange).toHaveBeenCalled();
    expect(onChange).toHaveBeenCalledWith('value 1');
  });
  it('should set the width of the activator', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      value: 'value 2',
      onChange: onChange,
      width: "400px"
    }));
    expect(component.find('Dropdown').find('div.oui-dropdown-group__activator').props().style).toEqual({
      width: '400px'
    });
  });
  it('should pass fullWidth prop to Dropdown', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      value: 'value 2',
      onChange: onChange,
      fullWidth: true
    }));
    expect(component.find('Dropdown').prop('fullWidth')).toEqual(true);
  });
  it('should set the maxWidth of the activator', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      value: 'value 2',
      onChange: onChange,
      maxWidth: "100px"
    }));
    expect(component.find('Dropdown').find('div.oui-dropdown-group__activator').props().style).toEqual({
      maxWidth: '100px',
      width: '100%'
    });
  });
  it('should contain error class', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      value: 'value 2',
      onChange: onChange,
      displayError: true
    }));
    expect(component.find('.oui-form-bad-news').length).toBe(1);
  });
  it('should set the width of the content', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      value: 'value 2',
      onChange: onChange,
      minDropdownWidth: "400px"
    }));
    var activator = component.find('Button');
    activator.simulate('click');
    expect(component.find('DropdownContents').prop('minWidth')).toEqual('400px');
  });
  it('should not render DropdownContents when isDisabled is true', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      isDisabled: true,
      value: 'value 2',
      onChange: onChange
    }));
    var activator = component.find('Button');
    activator.simulate('click');
    expect(component.find('Dropdown').prop('isDisabled')).toEqual(true);
    expect(component.find('DropdownContents').length).toEqual(0);
  });
  it('should display activatorLabel if provided', function () {
    var itemsWithActivatorLabel = [{
      activatorLabel: 'Production',
      label: 'Production (50%)',
      value: 'Production'
    }, {
      activatorLabel: 'Staging',
      label: 'Staging (100%)',
      value: 'Staging'
    }];
    component = mount(React.createElement(SelectDropdown, {
      items: itemsWithActivatorLabel,
      value: "Production",
      onChange: onChange
    }));
    var activator = component.find('Button');
    expect(activator.text()).toBe('Production');
  });
  it('should display initialPlaceholder if provided', function () {
    component = mount(React.createElement(SelectDropdown, {
      items: items,
      initialPlaceholder: "Select a value...",
      onChange: onChange
    }));
    var activator = component.find('Button');
    expect(activator.text()).toBe('Select a value...');
  });
});