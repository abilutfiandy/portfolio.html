const form = document.getElementById('contactForm');

form.addEventListener('submit', function () {
    setTimeout(() => {
        form.reset();
    }, 1000);
});

// copy email dan ig di contact me

function copyEmail() {
    const emailText = document.getElementById('emailText').innerText;
    navigator.clipboard.writeText(emailText).then(
        function () {
            alert('Email berhasil disalin');
        },
        function (err) {
            alert('Gagal menyalin email: ', err);
        },
    );
}

function copyIg() {
    const igText = document.getElementById('igText').innerText;
    navigator.clipboard.writeText(igText).then(
        function () {
            alert('Text Berhasil Disalin');
        },
        function (err) {
            alert('Gagal Menyalin text:', err);
        },
    );
}

// hamburger menu

const menu = document.querySelector('.menu');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const iconBars = document.querySelector('.icon-bars');
const iconClose = document.querySelector('.icon-close');

hamburgerMenu.addEventListener('click', displayMenu);
menu.addEventListener('click', displayMenu);

function displayMenu() {
    if (menu.classList.contains('tampil')) {
        menu.classList.remove('tampil');
        iconBars.style.display = 'inline';
        iconClose.style.display = 'none';
    } else {
        menu.classList.add('tampil');
        iconBars.style.display = 'none';
        iconClose.style.display = 'inline';
    }
}

// typing efect

document.addEventListener('DOMContentLoaded', function () {
    new Typed('#typing-text', {
        strings: ['Web Developer', 'Frontend Enthusiast', 'Laravel Programmer'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
        smartBackspace: true,
        showCursor: true,
        cursorChar: '|',
    });
});
