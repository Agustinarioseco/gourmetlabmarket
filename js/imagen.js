document.addEventListener("DOMContentLoaded", function () {
    const backgroundImage = document.getElementById("background-image");

    const images = [
        "./img/fondo-1.png",
        "./img/fondo-2.png",
        "./img/fondo-3.png",
        "./img/fondo-4.png",
        "./img/fondo-5.png",
        "./img/fondo-6.png",
        "./img/fondo-7.png",
        "./img/fondo-8.png",
        "./img/fondo-9.png",
        "./img/fondo.png"
    ];

    let currentIndex = 0;

    function changeBackground() {
        backgroundImage.src= images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 3000); // Cambia cada 3 segundos (ajustable)
});