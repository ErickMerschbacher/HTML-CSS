const exibir=()=>{
    let preguica=document.getElementById("preguica");
    let botao = document.getElementById("btnChave");

    if(botao.textContent=="Exibir"){
        preguica.style.display="block";
        botao.textContent="Ocultar";
}else{
    preguica.style.display="none";
    botao.textContent="Exibir";
}
}