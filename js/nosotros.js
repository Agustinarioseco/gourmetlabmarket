document.addEventListener("DOMContentLoaded", function () {
    const marcas = {
        "marca1": {
            titulo: "Trigo & Tiempo",
            descripcion: "El arte del pan, el sabor del tiempo. Panadería artesanal con ingredientes de alta calidad.",
            instagram: "https://instagram.com/trigo_y_tiempo",
            imagen: "../img/trigo_y_tiempo_bg.jpg"
        },
        "marca2": {
            titulo: "Nomade",
            descripcion: "Sabores sin fronteras. Pizza y empanadas con recetas inspiradas en el mundo.",
            instagram: "https://instagram.com/nomade",
            imagen: "../img/nomade_bg.jpg"
        },
        "marca3": {
            titulo: "Marca 3",
            descripcion: "Innovación y tradición en cada producto.",
            instagram: "https://instagram.com/marca3",
            imagen: "../img/marca3_bg.jpg"
        },
        "marca4": {
            titulo: "Hermandad del Asado",
            descripcion: "Unidos por el fuego. Carnes seleccionadas y condimentos premium para parrilleros expertos.",
            instagram: "https://instagram.com/hermandad_del_asado",
            imagen: "../img/hermandad_bg.jpg"
        },
        "marca5": {
            titulo: "Nación del Corte",
            descripcion: "Cortes seleccionados, hechos con maestría. Embutidos y fiambres de primera calidad.",
            instagram: "https://instagram.com/nacion_del_corte",
            imagen: "../img/nacion_bg.jpg"
        },
        "marca6": {
            titulo: "Plan Gourmet",
            descripcion: "Pastas de autor con rellenos innovadores y sabores únicos.",
            instagram: "https://instagram.com/plan_gourmet",
            imagen: "../img/plan_gourmet_bg.jpg"
        }
    };

    // Agregar evento de clic a cada marca
    document.querySelectorAll(".marca").forEach(marca => {
        marca.addEventListener("click", function () {
            const marcaId = this.getAttribute("onclick").match(/'([^']+)'/)[1]; // Extraer marca ID
            abrirPopup(marcaId);
        });
    });

    // Función para abrir el pop-up con información de la marca
    function abrirPopup(marca) {
        const popup = document.getElementById("popup");
        const titulo = document.getElementById("popup-titulo");
        const descripcion = document.getElementById("popup-descripcion");
        const link = document.getElementById("popup-link");
        const fondo = document.getElementById("popup-bg");

        if (marcas[marca]) {
            titulo.textContent = marcas[marca].titulo;
            descripcion.textContent = marcas[marca].descripcion;
            link.href = marcas[marca].instagram;
            fondo.style.backgroundImage = `url(${marcas[marca].imagen})`;
        }

        popup.style.display = "flex";
    }

    // Función para cerrar el pop-up
    document.querySelector(".close").addEventListener("click", function () {
        document.getElementById("popup").style.display = "none";
    });
});

