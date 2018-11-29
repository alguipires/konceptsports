let $$ = function (id) {
    return document.getElementById(id);
}

window.onload = function () {
    $$('form-contato').addEventListener("submit", function (event) {
        event.preventDefault();
    });

    $$('input-name').addEventListener("invalid", function (event) {
        if ($$('input-name').validity.patternMismatch) {
            $$('input-name').setCustomValidity("preencha corretamente o nome ex: João da Silva")
        }
    });

    $$('input-telefone').addEventListener("invalid", function (event) {
        if ($$('input-telefone').validity.patternMismatch) {
            $$('input-telefone').setCustomValidity("preencha corretamente o numero ex: (42) 99999-9999")
        }
    });

    $$('input-email').addEventListener("invalid", function (event) {
        if ($$('input-email').validity.patternMismatch) {
            $$('input-email').setCustomValidity("preencha corretamente o e-mail ex: seuemail@gmail.com")
        }
    });

    $$('input-textarea').addEventListener("invalid", function (event) {
        if ($$('input-textarea').validity.patternMismatch) {
            $$('input-textarea').setCustomValidity("insira uma mensagem")
        }
    });
}
$(document).ready(function () {
    $('#modal2').modal();
    //$('#modal2').modal('open');
});

function removerClasse() {
    $("#btn-submit").removeClass("disabled");
}

function adicionaClasse() {
    $("#btn-submit").addClass("disabled");
}

function ganhaFocus(id) {
    let text = $$(id);
    if (text.value == "Digite aqui!") {
        text.value = "";
    }

}

function perdeFocus(id) {
    let text = $$(id);
    if (text.value == "") {
        text.value = "Digite aqui!";
    }
}

/*let Usuario = {
    nome: "",
    telefone: "",
    email: "",
    mensagem: "",
    insereDados: function (nome, telefone, email, mensagem) {
        this.nome = nome,
            this.telefone = telefone,
            this.email = email,
            this.mensagem = mensagem;
    }
}*/

//let usu = Object.create(Usuario);

let Usuario = function (nome, telefone, email, mensagem) {
    this.nome = nome,
        this.telefone = telefone,
        this.email = email,
        this.mensagem = mensagem;
}



let arrayReclama = new Array();



function validaPreenchido() {
    //console.log($$('input-name').valueOf);
    if ($$('input-name').value != "" && $$('input-telefone').value != "" && $$('input-email').value != "" && $$('input-textarea').value != "") {
        //let user1 = new Usuario($$('input-name').value, $$('input-telefone').value, $$('input-email').value, $$('input-textarea').value);
        arrayReclama.push(new Usuario($$('input-name').value, $$('input-telefone').value, $$('input-email').value, $$('input-textarea').value))
        //usu.insereDados($$('input-name').value, $$('input-telefone').value, $$('input-email').value, $$('input-textarea').value))
        console.log(arrayReclama);
        console.log("entrou no if");
        removerClasse();
    } else {
        adicionaClasse();
        //console.log("entrou no else");
    }
}

function criaReclamacoes() {

    localStorage.setItem("reclamacoes", JSON.stringify(arrayReclama));
    $('#modal2').modal('open');
}

function novaReclamacao() {
    console.log("me clicou");
    $$('input-name').value = "";
    $$('input-telefone').value = "";
    $$('input-email').value = "";
    $$('input-textarea').value = "";

    restauraJson();
}

let swap = "";

function restauraJson() {
    console.log("restaurando os objetos");
    let arrayReclama = JSON.parse(localStorage.getItem("reclamacoes"));
    for (let i = 0; i <= arrayReclama.length; i++) {
        let objeto = arrayReclama[i];
        console.log(objeto);
        console.log(objeto.nome);
        swap = objeto.nome;
        //$$('p-name').innerHTML = objeto;
    }
    $$('p-name').innerHTML = swap;

}
