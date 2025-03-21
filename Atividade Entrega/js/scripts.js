const ligar = () => {
  let lampada = document.getElementById("lampada");
  //lampada.src = "img/acesa.jpg";

  if (lampada.src.includes("apagada.jpg")) lampada.src = "img/acesa.jpg";
  else lampada.src = "img/apagada.jpg";
};

const validarCampo = (id, mensagem, tipo = "text") => {
  let campo = document.getElementById(id);
  if (!campo.value.trim()) {
    erros.push(mensagem);
  } else if (tipo === "string" && campo.value.trim().length < 5) {
    erros.push(`${mensagem} Deve conter pelo menos 5 caracteres.`);
  } else if (tipo === "number" && parseFloat(campo.value) <= 0) {
    erros.push(`${mensagem} Deve ser um número positivo.`);
  }
};

validarCampo(
  "inCli",
  "O campo Nome do cliente não pode estar vazio!",
  "string"
);
validarCampo("inFone", "O campo Telefone não pode estar vazio!");
validarCampo("inMail", "O campo E-mail não pode estar vazio!");
validarCampo(
  "inProd",
  "O campo Nome do produto não pode estar vazio!",
  "string"
);
validarCampo("inQtd", "O campo Quantidade não pode estar vazio!", "number");
validarCampo("inVal", "O campo Valor unitário não pode estar vazio!", "number");

if (erros.length > 0) {
  mensagemErro.innerHTML = erros.join("<br>");
  mensagemErro.style.display = "block";
} else {
  alert("Formulário enviado com sucesso!");
  document.getElementById("frmRegistro").submit();
};
