import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import ButterBar from '../ButterBar';

const typeOptions = {
  'bad-news': 'bad-news',
  brand: 'brand',
  'good-news': 'good-news',
  warning: 'warning',
};

const stories = storiesOf('Informational|ButterBar', module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories.add('ButterBar states', () => {
  return (
    <ButterBar
      alignment={ select(
        'alignment',
        { center: 'center', left: 'left' },
        'center'
      ) }
      isDismissible={ boolean('isDismissible', false) }
      testSection="butterbar-foo"
      type={ select('type', typeOptions, 'warning') }
      onDismiss={ action('butterbar dismissed') }>
      {text('content', 'Hello! This is a butter bar.')}
    </ButterBar>
  );
});
