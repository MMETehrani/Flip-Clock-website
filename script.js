// متغیر برای نگهداری حالت 24 ساعته یا 12 ساعته
let is24HourFormat = true; // مقداردهی اولیه قبل از فراخوانی هر تابع
let timeoutId;
let isMobile = window.matchMedia("(max-width: 768px)").matches; // بررسی حالت موبایل

// تابع تغییر تم
document.getElementById("theme-btn").addEventListener("click", function() {
    document.body.classList.toggle("light-theme");
});

// تابع به‌روزرسانی زمان
function updateTime() {
    const hourBox = document.getElementById('hour'); // دسترسی به باکس ساعت
    const minuteBox = document.getElementById('minute'); // دسترسی به باکس دقیقه
    const amPmBox = document.getElementById('am-pm'); // دسترسی به باکس AM/PM (در صورت وجود)

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
    if (amPmBox) {
        amPmBox.textContent = amPm; // اگر باکس AM/PM وجود داشت، مقدار AM یا PM را نشان دهد
    }

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

// دکمه تغییر حالت 12 ساعته/24 ساعته
document.getElementById("toggle-btn").addEventListener("click", function() {
    is24HourFormat = !is24HourFormat; // تغییر حالت 12 ساعته/24 ساعته
    updateTime(); // به‌روزرسانی زمان برای تغییر نمایش AM/PM و قالب ساعت
});


// تابع برای پنهان کردن دکمه‌ها
function hideButtons() {
    console.log('پنهان کردن دکمه‌ها'); // بررسی با استفاده از کنسول
    document.getElementById('fullscreen-btn').style.opacity = '0'; // مخفی کردن با تنظیم شفافیت
    document.getElementById('toggle-btn').style.opacity = '0'; // مخفی کردن با تنظیم شفافیت
    document.getElementById('fullscreen-btn').style.visibility = 'hidden'; // برای اطمینان از پنهان شدن
    document.getElementById('toggle-btn').style.visibility = 'hidden'; // برای اطمینان از پنهان شدن
}

// تابع برای نمایش دکمه‌ها
function showButtons() {
    console.log('نمایش دکمه‌ها'); // بررسی با استفاده از کنسول
    document.getElementById('fullscreen-btn').style.opacity = '1'; // نمایش دادن با تنظیم شفافیت
    document.getElementById('toggle-btn').style.opacity = '1'; // نمایش دادن با تنظیم شفافیت
    document.getElementById('fullscreen-btn').style.visibility = 'visible'; // نمایش دکمه‌ها
    document.getElementById('toggle-btn').style.visibility = 'visible'; // نمایش دکمه‌ها
}

// تنظیم تایمر برای پنهان کردن دکمه‌ها پس از 3 ثانیه عدم فعالیت
function resetTimeout() {
    showButtons(); // نمایش دکمه‌ها هنگام حرکت یا کلیک
    clearTimeout(timeoutId); // پاک کردن تایمر قبلی
    timeoutId = setTimeout(hideButtons, 3000); // پنهان کردن دکمه‌ها بعد از 3 ثانیه
}

// رویداد کلیک یا حرکت موس برای نمایش دکمه‌ها
if (isMobile) {
    document.addEventListener('click', resetTimeout); // در حالت موبایل، با کلیک روی صفحه دکمه‌ها نمایش داده شوند
} else {
    document.addEventListener('mousemove', resetTimeout); // در حالت دسکتاپ، با حرکت موس دکمه‌ها نمایش داده شوند
}

// شروع اولیه: دکمه‌ها پس از 3 ثانیه از بارگذاری صفحه پنهان می‌شوند
timeoutId = setTimeout(hideButtons, 3000);