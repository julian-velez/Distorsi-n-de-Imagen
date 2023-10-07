// Obtenemos la referencia a la imagen por su ID 'distorsionable'
const imagen = document.getElementById('distorsionable');

// Añadimos un evento 'mouseover' que se dispara cuando el ratón pasa por encima de la imagen
imagen.addEventListener('mouseover', () => {
    // Cuando se dispara el evento, aplicamos una transformación de desplazamiento 'skew' a la imagen
    imagen.style.transform = 'skew(10deg, 10deg)';
});

// Añadimos un evento 'mouseout' que se dispara cuando el ratón deja la imagen
imagen.addEventListener('mouseout', () => {
    // Cuando se dispara el evento, eliminamos cualquier transformación aplicada, volviendo a la posición original
    imagen.style.transform = 'none';
});
