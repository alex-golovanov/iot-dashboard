import { createGlobalTheme } from '@vanilla-extract/css';

import { blackA, indigo, orange, gray } from '@radix-ui/colors';

export const colors = createGlobalTheme(':root', {
  text: blackA.blackA12,
  palette: {
    ...indigo,
    ...orange,
    ...blackA,
    ...gray,
  },
});

export const theme = { colors };
