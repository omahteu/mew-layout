$(document).ready(function(){

    $.get("http://127.0.0.1:8000/quartos/", function(resultado){

        for(var i = 0; i < resultado.length; i++){

            var num = resultado[i].numero
   
            document.getElementById('imagemQuarto').id = 'imagemQuarto' + num

            document.getElementById('quarto').id = "quarto" + num

        }
    })
})
