import { SensorWebSocketProvider } from '@/providers';

import { Sensors } from '@/widgets';

import './App.css';

function App() {
  return (
    <SensorWebSocketProvider>
      <Sensors />
    </SensorWebSocketProvider>
  );
}

export default App;
