import { TSensorMessage, useSensorWebSocketData } from '@/providers';

import { DEFAULT_VALUE } from './constants';
import * as styles from './styles.css';

export const SensorValue: React.FC<Pick<TSensorMessage, 'id'>> = ({ id }) => {
  const { value } = useSensorWebSocketData((message) => message.id === id) ?? {};

  return <div className={styles.main}>{value || DEFAULT_VALUE}</div>;
};
