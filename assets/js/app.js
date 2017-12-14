$(document).ready(function(){

/* Función del botón agregar */
  $('#btn-add').click(function(){
    var name = $('#input-name').val();
    var phone = $('#input-phone').val();
    $('#input-name').val("");
    $('#input-phone').val("");
    var contenedor = $('#contact');
    contenedor.append('<div class= "list-contact">' + 
    '<p class="name-contact">' + name + '</p>' + 
    '<p class="phone-contact">' + phone + '</p>' +
    '<a href="#" class="delete-contact"><i class="fa fa-trash trash">' + '</i></a>' + 
    '</div>');

  })

/* Función del basurero para eliminar contactos */
  $('.delete-contact').click(function(){
    $('.list-contact').hide();
  
  })
});
