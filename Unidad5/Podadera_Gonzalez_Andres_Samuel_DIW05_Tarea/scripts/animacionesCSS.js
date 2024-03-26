let divCarga = document.getElementById('carga');
let divPolo = document.getElementById('polo');
let divTextoPilaCargada = document.getElementById('pilaCargada');
let animacionCuerpoFinalizada = false;
let animacionPoloFinalizada = false;

// Añadir escuchador de evento de finalizacion de animacion css
divCarga.addEventListener('animationend', function () {
  divPolo.style.animation = 'colorearRojo 1s linear forwards';
  divPolo.innerHTML = '+';
  animacionCuerpoFinalizada = true;
});

divPolo.addEventListener('animationend', function () {
  animacionPoloFinalizada = true;
});

// Añadir escuchador de evento al cargar la pagina para que no se autoejecute la animacion
document.addEventListener('DOMContentLoaded', function () {
  divCarga.style.animationPlayState = 'paused';
  divPolo.style.animationPlayState = 'paused';
  divTextoPilaCargada.style.animationPlayState = 'paused';
});

var botonParar = document.getElementById('parar'); // Selecciona el botón por su ID
botonParar.addEventListener('click', function () {
  // Agrega un evento de clic al botón
  divCarga.style.animationPlayState = 'paused';
  divPolo.style.animationPlayState = 'paused';
  divTextoPilaCargada.style.animationPlayState = 'paused';
});

var botonReanudar = document.getElementById('reanudar'); // Selecciona el botón por su ID
botonReanudar.addEventListener('click', function () {
  // Agrega un evento de clic al botón
  if (animacionPoloFinalizada && animacionCuerpoFinalizada) {
    divCarga.style.animation = 'none'; // Detenemos la animación
    void divCarga.offsetWidth; // Forzamos el repaint
    divCarga.style.animation = null; // Restablecemos la animación
    divCarga.style.animationPlayState = 'paused';
    divPolo.style.animation = 'none'; // Detenemos la animación
    void divPolo.offsetWidth; // Forzamos el repaint
    divPolo.style.animation = null; // Restablecemos la animación
    divPolo.style.animationPlayState = 'paused';
    divPolo.innerHTML = '';
    animacionCuerpoFinalizada = false;
    animacionPoloFinalizada = false;
    divTextoPilaCargada.style.animation = 'none'; // Detenemos la animación
    void divTextoPilaCargada.offsetWidth; // Forzamos el repaint
    divTextoPilaCargada.style.animation = null; // Restablecemos la animación
    divTextoPilaCargada.style.animationPlayState = 'paused';
  } else if (divCarga.style.animationPlayState == 'running') {
    divCarga.style.animation = 'none'; // Detenemos la animación
    void divCarga.offsetWidth; // Forzamos el repaint
    divCarga.style.animation = null; // Restablecemos la animación
    divCarga.style.animationPlayState = 'paused';
    divPolo.style.animation = 'none'; // Detenemos la animación
    void divPolo.offsetWidth; // Forzamos el repaint
    divPolo.style.animation = null; // Restablecemos la animación
    divPolo.style.animationPlayState = 'paused';
    divPolo.innerHTML = '';
    animacionCuerpoFinalizada = false;
    animacionPoloFinalizada = false;
    divTextoPilaCargada.style.animation = 'none'; // Detenemos la animación
    void divTextoPilaCargada.offsetWidth; // Forzamos el repaint
    divTextoPilaCargada.style.animation = null; // Restablecemos la animación
    divTextoPilaCargada.style.animationPlayState = 'paused';
  } else if (
    divCarga.style.animationPlayState == 'paused' &&
    !animacionCuerpoFinalizada
  ) {
    divCarga.style.animationPlayState = 'running';
    divTextoPilaCargada.style.animationPlayState = 'running';
  } else if (
    divPolo.style.animationPlayState == 'paused' &&
    !animacionPoloFinalizada
  ) {
    divPolo.style.animationPlayState = 'running';
    divTextoPilaCargada.style.animationPlayState = 'running';
    divTextoPilaCargada.style.animationPlayState = 'running';
  } else if (divCarga.style.animationPlayState == 'paused') {
    divCarga.style.animationPlayState = 'running';
    divTextoPilaCargada.style.animationPlayState = 'running';
  } else if (divCarga.style.animationPlayState == 'running') {
    divCarga.style.animationPlayState = 'paused';
    divTextoPilaCargada.style.animationPlayState = 'paused';
  } else if (divPolo.style.animationPlayState == 'running') {
    divPolo.style.animationPlayState = 'paused';
    divTextoPilaCargada.style.animationPlayState = 'paused';
  }
});
