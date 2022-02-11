// produtos = {
//     'Água Mineral' : {
//         'descrição': 'Água Mineral',
//         'valor': 2.00
//     },

//     'Guaraná 350 ml' : {
//         'descrição': 'Guaraná 350 ml',
//         'valor': 2.50
//     },

//     'Redbull' : {
//         'descrição': 'Redbull',
//         'valor': 7.35
//     }
// }

// var indexes = []

// for (const property in produtos) {
//     indexes.push(property)
// }

// console.log(indexes)

// indexes.forEach(function(item){
//     $('#cod').append('<option>' + item + '</option>');
// });

// $('#cod').change(function() {
//     var option = $('#cod').find(":selected").text();
//     console.log(option)

//     $("#des").val(produtos[option]['descrição'])
//     $("#vun").val('R$ ' + produtos[option]['valor'])

//     $('#qtd').keyup(function(){
//         var qtd = $(this).val()
//         var total = Number(produtos[option]['valor']) * Number(qtd)
//         $("#tot").val('R$ ' + total)

//     });
// });

$.get("http://127.0.0.1:8000/index/", function(resultado){

    resultado.forEach(function(item){
        $('#cod').append('<option>' + item.nome + '</option>');
    });
    

    $('#cod').change(function() {
        var option = $('#cod').find(":selected").index()

        var db = option - 1
    
        $("#des").val(resultado[db].nome)
        $("#vun").val('R$ ' + resultado[db].registro)
    
        $('#qtd').keyup(function(){
            var qtd = $(this).val()
            var total = Number(resultado[db]['registro']) * Number(qtd)
            $("#tot").val('R$ ' + total)
        });
    });
})
