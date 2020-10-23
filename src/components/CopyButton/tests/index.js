import React from 'react';
import { shallow, mount } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';

import CopyButton from '../index';

jest.mock('copy-to-clipboard', () => {
  return jest.fn();
});

describe('components/CopyButton', () => {
  it('should render children the icon button', () => {
    const component = shallow(
      <CopyButton textToCopy={ 'let bingo = "BINGO"' } testSection="fake-test-section"/>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render default text when usesTextLabel is true', () => {
    const component = shallow(
      <CopyButton textToCopy={ 'let bingo = "BINGO"' } testSection="fake-test-section" usesTextLabel={ true } style="highlight"/>
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should render provided text when usesTextLabel is true and textLabel is given', () => {
    const component = shallow(
      <CopyButton
        textToCopy={ 'let bingo = "BINGO"' } testSection="fake-test-section"
        usesTextLabel={ true } textLabel={ 'custom-copy-label' } style="highlight"
      />
    );
    expect(shallowToJson(component)).toMatchSnapshot();
  });

  it('should call onCopy callback when CopyButton is clicked', () => {
    const mockFunction = jest.fn();

    const component = mount(
      <CopyButton
        textToCopy={ 'let bingo = "BINGO"' } usesTextLabel={ true }
        testSection="fake-test-section" onCopy={ mockFunction } style="highlight"
      />
    );

    const button = component.find('CopyToClipboard');
    button.simulate('click');
    expect(mockFunction).toHaveBeenCalled();
  });

});

