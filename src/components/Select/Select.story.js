import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Select from './index.js';

const stories = storiesOf('Select', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(withInfo)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('default', (() => {
  return (
    <Select isDisabled={ boolean('isDisabled', false) } name='zoo' id='zoo' >
      <option value="one">This is option one</option>
      <option value="two">And this is option two</option>
    </Select>
  );
}));
