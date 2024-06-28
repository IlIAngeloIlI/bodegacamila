document.addEventListener('DOMContentLoaded', function() {
    let indiceActual = 0;
    const slides = document.querySelectorAll('.carrusel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    function mostrarSlide(indice) {
        if (indice >= slides.length) {
            indiceActual = 0;
        } else if (indice < 0) {
            indiceActual = slides.length - 1;
        } else {
            indiceActual = indice;
        }
        
        slides.forEach((slide, index) => {
            if (index === indiceActual) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
    
    function moverCarrusel(direccion) {
        indiceActual += direccion;
        if (indiceActual < 0) {
            indiceActual = slides.length - 1;
        } else if (indiceActual >= slides.length) {
            indiceActual = 0;
        }
        mostrarSlide(indiceActual);
    }
    
    // Evento clic para el botón previo
    prevBtn.addEventListener('click', function() {
        moverCarrusel(-1);
    });
    
    // Evento clic para el botón siguiente
    nextBtn.addEventListener('click', function() {
        moverCarrusel(1);
    });
    
    // Cambiar la imagen cada 5 segundos (opcional)
    setInterval(() => {
        moverCarrusel(1);
    }, 3000);
    
    // Inicializar el carrusel
    mostrarSlide(indiceActual);
});
