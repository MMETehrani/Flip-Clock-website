function updateTime() {
    const hourBox = document.getElementById('hour');
    const minuteBox = document.getElementById('minute');

    const currentTime = new Date();
    let hours = String(currentTime.getHours()).padStart(2, '0');
    let minutes = String(currentTime.getMinutes()).padStart(2, '0');

    // Update hours
    hourBox.querySelector('.top').textContent = hours;
    hourBox.querySelector('.bottom').textContent = hours;

    // Update minutes with animation
    const oldMinute = minuteBox.querySelector('.top').textContent;
    if (oldMinute !== minutes) {
        const bottomSpan = minuteBox.querySelector('.bottom');
        bottomSpan.textContent = oldMinute;
        minuteBox.querySelector('.top').textContent = minutes;

        bottomSpan.classList.remove('flip');
        void bottomSpan.offsetWidth; // Trigger reflow to reset animation
        bottomSpan.classList.add('flip');
    }
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial time setting
updateTime();
