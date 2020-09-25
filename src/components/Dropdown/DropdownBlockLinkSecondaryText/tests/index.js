import React from 'react';
import { act } from 'react-dom/test-utils';
import DropdownBlockLinkSecondaryText from '../index';
import { mount, shallow } from 'enzyme';

describe('components/Dropdown/DropdownBlockLinkSecondaryText', () => {
  it('should render as a `div`', () => {
    const component = shallow(<DropdownBlockLinkSecondaryText></DropdownBlockLinkSecondaryText>);
    expect(component.type()).toBe('div');
  });

  it('should render secondary text', () => {
    const component = shallow(<DropdownBlockLinkSecondaryText secondaryText={ 'foo' } />);
    expect(component.text()).toBe('foo');
  });

  it('should render secondary text when passed a span', () => {
    const component = shallow(<DropdownBlockLinkSecondaryText secondaryText={ <span>foo</span> } />);
    expect(component.text()).toBe('foo');
  });

  it('should render with test section', () => {
    const component = shallow(<DropdownBlockLinkSecondaryText testSection="goose" />);
    expect(component.findWhere((n) => n.is('[data-test-section="block-link-description-goose"]')).exists()).toBe(true);
  });

  it('should not render a warning if not passed as a prop', () => {
    const component = shallow(<DropdownBlockLinkSecondaryText />);
    expect(component.find('Icon').exists()).toBe(false);
  });

  it.only('should render a warning', () => {
    const component = mount(<DropdownBlockLinkSecondaryText isWarning={ true } />);
    console.log(`[DEBUG] ${+new Date} component.debug()`, component.debug());
    console.log(`[DEBUG] ${+new Date} component.find('Icon')`, component.find('Icon'));
    expect(component.find('Icon').exists()).toBe(true);
    expect(component.find('Icon').prop('name')).toBe('exclamation');
  });
});
