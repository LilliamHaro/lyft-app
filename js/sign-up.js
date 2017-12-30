$(document).ready(function() {
  // primero deshabiliamos el input para asegurarnos de que el usuario no pase a la siguiente vista sin haber elegido su codigo de país
  $('#phone').prop('disabled', true);
  // funcion para que al hacer click en alguna bandera se muestre la bandera y el codigo del país fijo
  $('li a img').click(function() {
    var flag = $(this).attr('src');
    $('#flag').attr('src', flag);
    var code = ($(this).data('code'));
    localStorage.setItem('cod', code);
    $('#code').text(code);
    $('#phone').prop('disabled', false);
    $('#phone').focus();
  });
  // funcion para habilitar el boton next
  $('#phone').on('keyup', function(event) {
    if ($(this).val().length >= 10) {
      $('#next').attr('disabled', false);
      $('#next').addClass('bg-magenta');
      var number = $('#phone').val();
      localStorage.setItem('num', number);
    } else {
      $('#next').attr('disabled', true);
      $('#next').removeClass('bg-magenta');
    }
  });
  // funcion para enviar el alert con el codigo generado aleatoriamente
  $('#next').on('click', function(event) {
    // numero random entero entre 0 y 999
    var random = Math.floor(Math.random() * 999);
    if (random < 10) {
      random = '00' + random;
    } else if (random > 10 && random < 100) {
      random = '0' + random;
    }
    // guardando el numero random en el localstrage para usar este dato en la siguiente vista
    localStorage.setItem('code', random);
    alert('Tu código: LAB-' + random);
    // limpiando input
    $('#phone').val('');
    window.location.href = '../views/verify.html';
  });
});
