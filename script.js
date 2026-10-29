const powerBtn = document.querySelector('#powerBtn');
const powerStatus = document.querySelector('#powerStatus');
const powerPanel = document.querySelector('#powerPanel');
letpowerOnline = false;
function activatePower() {
    powerOnline = true;
    logEvent('Power restored')
    powerStatus.textContent = 'ONLINE';
    powerPanel.classList.add('online');
    powerBtn.disabled = true;
}
powerBtn.addEventListener('click', activatePower);

const oxygenBtn = document.querySelector('#oxygenBtn');
const oxygenStatus = document.querySelector('#oxygenStatus');
const oxygenPanel = document.querySelector('#oxygenPanel');
let oxygenOnline = false;
function restoreOxygen() {
    if (!powerOnline) {
        oxygenStatus.textContent = 'NEEDS POWER';
        return;
    }
    oxygenOnline = true;
    oxygenStatus.textContent = 'ONLINE';
    oxygenPanel.classList.add('online');
    oxygenBtn.disabled = true;
}
oxygenBtn.addEventListener('click', restoreOxygen);

const commsBtn = document.querySelector('#commsBtn');
const commsStatus = document.querySelector('#commsStatus');
const commsPanel = document.querySelector('#commsPanel');
let commsOnline = false;
function connectComms() {
    if (!powerOnline || !oxygenOnline) {
        commsStatus.textContent = 'POWER + OXYGEN REQUIRED';
        return;
    }
    commsOnline = true;
    commsStatus.textContent = 'SIGNAL ESTABLISHED';
    commsPanel.classList.add('online');
    commsBtn.disabled = true;
}
commsBtn.addEventListener('click', connectComms);

const tempInput = document.querySelector('#tempInput');
const tempBtn = document.querySelector('#tempBtn');
const tempStatus = document.querySelector('#tempStatus');
let temperature = 75;
function setTemperature() {
    if (!powerOnline) {
        tempStatus.textContent = 'Power required';
        return;
    }
    const requested = Number(tempInput.value);
    if (!Number.isFinite(requested) || requested < 65 || requested > 80) {
        tempStatus.textContent = 'Choose a safe target: 65-80°F';
        return;
    }
    temperature = requested;
    tempStatus.textContent = 'Current target: ' + temperature + '°F';
}
tempBtn.addEventListener('click', setTemperature);

const eventLog = document.querySelector('#eventLog');
const events = [];
function logEvent(text) {
    events.push(text);
    const item = document.createElement('li');
    item.textContent = text;
    eventLog.append(item);
}
logEvent('Mission console started');

const timerText = document.querySelector('#timerText');
const timerBtn = document.querySelector('#timerBtn');
let secondsLeft = 90;
let timerId = null;
let missionOver = false;
function tick() {
    if (missionOver) return;
    secondsLeft--;
    timerText.textContent = secondsLeft;
    if (secondsLeft <= 0) {
        missionOver = true;
        clearInterval(timerId);
        timerId = null;
        timerText.textContent = '0';
        logEvent('TIME EXPIRED');
    }
}
function startCountdown() {
    if (timerId !== null || missionOver) return;
    timerId = setInterval(tick, 1000);
    timerBtn.disabled = true;
    logEvent('Countdown started');
}
timerBtn.addEventListener('click', startCountdown);