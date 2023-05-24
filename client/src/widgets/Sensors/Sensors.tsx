import { Sensor } from '../Sensor/Sensor';
import { useSensors } from './useSensors';

export const Sensors = () => {
  const sensors = useSensors();
  return (
    <div>
      {Object.values(sensors).map((sensor) => (
        <Sensor key={sensor.id} {...sensor} />
      ))}
    </div>
  );
};
