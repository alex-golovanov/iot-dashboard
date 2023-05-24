import { useMemo, useState } from 'react';
import { Sensor } from '../Sensor/Sensor';
import { useSensors } from './useSensors';

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
      <input
        type='checkbox'
        checked={showConnected}
        onChange={() =>
          setShowConnected((prevShowConnected) => !prevShowConnected)
        }
      />
      {filteredSensors.map((sensor) => (
        <Sensor key={sensor.id} {...sensor} />
      ))}
    </div>
  );
};
