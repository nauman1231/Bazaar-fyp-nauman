import { configure } from '@storybook/react';

configure(require.context('../src/Storybook', true, /\.stories\.js$/), module);
