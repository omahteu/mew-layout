$.get("http://127.0.0.1:8000/index/", function(resultado){

    resultado.forEach(function(item){
        $('#opc').append('<option>' + item.nome + '</option>');
    });
    


    $('#opc').change(function() {
        var option = $('#opc').find(":selected").index()
    
        $("#descricao").val(resultado[option].nome)
        $("#valoru").val('R$ ' + resultado[option].registro)
    
        $('#quantidade').keyup(function(){
            var qtd = $(this).val()
            var total = Number(resultado[option]['registro']) * Number(qtd)
            $("#valort").val('R$ ' + total)
    
        });
    });




})