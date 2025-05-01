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

// typing efect
