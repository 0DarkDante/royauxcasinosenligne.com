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