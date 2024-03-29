function fMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function fMasc(objeto, mascara) {
    obj = objeto
    masc = mascara
    setTimeout("fMascEx()", 1);
}

function fMascEx() {
    obj.value = masc(obj.value);
}

function mascara(t, mask) {
    var i = t.value.length;
    var saida = mask.substring(1, 0);
    var texto = mask.substring(i)
    if (texto.substring(0, 1) != saida) {
        t.value += texto.substring(0, 1);
    }
}

function mCPF(cpf) {
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    return cpf
}

function mNum(num) {
    num = num.replace(/\D/g, "");
    return num;
}

function salvar() {
    console.log("tamara");
    $.ajax({
        url: $("#formDados").prop("action"),
        method: "post",
        dataType: "json",
        data: $("#formDados").serialize(),
        success: function (retorno) {
            if (retorno.status == "200") {
                alert(retorno.mensagem);
                setTimeout(function () {
                    window.history.back();
                }, 500);
            } else {
                alert(retorno.mensagem);
            }
        }
    });
    return true;
}

function btnRed(redirecionamento) {
    location.href = "?" + redirecionamento;
}

function voltar() {
    window.history.back();
}

function excluir(id, action, tipo) {
    if (confirm("Deseja excluir esse " + tipo)) {
        $.ajax({
            url: action,
            method: "post",
            dataType: "json",
            data: {
                op: "d",
                id: id,
            },
            success: function (retorno) {
                if (retorno.status == "200") {
                    alert(retorno.mensagem);
                    setTimeout(function () {
                        document.location.reload(true);
                    }, 500);
                } else {
                    alert(retorno.mensagem);
                }
            }
        });
        return true;
    }
}