
var formcont = document.forms.formContato

// Evento de click no botao confirmar
document.querySelector("#btContato").onclick=function(){
    // alert("ok")
    // /input de nome / valor desse campo
    if (formcont.nameContato.value == ""){
        alert("Preencha o Nome")
    }
    else if (formcont.emailContato.value == ""){
        alert(" Preencha o E-mail")
    }
    else if (formcont.comentarioContato.value == ""){
        alert("Deixe um Comentário")
    }
    else {
        formcont.submit();
    }
}