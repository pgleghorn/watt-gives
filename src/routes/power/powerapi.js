const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

var port = new SerialPort({ path: '/dev/ttyACM0', baudRate: 9600, autoOpen: true })

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

port.on("open", () => {
  console.log('serial port open');
});

var t0 = new Date();
var t1 = null;
var t2 = null;
var tick = 0;

parser.on('data', data =>{
  t2 = new Date();
//  console.log(`${t2} received ${data}`);
  if (t1 != null) {
    var diffSeconds = (t2 - t1) / 1000;
    var powerkWh = 3600 / ( diffSeconds * 1000);
    console.log(`${t2} ${tick} ${diffSeconds} ${powerkWh.toFixed(4)}`);
  }
  t1 = t2;
  tick++;
});
