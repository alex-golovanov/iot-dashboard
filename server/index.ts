import { Observable, of } from 'rxjs';
import { concatMap, delay } from 'rxjs/operators';
import WebSocket from 'ws';
import { scaleLinear } from 'd3-scale';

const PORT = 5000;
const SINE_AMPLITUDE = 10;
const SINE_FREQUENCY = 0.0001;

interface ISensor {
  id: string;
  name: string;
  connected: boolean;
  unit: string;
  value: string | null;
  range: [number, number];
  type: 'temperature' | 'pressure' | 'humidity' | 'pm' | 'wind';
}

const sensors: ISensor[] = [
  {
    id: '0',
    name: 'Temperature',
    connected: false,
    unit: '°C',
    value: '15',
    range: [-50, 50],
    type: 'temperature',
  },
  {
    id: '1',
    name: 'Pressure',
    connected: false,
    unit: 'kPa',
    value: '101.325',
    range: [54.02, 101.325],
    type: 'pressure',
  },
  {
    id: '2',
    name: 'Humidity',
    connected: false,
    unit: '%',
    value: '45',
    range: [0, 100],
    type: 'humidity',
  },
  {
    id: '3',
    name: 'PM2.5',
    connected: false,
    unit: 'PM2.5',
    value: '50',
    range: [0, 300],
    type: 'pm',
  },
  {
    id: '4',
    name: 'PM10',
    connected: false,
    unit: 'PM10',
    value: '43',
    range: [0, 300],
    type: 'pm',
  },
  {
    id: '5',
    name: 'Wind',
    connected: false,
    unit: 'm/s',
    value: '7',
    range: [0, 33.5],
    type: 'wind',
  },
];

let connectedSensors: string[] = [];

const isSensorConnected = (id: string): boolean => {
  return connectedSensors.includes(id);
};

const scale = (amplitude: number, range: [number, number]) =>
  scaleLinear().domain([-amplitude, amplitude]).range(range);

const sensorScales = Object.fromEntries(
  sensors.map(({ type, range }) => {
    return [
      type,
      scaleLinear().domain([-SINE_AMPLITUDE, SINE_AMPLITUDE]).range(range),
    ];
  })
);

const generateSensor = (sensor: ISensor): ISensor => {
  return {
    ...sensor,
    connected: isSensorConnected(sensor.id),
    value: isSensorConnected(sensor.id)
      ? sensorScales[sensor.type](
          Math.sin(Date.now() * SINE_FREQUENCY) * SINE_AMPLITUDE
        ).toFixed(3)
      : null,
  };
};

let initialized = false;

const wss = new WebSocket.Server({ port: PORT });

wss.on('connection', (client) => {
  client.on('message', (message: string) => {
    let parsedMessage: any;
    try {
      parsedMessage = JSON.parse(message);
    } catch (error) {
      parsedMessage = message;
    }

    console.log('Client -> Server:', parsedMessage);

    if (
      parsedMessage &&
      parsedMessage.command === 'disconnect' &&
      parsedMessage.id !== undefined
    ) {
      connectedSensors = connectedSensors.filter(
        (id) => id !== parsedMessage.id
      );

      const sensorToDisconnect = sensors.find(
        (sensor) => sensor.id === parsedMessage.id
      );
      if (sensorToDisconnect) {
        wss.clients.forEach((client) => {
          client.send(JSON.stringify(generateSensor(sensorToDisconnect)));
        });
      }
    } else if (
      parsedMessage &&
      parsedMessage.command === 'connect' &&
      parsedMessage.id !== undefined
    ) {
      if (!connectedSensors.includes(parsedMessage.id)) {
        connectedSensors.push(parsedMessage.id);
      }
    } else {
      console.log('Unhandled message');
    }
  });

  sensors.forEach((sensor) => {
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(generateSensor(sensor)));
    });
  });

  if (!initialized) {
    new Observable<ISensor>((observer) => {
      const interval = setInterval(() => {
        sensors.forEach((sensor) => {
          observer.next(generateSensor(sensor));
        });
      }, 100);

      return () => {
        clearInterval(interval);
      };
    })
      .pipe(
        concatMap((data) => {
          return of(data).pipe(delay(5 + 5 * Math.random()));
        })
      )
      .subscribe((sensorData) => {
        if (connectedSensors.includes(sensorData.id)) {
          wss.clients.forEach((client) => {
            client.send(JSON.stringify(sensorData));
          });
        }
      });

    initialized = true;
  }
});

console.log(`Server started on: ws://localhost:${PORT}`);
