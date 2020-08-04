import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number } from '@storybook/addon-knobs';

import Pagination from './index.js';

const stories = storiesOf('Pagination (deprecated)', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      <p>
        Please use
        <a href="/?path=/story/navigation-paginationcontrols-using-buttons-no-href--default">
          {' '}PaginationControls{' '}
        </a>
        component instead
      </p>
      {story()}
    </div>
  ));

stories
  .add('Default', (() => {
    return (
      <Pagination
        currentPage={ number('currentPage', 1) }
        totalPages={ number('totalPages', 10) }
        onChange={ action('page changed') }
      />
    );
  }));


