function dibujarCuerpo() {
  const miCanvas = document.getElementById('canvas');
  const dibujo = miCanvas.getContext('2d');

  dibujo.textBaseline = 'ideographic';
  dibujo.textAlign = 'center';
  dibujo.font = '1em Serif';
  dibujo.fillStyle = 'red';
  dibujo.fillText('¡Cargada!', 140, 135);

  dibujo.rect(140, 20, 10, 10);
  dibujo.rect(120, 30, 50, 80);
  dibujo.fillStyle = 'white';
  dibujo.fill();
  dibujo.strokeStyle = 'blue';
  dibujo.stroke();
}

/* Escucha que llama a la función dibujarRectangulo cuando se cargue la página*/
window.addEventListener('load', dibujarCuerpo);
