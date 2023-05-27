import { createContext, useEffect, useRef, useState } from 'react';
import { SENSOR_WS_ENDPOINT, SENSOR_WS_RECONNECT_TIMEOUT } from './constants';

const initialWebSocket = new WebSocket(SENSOR_WS_ENDPOINT);

export const SensorWebSocketContext = createContext(initialWebSocket);

type TProps = {
  children?: React.ReactNode;
};

export const SensorWebSocketProvider: React.FC<TProps> = (props) => {
  const [webSocket, setWebSocket] = useState<WebSocket>(initialWebSocket);
  const reconnectCount = useRef(0);

  useEffect(() => {
    const onClose = () => {
      if (reconnectCount.current >= 5) {
        return;
      }

      setTimeout(() => {
        setWebSocket(new WebSocket(SENSOR_WS_ENDPOINT));
      }, SENSOR_WS_RECONNECT_TIMEOUT);
      reconnectCount.current++;
    };

    webSocket.addEventListener('close', onClose);

    return () => {
      webSocket.removeEventListener('close', onClose);
    };
  }, [webSocket]);

  return (
    <SensorWebSocketContext.Provider value={webSocket}>
      {props.children}
    </SensorWebSocketContext.Provider>
  );
};
