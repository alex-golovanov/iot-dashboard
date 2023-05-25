import { SensorWebSocketProvider } from '@/providers';

import { Sensors } from '@/widgets';

function App() {
  return (
    <SensorWebSocketProvider>
      <Sensors />
    </SensorWebSocketProvider>
  );
}

export default App;
