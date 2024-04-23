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

  // Cunado pulsamos en el botón inicializar
  $('#inicializar').click(function () {
    $.inicializar();
  });

  // ------------------------------------------//
  // Zonas de miniaturas: Selección de miniatura
  // ------------------------------------------//
  // Cuando se haga click en una miniatura, cambiar a clase imagen_seleccionada
  $('.miniaturas img').click(function () {
    // Cambiar la clase de la imagen seleccionada a traves de su id
    $.cambiarASeleccionada($(this).attr('id'));
  });

  // ------------------------------------------//
  // Zonas de imagenes: Cambiar posicionamiento
  // ------------------------------------------//
  //lo hago porque sino los radio button se mueven al hacer click en ellos, pequeños saltos, muy incomodos
  let altura = $('.visual_img').height();
  $('.visual_img').css('height', altura);
  // Cuando se haga click en el checkbox de horizonta
  $('#horizontal').on('change', function () {
    if ($(this).is(':checked')) {
      $.cambiarPosicionamientoZonaImagenes('horizontal');
    }
  });

  // Cuando se haga click en el checkbox de vertical
  $('#vertical').on('change', function () {
    if ($(this).is(':checked')) {
      $.cambiarPosicionamientoZonaImagenes('vertical');
    }
  });

  // ------------------------------------------//
  // Zonas de imagenes: Cambiar color de fondo
  // ------------------------------------------//
  // Cuando se haga click en el selector de colores, cambiar el color de fondo
  $('#seleccion_color').change(function () {
    let colorSeleccionado = $(this).val();
    $('.visual_img').css('background-color', colorSeleccionado);
  });

  // ------------------------------------------------//
  // Zonas de imagenes: Cambiar filtro de imagen grande
  // ------------------------------------------------//
  // Cuando se haga click en el selector de filtros, cambiar el filtro
  let filtroSeleccionado = 'sin_filtro';
  $('#filtro').change(function () {
    filtroSeleccionado = $(this).val();
    switch (filtroSeleccionado) {
      case '1':
        filtroSeleccionado = 'filtro_escala_gris';
        break;
      case '2':
        filtroSeleccionado = 'filtro_inversion';
        break;
      case '3':
        filtroSeleccionado = 'filtro_sepia';
        break;
      case '4':
        filtroSeleccionado = 'filtro_saturacion';
        break;
      default:
        filtroSeleccionado = 'sin_filtro';
        break;
    }
  });

  // -----------------------------------------------//
  // Zonas de imagenes: Cambiar borde de imagen grande
  // ------------------------------------------------//
  // Cuando se haga click en una imagen grande, cambiar el borde de la imagen clicada
  $('#borde').change(function () {
    grosorBorde = $(this).val();
  });

  // ------------------------------------------//
  // Zonas de imagenes: Cambiar imagen grande
  // ------------------------------------------//
  // Cuando se haga click en una imagen grande, esta cambiará a la seleccionada, con los estilos correspondientes y su atributo alt correspondiente
  $('.div_img_grande img').click(function () {
    $(this).attr('src', $('.imagen_seleccionada').attr('src'));
    $(this).attr('alt', $('.imagen_seleccionada').attr('alt'));
    // Cambiar el filtro de la imagen seleccionada
    $.cambiarFiltro($(this).attr('id'), filtroSeleccionado);
  });
  // Cuando se haga click en una imagen grande, cambiar el borde de la imagen clicada
  // Cambiar el grosor borde del div de la imagen grande
  $('.div_img_grande').click(function () {
    $(this).css('border-width', $('#borde').val() + 'px');
  });
  // Cambiar el color del borde del div de la imagen grande
  $('.div_img_grande').click(function () {
    $(this).css('border-color', $('#seleccion_color_borde').val());
  });
});

