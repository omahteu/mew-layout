$(document).ready(function(){
    $.get("https://drf-motel.herokuapp.com/camareiras/", function(resultado){

        resultado.forEach(function(item){
            $('#comboCamareiras').append('<option>' + item.nome + '</option>');
        });
    })
})
