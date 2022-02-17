$(document).ready(function(){

    mostra()
})

function mostra(){
    $.get("http://127.0.0.1:8000/produtos/", function(resultado){


        var tabela = document.getElementById('tabelaProdutos')
        tabela.innerHTML = ''

        
        for(var i = 0; i < resultado.length; i++){
            
            var codigo = resultado[i].codigo
            var descricao = resultado[i].descricao
            var valor = resultado[i].valorunitario
            var quantidade = resultado[i].quantidade
            var categoria = resultado[i].categoria
            var data = resultado[i].data

            tabela.innerHTML += '<tr>'+
                                    '<td>' + codigo + '</td>'+
                                    '<td>' + descricao + '</td>'+
                                    '<td>' + valor + '</td>'+
                                    '<td>' + quantidade + '</td>'+
                                    '<td>' + categoria + '</td>'+
                                    '<td>' + data + '</td>'+
                                '</tr>'
        }
    })
}
