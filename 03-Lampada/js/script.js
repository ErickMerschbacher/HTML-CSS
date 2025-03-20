var lampada = document.getElementById("lampada");
const verde = () => {
    document.getElementById("lampada").style.backgroundColor = "green";
}
const vermelho = () => {
    document.getElementById("lampada").style.backgroundColor = "red";
}
const azul = () => {
    document.getElementById("lampada").style.backgroundColor = "blue";
}
const amarelo = () => {
    document.getElementById("lampada").style.backgroundColor = "yellow";
}
const apagar = () => {
    document.getElementById("lampada").style.backgroundColor = "white";
};

const luzSimples = (cor) => {
    lampada.style.backgroundColor = cor;
}