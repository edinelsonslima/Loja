//CONFIG BOTAO ENVIAR DA LOGO
var botao = document.querySelector("#botaoEnviarLogo");

botao.addEventListener('click', (event) => {
    if ($('input[name = "logo"]').val()) {
        alert("Logo enviada com Sucesso");
    }
    else {
        event.preventDefault();
        alert("Adicione uma Imagem para sua Logo!!!")
    }
})


//CONFIG BOTAO ENVIAR DO SLIDE 1
var botao = document.querySelector("#botaoEnviarSlide1");

botao.addEventListener('click', (event) => {
    if ($('input[name = "slide1"]').val()) {
        alert("Slide 1 enviada com Sucesso");
    }
    else {
        event.preventDefault();
        alert("Adicione uma Imagem para seu Slide 1!!!")
    }
})

//CONFIG BOTAO ENVIAR DO SLIDE 2
var botao = document.querySelector("#botaoEnviarSlide2");

botao.addEventListener('click', (event) => {
    if ($('input[name = "slide2"]').val()) {
        alert("Slide 2 enviada com Sucesso");
    }
    else {
        event.preventDefault();
        alert("Adicione uma Imagem para seu Slide 2!!!")
    }
})

//CONFIG BOTAO ENVIAR DO SLIDE 3
var botao = document.querySelector("#botaoEnviarSlide3");

botao.addEventListener('click', (event) => {
    if ($('input[name = "slide3"]').val()) {
        alert("Slide 3 enviada com Sucesso");
    }
    else {
        event.preventDefault();
        alert("Adicione uma Imagem para seu Slide 3!!!")
    }
})