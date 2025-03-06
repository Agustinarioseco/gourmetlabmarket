document.addEventListener("DOMContentLoaded", function () {
    const popupOverlay = document.getElementById("popup-suscripcion");
    const formSuscripcion = document.getElementById("form-suscripcion");
    const closePopup = document.querySelector(".close-popup");
    const noThanks = document.querySelector(".no-thanks");

    console.log("📢 Script cargado. Verificando si debe mostrarse el pop-up...");

    // 🔹 Si el usuario NO lo cerró antes, lo mostramos
    setTimeout(() => {
        popupOverlay.style.display = "flex"; 
        console.log("📢 Mostrando pop-up...");
    }, 2000);
    

    // 🔹 Función para cerrar el pop-up y guardarlo en LocalStorage
    function cerrarPopup() {
        popupOverlay.style.display = "none";
        localStorage.setItem("popupClosed", "true");
        console.log("✅ Pop-up cerrado y guardado en LocalStorage");
    }

    // 🔹 Eventos para cerrar el pop-up
    if (closePopup) closePopup.addEventListener("click", cerrarPopup);
    if (noThanks) noThanks.addEventListener("click", cerrarPopup);

    // 🔹 Capturar el formulario y enviarlo correctamente
    if (formSuscripcion) {
        formSuscripcion.addEventListener("submit", function (e) {
            e.preventDefault();
            let email = document.getElementById("email").value;
            console.log("✉️ Correo suscrito:", email);

            // Enviar el formulario a Formspree
            fetch("https://formspree.io/f/xnnpapry", {
                method: "POST",
                body: new FormData(formSuscripcion),
                headers: { "Accept": "application/json" }
            })
            .then(response => {
                if (response.ok) {
                    alert("¡Gracias por suscribirte!");
                    cerrarPopup();
                } else {
                    alert("Hubo un error. Por favor, intentá de nuevo.");
                }
            })
            .catch(error => console.error("❌ Error al enviar el formulario:", error));
        });
    } else {
        console.error("❌ Error: No se encontró el formulario de suscripción.");
    }
});



