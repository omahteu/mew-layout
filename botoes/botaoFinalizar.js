$("#finalizar").click(function(){
    
    var numero_quarto = JSON.parse(sessionStorage.getItem('Encerrando'))
    var codigo_quarto = JSON.parse(localStorage.getItem("quarto" + numero_quarto))
    var dados_head = JSON.parse(localStorage.getItem(codigo_quarto))

    console.log(dados_head)
})