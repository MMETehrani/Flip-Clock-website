// تابع به‌روزرسانی زمان
function updateTime() {
    const hourBox = document.getElementById('hour'); // دسترسی به باکس ساعت
    const minuteBox = document.getElementById('minute'); // دسترسی به باکس دقیقه
    const amPmBox = document.getElementById('am-pm'); // دسترسی به باکس AM/PM

    const currentTime = new Date(); // دریافت زمان فعلی
    let hours = currentTime.getHours(); // دریافت ساعت
    let minutes = String(currentTime.getMinutes()).padStart(2, '0'); // دریافت دقیقه و تبدیل به قالب 2 رقمی
    let amPm = ''; // ذخیره حالت AM یا PM

    // بررسی اینکه آیا ساعت 12 ساعته است یا 24 ساعته
    if (!is24HourFormat) {
        // حالت 12 ساعته
        amPm = hours >= 12 ? 'PM' : 'AM'; // اگر ساعت 12 یا بیشتر باشد PM وگرنه AM
        hours = hours % 12 || 12; // تبدیل ساعت به قالب 12 ساعته
    }

    // تبدیل ساعت به قالب 2 رقمی برای نمایش
    hours = String(hours).padStart(2, '0');

    // به‌روزرسانی ساعت
    hourBox.querySelector('.top').textContent = hours;
    hourBox.querySelector('.bottom').textContent = hours;

    // نمایش AM/PM در حالت 12 ساعته
    amPmBox.textContent = amPm;

    // به‌روزرسانی دقیقه‌ها با انیمیشن
    const oldMinute = minuteBox.querySelector('.top').textContent; // ذخیره دقیقه قبلی
    if (oldMinute !== minutes) { // اگر دقیقه تغییر کرده باشد
        const bottomSpan = minuteBox.querySelector('.bottom');
        bottomSpan.textContent = oldMinute; // نمایش دقیقه قبلی در باکس پایین
        minuteBox.querySelector('.top').textContent = minutes; // نمایش دقیقه جدید در باکس بالا

        bottomSpan.classList.remove('flip'); // حذف انیمیشن چرخش
        void bottomSpan.offsetWidth; // Trigger reflow to reset animation
        bottomSpan.classList.add('flip'); // افزودن مجدد انیمیشن چرخش
    }
}

// به‌روزرسانی زمان هر ثانیه
setInterval(updateTime, 1000);

// تنظیم اولیه زمان
updateTime();

// دکمه تمام صفحه
document.getElementById("fullscreen-btn").addEventListener("click", function() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen(); // ورود به حالت تمام صفحه
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen(); // خروج از حالت تمام صفحه
        }
    }
});

// متغیر برای نگهداری حالت 24 ساعته یا 12 ساعته
let is24HourFormat = true;

// دکمه تغییر حالت 12 ساعته/24 ساعته
document.getElementById("toggle-btn").addEventListener("click", function() {
    is24HourFormat = !is24HourFormat; // تغییر حالت 12 ساعته/24 ساعته
    updateTime(); // به‌روزرسانی زمان برای تغییر نمایش AM/PM و قالب ساعت
});
