// $.get("http://127.0.0.1:8000/index/", function(resultado){

//     resultado.forEach(function(item){
//         $('#opc').append('<option>' + item.nome + '</option>');
//     });
    


//     $('#opc').change(function() {
//         var option = $('#opc').find(":selected").index()
    
//         $("#descricao").val(resultado[option].nome)
//         $("#valoru").val('R$ ' + resultado[option].registro)
    
//         $('#quantidade').keyup(function(){
//             var qtd = $(this).val()
//             var total = Number(resultado[option]['registro']) * Number(qtd)
//             $("#valort").val('R$ ' + total)
    
//         });
//     });
// })


$("#enviar").click(function(){
    
    let codigo = $("#codigo").val()
    let descricao = $("#descricao").val()
    let valor = $("#valor").val()
    let categoria = $("#categoria").val()
    let data = $("#data").val()


    var dados = {
        codigo: codigo,
        descricao: descricao,
        valorunitario: valor,
        categoria: categoria,
        data: data
    }

    $.ajax({
        method: "POST",
        url: "http://127.0.0.1:8000/cadastroproduto/",
        data: dados
    })
})
