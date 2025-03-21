const trocarImagem = () => {
    let imagem = document.getElementById("imagem");
  
    const trocarImagem = [
      "/Atividade 01/invencivel.png",
      "/Atividade 01/Ney.jpg",
      "/Atividade 01/paiDoPalmeiras.webp",
      "/Atividade 01/slk.jpg"
  ];
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
     imagem.src = trocarImagem[indice];
  
  };
 /* const frmCalculadora = () => {
    let 1 = parseFloat(document.getElementById("InValor1").value);
    let 2 = parseFloat(document.getElementById("InValor2").value);
    }
    let resultado = inValor1 + inValor2;
    document.getElementById("resultado").innerHTML = resultado;
    if (1 += 2){
      return +=;
    }else if 1 -= 2;{
      return -=;
    }else if 1 *= 2;{
      return *=;
    }else if 1 /= 2;{
      return /=;
    }else{
      return "Operação inválida";
}*/
const calcular = (operador) =>{
  let valor1 = parseFloat (frmCalculadora.inValor1.value);
  let valor2 = parseFloat (frmCalculadora.inValor2.value);
 let resultado = 0;
switch (operador) {
  case "+":
    resultado = valor1 + valor2;
    break;
    
    case "-":
    resultado = valor1 - valor2;
    break;
   
    case "*":
    resultado = valor1 * valor2;
    break;
    
    case "/":
    resultado = valor1 / valor2;
    break;

};
frmCalculadora.inResultado.value = resultado;
      

};