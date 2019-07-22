import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import OverlayWrapper from '../OverlayWrapper';
import Popover from '../Popover';
import Button from '../Button';

const alignOpts = {
  'center': 'center',
  'left': 'left',
  'right': 'right',
};

const verticalAlignOpts = {
  'middle': 'middle',
  'top': 'top',
  'bottom': 'bottom',
};

const stories = storiesOf('OverlayWrapper', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      <div className="flexboxCenter">
        {story()}
      </div>
    </div>
  ));

stories
  .add('Default popover', (() => {
    return (
      <OverlayWrapper
        behavior="click"
        horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
        overlay={ <Popover title="Lorem ipsum dolor sit amet">
          <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
        </Popover> }
        shouldHideOnClick={ boolean('shouldHideOnClick', true) }
        verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') } >
        <Button width="default">
          Open Popover
        </Button>
      </OverlayWrapper>
    );
  }))
  .add('Pinned popover', (() => {
    return (
      <OverlayWrapper
        behavior="click"
        horizontalAttachment="left"
        horizontalTargetAttachment="right"
        isConstrainedToScreen={ true }
        overlay={ <Popover title="Lorem ipsum dolor sit amet">
          <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
        </Popover> }
        shouldHideOnClick={ true }
        verticalAttachment="middle"
        verticalTargetAttachment="middle" >
        <Button width="default">
          Open Pinned Popover
        </Button>
      </OverlayWrapper>
    );
  }))
  .add('Open on hover', (() => {
    return (
      <div>
        <OverlayWrapper
          behavior="hover"
          horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
          overlay={ <Popover title="Lorem ipsum dolor sit amet">
            <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
          </Popover> }
          verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') } >
          <Button width="default">
            Open Popover
          </Button>
        </OverlayWrapper>
        <OverlayWrapper
          behavior="hover"
          horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
          overlay={ <Popover title="Lorem ipsum dolor sit amet">
            <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
          </Popover> }
          verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') } >
          <Button width="default">
            Open Popover
          </Button>
        </OverlayWrapper>
        <OverlayWrapper
          behavior="hover"
          horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
          overlay={ <Popover title="Lorem ipsum dolor sit amet">
            <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
          </Popover> }
          verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') } >
          <Button width="default">
            Open Popover
          </Button>
        </OverlayWrapper>
        <OverlayWrapper
          behavior="hover"
          horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
          overlay={ <Popover title="Lorem ipsum dolor sit amet">
            <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
          </Popover> }
          verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') } >
          <Button width="default">
            Open Popover
          </Button>
        </OverlayWrapper>
        <OverlayWrapper
          behavior="hover"
          horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
          overlay={ <Popover title="Lorem ipsum dolor sit amet">
            <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
          </Popover> }
          verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') } >
          <Button width="default">
            Open Popover
          </Button>
        </OverlayWrapper>
        <OverlayWrapper
          behavior="hover"
          horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
          overlay={ <Popover title="Lorem ipsum dolor sit amet">
            <p>Ipsa officiis bad-news minus earum a aperiam! Aperiam reiciendis vitae nihil libero et, hic!</p>
          </Popover> }
          verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') } >
          <Button width="default">
            Open Popover
          </Button>
        </OverlayWrapper>
      </div>
    );
  }))

  .add('Trying diff components', (() => {
    return (
      <OverlayWrapper
        behavior="hover"
        horizontalAttachment={ select('horizontalAttachment', alignOpts, 'center') }
        overlay={ <div>this is a box to try</div> }
        verticalAttachment={ select('verticalAttachment', verticalAlignOpts, 'top') } >
        <Button width="default">
          Open Popover
        </Button>
      </OverlayWrapper>
    );
  }));
