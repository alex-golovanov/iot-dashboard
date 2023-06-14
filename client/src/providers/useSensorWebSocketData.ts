import { useState, useEffect } from 'react';
import { useSensorWebSocketContext } from '.';

export const useSensorWebSocketData = <T>(match: (message: T | null) => boolean) => {
  const socket = useSensorWebSocketContext();
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const onMessage = (message: MessageEvent) => {
      try {
        const data = JSON.parse(message?.data);
        if (data && match(data)) {
          setData(data);
        }
      } catch (e) {
        console.error(e);
      }
    };

    socket.addEventListener('message', onMessage);

    return () => {
      socket.removeEventListener('message', onMessage);
    };
  }, [socket, match]);

  return data;
};
