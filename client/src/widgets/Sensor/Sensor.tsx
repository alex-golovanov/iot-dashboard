import { motion } from 'framer-motion';

import { TSensorMessage, useSensorWebSocketContext } from '@/providers';

import { Switch } from '@/components';
import * as styles from './styles.css';
import { SensorValue } from './SensorValue';

export const Sensor: React.FC<Omit<TSensorMessage, 'value'>> = ({
  id,
  name,
  unit,
  connected,
  type,
}) => {
  const socket = useSensorWebSocketContext();

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
        <Switch onCheckedChange={handleOnClick} checked={connected} />
      </div>
      <SensorValue id={id} type={type} />
      <div className={styles.footer}>{name}</div>
    </motion.div>
  );
};
