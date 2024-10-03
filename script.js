let is24HourFormat = true;
let timeoutId;
let isMobile = window.matchMedia("(max-width: 768px)").matches;

// تابع تغییر تم
document.getElementById("theme-btn").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
    document.body.classList.toggle("dark-theme");
});

// تابع به‌روزرسانی زمان
function updateTime() {
    const hourBox = document.getElementById('hour');
    const minuteBox = document.getElementById('minute');
    const amPmBox = document.getElementById('am-pm');

    const currentTime = new Date();
    let hours = currentTime.getHours();
    let minutes = String(currentTime.getMinutes()).padStart(2, '0');
    let amPm = '';

    if (!is24HourFormat) {
        amPm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12;
    }

    hours = String(hours).padStart(2, '0');
    hourBox.querySelector('.top').textContent = hours;
    hourBox.querySelector('.bottom').textContent = hours;

    if (amPmBox) {
        amPmBox.textContent = amPm;
    }

    const oldMinute = minuteBox.querySelector('.top').textContent;
    if (oldMinute !== minutes) {
        const bottomSpan = minuteBox.querySelector('.bottom');
        bottomSpan.textContent = oldMinute;
        minuteBox.querySelector('.top').textContent = minutes;

        bottomSpan.classList.remove('flip');
        void bottomSpan.offsetWidth;
        bottomSpan.classList.add('flip');
    }
}

setInterval(updateTime, 1000);
updateTime();

document.getElementById("fullscreen-btn").addEventListener("click", function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
});

document.getElementById("toggle-btn").addEventListener("click", function() {
    is24HourFormat = !is24HourFormat;
    updateTime();
});

// تابع برای پنهان کردن دکمه‌ها
function hideButtons() {
    document.getElementById('fullscreen-btn').style.opacity = '0';
    document.getElementById('toggle-btn').style.opacity = '0';
    document.getElementById('theme-btn').style.opacity = '0';
    document.getElementById('fullscreen-btn').style.visibility = 'hidden';
    document.getElementById('toggle-btn').style.visibility = 'hidden';
    document.getElementById('theme-btn').style.visibility = 'hidden';
}

// تابع برای نمایش دکمه‌ها
function showButtons() {
    document.getElementById('fullscreen-btn').style.opacity = '1';
    document.getElementById('toggle-btn').style.opacity = '1';
    document.getElementById('theme-btn').style.opacity = '1';
    document.getElementById('fullscreen-btn').style.visibility = 'visible';
    document.getElementById('toggle-btn').style.visibility = 'visible';
    document.getElementById('theme-btn').style.visibility = 'visible';
}

// تنظیم تایمر برای پنهان کردن دکمه‌ها پس از 3 ثانیه عدم فعالیت
function resetTimeout() {
    showButtons();
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hideButtons, 3000);
}

if (isMobile) {
    document.addEventListener('click', resetTimeout);
} else {
    document.addEventListener('mousemove', resetTimeout);
}

timeoutId = setTimeout(hideButtons, 3000);
