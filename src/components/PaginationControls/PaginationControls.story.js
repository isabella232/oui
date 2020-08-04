import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, number, boolean, text } from '@storybook/addon-knobs';

import PaginationControls from './index.js';

const totalPages = 43;

const buttonStories = storiesOf('Navigation|PaginationControls/Using Buttons (no href)', module);
buttonStories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      <p className="push-quad--bottom">
        Use the <strong>currentPage</strong> knob to see the various states of the PaginationControls.
      </p>
      {story()}
    </div>
  ));


buttonStories
  .add('Default', () => {
    return (
      <PaginationControls
        currentPage={ number('currentPage', 1) }
        totalPages={ number('totalPages', totalPages) }
        goToPage={ action('page changed') }
      />
    );
  })
  .add('Loading', () => {
    return (
      <PaginationControls
        currentPage={ number('currentPage', 1) }
        totalPages={ number('totalPages', totalPages) }
        goToPage={ action('page changed') }
        isLoading={ boolean('isLoading', true) }
      />
    );
  })
  .add('Customize totalSlots', () => {
    return (
      <PaginationControls
        currentPage={ number('currentPage', 20) }
        totalSlots={ number('totalSlots ( >= 7)', 11) }
        totalPages={ number('totalPages', totalPages) }
        goToPage={ action('page changed') }
      />
    );
  });

const linkStories = storiesOf('Navigation|PaginationControls/Using Links (with href)', module);
linkStories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      <p className="push-quad--bottom">
        Use the <strong>currentPage</strong> knob to see the various states of the PaginationControls.
      </p>
      {story()}
    </div>
  ));

linkStories
  .add('With an hrefBaseUrl supplied', () => {
    return (
      <div>
        <p className="push-double--bottom">
          When using hrefs to navigate between pages, supply an <code>hrefBaseUrl</code> that
          includes the string <code className=" soft-half background--light-blue-100">[pageNumber]</code>, which will be
          replaced by the appropriate page number.</p>

        <PaginationControls
          currentPage={ number('currentPage', 1) }
          totalPages={ number('totalPages', totalPages) }
          goToPage={ action('page changed') }
          hrefBaseUrl={ text('hrefBaseUrl', 'https://www.optimizely.com/projects/page-[pageNumber]') }
        />

      </div>
    );
  });


