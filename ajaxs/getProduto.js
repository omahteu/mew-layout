$(document).ready(function(){
    $.get("http://127.0.0.1:8000/produtos/", function(resultado){

    resultado.forEach(function(item){
        $('#cod').append('<option>' + item.descricao + '</option>');
    });
    

    $('#cod').change(function() {
        var option = $('#cod').find(":selected").index()

        var db = option - 1
    
        $("#des").val(resultado[db].descricao)
        $("#vun").val('R$ ' + resultado[db].valorunitario)
    
        $('#qtd').keyup(function(){
            var qtd = $(this).val()
            var total = Number(resultado[db]['valorunitario']) * Number(qtd)
            $("#tot").val('R$ ' + total)
        });
    });
})
})
