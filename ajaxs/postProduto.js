$("#salvar").click(function(){
    
    let codigo = $("#codigo").val()
    let descricao = $("#descricao").val()
    let valor = $("#valor").val()
    let quantidade = $("#quantidade").val()
    let categoria = $("#categoria").val()

    var horaEntrada = new Date();

    var dia = horaEntrada.getDate()
    var mes = horaEntrada.getMonth()
    var ano = horaEntrada.getFullYear()


    let dataAtual = String(dia) + '/' + String(mes) + '/' + String(ano)

    console.log(codigo)

    var dados = {
            codigo: codigo,
            descricao: descricao,
            valorunitario: valor,
            quantidade: quantidade,
            categoria: categoria,
            data: dataAtual
        }

    $.post("http://127.0.0.1:8000/produtos/", dados, function(msg){
        alert("Produto Registrado!")

        document.getElementById('formPostProduto').reset()
    })
})
