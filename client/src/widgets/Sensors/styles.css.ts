import { style } from '@vanilla-extract/css';
import { theme } from '@/styles';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 12,
  width: 468,
});

export const sensors = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: 8,
});

export const header = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  borderBottom: `1px dashed ${theme.colors.palette.gray6}`,
  height: 50,
});
