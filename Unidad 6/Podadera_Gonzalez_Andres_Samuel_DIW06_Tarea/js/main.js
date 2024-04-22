// Cuando el documento esté cargado
$(document).ready(function () {
  // Inicializar la página
  $.inicializar();

  // ------------------------------------------//
  // Cambiar imagen de cabecera
  // ------------------------------------------//
  // Cambio de imagen de cabecera cuando hago click en ella
  $('.logo_cabecera').click(function () {
    // Compruebo si la imagen actual es la del logo o la de la chica
    if ($(this).attr('src') == '../images/pel_ani_01.png')
      // Usar animación para desaparecer la imagen
      $(this).fadeOut(1000, function () {
        // Cambiar la imagen
        $(this).attr('src', '../images/logo_ies_aguadulce.png');
        // Cambiar el atributo alt
        $(this).attr('alt', 'Logo del IES Aguadulce');
        // Cambiar el tamaño de la imagen
        $(this).css({
          width: '120px',
          height: '70px',
        });
        // Usar animación para aparecer la imagen
        $(this).fadeIn(1000);
      });
    // Usar animación para desaparecer la imagen
    else
      $(this).fadeOut(1000, function () {
        // Cambiar la imagen
        $(this).attr('src', '../images/pel_ani_01.png');
        // Cambiar el atributo alt
        $(this).attr('alt', 'Imagen de la cabeza de una chica');
        // Cambiar el tamaño de la imagen
        $(this).css({
          width: '70px',
          height: '70px',
        });
        // Usar animación para aparecer la imagen
        $(this).fadeIn(1000);
      });
  });

  // -------------------------------------------------------------------//
  // Mostrar y ocultar el menú de navegación Zona de imagen, Zona de texto
  // -------------------------------------------------------------------//
  // Cuando se haga clic en el checkbox de imagen
  $('#imagen').on('change', function () {
    if ($(this).is(':checked')) {
      $('.contenedor_imagen').slideDown();
    } else {
      $('.contenedor_imagen').slideUp();
    }
  });

  // Cuando se haga clic en el checkbox de texto
  $('#texto').on('change', function () {
    if ($(this).is(':checked')) {
      $('.contenedor_texto').fadeIn();
    } else {
      $('.contenedor_texto').fadeOut();
    }
  });
});

$.inicializar = function inicializar() {
  // Encabezado, logo
  $('.logo_cabecera').attr('src', '../images/pel_ani_01.png');
  $('.logo_cabecera').attr('alt', 'Imagen de la cabeza de una chica');

  // Menú de navegación, checkbox
  $('#imagen').prop('checked', true);
  $('#texto').prop('checked', true);
};
