
 //Cria alerta na página com ação de click em OK
 //alert("Alerta com ação de click!")
    //alert("Alerta com ação de click!")
    const validarDados = () =>{
        let nome = frmExemplo.inNome.value
        let idade = frmExemplo.inIdade.value
        let data = frmExemplo.inData.value
        let mail = frmExemplo.inEmail.value

        if(nome.trim() == ""){
            alert("O campo não pode estar vazio!")
            frmExemplo.inNome.focus()
            return false
    }
    if(idade.trim() == "" || idade< 0){
        alert("O campo idade não pode estar vazio ou negativo!")
        frmExemplo.inIdade.focus()
        return false;
    }
    if(nome.trim() !="" && idade.trim() != "" && idade > 0){
        alert("Formulário enviado com sucesso!")
        location.reload();
    }


}