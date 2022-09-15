const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
var CronJob = require('cron').CronJob;

var port = new SerialPort({ path: '/dev/ttyACM0', baudRate: 9600, autoOpen: true })

const parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

var lastKwh = 0;

port.on("open", () => {
  console.log('serial port open');
});

var t1 = null;
var t2 = null;
var tickcount = 0;

parser.on('data', data =>{
  t2 = new Date();
  if (t1 != null) {
    var diffSeconds = (t2 - t1) / 1000;
    var powerKwh = 3600 / ( diffSeconds * 1000);
    lastKwh = powerKwh.toFixed(4);
//    console.log(`${t2} ${tickcount} ${diffSeconds} ${powerkWh.toFixed(4)}`);
  }
  t1 = t2;
  tickcount++;
});

function logKwh() {
  var now = new Date();
  console.log(`${now} ${lastKwh}`);
}

var job = new CronJob(
	'0 * * * * *',
	logKwh(),
	null,
	true,
	'America/Los_Angeles'
);
job.start();

/*
while (true) {
  console.log(new Date());
}
*/
/*
1000 flashes = 1 kWh
http://www.reuk.co.uk/wordpress/solar/flashing-led-on-electricity-meter/
Power (kW) = 3600 (secs in 1hr) divided by (the seconds between flashes * number of Imp/kWh printed on meter)
*/
