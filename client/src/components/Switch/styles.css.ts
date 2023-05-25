import { style } from '@vanilla-extract/css';
import { theme } from '@/styles';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const switchRoot = style({
  width: 24,
  height: 14,
  borderRadius: 9999,
  backgroundColor: theme.colors.palette.indigo7,
  position: 'relative',
  boxShadow: `0 0 2px ${theme.colors.palette.blackA7}`,
  cursor: 'pointer',

  ':hover': {
    backgroundColor: theme.colors.palette.indigo8,
  },

  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: theme.colors.palette.indigo10,
    },

    '&[data-state="checked"]:hover': {
      backgroundColor: theme.colors.palette.indigo8,
    },
  },

  transition: 'background-color 250ms',
});

export const switchThumb = style({
  display: 'block',
  width: 12,
  height: 12,
  backgroundColor: 'white',
  borderRadius: 9999,
  boxShadow: `0 0 2px ${theme.colors.palette.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(1px)',
  willChange: 'transform',

  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(11px)',
    },
  },
});

export const label = style({
  fontSize: 15,
  lineHeight: 1,
});
