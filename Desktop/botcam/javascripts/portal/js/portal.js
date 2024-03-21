const formularioLogin = document.getElementById("login-form");
const nombreInput = document.getElementById("nombre");
const codigoInput = document.getElementById("codigo");
const mensajeError = document.getElementById("error-message");
const videoFrame = document.getElementById("video-frame");

formularioLogin.addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar envío del formulario

    const nombre = nombreInput.value.trim();
    const codigo = codigoInput.value.trim();

    // Validar nombre y código (aquí puedes cambiar la lógica según tus necesidades)
    if (nombre === "usuario" && codigo === "123") {
        // Mostrar el video de YouTube si las credenciales son correctas
        mostrarVideo();
    } else {
        // Mostrar mensaje de error y redireccionar al usuario
        mostrarError();
        setTimeout(() => {
            window.location.href = "404.html"; // Redireccionar al usuario
        }, 2000); // Redireccionar después de 2 segundos (2000 milisegundos)
    }
});

function mostrarVideo() {
    formularioLogin.style.display = "none";
    mensajeError.style.display = "none";
    videoFrame.style.display = "block";
    // Establecer URL del video de YouTube
    videoFrame.src = "https://www.youtube.com/embed/wLbDE-sWAnI";
}

function mostrarError() {
    mensajeError.style.display = "block";
    nombreInput.value = ""; // Limpiar campos de entrada
    codigoInput.value = "";
}