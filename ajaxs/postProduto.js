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
