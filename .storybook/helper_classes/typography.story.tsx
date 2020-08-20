import React from "react";
import { storiesOf } from "@storybook/react";

import "./index.scss";

import { Typography } from "./typography";

const stories = storiesOf("Overview|Helper Classes/Typography", module);
stories
  .addDecorator((story) => <div className="soft-quad--sides soft-quad--ends">{story()}</div>);

stories.add("Default", () => {
  return (
    <div>
      <Typography/>
    </div>
  );
});
