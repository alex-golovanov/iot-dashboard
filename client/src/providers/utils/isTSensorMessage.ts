import { TSensorMessage } from '..';

export const isTSensorMessage = (data: unknown): data is TSensorMessage => {
  if (data && typeof data === 'object' && 'id' in data && 'value' in data && data.value) {
    return true;
  }

  return false;
};
