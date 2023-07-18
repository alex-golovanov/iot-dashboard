import {
  amber,
  blue,
  crimson,
  cyan,
  grass,
  green,
  indigo,
  lime,
  mint,
  orange,
  plum,
  purple,
  red,
  teal,
  tomato,
  violet,
  yellow,
} from '@radix-ui/colors';

import { darken, lighten, mix } from 'color2k';

export const DEFAULT_VALUE = '--';
export const DEFAULT_DOMAIN: [number, number] = [0, 100];
export const DEFAULT_RANGE: [number, number] = [0, 10];

export const GRADIENTS = {
  temperature: [
    darken(indigo.indigo9, 0.2),
    darken(blue.blue9, 0.25),
    darken(blue.blue9, 0.15),
    darken(blue.blue9, 0.05),
    blue.blue9,
    lighten(blue.blue9, 0.1),
    lighten(blue.blue9, 0.2),
    lighten(yellow.yellow9, 0.1),
    yellow.yellow9,
    lighten(orange.orange9, 0.1),
    orange.orange9,
    darken(red.red9, 0.2),
  ],

  pressure: [
    yellow.yellow9,
    lighten(lime.lime9, 0),
    darken(mint.mint9, 0.25),
    darken(blue.blue9, 0.2),
    darken(indigo.indigo9, 0.2),
    darken(purple.purple9, 0.2),
  ],

  wind: [
    darken(violet.violet9, 0.1),
    blue.blue9,
    green.green9,
    yellow.yellow9,
    orange.orange9,
    darken(red.red9, 0.1),
    darken(red.red9, 0.2),
    darken(tomato.tomato9, 0.25),
    darken(plum.plum9, 0.3),
    darken(purple.purple9, 0.35),
  ],

  humidity: [
    orange.orange9,
    amber.amber9,
    yellow.yellow9,
    mix(lime.lime9, grass.grass9, 0.5),
    teal.teal9,
    cyan.cyan9,
    blue.blue9,
    darken(blue.blue9, 0.2),
  ],

  pm: [
    lime.lime9,
    yellow.yellow9,
    amber.amber9,
    crimson.crimson9,
    plum.plum9,
    purple.purple9,
  ],
};
