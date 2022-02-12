$("#salvar").click(function(){
    
    let codigo = $("#codigo").val()
    let descricao = $("#descricao").val()
    let valor = $("#valor").val()
    let categoria = $("#categoria").val()

    var horaEntrada = new Date();
    var hora = horaEntrada.getHours()
    var minutos = horaEntrada.getMinutes()

    let horaAtual = String(hora) + ':' + String(minutos)

    console.log(codigo)

    var dados = {
            codigo: codigo,
            descricao: descricao,
            valorunitario: valor,
            categoria: categoria,
            data: horaAtual
        }

    $.post("http://127.0.0.1:8000/cadastroproduto/", dados, function(msg){
        alert("Produto Registrado!")

        document.getElementById('formPostProduto').reset()
    })
})
