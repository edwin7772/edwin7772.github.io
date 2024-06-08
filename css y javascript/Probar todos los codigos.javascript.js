document.addEventListener("DOMContentLoaded", function() {
    const anuncio = document.getElementById("anuncio");
    const cerrarAnuncio = document.getElementById("cerrar-anuncio");

    // Mostrar el anuncio después de 5 segundos
    setTimeout(function() {
        anuncio.style.display = "block";
    }, 5000);

    // Cerrar el anuncio al hacer clic en el botón de cerrar
    cerrarAnuncio.addEventListener("click", function() {
        anuncio.style.display = "none";
    });
});
