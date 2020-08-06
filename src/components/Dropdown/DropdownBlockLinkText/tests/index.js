import React from 'react';
import DropdownBlockLinkText from '../index';
import { shallow } from 'enzyme';

describe('components/Dropdown/DropdownBlockLinkText', () => {
  it('should render as a `span`', () => {
    const component = shallow(<DropdownBlockLinkText></DropdownBlockLinkText>);
    expect(component.type()).toBe('span');
  });

  it('should render text', () => {
    const component = shallow(<DropdownBlockLinkText text="foo" />);
    expect(component.text()).toBe('foo');
  });

  it('should render text when passed a span', () => {
    const component = shallow(<DropdownBlockLinkText text={ <span>foo</span> } />);
    expect(component.text()).toBe('foo');
  });

  it('should render with test section', () => {
    const component = shallow(<DropdownBlockLinkText testSection="goose"></DropdownBlockLinkText>);
    expect(component.is('[data-test-section="block-link-text-goose"]')).toBe(true);
  });

  it('should render an icon if external icon is true', () => {
    const component = shallow(<DropdownBlockLinkText hasExternalIcon={ true } testSection="goose"></DropdownBlockLinkText>);
    expect(component.find('.oui-dropdown__block-link--icon').length).toBe(1);
  });
});
