import { createGlobalTheme } from '@vanilla-extract/css';

import { blackA, indigo, orange, whiteA } from '@radix-ui/colors';

export const colors = createGlobalTheme(':root', {
  text: blackA.blackA12,
  palette: {
    ...indigo,
    ...orange,
    ...blackA,
    ...whiteA,
  },
});

export const theme = { colors };
