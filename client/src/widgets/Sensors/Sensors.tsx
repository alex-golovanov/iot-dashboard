import { useMemo, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Sensor } from '../Sensor';
import { useSensors } from './useSensors';

import { Checkbox } from '@/components';
import * as styles from './styles.css';

export const Sensors = () => {
  const sensors = useSensors();
  const [showConnected, setShowConnected] = useState(false);
  const filteredSensors = useMemo(() => {
    const sensorArray = Object.values(sensors);
    return showConnected
      ? sensorArray.filter((sensor) => sensor.connected === true)
      : sensorArray;
  }, [sensors, showConnected]);

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1>IoT sensors</h1>
        <Checkbox
          label="only connected"
          onCheckedChange={(checked) => setShowConnected(Boolean(checked))}
        />
      </div>
      <div className={styles.sensors}>
        <AnimatePresence>
          {filteredSensors.map((sensor) => (
            <Sensor key={sensor.id} {...sensor} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};
