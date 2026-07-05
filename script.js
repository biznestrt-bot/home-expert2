// ============================
// HOME EXPERT
// script.js
// ============================

// Плавое появление элементов

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".step,.glass-card,.stat,.feature,.contact,.about,.service-card").forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Плавый скролл

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

// Шапка

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if (window.scrollY > 80) {

        header.classList.add("scroll");

    } else {

        header.classList.remove("scroll");

    }

});

// ============================
// Форма Telegram
// ============================

const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const message = document.getElementById("message").value;

        const text =
`🏠 Новая заявка

👤 Имя: ${name}

📞 Телефон: ${phone}

📝 Запрос:
${message}`;

        const url = "https://t.me/share/url?url=&text=" + encodeURIComponent(text);

        window.open(url, "_blank");

    });

}