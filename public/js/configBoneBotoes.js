var adicionarBone = document.querySelector("#botaoAdicionarBone")

adicionarBone.addEventListener('click', (event) => {
    if ($('input[name = "imagemBone"]').val() &&
        $('input[name = "tituloBone"]').val() &&
        $('input[name = "valorBone"]').val()) {
        alert("Boné adicionado com sucesso!")
    }
    else {
        event.preventDefault();
        alert("Preencha todos os campos")
    }
})