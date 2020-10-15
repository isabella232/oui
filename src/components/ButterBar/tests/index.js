import React from 'react';
import ButterBar from '../index';
import { shallow, mount } from 'enzyme';

describe('components/ButterBar', () => {
  it('should render text passed in as children', () => {
    const message = 'Hello! This is a short butterbar.';

    const component = shallow(<ButterBar>{message}</ButterBar>);

    expect(component.text()).toBe(message);
  });

  it('should render dismiss button when prop is provided', () => {
    const component = mount(
      <ButterBar isDismissible={ true } testSection="foo">
        'Hello! This is a short butterbar.'
      </ButterBar>
    );

    expect(component.find('[data-test-section="foo-dismiss"]').length).toBe(1);
  });

  it('should call dismiss button click handler when prop is provided', () => {
    const onDismiss = jest.fn();
    const component = mount(
      <ButterBar isDismissible={ true } testSection="foo" onDismiss={ onDismiss }>
        'Hello! This is a short butterbar.'
      </ButterBar>
    );

    expect(component.find('[data-test-section="foo-dismiss"]').length).toBe(1);
    expect(onDismiss).toHaveBeenCalledTimes(0);
    component.find('[data-test-section="foo-dismiss"]').simulate('click');
    expect(onDismiss).toHaveBeenCalledTimes(1);
  });

  it('should not render dismiss button by default', () => {
    const component = mount(
      <ButterBar testSection="butterbar">
        'Hello! This is a short butterbar.'
      </ButterBar>
    );

    expect(component.find('[data-test-section="foo-dismiss"]').length).toBe(0);
  });

  it('should have a properly set role attribute', () => {
    const component = shallow(
      <ButterBar>'Hello! This is a short butterbar.'</ButterBar>
    );

    expect(component.is('[role="alert"]')).toBe(true);
  });

  it('should have aria-label if type is provided', () => {
    const component = shallow(
      <ButterBar type="brand">'Hello! This is a short butterbar.'</ButterBar>
    );

    expect(component.is('[aria-label]')).toBe(true);
  });

  /**
   * Dismissible ButterBar components should use button element since it
   * triggers an action instead of navigating elsewhere.
   */
  it('should use an HTML button element for a close button', () => {
    const component = mount(
      <ButterBar isDismissible={ true } testSection="foo">
        'Hello! This is a short butterbar.'
      </ButterBar>
    );

    expect(
      component.find('button[data-test-section="foo-dismiss"]').length
    ).toBe(1);
  });

  it('should have a properly set test section', () => {
    const component = shallow(
      <ButterBar testSection="foo">
        'Hello! This is a short butterbar.'
      </ButterBar>
    );

    expect(component.is('[data-test-section="foo"]')).toBe(true);
  });
});
