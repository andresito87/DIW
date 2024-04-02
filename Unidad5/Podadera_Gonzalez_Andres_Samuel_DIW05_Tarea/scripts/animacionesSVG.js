// Obtener la letra A
const letraA = document.getElementById('inicialA');
const textoClickame = document.getElementById('clickame');

// Agregar un controlador de eventos de clic al texto Clickame
textoClickame.addEventListener('click', function () {
  let lineaQuebrada = document.getElementById('linea_quebrada');
  lineaQuebrada.style.animation = 'animacion_linea_quebrada 5s linear forwards';
});

// Agregar un controlador de eventos de clic a la letra A
letraA.addEventListener('click', function () {
  let lineaQuebrada = document.getElementById('linea_quebrada');
  lineaQuebrada.style.animation = 'animacion_linea_quebrada 5s linear forwards';
});
