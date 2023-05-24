import { useContext } from 'react';
import { SensorWebSocketContext } from '.';

export const useSensorWebSocketContext = () => {
  const context = useContext(SensorWebSocketContext);

  if (!context) {
    throw Error('This hook must be called within SensorWebSocketContext.');
  }

  return context;
};
