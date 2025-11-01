document.addEventListener("DOMContentLoaded", function() {

    // إنشاء "مراقب" لمتابعة ظهور العناصر على الشاشة
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // إضافة كلاس is-visible لإظهار العنصر بالأنيميشن المحدد في CSS
                entry.target.classList.add('is-visible');
                // إيقاف مراقبة العنصر بعد ظهوره
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15 // يظهر العنصر عندما يصبح 15% منه مرئياً
    });

    // اختيار جميع العناصر التي يجب أن تظهر عند التمرير
    const mainItems = document.querySelectorAll('.reveal-item');
    mainItems.forEach(item => {
        observer.observe(item);
    });

    // اختيار العناصر الفرعية (مثل بطاقات الخصائص والحقائق)
    const subItems = document.querySelectorAll('.reveal-sub-item');
    subItems.forEach(item => {
        observer.observe(item);
    });
});
