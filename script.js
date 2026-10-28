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
