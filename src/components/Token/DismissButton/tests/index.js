import React from 'react';
import DismissButton from '../index';
import { shallow } from 'enzyme';

describe('components/Token/DismissButton', () => {
  const mockFunction = jest.fn();

  it('should render `Button`', () => {
    const component = shallow(<DismissButton onClick={ mockFunction } />);
    expect(component.find('ButtonIcon').length).toBe(1);
  });

  it('should pass test section to `Button`', () => {
    const component = shallow(
      <DismissButton
        testSection="goose"
        onClick={ mockFunction }
      />
    );
    expect(component.find('ButtonIcon').props().testSection).toBe('goose-dismiss');
  });

  it('should pass `onClick` to `Button`', () => {
    const myFunc = mockFunction;
    const component = shallow(
      <DismissButton
        testSection="goose"
        onClick={ myFunc }
      />
    );
    expect(component.find('ButtonIcon').props().onClick).toBe(myFunc);
  });
});
