import { style } from '@vanilla-extract/css';
import { theme } from '@/styles';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
});

export const switchRoot = style({
  width: 42,
  height: 23,
  borderRadius: 9999,
  backgroundColor: theme.colors.palette.indigo8,
  position: 'relative',
  boxShadow: `0 0 2px ${theme.colors.palette.blackA7}`,
  cursor: 'pointer',

  border: `1px solid ${theme.colors.palette.indigo8}`,

  ':hover': {
    backgroundColor: theme.colors.palette.indigo9,
  },

  selectors: {
    '&[data-state="checked"]': {
      backgroundColor: theme.colors.palette.indigo11,
    },
  },
});

export const switchThumb = style({
  display: 'block',
  width: 20,
  height: 20,
  backgroundColor: 'white',
  borderRadius: 9999,
  boxShadow: `0 0 2px ${theme.colors.palette.blackA7}`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',

  selectors: {
    '&[data-state="checked"]': {
      transform: 'translateX(20px)',
    },
  },
});

export const label = style({
  fontSize: 15,
  lineHeight: 1,
});
