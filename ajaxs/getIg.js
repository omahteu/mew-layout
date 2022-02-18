$(document).ready(function(){

    $.get("http://127.0.0.1:8000/igs/", function(resultado){

        var endereco = resultado[0].endereco + ' ' + ' ' + resultado[0].numero + ' - ' + resultado[0].bairro + ' , ' + 
        resultado[0].cidade

        // COLOCAR CNPJ E EMAIL JUNTOS

        $("#email").text(resultado[0].cnpj)
        $("#endereco").text(endereco)
        $("#telefone").text(resultado[0].telefone)
        $("#telefone2").text(resultado[0].telefone2)
        $("#telefone3").text(resultado[0].telefone3)
    })
})