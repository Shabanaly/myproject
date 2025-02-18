document.addEventListener('DOMContentLoaded', () => {
    // إضافة تأثيرات تفاعلية بسيطة
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    }

    // التحقق من نموذج الاتصال
    const contactForm = document.querySelector('.contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('شكرًا لك! سيتم الرد على رسالتك قريبًا.');
        contactForm.reset();
    });
});