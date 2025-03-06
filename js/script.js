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
    const formContacto = document.getElementById("form-contacto");

    if (formContacto) {
        formContacto.addEventListener("submit", async function (event) {
            event.preventDefault();

            let formData = new FormData(formContacto);

            try {
                let response = await fetch(formContacto.action, {
                    method: "POST",
                    body: formData,
                    headers: { "Accept": "application/json" }
                });

                if (response.ok) {
                    alert("¡Mensaje enviado correctamente! Nos pondremos en contacto contigo.");
                    formContacto.reset();
                } else {
                    alert("Hubo un error al enviar el mensaje. Inténtalo de nuevo.");
                }
            } catch (error) {
                console.error("Error al enviar el mensaje:", error);
                alert("Hubo un problema al enviar tu mensaje.");
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let popupMostrado = false; // Variable para evitar mostrarlo varias veces

    // Detecta cuando el usuario intenta salir del sitio
    document.addEventListener("mouseleave", function (e) {
        if (e.clientY < 10 && !popupMostrado) {
            mostrarPopup();
            popupMostrado = true; // Evita que se vuelva a mostrar
        }
    });

    // Función para mostrar el pop-up
    function mostrarPopup() {
        document.getElementById("popup-suscripcion").style.display = "flex";
    }

    // Función para cerrar el pop-up
    function cerrarPopup() {
        document.getElementById("popup-suscripcion").style.display = "none";
    }

    // Enviar correo (FALTA CONFIGURAR ALMACENAMIENTO)
    document.getElementById("form-suscripcion").addEventListener("submit", function (e) {
        e.preventDefault();
        
        let email = document.getElementById("email").value;
        console.log("Correo suscrito:", email);

        alert("¡Gracias por suscribirte!");
        cerrarPopup();
    });
});

