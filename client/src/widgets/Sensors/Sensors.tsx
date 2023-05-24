import { useSensors } from './useSensors';

export const Sensors = () => {
  const sensors = useSensors();
  return (
    <div>
      {Object.values(sensors).map((sensor) => (
        <div key={sensor.id}>
          {sensor.name} - {sensor.value}
        </div>
      ))}
    </div>
  );
};
