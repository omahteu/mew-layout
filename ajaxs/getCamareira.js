$(document).ready(function(){
    $.get("http://127.0.0.1:8000/camareiras/", function(resultado){

        resultado.forEach(function(item){
            $('#comboCamareiras').append('<option>' + item.nome + '</option>');
        });
    })
})
