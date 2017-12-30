$(document).ready(function() {
  $('#input-code').focus();
  // mostrando el codigo de pais y el numero de celular ingrsados en la vista anterior
  var cel = window.localStorage.getItem('num');
  var cod = window.localStorage.getItem('cod');
  $('#num').text(cod + cel);
  // verificando que se ingrese el mismo codigo que se dio anteriorment
  $('#input-code').on('keyup', function(event) {
    var oldCode = window.localStorage.getItem('code');
    console.log(oldCode);
    if ($(this).val() === oldCode) {
      $('#verify').attr('disabled', false);
      $('#verify').addClass('bg-magenta');
    } else {
      $('#verify').attr('disabled', true);
      $('#verify').removeClass('bg-magenta');
    }
  });

  // boton para que el usuario pueda obtener otro codigo nuevo si olvido el anterior
  $('#resend').on('click', function(event) {
    var anotherRandom = Math.floor(Math.random() * 999);
    if (anotherRandom < 10) {
      anotherRandom = '00' + random;
    } else if (anotherRandom > 10 && anotherRandom < 100) {
      anotherRandom = '0' + anotherRandom;
    }
    alert('Tu nuevo código: LAB-' + anotherRandom);
    $('#input-code').focus();

    $('#input-code').on('keyup', function(event) {
      if ($('#input-code').val() == anotherRandom) {
        $('#verify').attr('disabled', false);
        $('#verify').addClass('bg-magenta');
      } else {
        $('#verify').attr('disabled', true);
        $('#verify').removeClass('bg-magenta');
      }
    });
  });
  $('#verify').on('click', function(event) {
    window.location.href = '../views/verify.html';
  });
});
