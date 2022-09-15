This is a bastardized copy of the <a href="https://kit.svelte.dev">SvelteKit</a> demo app,
which I've modified into a tool intended to dynamically render graphs of
the electricity usage in the home. Very much work in progress.

This front-end code runs on a raspberry pi,
which is connected to an arduino via usb. A long cable with a light sensitive
resistor runs from the arduino into the outside electricity cabinet, the resistor
is positioned in front of the LED on the mains power meter. Some code on the arduino
detects the pulses, and reports them over serial connection.  The raspberry pi
listens on the serial connection, notes the pulse frequency and calculates
the effective kWh usage over time.

Build frontend:
```
npm install
```

Run frontend and open a browser:
```
npm run dev -- --open
```

Build frontend final version:
```
npm run build
```

Arduino code is built and uploaded using:
```
buildUpload.sh
```
