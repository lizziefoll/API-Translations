const input = document.getElementById("inputText"); //pega o elemento do html "inputText"

function preencherFormulario(traduSaida){ //função de preencher o formulário
    document.getElementById("saida").innerHTML = traduSaida.translated; //pega o elemento html saida e preenche o formulário para a parte json "translated"
}

async function traducao(){ //função para traduzir 
    var textToTranslate = input.value; //pega o valor do input e coloca na variavel textToTranslate
    const apiUrl = `https://api.funtranslations.com/translate/minion.json?text=${textToTranslate}`; //constante chamada apiURL que recebe o link da api 


        const dados = await fetch(apiUrl); //chama a variavel da api para funcionar na constante dados
        console.log(dados); //para ver se ta rodando no html
        const tradu = await dados.json(); //traduz os dados do json para a constante tradu
        console.log(tradu); //para ver se ta rodando a varuavel tradu

        if (tradu.success.total == 1){ //se a parte json "success" = 1
            preencherFormulario(tradu.contents) //preenche o formulario
        }else{ //se nao for
            alert("error") //da alerta de erro
        }

        preencherFormulario(tradu.contents); //chama a função preencherFormulário, chamando a constante tradu e entrando na parte "contents" do json

    }

document.getElementById("botao") //pega o elemento de id = botao no html
    .addEventListener("click", traducao); //a cada evento click no botão, ele chama a função traducao
