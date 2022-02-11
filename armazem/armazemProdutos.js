$("#salvar").click(function(){

	var tipos = ['pernoite', 'locado']
	var tipo = $("#tipo").text()

	// Verificação se o quarto está em Pernoite ou Locação
	if(tipos.includes(tipo)){
		registroProduto()
	} else (
		alert('Selecione um quarto em modo Pernoite ou Locação!')
	)
})

function gera_id(){
	var tamanho = 3
	var numero = Math.ceil(Math.random() * Math.pow(10, tamanho))
	return numero
}

function registroProduto(){
	
	// Parâmetros
	var codigo = $("#cod").val()
	var descricao = $("#des").val()
    var quantidade = $("#qtd").val()
	var valorTotal = $("#tot").val()
    var quarto =  $("#quarto").text()
    var valorUnitario = $("#vun").val()
    
    // Objeto com Parãmtros
	var produto = {
		codigo: codigo,
		quarto: quarto,
		operacao: gera_id(),
		descricao: descricao,
		quantidade: quantidade,
		valor_total: valorTotal,
		valor_unitario: valorUnitario,
	}

	// Salvando em LocalStorage
	if(localStorage.getItem('produtos') === null){
		var produtos = [];
		produtos.push(produto);
		localStorage.setItem('produtos', JSON.stringify(produtos));
	} else {
		var produtos = JSON.parse(localStorage.getItem('produtos'));
		produtos.push(produto);
		localStorage.setItem('produtos', JSON.stringify(produtos));
	}

	// Limpa os Campos
	document.getElementById('produtos').reset();

	// Exibe os Produtos
	mostraProduto();
}

function removeProduto(operacao){
	var patio = JSON.parse(localStorage.getItem('produtos'))

	 for(var i = 0 ; i < patio.length; i++){
		if(patio[i].operacao == operacao){
			patio.splice(i, 1);
		}
	}

	localStorage.setItem('produtos', JSON.stringify(patio));

	mostraProduto();
}

function mostraProduto(){

	var nQuarto =  $("#quarto").text()
	var dados_produtos = JSON.parse(localStorage.getItem('produtos'))
	var prateleira = document.getElementById('lprodutos');
	prateleira.innerHTML = '';

	
	var dados = dados_produtos.filter(quartos => quartos.quarto == nQuarto)

	for(var i = 0; i < dados.length; i++){

		var operacao =  dados[i].operacao
		var quarto =  dados[i].quarto
		var codigo = dados[i].codigo
		var descricao = dados[i].descricao
		var quantidade = dados[i].quantidade
		var valorUnitario = dados[i].valor_unitario
		var valorTotal = dados[i].valor_total

		prateleira.innerHTML += '<tr><td hidden>'+ operacao + '</td>'+
		 							'<td>'+ quarto + '</td>' +
									'<td>'+ codigo + '</td>' +
									'<td>'+ descricao + '</td>' +
									'<td>'+ quantidade + '</td>' +
									'<td>'+ valorUnitario + '</td>' +
									'<td>'+ valorTotal + '</td>' +
		 							'<td><button onclick="removeProduto('+ operacao +')" class="btn btn-danger">Remover</button></td>'+
		 						'</tr>';
	}
}
