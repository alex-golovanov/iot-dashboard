import { style } from '@vanilla-extract/css';
import { theme } from '@/styles';

export const root = style({
  display: 'flex',
  alignItems: 'center',
});

export const checkboxRoot = style({
  backgroundColor: 'white',
  width: 20,
  height: 20,
  borderRadius: 4,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: `1px solid ${theme.colors.palette.indigo8}`,
  boxShadow: `0 0 2px ${theme.colors.palette.blackA7}`,

  ':hover': {
    backgroundColor: theme.colors.palette.indigo3,
  },
});

export const checkboxIndicator = style({
  color: theme.colors.palette.indigo11,
});

export const label = style({
  paddingLeft: 8,
  fontSize: 16,
  lineHeight: 1,
  color: theme.colors.text,
});
