// Referencias a elementos del DOM
const button = document.getElementById('interactive-button');
const infoText = document.getElementById('info-text');
const interactiveComponent = document.getElementById('interactive-component');

// Agregar un event listener al botón
button.addEventListener('click', () => {
  // Disparar un evento personalizado con información relevante
  const customEvent = new CustomEvent('informacionClic', { detail: '¡Recibido!' });
  interactiveComponent.dispatchEvent(customEvent);
});

// Agregar un event listener al componente interactivo para manejar el evento personalizado
interactiveComponent.addEventListener('informacionClic', (event) => {
  // Obtener la información de detalle del evento y mostrarla en el componente de información
  infoText.textContent = event.detail;
  infoText.style.display = 'block';
});
