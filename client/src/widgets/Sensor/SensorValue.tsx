import { useMemo, useRef } from 'react';
import clsx from 'clsx';

import { TSensorMessage, isTSensorMessage, useSensorWebSocketData } from '@/providers';
import { linearScale } from '@/utils';

import { GRADIENT_RANGE, DEFAULT_DOMAIN, DEFAULT_VALUE } from './constants';
import * as styles from './styles.css';

export const SensorValue: React.FC<Pick<TSensorMessage, 'id' | 'type'>> = ({
  id,
  type,
}) => {
  const lastValue = useRef(DEFAULT_VALUE);
  const { value, range } =
    useSensorWebSocketData<TSensorMessage>(
      (message) => isTSensorMessage(message) && message.id === id,
    ) ?? {};

  const [lowest, highest] = range ?? DEFAULT_DOMAIN;

  if (value) {
    lastValue.current = value;
  }

  const scale = useMemo(
    () => linearScale([lowest, highest], GRADIENT_RANGE),
    [highest, lowest],
  );

  const variant = Math.round(scale(Number(value)));

  return (
    <div className={clsx(styles.gradientVariants[type][variant], styles.value)}>
      {value || lastValue.current}
    </div>
  );
};
