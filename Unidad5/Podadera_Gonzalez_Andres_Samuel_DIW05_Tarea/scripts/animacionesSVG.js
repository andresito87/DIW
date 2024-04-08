// Obtener la letra A
let inicialA = document.getElementById('inicialA');
let animacionactivadaAlClic = document.getElementById(
  'animacionactivadaAlClic'
);

// Agregar un controlador de eventos de clic a la letra A
inicialA.addEventListener('click', function () {
  // Establecer la duración de la animación a 3 segundos
  animacionactivadaAlClic.setAttribute('dur', '3s');
  // Iniciar la animación
  animacionactivadaAlClic.beginElement();
});
