//criando a função de flecha com frase aleatória//
const falar=()=>{
//criando o vetor de frases//
    const frases = [
        "Hoje está um dia bonito",
        "Falta muito para sexta-feira?",
        "Qual o cardápio do almoço?",
        "Vish, tem prova de matemática!!!!"
    ];
    //criando a variável que irá armazenar a div com ID tagarela //
    let tagarela = document.getElementById("tagarela");
    //Criando variável de controle para a frase exibida//
    let indice = 0
    //Criando um número aleatório entre 0 e 1(lembrando que o 1 não entra na conta)//
    let numero = Math.random();

    //Configurando o número para a frase selecioada//
    if(numero > 0.75)
        indice = 3;
        else if(numero > 0.50)
            indice = 2;
        else if(numero > 0.25)
            indice = 1;
        //escrevendo a frase para o usuario
        tagarela.innerHTML = frases[indice];
};