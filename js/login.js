
var forml = document.forms.formLogin

// Evento de click no botao confirmar
document.querySelector("#btlogin").onclick=function(){
    // alert("ok")
    // /input de nome / valor desse campo
    if (forml.email.value == ""){
        alert("Preencha o E-mail")
    }
    else if (forml.senha.value == ""){
        alert(" Preencha a Senha")
    }
    else {
        forml.submit();
        localStorage.emailUser = forml.email.value
    }
}
