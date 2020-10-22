import React from 'react';
import { shallow } from 'enzyme';

import Sidebar from '../Sidebar';

describe('components/Sidebar', function() {
  let component;
  let mockSidebarContent;
  let mockWidth;

  beforeEach(function() {
    mockSidebarContent = 'mock sidebar content';
    mockWidth = 100;
    component = shallow(
      <Sidebar width={ mockWidth } testSection='oui-sidebar'>
        <div data-test-section="sidebar-child">{ mockSidebarContent }</div>
      </Sidebar>
    );
  });

  afterEach(function() {
    component.unmount();
  });

  describe('basic rendering', function() {
    it('should render component with default props', function() {
      const sidebarComponent = component.find('[data-test-section="oui-sidebar"]');
      expect(sidebarComponent.exists()).toBe(true);
      expect(sidebarComponent.name()).toBe('div');
      expect(sidebarComponent.hasClass('oui-sidebar')).toEqual(true);
      expect(sidebarComponent.hasClass('oui-sidebar--open-left')).toEqual(false);
      expect(sidebarComponent.hasClass('oui-sidebar--open-right')).toEqual(false);
      expect(sidebarComponent.hasClass('position--absolute')).toEqual(true);
      expect(sidebarComponent.hasClass('height--1-1')).toEqual(true);

      const props = sidebarComponent.props();
      expect(props.style).toHaveProperty('maxWidth', 0);
      expect(props.style).toHaveProperty('width', 0);
      expect(props['data-oui-component']).toBe(true);

      const childComponent = component.find('[data-test-section="sidebar-child"]');
      expect(childComponent.exists()).toBe(false);
    });

    it('should render children when sidebar is open', function() {
      component.setProps({ isOpen: true });

      const childComponent = component.find('[data-test-section="sidebar-child"]');
      expect(childComponent.exists()).toBe(true);
      expect(childComponent.text()).toEqual(mockSidebarContent);
    });

    it('should add docked class when Sidebar is docked', function() {
      expect(component.find('[data-test-section="oui-sidebar"]').hasClass('position--relative')).toEqual(false);
      component.setProps({ docked: true });
      expect(component.find('[data-test-section="oui-sidebar"]').hasClass('position--relative')).toEqual(true);
    });

    it('should add position:fixed class when Sidebar is sticky and not docked', function() {
      expect(component.find('[data-test-section="oui-sidebar"]').hasClass('position--fixed')).toEqual(false);
      component.setProps({ sticky: true });
      expect(component.find('[data-test-section="oui-sidebar"]').hasClass('position--fixed')).toEqual(true);
      component.setProps({ sticky: true, docked: true });
      expect(component.find('[data-test-section="oui-sidebar"]').hasClass('position--fixed')).toEqual(false);
      component.setProps({ sticky: true, docked: false });
      expect(component.find('[data-test-section="oui-sidebar"]').hasClass('position--fixed')).toEqual(true);
    });

    it('should add open left props when Sidebar anchor is left', function() {
      component.setProps({ isOpen: false, anchor: 'left' });
      const closedProps = component.find('[data-test-section="oui-sidebar"]').props();
      expect(closedProps.style).toHaveProperty('left', -1 * mockWidth);
      expect(closedProps.style).not.toHaveProperty('right');

      component.setProps({ isOpen: true, anchor: 'left' });
      const openProps = component.find('[data-test-section="oui-sidebar"]').props();
      expect(openProps.style).toHaveProperty('left', 0);
      expect(openProps.style).not.toHaveProperty('right');
    });

    it('should add open right class when Sidebar anchor is right', function() {
      component.setProps({ isOpen: false, anchor: 'right' });
      const closedSidebar = component.find('[data-test-section="oui-sidebar"]');
      expect(closedSidebar.hasClass('visibility--hidden')).toBe(true);
      const closedProps = closedSidebar.props();
      expect(closedProps.style).toHaveProperty('right', 0);
      expect(closedProps.style).not.toHaveProperty('left');

      component.setProps({ isOpen: true, anchor: 'right' });
      const openSidebar = component.find('[data-test-section="oui-sidebar"]');
      expect(openSidebar.hasClass('visibility--hidden')).not.toBe(true);
      const openProps = openSidebar.props();
      expect(openProps.style).toHaveProperty('right', 0);
      expect(openProps.style).not.toHaveProperty('left');
    });
  });

  describe('resizable sidebar', function() {

    beforeEach(function() {
      component.setProps({ isResizable: true});
    });

    it('should render component with default props', function() {
      const sidebarComponent = component.find('[data-test-section="oui-sidebar"]');
      expect(sidebarComponent.name()).toBe('Resizable');
      expect(sidebarComponent.exists()).toBe(true);
      expect(sidebarComponent.hasClass('oui-sidebar')).toEqual(true);
      expect(sidebarComponent.hasClass('oui-sidebar--open-left')).toEqual(false);
      expect(sidebarComponent.hasClass('oui-sidebar--open-right')).toEqual(false);
      expect(sidebarComponent.hasClass('position--absolute')).toEqual(true);
      expect(sidebarComponent.hasClass('height--1-1')).toEqual(true);

      const props = sidebarComponent.props();
      expect(props.style).toHaveProperty('maxWidth', 0);
      expect(props.style).toHaveProperty('width', 0);
      expect(props['data-oui-component']).toBe(true);

      const childComponent = component.find('[data-test-section="sidebar-child"]');
      expect(childComponent.exists()).toBe(false);
    });

    it('should render a div instead of resizable component when docked is true', function() {
      component.setProps({ docked: true});
      const sidebarComponent = component.find('[data-test-section="oui-sidebar"]');
      expect(sidebarComponent.name()).toBe('div');
    });

    it('should enable horizontal resize from right when anchor is left', function() {
      component.setProps({ anchor: 'left'});
      const sidebarComponent = component.find('[data-test-section="oui-sidebar"]');
      const props = sidebarComponent.props();

      const resizeEnabled = {
        top: false,
        right: true,
        bottom: false,
        left: false,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      };

      expect(props.enable).toEqual(resizeEnabled);
    });


    it('should enable horizontal resize from left when anchor is right', function() {
      component.setProps({ anchor: 'right'});
      const sidebarComponent = component.find('[data-test-section="oui-sidebar"]');
      const props = sidebarComponent.props();

      const resizeEnabled = {
        top: false,
        right: false,
        bottom: false,
        left: true,
        topRight: false,
        bottomRight: false,
        bottomLeft: false,
        topLeft: false,
      };

      expect(props.enable).toEqual(resizeEnabled);
    });

    it('should set width in defaultSize prop of resizable component when isOpen is true', function() {
      component.setProps({ width: 199, isOpen: true});
      const sidebarComponent = component.find('[data-test-section="oui-sidebar"]');
      const props = sidebarComponent.props();

      const defaultSize = {
        width: 199,
        height: 'auto',
      };

      expect(props.defaultSize).toEqual(defaultSize);
    });

    it('should set 0 for width in defaultSize prop of resizable component when isOpen is false', function() {
      component.setProps({ width: 199, isOpen: false});
      const sidebarComponent = component.find('[data-test-section="oui-sidebar"]');
      const props = sidebarComponent.props();

      const defaultSize = {
        width: 0,
        height: 'auto',
      };

      expect(props.defaultSize).toEqual(defaultSize);
    });

    it('should set minWidth and maxWidth props in resizable component', function() {
      component.setProps({ minWidth: 99, maxWidth: 199});
      const sidebarComponent = component.find('[data-test-section="oui-sidebar"]');
      const props = sidebarComponent.props();

      expect(props.minWidth).toEqual(99);
      expect(props.maxWidth).toEqual(199);
    });

  });

});
