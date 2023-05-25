import { motion } from 'framer-motion';

import {
  TSensorMessage,
  useSensorWebSocketContext,
  useSensorWebSocketData,
} from '@/providers';

import { Switch } from '@/components';
import { DEFAULT_VALUE } from './constants';
import * as styles from './styles.css';

export const Sensor: React.FC<Omit<TSensorMessage, 'value'>> = ({
  id,
  name,
  unit,
  connected,
}) => {
  const socket = useSensorWebSocketContext();
  const { value = DEFAULT_VALUE } =
    useSensorWebSocketData((message) => message.id === id) ?? {};

  const handleOnClick = (connect: boolean) => {
    if (connect) {
      socket.send(JSON.stringify({ command: 'connect', id }));
    } else {
      socket.send(JSON.stringify({ command: 'disconnect', id }));
    }
  };

  return (
    <motion.div
      className={styles.root}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.header}>
        <div className={styles.unit}>{unit}</div>
        <Switch onCheckedChange={handleOnClick} defaultChecked={connected} />
      </div>
      <div className={styles.main}>{value}</div>
      <div className={styles.footer}>{name}</div>
    </motion.div>
  );
};
