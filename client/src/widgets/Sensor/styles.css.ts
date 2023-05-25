import { style } from '@vanilla-extract/css';
import { theme } from '@/styles';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: 150,
  height: 120,
  border: `1px solid ${theme.colors.palette.gray6}`,
  padding: '8px 12px',
  borderRadius: 8,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

export const unit = style({
  fontSize: 14,
});

export const main = style({
  fontSize: 20,
  fontWeight: 500,
});

export const footer = style({
  display: 'flex',
  alignItems: 'center',
});
