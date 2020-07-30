import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Toolbar from './index.js';
import Dropdown from '../Dropdown/index.js';
import Button from '../Button/index.js';

const envData = [
  { title: 'Development' },
  { title: 'Staging' },
  { title: 'Production' },
];

const statusData = [
  { title: 'Running' },
  { title: 'Active' },
  { title: 'Paused' },
];

const stories = storiesOf('Toolbar', module);
stories.addDecorator(withKnobs).addDecorator((story) => (
  <div id="root-preview" style={{ height: '300px' }}>
    {story()}
  </div>
));

stories
  .add('Default', () => (
    <div>
      <Toolbar>
        <Toolbar.Left>
          <Toolbar.Link href={ 'www.google.com' } label="Link" />
        </Toolbar.Left>
        <Toolbar.Right>
          <Toolbar.Link
            isDisabled={ true }
            href={ 'www.google.com' }
            label="Disabled Link"
          />
          <Toolbar.Link href={ 'www.google.com' } label="Enabled Link" />
          <Toolbar.Button onClick={ action('Saying hi!') } label="Button" />
        </Toolbar.Right>
      </Toolbar>
    </div>
  ))
  .add('Without style options (no border, shadow, and/or padding)', () => (
    <div>
      <p className="style--italic">With style set to "bare" = no box-shadow or bottom border</p>
      <Toolbar toolbarStyle={ ['bare'] }>
        <Toolbar.Left>
          <Toolbar.Link href={ 'www.google.com' } label="Link" />
        </Toolbar.Left>
        <Toolbar.Right>
          <Toolbar.Link
            isDisabled={ true }
            href={ 'www.google.com' }
            label="Disabled Link"
          />
          <Toolbar.Link href={ 'www.google.com' } label="Enabled Link" />
          <Toolbar.Button onClick={ action('Saying hi!') } label="Button" />
        </Toolbar.Right>
      </Toolbar>
      <p className="push-double--top style--italic">With style set to "bare" and "tight" = no extra padding around the toolbar</p>
      <Toolbar toolbarStyle={ ['bare', 'tight'] }>
        <Toolbar.Left>
          <Toolbar.Link href={ 'www.google.com' } label="Link" />
        </Toolbar.Left>
        <Toolbar.Right>
          <Toolbar.Link
            isDisabled={ true }
            href={ 'www.google.com' }
            label="Disabled Link"
          />
          <Toolbar.Link href={ 'www.google.com' } label="Enabled Link" />
          <Toolbar.Button onClick={ action('Saying hi!') } label="Button" />
        </Toolbar.Right>
      </Toolbar>
    </div>
  ))
  .add('With Dropdowns and styled Buttons', () => (
    <div>
      <Toolbar toolbarStyle={ ['bare'] }>
        <Toolbar.Left>
          <Dropdown
            buttonContent={{
              label: 'Environment',
              content: 'Production',
            }}
            style="plain"
            arrowIcon="down">
            <Dropdown.Contents>
              {envData.map((item, index) => {
                return (
                  <Dropdown.ListItem key={ index } role="option">
                    <Dropdown.BlockLink
                      value={ item.title }
                      onClick={ action('click on complex item') }>
                      <Dropdown.BlockLinkText text={ item.title } />
                      <Dropdown.BlockLinkSecondaryText
                        secondaryText={ item.description }
                      />
                    </Dropdown.BlockLink>
                  </Dropdown.ListItem>
                );
              })}
            </Dropdown.Contents>
          </Dropdown>
          <Dropdown
            buttonContent={{
              label: 'Status',
              content: 'Active',
            }}
            style="plain"
            arrowIcon="down">
            <Dropdown.Contents>
              {envData.map((item, index) => {
                return (
                  <Dropdown.ListItem key={ index } role="option">
                    <Dropdown.BlockLink
                      value={ item.title }
                      onClick={ action('click on complex item') }>
                      <Dropdown.BlockLinkText text={ item.title } />
                      <Dropdown.BlockLinkSecondaryText
                        secondaryText={ item.description }
                      />
                    </Dropdown.BlockLink>
                  </Dropdown.ListItem>
                );
              })}
            </Dropdown.Contents>
          </Dropdown>
          <Dropdown
            buttonContent={{
              label: 'Rule Type',
              content: 'Any',
            }}
            style="plain"
            arrowIcon="down">
            <Dropdown.Contents>
              {statusData.map((item, index) => {
                return (
                  <Dropdown.ListItem key={ index } role="option">
                    <Dropdown.BlockLink
                      value={ item.title }
                      onClick={ action('click on complex item') }>
                      <Dropdown.BlockLinkText text={ item.title } />
                    </Dropdown.BlockLink>
                  </Dropdown.ListItem>
                );
              })}
            </Dropdown.Contents>
          </Dropdown>
        </Toolbar.Left>
        <Toolbar.Right>
          <Button style="highlight" onClick={ action('Saying hi!') }>
            Create New
          </Button>
        </Toolbar.Right>
      </Toolbar>
    </div>
  ));
