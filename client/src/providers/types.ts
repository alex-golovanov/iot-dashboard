import { SENSOR_TYPES } from './constants';

export type TSensorMessage = {
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string;
  range: [number, number];
  type: (typeof SENSOR_TYPES)[number];
};
