// Initialize Variables below

let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautStatus = 80.7;
let crewMassKg = astronautCount + averageAstronautStatus;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -255;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'clear';
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7){
    console.log('Ready');
} else {
    console.log('Too many astronauts')
}

// add logic below to verify all astronauts are ready

if (astronautStatus === 'ready') {
    console.log('Astronauts are ready');
} else {
    console.log('Astronauts are not ready');
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= maximumMassLimit) {
    console.log('Weight meets requirements')
} else {
    console.log('Your weight exceeds capacity. Lose weight bro')
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp) {
    console.log('Fuel levels check out')
} else {
    console.log('Check your fuel temp, too low or high')
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel === '100%') {
    console.log('You are at max fuel')
} else {
    console.log('You need more fuel')
}

// add logic below to verify the weather status is clear

if (weatherStatus === 'clear') {
    console.log('Weather is perfect to fly')
} else{
    console.log('Wait till the weather gets better')
}

// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7 && astronautStatus === 'ready' && totalMassKg <= maximumMassLimit && fuelTempCelsius > minimumFuelTemp && fuelTempCelsius < maximumFuelTemp && fuelLevel === '100%' && weatherStatus === 'clear') {
    preparedForLiftOff = true;
} else {
    preparedForLiftOff = false;
}

if (preparedForLiftOff) {
    console.log('Date: ' + date);
    console.log('Time: '+ time);
    console.log('Astronaut Count:' + astronautCount);
    console.log('Crew Mass: ' + crewMassKg + ' kg');
    console.log('Fuel Mass: ' + fuelMassKg + ' kg');
    console.log('Shuttle Mass: ' + shuttleMassKg + ' kg');
    console.log('Total Mass: ' + totalMassKg + ' kg');
    console.log('Fuel temp: ' + fuelTempCelsius + ' C');
    console.log('Weather Status: ' + weatherStatus)
    console.log('Have a safe trip!');
} else {
    console.log('You are not ready. Try again');
}
