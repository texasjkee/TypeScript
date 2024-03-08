const message: string | number = 5;
const messages: string[] | number[] = ['a', 'b'];

function printMsg(msg: string | number): void {
  if (typeof msg === 'string') {
    console.log(msg.toLowerCase());
  } else {
    console.log(msg.toFixed());
  }
}

printMsg('yo');
printMsg(5);

function checkReadings(readings: { system: number } | { user: number }): void {
  if ('system' in readings) {
    console.log(readings.system);
  } else {
    console.log(readings.user);
  }
}

function logValue(x: string | Date) {
  if (x instanceof Date) {
    console.log(x.getDate());
  } else {
    console.log(x.trim());
  }
}
