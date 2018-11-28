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




let Usuario = function (nome, telefone, email, mensagem) {
    this.nome = nome,
        this.telefone = telefone,
        this.email = email,
        this.mensagem = mensagem;
}
}

//let usuario = Object.create(Usuario);

function removerClasse() {
    $("#btn-submit").removeClass("disabled");
    //$$('btn-submit').disabled = false;

}

function removerClasse() {
    $("#btn-submit").removeClass("disabled");
    //$$('btn-submit').disabled = false;

}

let arrayUser = new Array();

function validaPreenchido() {
    arrayUser = new Usuario($$('input-name').value, $$('input-telefone').value, $$('input-email').value, $$('input-textarea').value);
    console.log("preenchido insere dados");
    for (i in arrayUser) {
        if (arrayUser[i].value != undefined) {
            console.log("entrou no if");
            $("#btnSubmit").removeClass("disable");
        }
    }
}
