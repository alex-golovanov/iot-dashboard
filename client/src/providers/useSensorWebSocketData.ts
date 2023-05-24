import { useState, useEffect } from 'react';
import { TSensorMessage, useSensorWebSocketContext } from '.';

export const useSensorWebSocketData = (
  match: (message: TSensorMessage) => boolean
) => {
  const socket = useSensorWebSocketContext();
  const [data, setData] = useState<TSensorMessage | null>(null);

  useEffect(() => {
    const onMessage = (message: MessageEvent) => {
      const data = JSON.parse(message?.data);
      if (data && match(data)) {
        setData(data);
      }
    };

    socket.addEventListener('message', onMessage);

    return () => {
      socket.removeEventListener('message', onMessage);
    };
  }, [socket, match]);

  return data;
};
