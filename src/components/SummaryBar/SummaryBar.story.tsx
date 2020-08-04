import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import SummaryBar from './index';

const stories = storiesOf('Data Organization|SummaryBar', module);
stories.addDecorator(withKnobs).addDecorator(story => <div id="root-preview">{story()}</div>);

stories.add('Bar with mixed content', () => {
  return (
    <div>
      <SummaryBar
        title="Summary" extraInfo="Updated March 2, 2020 at 3:00pm (America/Los Angeles)"
        columns={ [
          {
            header: 'Overall Conversion Rate',
            bodyContent: {
              value: '10,795',
              color: 'red',
              isNumber: true,
            },
          },
          {
            header: 'Rate',
            bodyContent: {
              value: '53.97%',
              isNumber: true,
            },
          },
          {
            header: 'Overall Conversion Rate',
            bodyContent: {
              value: '+33pp +6p',
              color: 'green',
              isNumber: true,
            },
          },
          {
            header: 'Rate',
            bodyContent: {
              value: 'Increase in unique conversions per visitor for Register Button event',
              isNumber: false,
            },
          },
        ] }
        testSection={ 'summary-bar' }
      />
    </div>
  );
});
stories.add('Summary bar with tooltips', () => {
  return (
    <div>
      <SummaryBar
        title="Summary" extraInfo="Updated March 2, 2020 at 3:00pm (America/Los Angeles)"
        columns={ [
          {
            header: 'Overall Conversion Rate',
            bodyContent: {
              value: '10,795',
              color: 'red',
              isNumber: true,
              helpTooltip: 'This is a tooltip',
            },
            headerHelpTooltip: 'Tootlip text here',
          },
          {
            header: 'Rate',
            bodyContent: {
              value: '53.97%',
              isNumber: true,
            },
            headerHelpTooltip: 'Tootlip text here',
          },
          {
            header: 'Overall Conversion Rate',
            bodyContent: {
              value: '+33pp +6p',
              color: 'green',
              isNumber: true,
              helpTooltip: 'This is a tooltip',
            },
            headerHelpTooltip: 'Tootlip text here',
          },
          {
            header: 'Rate',
            bodyContent: {
              value: 'Increase in unique conversions per visitor for Register Button event',
              isNumber: false,
              helpTooltip: 'This is a tooltip',
            },
            headerHelpTooltip: 'Tootlip text here',
          },
        ] }
        testSection={ 'summary-bar' }
      />
    </div>
  );
});
stories.add('Bar with empty col', () => {
  return (
    <div>
      <SummaryBar
        title="Summary" extraInfo="Updated March 2, 2020 at 3:00pm (America/Los Angeles)"
        testSection={ 'summary-bar' }
        columns={ [
          {
            header: 'Overall Conversion Rate',
            bodyContent: {
              value: '10,795',
              color: 'red',
              isNumber: true,
            },
          },
          {
            header: 'Rate',
            bodyContent: {
              value: '53.97%',
              isNumber: true,
            },
          },
          {
            header: 'Overall Conversion Rate',
            bodyContent: {
              value: '+33pp +6p',
              color: 'green',
              isNumber: true,
            },
          },
          {
            header: 'Rate',
            bodyContent: {
              value: 'Increase in unique conversions per visitor for Register Button event',
              isNumber: false,
            },
          },
          {},
        ] }
      />
    </div>
  );
});
