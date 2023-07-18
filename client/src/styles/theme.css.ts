import { createGlobalTheme } from '@vanilla-extract/css';

import { blackA, gray, green, indigo } from '@radix-ui/colors';

export const root = createGlobalTheme(':root', {
  font: {
    body: {
      family: 'IBM Plex Sans, sans-serif',
    },
    mono: {
      family: 'IBM Plex Mono, monospace',
    },
  },
});

export const colors = createGlobalTheme(':root', {
  text: blackA.blackA12,
  textShadow: {
    light: `0px 1px ${blackA.blackA5}`,
    medium: `0px 1px ${blackA.blackA8}`,
    heavy: `0px 1px ${blackA.blackA11}`,
  },
  palette: {
    ...blackA,
    ...gray,
    ...green,
    ...indigo,
  },
});

export const theme = { colors, ...root };
