const powerBtn = document.querySelector('#powerBtn');
const powerStatus = document.querySelector('#powerStatus');
const powerPanel = document.querySelector('#powerPanel');
letpowerOnline = false;
function activatePower() {
    powerOnline = true;
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