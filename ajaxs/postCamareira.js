$("#salvarCamareira").click(function(){
    
    let camareira = $("#camareira").val()

    var dados = {
        nome: camareira,
        registro: gera_id()
    }

    $.post("http://127.0.0.1:8000/camareiras/", dados, function(msg){
        alert("Camareira Registrado!")

        document.getElementById('formPostCamareira').reset()
    })
})

function gera_id(){
	var size = 3
	var randomized = Math.ceil(Math.random() * Math.pow(10,size))
	return randomized
}