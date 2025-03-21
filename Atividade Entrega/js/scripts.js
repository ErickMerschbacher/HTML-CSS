//Atividade 1//
const ligar = () => {
  let lampada = document.getElementById("lampada");
  //lampada.src = "img/acesa.jpg";

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};

// //Atividade 3//
// const validarCampo = (id, mensagem, tipo = "text") => {
//   let campo = document.getElementById(id);
//   if (!campo.value.trim()) {
//     erros.push(mensagem);
//   } else if (tipo === "string" && campo.value.trim().length < 5) {
//     erros.push(`${mensagem} Deve conter pelo menos 5 caracteres.`);
//   } else if (tipo === "number" && parseFloat(campo.value) <= 0) {
//     erros.push(`${mensagem} Deve ser um número positivo.`);
//   }
// };

// validarCampo(
//   "inCli",
//   "O campo Nome do cliente não pode estar vazio!",
//   "string"
// );
// validarCampo("inFone", "O campo Telefone não pode estar vazio!");
// validarCampo("inMail", "O campo E-mail não pode estar vazio!");
// validarCampo(
//   "inProd",
//   "O campo Nome do produto não pode estar vazio!",
//   "string"
// );
// validarCampo("inQtd", "O campo Quantidade não pode estar vazio!", "number");
// validarCampo("inVal", "O campo Valor unitário não pode estar vazio!", "number");

// if (erros.length > 0) {
//   mensagemErro.innerHTML = erros.join("<br>");
//   mensagemErro.style.display = "block";
// } else {
//   alert("Formulário enviado com sucesso!");
//   document.getElementById("frmRegistro").submit();
// }
//Trim são espaços vazios para mais ou menos;//
//Professor Gusta//
const validaForm = () => {
  let erro = document.getElementById("mensagem-erro");
  erro.innerHTML = "";

  let nome = inCli;
  let data = inData;
  let fone = inFone;
  let mail = inMail;
  let prod = inProd;
  let qtd = inQtd;
  let val = inVal;

  switch (true) {
    case nome.value.trim() == "" ||
      data.value == "" ||
      fone.value == "" ||
      mail.value == "" ||
      prod.value == "" ||
      qtd.value == "" ||
      val.value == "":
      erro.style.display = "block";
      erro.innerHTML = "Erro: O campo não pode estar vazio!";
      break;

    case val.value < 0 || qtd.value < 0:
      erro.style.display = "block";
      erro.innerHTML = "Erro: Este campo não pode ser negativo!";

      break;

    case nome.value.trim().length < 5 || prod.value.trim().length < 5:
      erro.innerHTML = "O campo texto não pode ter menos que 5 caracteres!";
      erro.style.display = "block";
      break;

    default:
      break;
  }
};
//Atividade 2//
const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
  let canvas = document.getElementById("canvas");
  if (qtdImagem <= 0)
    alert("O campo quantidade não pode estar nulo ou negativo!");
  else {
    for (let index = 1; index <= qtdImagem; index++) {
      canvas.innerHTML += "<img src='img/logo.png' alt=''>";
    }
  }
};
//---------------------------------------------//
//Atividade 4//
const calcular = () => {
  let valPedido = inValorPedido.value;
  let perDesconto = inPercDesc.value;
  let valDesconto = inValDesc.value;
  let valFinalPedido = inValFinal.value;

  if (valPedido >= 2000) {
   perDesconto = 1.5;
    // aplicar desconto de 1.0%
  } else if (valPedido >= 1500) {
    perDesconto = 1.0;
    // aplicar desconto de 1.0%
  } else if (valPedido >= 1000) {
    perDesconto = 0.8;
    // aplicar desconto de 0.8%
  } else if (valPedido >= 500) {
    perDesconto = 0.5;
    // aplicar desconto de 0.5%
  } else {
    perDesconto = 0;
  }
    valDesconto = (valPedido * perDesconto) / 100;
    valFinalPedido = valPedido - valDesconto;
    inPercDesc.value = perDesconto;
    inValDesc.value = valDesconto.toFixed(2);
    inValFinal.value = valFinalPedido.toFixed(2);
  };
