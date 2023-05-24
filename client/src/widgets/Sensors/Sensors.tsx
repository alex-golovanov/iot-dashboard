import { useMemo, useState } from 'react';
import { Sensor } from '../Sensor';
import { useSensors } from './useSensors';

import { Checkbox } from '@/components';

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
    <div>
      <Checkbox
        label="Only connected"
        onCheckedChange={(checked) => setShowConnected(Boolean(checked))}
      />

      {filteredSensors.map((sensor) => (
        <Sensor key={sensor.id} {...sensor} />
      ))}
    </div>
  );
};
