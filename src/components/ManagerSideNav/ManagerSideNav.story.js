import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ManagerSideNav from './index.js';
import Switch from '../Switch/index.js';
import Link from '../Link/index.js';

const stories = storiesOf('Navigation|ManagerSideNav', module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories
  .add('Default', () => {
    return (
      <ManagerSideNav>
        <ManagerSideNav.Header
          hasBackLink={ true }
          backLinkHref="#features"
          backLinkText="Features"
          backLinkOnClick={ action('Back link was clicked') }
          usesMonospaceStyling={ true }
          projectName="CTP Bank - Full Stack"
          title="recurring_deposit"
          friendlyTitle="Recurring Deposit">
          <ManagerSideNav.HeaderDetails
            items={ [
              {
                label: 'Created by',
                value: 'Sophia Hernandez',
              },
            ] }
          />
        </ManagerSideNav.Header>
        <ManagerSideNav.NavList label="Rules">
          <ManagerSideNav.NavItem
            isActive={ true }
            testSection="prod-item"
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Dev item was clicked') }
                href="#">
                <p className="flush line--tight">Production</p>
                <p className="micro muted flush line--tight">
                  Primary environment
                </p>
              </Link>
            }
            rightContent={
              <Switch
                ariaLabel="Turn feature on in Production"
                elementId={ 'prod-toggle' }
                checked={ true }
                onClick={ action('Toggled Prod Switch') }
              />
            }
          />
          <ManagerSideNav.NavItem
            isActive={ false }
            testSection="dev-item"
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Dev item was clicked') }
                href="#dev">
                <p className="flush line--tight">Development</p>
                <p className="micro muted flush line--tight">Environment</p>
              </Link>
            }
            rightContent={
              <Switch
                ariaLabel="Turn feature on in Development"
                elementId={ 'dev-toggle' }
                checked={ false }
                onClick={ action('Toggled Development Switch') }
              />
            }
          />
          <ManagerSideNav.NavItem
            isActive={ false }
            testSection="dev-item"
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Long item was clicked') }
                href="#long">
                <p className="flush line--tight">
                  Another environment with a very long name
                </p>
                <p className="micro muted flush line--tight">Environment</p>
              </Link>
            }
            rightContent={
              <Switch
                ariaLabel="Turn feature on in Another Environment"
                elementId={ 'long-toggle' }
                checked={ false }
                onClick={ action('Toggled Long environment Switch') }
              />
            }
          />
        </ManagerSideNav.NavList>
        <ManagerSideNav.NavList label="Flag Setup">
          <ManagerSideNav.NavItem
            isActive={ false }
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Default variables item was clicked') }
                href="#default-variables">
                Default Variables
              </Link>
            }
          />
          <ManagerSideNav.NavItem
            isActive={ false }
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Variations item was clicked') }
                href="#variations">
                Variations
              </Link>
            }
          />
          <ManagerSideNav.NavItem
            isActive={ false }
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('History item was clicked') }
                href="#history">
                History
              </Link>
            }
          />
          <ManagerSideNav.NavItem
            isActive={ false }
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Settings item was clicked') }
                href="#settings">
                Settings
              </Link>
            }
          />
        </ManagerSideNav.NavList>
      </ManagerSideNav>
    );
  })
  .add('Simple (no sections)', () => {
    return (
      <ManagerSideNav>
        <ManagerSideNav.Header
          hasBackLink={ true }
          backLinkHref="#features"
          backLinkText="Features"
          backLinkOnClick={ action('Back link was clicked') }
          usesMonospaceStyling={ true }
          projectName="CTP Bank - Full Stack"
          title="recurring_deposit"
          friendlyTitle="Recurring Deposit">
          <ManagerSideNav.HeaderDetails
            items={ [
              {
                label: 'Created by',
                value: 'Sophia Hernandez',
              },
            ] }
          />
        </ManagerSideNav.Header>
        <ManagerSideNav.NavList>
          <ManagerSideNav.NavItem
            isActive={ true }
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Default variables item was clicked') }
                href="#default-variables">
                Default Variables
              </Link>
            }
          />
          <ManagerSideNav.NavItem
            isActive={ false }
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Variations item was clicked') }
                href="#variations">
                Variations
              </Link>
            }
          />
          <ManagerSideNav.NavItem
            isActive={ false }
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('History item was clicked') }
                href="#history">
                History
              </Link>
            }
          />
          <ManagerSideNav.NavItem
            isActive={ false }
            leftContent={
              <Link
                isFullWidth={ true }
                onClick={ action('Settings item was clicked') }
                href="#settings">
                Settings
              </Link>
            }
          />
        </ManagerSideNav.NavList>
      </ManagerSideNav>
    );
  })
  .add('With a custom link (like a React Router Link)', () => {
    return (
      <React.Fragment>
        <p>
          Using the classes
          <em><code> oui-manager-side-nav__custom-link </code></em>
           and
          <code><em> oui-manager-side-nav__custom-link--active</em></code>,
          you can use a custom link for the nav item content and get consistent styling
        </p>
        <ManagerSideNav>
          <ManagerSideNav.Header
            hasBackLink={ true }
            backLinkHref="#features"
            backLinkText="Features"
            backLinkOnClick={ action('Back link was clicked') }
            usesMonospaceStyling={ true }
            projectName="CTP Bank - Full Stack"
            title="recurring_deposit"
            friendlyTitle="Recurring Deposit">
            <ManagerSideNav.HeaderDetails
              items={ [
                {
                  label: 'Created by',
                  value: 'Sophia Hernandez',
                },
              ] }
            />
          </ManagerSideNav.Header>
          <ManagerSideNav.NavList>
            <ManagerSideNav.NavItem
              isActive={ false }
              leftContent={
                <Link
                  isFullWidth={ true }
                  onClick={ action('Default variables item was clicked') }
                  href="#default-variables">
                  Default Variables
                </Link>
              }
            />
            <ManagerSideNav.NavItem
              isActive={ false }
              leftContent={
                <a
                  href="www.google.com"
                  className="oui-manager-side-nav__custom-link">
                  I am a custom link
                </a>
              }
            />
            <ManagerSideNav.NavItem
              isActive={ false }
              leftContent={
                <a
                  href="www.google.com"
                  className="oui-manager-side-nav__custom-link oui-manager-side-nav__custom-link--active">
                  I am an active custom link
                </a>
              }
            />
            <ManagerSideNav.NavItem
              isActive={ false }
              leftContent={
                <Link
                  isFullWidth={ true }
                  onClick={ action('History item was clicked') }
                  href="#history">
                  History
                </Link>
              }
            />
            <ManagerSideNav.NavItem
              isActive={ false }
              leftContent={
                <Link
                  isFullWidth={ true }
                  onClick={ action('Settings item was clicked') }
                  href="#settings">
                  Settings
                </Link>
              }
            />
          </ManagerSideNav.NavList>
        </ManagerSideNav>
      </React.Fragment>
    );
  });
