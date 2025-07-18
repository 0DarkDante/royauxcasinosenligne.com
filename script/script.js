document.addEventListener("DOMContentLoaded", function () {
    const openButtons = document.querySelectorAll(".contact-form");
    const modal = document.querySelector(".modal-overlay");
    const closeBtn = document.querySelector(".modal-close");

    // Відкриття модалки при кліку на будь-яку кнопку
    openButtons.forEach((btn) => {
      btn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.add("active");
      });
    });

    // Закриття при кліку на хрестик
    closeBtn.addEventListener("click", function () {
      modal.classList.remove("active");
    });

    // Закриття при кліку поза модалкою
    modal.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("active");
      }
    });

    // Escape клавіша — закрити
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        modal.classList.remove("active");
      }
    });
});
  
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.querySelector('.cookie-banner');

    // Якщо банер вже прийнято/відхилено — не показуємо його
    const cookieStatus = localStorage.getItem('cookieConsent');
    if (cookieStatus === 'accepted' || cookieStatus === 'rejected') {
      banner.style.display = 'none';
      return;
    }

    // Обробка кліків на обидві кнопки
    document.querySelector('.btn-accept')?.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'accepted');
      banner.style.display = 'none';
    });

    document.querySelector('.btn-more')?.addEventListener('click', () => {
      localStorage.setItem('cookieConsent', 'rejected');
      banner.style.display = 'none';
    });
  });