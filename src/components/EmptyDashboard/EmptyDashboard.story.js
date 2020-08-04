import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Button from '../Button/';
import Link from '../Link/';
import EmptyDashboard from './index.js';

const stories = storiesOf('Layout|Empty Dashboard', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories
  .add('Default empty', () => {
    return (
      <EmptyDashboard
        headline={ text('headline', 'Get started with Optimizely X') }
        description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> }
        button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
        imagePath={ select('imagePath', {
          'Campaigns': 'https://app.optimizely.com/static/img/x/empty-states/campaign-list-empty-state.svg',
          'Extensions': 'https://app.optimizely.com/static/img/x/empty-states/extensions-empty-state.svg',
          'SST': 'https://app.optimizely.com/static/img/x/empty-states/custom-project-experiments-empty-state.svg',
          'Rollouts': 'https://app.optimizely.com/static/img/x/empty-states/empty-rollouts.svg',
          'Feature Flags': 'https://app.optimizely.com/static/img/x/empty-states/empty-feature-flags.svg',
          'Audiences': 'https://app.optimizely.com/static/img/x/empty-states/audience-list-empty-state.svg',
          'Attribute': 'https://app.optimizely.com/static/img/x/empty-states/attribute-dashboard-empty-state.svg',
          'Page List': 'https://app.optimizely.com/static/img/x/empty-states/page-list-empty-state.svg',
        }, 'https://app.optimizely.com/static/img/x/empty-states/campaign-list-empty-state.svg') }
      />
    );
  })
  .add('All images', () => {
    return (
      <div>
        <EmptyDashboard
          headline={ 'Get started with Campaigns' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> }
          button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ 'https://app.optimizely.com/static/img/x/empty-states/campaign-list-empty-state.svg' }
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Extensions' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> }
          button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ 'https://app.optimizely.com/static/img/x/empty-states/extensions-empty-state.svg' }
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Experiments' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> }
          button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ 'https://app.optimizely.com/static/img/x/empty-states/custom-project-experiments-empty-state.svg' }
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Rollouts' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> }
          button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ 'https://app.optimizely.com/static/img/x/empty-states/empty-rollouts.svg' }
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Feature Flags' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ 'https://app.optimizely.com/static/img/x/empty-states/empty-feature-flags.svg' }
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Audiences' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ 'https://app.optimizely.com/static/img/x/empty-states/audience-list-empty-state.svg' }
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Attributes' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ 'https://app.optimizely.com/static/img/x/empty-states/attribute-dashboard-empty-state.svg' }
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Pages' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath={ 'https://app.optimizely.com/static/img/x/empty-states/page-list-empty-state.svg' }
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Change History' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/x/empty-states/change-history-empty-state.svg'
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Campaign Manager' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/x/empty-states/campaign-manager-empty.svg'
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Custom Snippets' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/x/empty-states/custom-snippets-empty-state.svg'
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Fullstack Variables' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/x/empty-states/fullstack-variables-empty-state.svg'
        />
        <hr/>
        <EmptyDashboard
          headline={ 'Get started with Integrations' }
          description={ <div>This is a test description about <Link href='http://google.com'>X Feature</Link> with a Google.</div> } button={ (<Button style="highlight">{ text('buttonText', 'Highlight') }</Button>) }
          imagePath='https://app.optimizely.com/static/img/x/empty-states/integrations-empty.svg'
        />
      </div>
    );
  });
