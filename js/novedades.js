
document.addEventListener("DOMContentLoaded", function () {
    const calendarioBody = document.getElementById("calendar-body");

    // Definir las fechas destacadas
    const fechasDestacadas = {
        "8-3": { titulo: "#8S", descripcion: "Es nuestro 8 de sorrentinos, celebrá con 20% OFF en variedades selecionadas" },
        "10-3": { titulo: "#10P", descripcion: "Es el 10 de picadas, celebrá con 20% OFF en quesos, fiambres y nuestras box" },
        "11-3": { titulo: "#11F", descripcion: "Es nuestro 11 de fideos, aprovechá con 20% OFF en todas nuestras pastas frescas" },
        "14-3": { titulo: "#14P", descripcion: "Es 14 de pizzas, disfrutá de nuestras mejores pizzas con 20% OFF" },
        "20-3": { titulo: "#20R", descripcion: "Es nuestro 20 de raviolones, en el día del raviol celebrá con 20% OFF" },
        "29-3": { titulo: "#29L", descripcion: "Es 29 no de ñoquis... DE LASAGNA, celebrá con 20% OFF en variedades selecionadas" }
    };

    // Obtener el mes y el año actual
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1; // Meses en JS van de 0 a 11
    const añoActual = fechaActual.getFullYear();

    // Obtener el primer día del mes y cuántos días tiene
    const primerDiaMes = new Date(añoActual, mesActual - 1, 1).getDay();
    const totalDias = new Date(añoActual, mesActual, 0).getDate();

    let contadorDia = 1;
    let html = "";

    // Generar las filas del calendario
    for (let fila = 0; fila < 6; fila++) {
        html += "<tr>";

        for (let columna = 0; columna < 7; columna++) {
            if ((fila === 0 && columna < primerDiaMes) || contadorDia > totalDias) {
                html += "<td></td>"; // Celdas vacías
            } else {
                let fechaClave = `${contadorDia}-${mesActual}`;
                let esEvento = fechasDestacadas[fechaClave] ? "event" : "";

                html += `<td class="${esEvento}" onclick="mostrarInfoFecha('${fechaClave}')">${contadorDia}</td>`;
                contadorDia++;
            }
        }

        html += "</tr>";

        if (contadorDia > totalDias) break; // Salir si ya se completó el mes
    }

    calendarioBody.innerHTML = html;

    // Función para abrir el pop-up con la info de la fecha
    window.mostrarInfoFecha = function (fecha) {
        const popup = document.getElementById("popupFecha");
        const titulo = document.getElementById("fecha-titulo");
        const descripcion = document.getElementById("fecha-descripcion");

        if (fechasDestacadas[fecha]) {
            titulo.textContent = fechasDestacadas[fecha].titulo;
            descripcion.textContent = fechasDestacadas[fecha].descripcion;
        }

        popup.style.display = "flex";
    };

    // Función para cerrar el pop-up
    window.cerrarPopupFecha = function () {
        document.getElementById("popupFecha").style.display = "none";
    };
});