import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';

import Col from './Col';
import Row from './Row';
import Container from './Container';
import Card from '../Card';
import Button from '../Button';
import Code from '../Code';

import { addParameters } from '@storybook/react';
const viewports = {
  iphone5: {
    name: 'Small Phone',
    styles: {
      height: '568px',
      width: '320px',
    },
    type: 'mobile',
  },
  iphonex: {
    name: 'Large Phone',
    styles: {
      height: '812px',
      width: '375px',
    },
    type: 'mobile',
  },
  ipad: {
    name: 'Tablet',
    styles: {
      height: '1024px',
      width: '768px',
    },
    type: 'tablet',
  },
};
addParameters({ viewport: { viewports: viewports } });

const paddingOptions = {
  none: 'none',
  around: 'around',
  sides: 'sides',
  ends: 'ends',
  remove: 'remove',
};

const borderOptions = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right',
  sides: 'sides',
  ends: 'ends',
  all: 'all',
  none: 'none',
};

const stories = storiesOf('Layout', module);
stories
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div id="root-preview">
      {story()}
    </div>
  ));

stories.add('Basic Examples', withInfo()(() => {
  return (
    <div>
      <h1>Default (Equal Widths)</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        pull={ boolean('pull', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row
          removeGutters={ boolean('removeGutters', true, 'Row') }
          displayVertical={ boolean('displayVertical', false) }>
          <Col>Col</Col>
          <Col>Col</Col>
        </Row>
        <Row
          removeGutters={ boolean('removeGutters', true, 'Row') }
          displayVertical={ boolean('displayVertical', false) }>
          <Col>Col</Col>
          <Col>Col</Col>
          <Col>Col</Col>
        </Row>
        <Row
          removeGutters={ boolean('removeGutters', true, 'Row') }
          displayVertical={ boolean('displayVertical', false) }>
          <Col>Col</Col>
          <Col>Col</Col>
          <Col>Col</Col>
          <Col>Col</Col>
        </Row>
      </Container>
      <h1 className="push-triple--top">Widths</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        pull={ boolean('pull', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 12 }>12</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 11 }>11</Col>
          <Col small={ 1 }>1</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 10 }>10</Col>
          <Col small={ 2 }>2</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 9 }>9</Col>
          <Col small={ 3 }>3</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 8 }>8</Col>
          <Col small={ 4 }>4</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 7 }>7</Col>
          <Col small={ 5 }>5</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 6 }>6</Col>
          <Col small={ 6 }>6</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 5 }>5</Col>
          <Col small={ 7 }>7</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 4 }>4</Col>
          <Col small={ 8 }>8</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 3 }>3</Col>
          <Col small={ 9 }>9</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 2 }>2</Col>
          <Col small={ 10 }>10</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 1 }>1</Col>
          <Col small={ 11 }>11</Col>
        </Row>
      </Container>
      <h1 className="push-triple--top">Equal Widths</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        pull={ boolean('pull', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 6 }>6</Col>
          <Col small={ 6 }>6</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 4 }>4</Col>
          <Col small={ 4 }>4</Col>
          <Col small={ 4 }>4</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 3 }>3</Col>
          <Col small={ 3 }>3</Col>
          <Col small={ 3 }>3</Col>
          <Col small={ 3 }>3</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
          <Col small={ 2 }>2</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
          <Col large={ 1 }>1</Col>
        </Row>
      </Container>
      <h1 className="push-triple--top">"Auto"</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        pull={ boolean('pull', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ true }>true</Col>
          <Col small={ true }>true</Col>
          <Col small={ true }>true</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', true, 'Row') }>
          <Col small={ 'auto' }>auto</Col>
          <Col small={ 'auto' }>auto</Col>
          <Col small={ 'auto' }>auto</Col>
        </Row>
      </Container>
    </div>
  );
}))
  .add('Minimal', withInfo()(() => {
    return (<div>
      <h1>With Container</h1>
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pull={ boolean('pull', true) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', true) }>
        <Row>
          <Col>Hello short example</Col>
          <Col>Hello short example</Col>
        </Row>
      </Container>
      <h1 className="push-quad--top">No Container</h1>
      <Row
        outlineDebug={ boolean('outlineDebug', true) }>
        <Col paddedContent={ select('paddedContent', paddingOptions, 'none') }>Hello short example</Col>
        <Col paddedContent={ select('paddedContent', paddingOptions, 'none') }>Hello short example</Col>
      </Row>
    </div>);
  }))
  .add('Cards', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <p>Row 1: fillSpace</p>
        <Row>
          <Col large={ 'fillSpace' }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
          <Col large={ 'fillSpace' }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
        </Row>
        <p className="push-triple--top">Row 2: fitContent</p>
        <Row>
          <Col large={ 'fitContent' }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
          <Col large={ 'fitContent' }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
        </Row>
        <p className="push-triple--top">Row 2: 8/4</p>
        <Row>
          <Col large={ 4 }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
          <Col large={ 8 }>
            <Card title="Card Title" shadow={ false } testSection="card">
              Hello! This is a short card example.
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }))
  .add('Col paddedContent', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        paddedContent={ 'none' }
        gutters={ true }
        fluid={ boolean('fluid', false) }>
        <p>Note the Container has gutters=true</p>
        <Row
          removeGutters={ boolean('removeGutters', false) }
          border={ 'top' }>
          <Col
            large={ 'fillSpace' }
            paddedContent={ select('paddedContent', paddingOptions, 'around') }
            border={ select('border', borderOptions, 'right') }>
            Change the padding on individual Columns via props. Try the knob to adjust padding in these cells together.
          </Col>
          <Col
            large={ 'fillSpace' }
            paddedContent={ select('paddedContent', paddingOptions, 'around') }
            border={ select('border', borderOptions, 'right') }>
            Change the padding on individual Columns via props. Try the knob to adjust padding in these cells together.
          </Col>
        </Row>
      </Container>
    );
  }))
  .add('Borders', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', false) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        pull={ boolean('pull', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'around') }
        removeGutters={ boolean('removeGutters', false) }
        fluid={ boolean('fluid', true) }>
        <Row
          removeGutters={ boolean('removeGutters', false) }
          border={ 'ends' }
          paddedContent={ 'ends' }>
          <Col
            paddedContent={ 'around' }>
            <h2 className="push-half--bottom">Some Title</h2>
            Col with border sides
          </Col>
          <Col
            paddedContent={ 'around' }
            border={ 'left' }>
            <h2 className="push-half--bottom">A Longer Page Title</h2>
            Col with border sides and long-ish content that will definitely run to multiple lines.
          </Col>
          <Col
            paddedContent={ 'around' }
            border={ 'left' }>
            Col with border sides
          </Col>
          <Col
            paddedContent={ 'around' }
            border={ 'left' }>
            Col with border sides
          </Col>
          <Col
            paddedContent={ 'around' }
            border={ 'left' }>
            Col with border right
          </Col>
        </Row>
      </Container>
    );
  }))
  .add('Pull', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pull={ boolean('pull', true) }
        paddedContent={ select('paddedContent', paddingOptions, 'around') }
        fluid={ boolean('fluid', false) }>
        <Row>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Vertical', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row
          removeGutters={ boolean('removeGutters', false) }
          displayVertical={ boolean('displayVertical', true) }>
          <Col>1 of 6</Col>
          <Col>2 of 6</Col>
          <Col>3 of 6</Col>
          <Col>4 of 6</Col>
          <Col>5 of 6</Col>
          <Col>6 of 6</Col>
        </Row>
        <Row
          removeGutters={ boolean('removeGutters', false) }
          displayVertical={ true }>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('2-Column', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row removeGutters={ boolean('removeGutters', false) }>
          <Col small={ true }>1 of 2</Col>
          <Col small={ true }>2 of 2</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', false) }>
          <Col small={ 8 }>8</Col>
          <Col small={ 4 }>4</Col>
        </Row>
      </Container>
    );
  }))
  .add('Auto width', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row removeGutters={ boolean('removeGutters', false) }>
          <Col>1 of 2</Col>
          <Col>2 of 2</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', false) }>
          <Col>1 of 3</Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Order', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row removeGutters={ boolean('removeGutters', false) }>
          <Col small={ true }>First, but unordered</Col>
          <Col small={{ order: 12 }}>Second, but last</Col>
          <Col small={{ order: 1 }}>Third, but second</Col>
        </Row>
      </Container>
    );
  }))
  .add('Feature Flag Welcome', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row removeGutters={ boolean('removeGutters', false) }>
          <Col medium={{ span: 8, offset: 2 }}>
            <h2>Features</h2>
            <p className="lead">Manage your app’s feature flags</p>
            <Row>
              <Col small={ 6 }>
                <img src="https://s3-us-west-1.amazonaws.com/zach-designs/flagly/thing.svg" />
              </Col>
              <Col small={ 6 }>
                <h6>What’s a Feature Flag?</h6>
                { /* eslint-disable max-len */ }
                <p>Feature flags, also known as feature toggles, are a software development technique that lets you turn certain functionality on and off without deploying new code. This allows for better control and more experimentation over the full lifecycle of features. You can toggle a feature off to release code quickly without exposing it to users.</p>
                { /* eslint-enable max-len */ }
                <h6>Try it for yourself</h6>
                <Code>
  var enabled = optimizely.isFeatureEnabled(”chat_window”, userId);
  if(enabled) {
                    // Feature is enabled
                  } else {
                    // Feature is disabled
                  }
                </Code>
                <Row>
                  <Col large={ 6 }>
                    <Button width={ 'full' }>View Docs</Button>
                  </Col>
                  <Col large={ 6 }>
                    <Button width={ 'full' }>Create Feature</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }))
  .add('Defined width', withInfo()(() => {
    return (
      <Container
        outlineDebug={ boolean('outlineDebug', true) }
        pushRowsTop={ boolean('pushRowsTop', false) }
        paddedContent={ select('paddedContent', paddingOptions, 'none') }
        fluid={ boolean('fluid', false) }>
        <Row removeGutters={ boolean('removeGutters', false) }>
          <Col>1 of 3</Col>
          <Col small={ 6 }>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
        <Row removeGutters={ boolean('removeGutters', false) }>
          <Col>1 of 3</Col>
          <Col small={ 5 }>2 of 3 (wider)</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    );
  }))
  .add('Responsive', withInfo()(() => {
    return (
      <div>
        <h1>Simple</h1>
        <Container
          outlineDebug={ boolean('outlineDebug', true) }
          pushRowsTop={ boolean('pushRowsTop', false) }
          paddedContent={ select('paddedContent', paddingOptions, 'none') }
          fluid={ boolean('fluid', false) }>
          <Row removeGutters={ boolean('removeGutters', false) }>
            <Col small={ 8 }>small=8</Col>
            <Col small={ 4 }>small=4</Col>
          </Row>
          <Row removeGutters={ boolean('removeGutters', false) }>
            <Col small={ true }>small=true</Col>
            <Col small={ true }>small=true</Col>
            <Col small={ true }>small=true</Col>
          </Row>
        </Container>

        <h1 className="push-quad--top">Complex</h1>
        <Container
          fluid={ boolean('fluid', false) }
          outlineDebug={ boolean('outlineDebug', true) }
          pushRowsTop={ boolean('pushRowsTop', false) }
          paddedContent={ select('paddedContent', paddingOptions, 'none') }>

          <Row removeGutters={ boolean('removeGutters', false) }>
            <Col small={ 12 } medium={ 8 }>small=12 medium=8</Col>
            <Col small={ 6 } medium={ 4 }>small=6 medium=4</Col>
          </Row>

          <Row removeGutters={ boolean('removeGutters', false) }>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
            <Col small={ 6 } medium={ 3 }>small=6 medium=3</Col>
          </Row>

          <Row removeGutters={ boolean('removeGutters', false) }>
            <Col small={ 6 }>small=6</Col>
            <Col small={ 6 }>small=6</Col>
          </Row>
        </Container>
      </div>
    );
  }))
;