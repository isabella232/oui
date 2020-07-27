import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import "./index.scss";

import { DivStyling } from "./divStyling";

const stories = storiesOf("Helper Classes/Div Styling", module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div className="soft-quad--sides soft-quad--ends">{story()}</div>);

stories.add("Default", () => {
  return (
    <div>
      <DivStyling/>
    </div>
  );
});
