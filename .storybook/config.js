import { configure, addDecorator, addParameters } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import {withA11y} from '@storybook/addon-a11y';

// import customTheme from "./customTheme";

const req = require.context('../packages', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

addParameters({
  options: {
    name: 'My Custom Storybook',
    isFullScreen: false,
    showPanel: true,
    sortStoriesByKind: true,
    enableShortcuts: true,
    addonPanelInRight: true,
    // more configuration here
  },
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withA11y);
configure(loadStories, module);
