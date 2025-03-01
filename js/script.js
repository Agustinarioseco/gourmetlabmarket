document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript cargado correctamente."); // 🔍 Para verificar si se carga el script

    /* 🔹 Navbar cambia de color al hacer scroll */
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
        }
    });

    /* 🔹 Botón flotante de WhatsApp */
    let whatsappButton = document.querySelector(".whatsapp-float img");
    let whatsappOptions = document.querySelector("#whatsapp-options");

    if (whatsappButton && whatsappOptions) {
        whatsappButton.addEventListener("click", function (event) {
            event.stopPropagation(); // Evita que se cierre al hacer clic en el botón
            whatsappOptions.style.display = whatsappOptions.style.display === "block" ? "none" : "block";
        });

        // Cerrar opciones de WhatsApp si se hace clic fuera
        document.addEventListener("click", function (event) {
            if (!whatsappButton.contains(event.target) && !whatsappOptions.contains(event.target)) {
                whatsappOptions.style.display = "none";
            }
        });
    }

    /* 🔹 Menú hamburguesa: Cerrar al hacer clic en un link */
    let menuItems = document.querySelectorAll(".navbar-nav .nav-link");
    let menuToggler = document.querySelector(".navbar-toggler");
    let menuCollapse = document.querySelector(".navbar-collapse");

    if (menuItems.length > 0 && menuToggler && menuCollapse) {
        menuItems.forEach((item) => {
            item.addEventListener("click", function () {
                if (menuCollapse.classList.contains("show")) {
                    menuToggler.click(); // Cierra el menú hamburguesa
                }
            });
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const backgroundImage = document.getElementById("background-image");

    const images = [
        "../img/fondo-1.png",
        "../img/fondo-2.png",
        "../img/fondo-3.png",
        "../img/fondo-4.png",
        "../img/fondo-5.png",
        "../img/fondo-6.png",
        "../img/fondo-7.png",
        "../img/fondo-8.png",
        "../img/fondo-9.png",
        "../img/fondo.png"
    ];

    let currentIndex = 0;

    function changeBackground() {
        backgroundImage.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
    }

    setInterval(changeBackground, 3000); // Cambia cada 3 segundos (ajustable)
});


// Datos de marcas
const marcas = {
    "marca1": {
        titulo: "Marca 1",
        descripcion: "Esta es una marca premium con productos de alta calidad.",
        instagram: "https://instagram.com/marca1"
    },
    "marca2": {
        titulo: "Marca 2",
        descripcion: "Productos artesanales hechos con dedicación.",
        instagram: "https://instagram.com/marca2"
    },
    "marca3": {
        titulo: "Marca 3",
        descripcion: "Innovación y tradición en cada producto.",
        instagram: "https://instagram.com/marca3"
    }
};

// Abrir pop-up con la información de la marca
function abrirPopup(marca) {
    const popup = document.getElementById("popup");
    const titulo = document.getElementById("popup-titulo");
    const descripcion = document.getElementById("popup-descripcion");
    const link = document.getElementById("popup-link");

    if (marcas[marca]) {
        titulo.textContent = marcas[marca].titulo;
        descripcion.textContent = marcas[marca].descripcion;
        link.href = marcas[marca].instagram;
    }

    popup.style.display = "flex";
}

// Cerrar pop-up
function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}
