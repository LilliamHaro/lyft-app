$(document).ready(function() {
  var opName = false;
  var opLastName = false;
  var opEmail = false;
  var opAgreed = false;

  function activeFinalButton() {
    if (opName === true && opLastName === true && opEmail === true) {
      $('#final').attr('disabled', false);
      $('#final').addClass('bg-magenta');
    } else {
      $('#final').attr('disabled', true);
      $('#final').removeClass('bg-magenta');
    }
  }

  $('#name').on('input', function(event) {
    if ($(this).val().length >= 2) {
      opName = true;
    } else {
      opName = false;
    }
    activeFinalButton();
  });

  $('#last-name').on('input', function(event) {
    if ($(this).val().length >= 2) {
      opLastName = true;
    } else {
      pLastName = false;
    }
    activeFinalButton();
  });

  // validando el Email
  $('#email').on('keyup', function(event) {
    var EMAILESTRUC = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (EMAILESTRUC.test($(this).val())) {
      opEmail = true;
    } else {
      opEmail = false;
    }
    activeFinalButton();
  });

  $('#final').on('click', function(event) {
    if ($('#agree').prop('checked')) {
      window.location.href = '../views/last-view.html';
    } else {
      alert('Para continuar debe hacer aceptar los terminos y condiciones de lyft');
    }
  });

  $('#back-to-verify').on('click', function(event) {
    window.location.href = '../views/verify.html';
  });
});
