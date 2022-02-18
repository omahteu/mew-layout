$(document).ready(function(){

    $.get("http://127.0.0.1:8000/quartos/", function(resultado){



        

        for(var i = 0; i < resultado.length; i++){

            //$("#imagemQuarto").attr('id','imagemQuarto1')

            var num = resultado[i].numero
            //console.log(num)
            //console.log(document.getElementById('quarto'))
            

            document.getElementById('imagemQuarto').id = 'imagemQuarto' + num
            
            document.getElementById('quarto').id = "quarto" + num

            
           /* montagem.innerHTML +=   '<a href="#" class="work image-popup" id="imagemQuarto' + resultado[i].numero + '">'+
                                        '<div class="desc" id="quarto' + resultado[i].numero + '">'+
                                            '<h3 id="tipo2">VENTILADOR</h3>'+
                                            '<h3 id="tempo">00:00:00</h3>'+
                                            '<h3 id="status" hidden>d</h3>'+
                                            '<button type="button" name="' + resultado[i].numero + '" id="botaoq' + resultado[i].numero + '" class="btn manutencao"></button>'+
                                            '<button type="button" name="' + resultado[i].numero + '" id="botaoq' + resultado[i].numero + '" class="btn locado"></button>'+
                                            '<button type="button" name="' + resultado[i].numero + '" id="botaoq' + resultado[i].numero + '" class="btn faxina"></button>'+
                                        '</div>'+
                                    '</a>'+
                                    '<input type="button" value="" id="a4">'+
                                    '<input type="button" value="" id="a5">'+
                                    '<input type="button" value="" id="a6">'*/



            

            /*montagem.innerHTML +=   '<div class="col-md-3 col-sm-6 col-padding text-center animate-box">'+
                                        '<a href="#" class="work image-popup" id="imagemQuarto' + resultado[i].numero  + '">'+
                                            '<div class="desc" id="quarto' + resultado[i].numero + '">'+
                                                '<h3 id="tipo2">VENTILADOR</h3>'+
                                                '<h3 id="tempo">00:00:00</h3>'+
                                                '<h3 id="status" hidden>d</h3>'+
                                                //'<button type="button" name="2" id="botaoq2" class="btn reservado"></button>'+
                                                //'<button type="button" name="2" id="botaoq2" class="btn limpeza"></button>'+
                                                //'<button type="button" name="2" id="botaoq2" class="btn aguardando"></button>'+
                                                '<button type="button" name="' + resultado[i].numero + '" id="botaoq' + resultado[i].numero + '" class="btn manutencao"></button>'+
                                                //'<button type="button" name="2" id="botaoq2" class="btn pernoite"></button>'+
                                                '<button type="button" name="' + resultado[i].numero + '" id="botaoq' + resultado[i].numero + '" class="btn locado"></button>'+
                                                '<button type="button" name="' + resultado[i].numero + '" id="botaoq' + resultado[i].numero + '" class="btn faxina"></button>'+
                                                //'<button type="button" name="2" id="botaoq2" class="btn disponivel"></button>'+
                                            '</div>'+
                                        '</a>'+
                                        '<input type="button" value="" id="a4">'+
                                        '<input type="button" value="" id="a5">'+
                                        '<input type="button" value="" id="a6">'+
                                    '</div>'*/
        }
    })
})
