import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import "./index.scss";
import TabNav from "../../src/components/TabNav/index";
import Code from "../../src/components/Code/index";

import { FlexAligning,
  FlexDirection,
  Flex1,
  FlexNone,
  FlexWrap } from "./flexboxInteractive";

const stories = storiesOf("Overview|Helper Classes/Layout/Flexbox", module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div id="root-preview">{story()}</div>);

stories.add("Default", () => {
  return (
    <div>
      <section className="demo-only-section hard--top flex flex--column">
        <h1>Flexbox Helper Classes</h1>
        <p>The following examples illustrate the various flexbox helper classes that are available through OUI's CSS.</p>
        <TabNav activeTab="flex" style={['sub']}>
          <TabNav.Tab tabId="flex">
            flex
          </TabNav.Tab>
        </TabNav>
        <div className="flex flex--row push--top">
          <div className="flex--1">
            <p>
              Flex container. Typically other elements with flex specifications
              will live in a flex container.
            </p>
            <ol className="list--numbered">
              <li>Defines a flex container (light purple box)</li>
              <li>Children are flex items (dark purple boxes)</li>
            </ol>
            <div className="flex--dead-center flex flex--1 push--top">
              <div className="demo-only-helper-box-container flex">
                <div>1</div>
                <div>2</div>
                <div>3</div>
              </div>
            </div>
          </div>
          <div className="flex--1 demo-only-code-box">
            <Code
              hasCopyButton={true}
              isHighlighted={true}
              type={ 'block'}
              language={ 'html'}>
              { `<div className='flex'>\n  <div>1</div>\n  <div>2</div>\n  <div>3</div>\n</div>`}
            </Code>
          </div>
        </div>
      </section>
      <FlexDirection/>
      <FlexAligning/>
      <Flex1/>
      <FlexWrap/>
      <FlexNone/>
    </div>
  );
});
