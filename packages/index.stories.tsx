import {storiesOf} from "@storybook/react";
import * as React from "react";
import {MyTestComponent} from "./test/components/MyTestComponent";

const buttonStories = storiesOf("Buttons", module);
buttonStories.add("button",
    () => {
        return <MyTestComponent/>;
    });
