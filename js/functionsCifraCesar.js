function letraAnterior(s){
    let c = s.charCodeAt(0);
    switch(c){
        case 97: return 'z';                
        default: return String.fromCharCode(--c);
    }
     
}

function letraPosterior(s){
    let c = s.charCodeAt(0);
    switch(c){
        case 122: return 'a';        
        default: return String.fromCharCode(++c);
    }
}

function criptografar(){
    
    let mensagem = $('.cripto').val().toLowerCase()
    let key = $('.chave1').val()

    if ($('.cripto').val() == '') {
        alert("campo mensagem obrigatório!");
      } else if ($(".chave1").val() == '') {
        alert("campo chave obrigatório!")
      }


    console.log(mensagem)
    mensagem = mensagem.replace(/( )+/g, '');
    mensagem = mensagem.replace(/[^a-zA-Z]/g, '');
    console.log(mensagem)
    
    let mensagemCriptografada = ""
    for(let i =0; i < mensagem.length; i++){
        if(mensagem.length == ' '){
            return 
        }else{
        let novoCaracter = String.fromCharCode(mensagem.charCodeAt(i))
        for(let j = 0; j < key; j++){
            novoCaracter = letraPosterior(novoCaracter)
        }
    
        mensagemCriptografada += novoCaracter
        }
    }
        campoPreenchido = $(".result").val(mensagemCriptografada);
    
}


function descriptografar(){
    let mensagem = $(".result").val()
    let key = $('.chave2').val()
    let mensagemDescriptografada = "";

    if ($('.result').val() == '') {
        alert("campo mensagem obrigatório!");
      } else if ($(".chave2").val() == '') {
        alert("campo chave obrigatório!")
      }

    for(let i=0; i < mensagem.length; i++){
        let novoCaracter = String.fromCharCode(mensagem.charCodeAt(i))
        for(let j = 0; j < key; j++){
            novoCaracter = letraAnterior(novoCaracter)
        }
        mensagemDescriptografada += novoCaracter
    }
    $(".result").val(mensagemDescriptografada)
}