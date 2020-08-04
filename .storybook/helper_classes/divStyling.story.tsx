import React from "react";
import { storiesOf } from "@storybook/react";

import "./index.scss";

import { Sizing, BackgroundColor, Border } from "./divStyling";

const stories = storiesOf("Helper Classes/Div Styling", module);
stories
  .addDecorator((story) => <div className="soft-quad--sides soft-quad--ends">{story()}</div>);

stories.add("Background color", () => {
  return (
    <div>
      <BackgroundColor/>
    </div>
  );
})
.add("Borders", () => {
  return (
    <div>
      <Border/>
    </div>
  );
})
.add("Sizing", () => {
  return (
    <div>
      <Sizing/>
    </div>
  );
});
