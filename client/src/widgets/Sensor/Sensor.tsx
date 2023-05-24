import {
  TSensorMessage,
  useSensorWebSocketContext,
  useSensorWebSocketData,
} from '@/providers';
import { DEFAULT_VALUE } from './constants';
import { useState } from 'react';

export const Sensor: React.FC<Omit<TSensorMessage, 'value'>> = ({
  id,
  name,
  unit,
  connected,
}) => {
  const socket = useSensorWebSocketContext();
  const { value = DEFAULT_VALUE } =
    useSensorWebSocketData((message) => message.id === id) ?? {};

  const [isConnected, setIsConnected] = useState(connected);

  const handleOnClick = () => {
    if (isConnected) {
      setIsConnected(false);
      socket.send(JSON.stringify({ command: 'disconnect', id }));
    } else {
      setIsConnected(true);
      socket.send(JSON.stringify({ command: 'connect', id }));
    }
  };

  return (
    <div>
      <div>
        {id} - {name} - {unit} - {value}
      </div>
      <button onClick={handleOnClick}>con</button>
    </div>
  );
};
