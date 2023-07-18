import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/styles';
import { getScale, toHex } from 'color2k';
import { GRADIENTS } from './constants';

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

export const footer = style({
  display: 'flex',
  alignItems: 'center',
});

export const value = style({
  fontSize: 20,
  fontWeight: 500,
  fontFamily: theme.font.mono.family,
  textShadow: theme.colors.textShadow.light,
  transition: 'color 500ms',
});

export const gradientVariants: Record<string, ReturnType<typeof styleVariants>> = {};
for (const [type, colors] of Object.entries(GRADIENTS)) {
  const scale = getScale(...colors.map(toHex));
  const tuples: Record<string, [string, { color: string }]> = {};
  for (let i = 0; i <= 10; i++) {
    tuples[i] = [value, { color: scale(i / 10) }];
  }

  gradientVariants[type] = styleVariants(tuples);
}
