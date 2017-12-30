$(document).ready(function() {
  var op1 = false;
  var op2 = false;
  var op3 = false;


  // validando que no se ingresen numero como nombre
  $('#name').on('input', function(event) {


  });
  // validando que no se ingresen numero como nombre
  $('#name').on('input', function(event) {

  })
  // validando el Email
  $('#email').on('input', function(event) {
    var EMAILESTRUC = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
    if (EMAILESTRUC.test($(this).val())) {
      op1 = true;
    } else {
      op1 = false;
    }
    return op1;
  });
});
