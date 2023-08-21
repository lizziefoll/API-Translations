const input = document.getElementById("inputText"); 

function preencherFormulario(traduSaida){
    document.getElementById("saida").innerHTML = traduSaida.translated; 
}

async function traducao(){
    var textToTranslate = input.value; 
    //var textToTranslate = "hi"; 
    const apiUrl = `https://api.funtranslations.com/translate/minion.json?text=${textToTranslate}`; 


        const dados = await fetch(apiUrl); 
        console.log(dados); 
        const tradu = await dados.json(); 
        console.log(tradu); 

        if (tradu.success.total == 1){
            preencherFormulario(tradu.contents)
        }else{
            alert("error")
        }

        preencherFormulario(tradu.contents);

    }

document.getElementById("botao")
    .addEventListener("click", traducao); 