$.inicializar = function inicializar() {
  // Encabezado, logo
  $('.logo_cabecera').attr('src', '../images/pel_ani_01.png');
  $('.logo_cabecera').attr('alt', 'Imagen de la cabeza de una chica');
  $('.logo_cabecera').css({ width: '70px', height: '70px' });

  // Menú de navegación, checkbox
  $('#imagen').prop('checked', true);
  $('#texto').prop('checked', true);

  // Zona de imagen
  $('.contenedor_imagen').show();

  // Zona de texto
  $('.contenedor_texto').show();

  // Zona de miniaturas
  // Quitar la clase imagen_seleccionada a todas las miniaturas
  $('.miniaturas img').removeClass('imagen_seleccionada');
  // Añadir la clase imagen_seleccionada a la primera miniatura
  $('#mini1').addClass('imagen_seleccionada');

  // Zona posicionamiento de las imagenes
  $('#horizontal').prop('checked', true);

  // Zona de imagenes
  $.cambiarPosicionamientoZonaImagenes('horizontal');

  // Color de fondo
  $('#seleccion_color').val('#ff66ff');
  $('.visual_img').css('background-color', '#ff66ff');

  // Zona de filtros(filtro por defecto sin filtro)
  $('#filtro').val('5');

  // Zona de imagenes grandes
  // Cambiar todas las imagenes grandes por el logo IES Aguadulce
  $('.div_img_grande img').attr('src', '../images/logo_ies_aguadulce.png');
  $('.div_img_grande img').attr('alt', 'Logo del IES Aguadulce');
  $('.div_img_grande img').each(function () {
    $(this).removeClass();
    $(this).addClass('sin_filtro');
  });
  // Cambiar grosor y color del borde al valor por defecto
  $('.div_img_grande').css({
    'border-width': '2px',
    'border-color': '#3366ff',
  });

  // Cambiar el color del borde al valor por defecto
  $('#borde').val('2');

  // Cambiar el color del borde al valor por defecto
  $('#seleccion_color_borde').val('#3366ff');
};

// Función para cambiar a la imagen seleccionada
$.cambiarASeleccionada = function cambiarASeleccionada(
  idImagenActualSeleccionada
) {
  // TODO: Mejorar para que se calcule el numero total de miniaturas
  let idImagenAnteriorSeleccionada = '';
  for (let i = 1; i <= 6; i++) {
    if (
      $('#mini' + i).hasClass('imagen_seleccionada') &&
      idImagenActualSeleccionada != 'mini' + i
    ) {
      idImagenAnteriorSeleccionada = 'mini' + i;
    }
  }
  if (idImagenAnteriorSeleccionada != '') {
    $('#' + idImagenAnteriorSeleccionada).removeClass('imagen_seleccionada');
    $('#' + idImagenActualSeleccionada).addClass('imagen_seleccionada');
  }
};

// Función para cambiar la posicionamiento de las imagenes
$.cambiarPosicionamientoZonaImagenes =
  function cambiarPosicionamientoZonaImagenes(direccion) {
    if (direccion == 'horizontal') {
      $('.visual_img').removeClass('posicionamiento_vertical');
      $('.visual_img').addClass('posicionamiento_horizontal');
    } else {
      $('.visual_img').removeClass('posicionamiento_horizontal');
      $('.visual_img').addClass('posicionamiento_vertical');
    }
  };

// Función para localizar el filtro aplicado y cambiarlo por el seleccionado
$.cambiarFiltro = function cambiarFiltro(idImagen, filtroSeleccionado) {
  // Quitar el filtro actual
  $('#' + idImagen).removeClass('filtro_escala_gris');
  $('#' + idImagen).removeClass('filtro_inversion');
  $('#' + idImagen).removeClass('filtro_sepia');
  $('#' + idImagen).removeClass('filtro_saturacion');
  $('#' + idImagen).removeClass('sin_filtro');
  // Aplicar el filtro seleccionado
  $('#' + idImagen).addClass(filtroSeleccionado);
};
