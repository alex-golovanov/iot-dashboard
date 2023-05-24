import {
  TSensorMessage,
  useSensorWebSocketContext,
  useSensorWebSocketData,
} from '@/providers';

import { Switch } from '@/components';
import { DEFAULT_VALUE } from './constants';

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
    <div>
      <div>
        {id} - {name} - {unit} - {value}
      </div>
      <Switch onCheckedChange={handleOnClick} defaultChecked={connected} />
    </div>
  );
};
