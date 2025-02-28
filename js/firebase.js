import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// **CONFIGURACIÓN DE FIREBASE**
const firebaseConfig = {
  apiKey: "AIzaSyAZJLH4zRKXuJ-uimlWyvFQb_n0GUEAdgk",
  authDomain: "opiniones-gourmet-lab-market.firebaseapp.com",
  projectId: "opiniones-gourmet-lab-market",
  storageBucket: "opiniones-gourmet-lab-market.firebasestorage.app",
  messagingSenderId: "1097167124011",
  appId: "1:1097167124011:web:0fecffa8fab2e612db9c6e",
  measurementId: "G-QK34TLKKQ1"
};

// **Inicializar Firebase**
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // 🔹 Agregamos la inicialización correcta de Firestore

// **Función para guardar opiniones en Firebase**
document.getElementById("form-opinion").addEventListener("submit", async function (event) {
    event.preventDefault();
    
    let nombre = document.getElementById("nombre").value;
    let comentario = document.getElementById("comentario").value;

    if (nombre.trim() === "" || comentario.trim() === "") {
        alert("Por favor, completa todos los campos");
        return;
    }
    
    try {
        await addDoc(collection(db, "opiniones"), {
            nombre: nombre,
            comentario: comentario,
            fecha: new Date()
        });

        alert("¡Gracias por tu opinión!");
        document.getElementById("form-opinion").reset();
        mostrarOpiniones();
    } catch (error) {
        console.error("Error al guardar la opinión: ", error);
    }
});

// **Función para mostrar opiniones en vivo**
async function mostrarOpiniones() {
    const opinionesLista = document.querySelector(".opiniones-scroll"); // Ahora seleccionamos el contenedor correcto
    opinionesLista.innerHTML = ""; // Limpiar lista antes de agregar nuevas opiniones

    try {
        const querySnapshot = await getDocs(collection(db, "opiniones"));
        querySnapshot.forEach((doc) => {
            let opinionData = doc.data();

            // 🔴 Evitar opiniones vacías
            if (!opinionData.nombre || !opinionData.comentario) {
                return;
            }

            let nombre = opinionData.nombre ? opinionData.nombre : "Anónimo";
            let comentario = opinionData.comentario ? opinionData.comentario : "Sin comentario.";

            let opinionHTML = `
                <div class="opinion-card">
                    <p>"${comentario}"</p>
                    <h4>- ${nombre}</h4>
                </div>
            `;

            opinionesLista.innerHTML += opinionHTML;
        });
    } catch (error) {
        console.error("Error al obtener las opiniones: ", error);
    }
}

// 🔹 Llamamos a la función para cargar opiniones en la página
mostrarOpiniones();
document.addEventListener("DOMContentLoaded", function () {
    let opinionesScroll = document.querySelector(".opiniones-scroll");
    opinionesScroll.scrollLeft = opinionesScroll.scrollWidth / 2; // Mueve el scroll al centro
});
