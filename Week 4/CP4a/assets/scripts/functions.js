showTime();

let gasLevel = 0;

function getGas() {
  if (gasLevel === 0) {
    gasLevel = 1;
    document.getElementById('gas').src = './assets/images/gas1.png';
    document.getElementById('bttn_gas').src = './assets/images/bttn_gas_1.png';
  } else if (gasLevel === 1) {
    gasLevel = 0;
    document.getElementById('gas').src = './assets/images/gas0.png';
    document.getElementById('bttn_gas').src = './assets/images/bttn_gas_0.png';
  }
}

let tracStatus = 0;
let battStatus = 0;
let brakeStatus = 0;

function toggleTractionControl() {
  if (tracStatus === 0) {
    tracStatus = 1;
    document.getElementById('trac').src = './assets/images/trac1.PNG';
    document.getElementById('toggleTractionControl').src = './assets/images/bttn_trac_1.PNG';
  } else {
    tracStatus = 0;
    document.getElementById('trac').src = './assets/images/trac0.PNG';
    document.getElementById('toggleTractionControl').src = './assets/images/bttn_trac_0.PNG';
  }
}

function toggleBatteryCharge() {
  if (battStatus === 0) {
    battStatus = 1;
    document.getElementById('batt').src = './assets/images/batt1.PNG';
    document.getElementById('toggleBatteryCharge').src = './assets/images/bttn_batt_1.PNG';
  } else {
    battStatus = 0;
    document.getElementById('batt').src = './assets/images/batt0.PNG';
    document.getElementById('toggleBatteryCharge').src = './assets/images/bttn_batt_0.PNG';
  }
}

function toggleParkingBrake() {
  if (brakeStatus === 0) {
    brakeStatus = 1;
    document.getElementById('brake').src = './assets/images/p2.PNG';
    document.getElementById('toggleParkingBrake').src = './assets/images/bttn_park_0.PNG';
  } else {
    brakeStatus = 0;
    document.getElementById('brake').src = './assets/images/p1.PNG';
    document.getElementById('toggleParkingBrake').src = './assets/images/bttn_park_1.PNG';
  }
}
