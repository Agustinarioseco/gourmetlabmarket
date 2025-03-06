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
    const popupOverlay = document.querySelector(".popup-overlay");
    const closePopup = document.querySelector(".close-popup");
    const noThanks = document.querySelector(".no-thanks");
    const formSuscripcion = document.getElementById("form-suscripcion");

    // 🔹 Verificar si el pop-up ya fue cerrado antes
    let popupCerrado = localStorage.getItem("popupClosed");

    // 🔹 Mostrar el pop-up SOLO si no se ha cerrado antes
    if (!popupCerrado) {
        setTimeout(() => {
            popupOverlay.style.display = "flex"; // Mostrar después de 2 segundos
        }, 2000);
    }

    // 🔹 Función para detectar intención de salir del sitio
    function detectarSalida(event) {
        if (event.clientY < 10 && !localStorage.getItem("popupClosed")) {
            console.log("El usuario intentó salir, mostrando pop-up.");
            popupOverlay.style.display = "flex";
            localStorage.setItem("popupClosed", "true"); // Guardar en Local Storage
            document.removeEventListener("mouseleave", detectarSalida); // Eliminar evento
        }
    }

    // 🔹 Si el pop-up no ha sido cerrado antes, activar detector de salida
    if (!popupCerrado) {
        document.addEventListener("mouseleave", detectarSalida);
    }

    // 🔹 Función para cerrar el pop-up y asegurarse de que no vuelva a aparecer
    function cerrarPopup() {
        popupOverlay.style.display = "none";
        localStorage.setItem("popupClosed", "true"); // Guardar en Local Storage
        document.removeEventListener("mouseleave", detectarSalida); // Evita reactivación
        console.log("Pop-up cerrado y guardado en localStorage");
    }

    // 🔹 Eventos para cerrar el pop-up con "X" o "No gracias"
    if (closePopup) closePopup.addEventListener("click", cerrarPopup);
    if (noThanks) noThanks.addEventListener("click", cerrarPopup);

    // 🔹 Manejar envío de formulario
    if (formSuscripcion) {
        formSuscripcion.addEventListener("submit", function (e) {
            e.preventDefault();
            let email = document.getElementById("email").value;
            console.log("Correo suscrito:", email);
            alert("¡Gracias por suscribirte!");
            cerrarPopup();
        });
    }
});



