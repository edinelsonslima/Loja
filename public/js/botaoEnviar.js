var botaoEnviar = document.querySelector("#botaoEnviar");

botaoEnviar.addEventListener("click", () => {
    alert("Formulario Enviada!!!")
})


//----------------------------------------------------//
$(function () {
    $('.input-file-dummy').each(function () {
        $($(this).parent().find('.input-file-btn input')).on('change', { dummy: this }, function (ev) {
            $(ev.data.dummy)
                .val($(this).val().replace(/\\/g, '/').replace(/.*\//, ''))
                .trigger('focusout');
        });
        $(this).on('focusin', function () {
            $(this).attr('readonly', '');
        }).on('focusout', function () {
            $(this).removeAttr('readonly');
        }).on('click', function () {
            $(this).parent().find('.input-file-btn').click();
        });
    });
});
    
    function marcaSlide1() {
        var marcaSlide1 = TESTE_DEU_CERTO;
       // marcaSlide1 = document.getElementById("marcaSlide1").value;
        console.log(marcaSlide1)
        return (marcaSlide1);
    }
                       