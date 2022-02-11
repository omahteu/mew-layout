function mostraVeiculo(){

	var nuQuarto =  $("#quarto").text()
	var dados_garagem = JSON.parse(localStorage.getItem('garagem'))
	var patio = document.getElementById('garagem')
	patio.innerHTML = ''

	var dados = dados_garagem.filter(quartos => quartos.quarto == nuQuarto)

	for(var i = 0; i < dados.length; i++){

		var quarto =  dados[i].quarto
		var veiculo =  dados[i].veiculo
		var modelo = dados[i].modelo
		var placa = dados[i].placa
		var operacao = dados[i].operacao

		patio.innerHTML += '<tr><td>'+ quarto + '</td>'+
		 						'<td>'+ veiculo + '</td>' +
								'<td>'+ modelo + '</td>' +
								'<td>'+ placa + '</td>' +
								'<td hidden>'+ operacao + '</td>'+
		 						'<td><button onclick="removeVeiculo('+ operacao +')" class="btn btn-danger">Remover</button></td>'+
		 					'</tr>';
	}
}

$("#quarto2").mousedown(function(){

	var cor = $(this).css("background-color")

	switch(cor){
		case 'rgb(30, 144, 255)':
			$("#tipo").text('reservado')
			break
		case 'rgb(240, 230, 140)':
			$("#tipo").text('limpeza')
			break
		case 'rgb(218, 165, 32)':
			$("#tipo").text('aguardando')
			break
		case 'rgb(169, 169, 169)':
			$("#tipo").text('manutencao')
			break
		case 'rgb(139, 0, 139)':
			$("#tipo").text('pernoite')
			break
		case 'rgb(255, 0, 0)':
			$("#tipo").text('locado')
			break
		case 'rgb(255, 228, 196)':
			$("#tipo").text('faxina')
			break
		case 'rgb(245, 245, 245)':
			$("#tipo").text('0')
			break
	}

	$("#quarto").text('2')
	$("#intervalo").text('a4,a5,a6')

	let quarto = $("#quarto").text()
	let tipo = $("#tipo").text()
	let tipos = ['pernoite', 'locado']

	if(quarto != 2){
		console.log('')
	} else {
		if(tipos.includes(tipo)){
			// mostraPrateleira(quarto)
			mostraVeiculo()
		} else (
			console.log('')
		)
	}
});
