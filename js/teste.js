$(document).ready(function(){

    $.get("http://127.0.0.1:8000/dados/", function(resultado){

        console.log(resultado)

        $("#texto").text(resultado[0].nome)
        $("#numero").text(resultado[0].idade)
    })
})

$("#trocar").click(function(){

    var nome = $("#novonome").val()
    var idade = $("#novaidade").val()


    $.ajax({
        url: "http://127.0.0.1:8000/dados/1/",
        method: 'PUT',
        dataType: 'json',
        data: {
            nome: nome,
            idade: idade
        },
        success: function(){
            alert('Produto alterado')
            
        }
    })


    $.get("http://127.0.0.1:8000/dados/", function(resultado){

        console.log(resultado)

        $("#texto").text(resultado[0].nome)
        $("#numero").text(resultado[0].idade)
    })
})