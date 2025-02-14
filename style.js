document.addEventListener("DOMContentLoaded", function () {
    ketikkanTeks("🔍 Mengumpulkan Data Perangkat...", "output");
    animasi3D();
});

function ketikkanTeks(teks, elemenId) {
    let elemen = document.getElementById(elemenId);
    elemen.innerHTML = "";
    let i = 0;

    function ketik() {
        if (i < teks.length) {
            elemen.innerHTML += teks[i];
            i++;
            setTimeout(ketik, 30);
        }
    }
    ketik();
}

function animasi3D() {
    let canvas = document.getElementById("animation3D");
    let ctx = canvas.getContext("2d");
    let partikel = [];

    function buatPartikel() {
        for (let i = 0; i < 100; i++) {
            partikel.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                radius: Math.random() * 3 + 1,
                dx: (Math.random() - 0.5) * 2,
                dy: (Math.random() - 0.5) * 2,
                color: `hsl(${Math.random() * 360}, 100%, 50%)`
            });
        }
    }

    function gambarPartikel() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        partikel.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
            p.x += p.dx;
            p.y += p.dy;

            if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        });
        requestAnimationFrame(gambarPartikel);
    }

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buatPartikel();
    gambarPartikel();
}