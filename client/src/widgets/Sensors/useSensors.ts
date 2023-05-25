import { useState, useRef, useEffect } from 'react';
import { produce } from 'immer';
import { TSensorMessage, useSensorWebSocketContext } from '@/providers';

export const useSensors = () => {
  const socket = useSensorWebSocketContext();

  const [sensors, setSensors] = useState<Record<string, TSensorMessage>>({});
  const sensorRefs = useRef<Record<string, boolean>>({});

  useEffect(() => {
    const onMessage = (message: MessageEvent) => {
      const data = JSON.parse(message?.data);
      if (data) {
        if (!(data.id in sensorRefs.current)) {
          // add newly discovered sensor
          setSensors((prevSensors) =>
            produce(prevSensors, (draft) => {
              draft[data.id] = data;
            }),
          );
        } else if (sensorRefs.current[data.id] !== data.connected) {
          // update sensor state
          setSensors((prevSensors) =>
            produce(prevSensors, (draft) => {
              draft[data.id].connected = data.connected;
            }),
          );
        }

        sensorRefs.current[data.id] = data.connected;
      }
    };

    socket.addEventListener('message', onMessage);

    return () => {
      socket.removeEventListener('message', onMessage);
    };
  }, [socket]);

  return sensors;
};
