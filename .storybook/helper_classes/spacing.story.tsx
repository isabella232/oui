import React from "react";
import { storiesOf } from "@storybook/react";

import { withKnobs } from "@storybook/addon-knobs";
import "./index.scss";

import { Spacing } from "./spacing";

const stories = storiesOf("Overview|Helper Classes/Spacing", module);
stories
  .addDecorator(withKnobs)
  .addDecorator((story) => <div className="soft-quad--sides soft-quad--ends">{story()}</div>);

stories.add("Default", () => {
  return (
    <div>
      <Spacing/>
    </div>
  );
});
