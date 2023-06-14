import { TSensorMessage, isTSensorMessage, useSensorWebSocketData } from '@/providers';

import { DEFAULT_VALUE } from './constants';
import * as styles from './styles.css';
import { useRef } from 'react';

export const SensorValue: React.FC<Pick<TSensorMessage, 'id'>> = ({ id }) => {
  const lastValue = useRef(DEFAULT_VALUE);
  const { value } =
    useSensorWebSocketData<TSensorMessage>(
      (message) => isTSensorMessage(message) && message.id === id,
    ) ?? {};

  if (value) {
    lastValue.current = value;
  }

  return <div className={styles.main}>{value || lastValue.current}</div>;
};
