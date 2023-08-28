$(document).ready(function () {
    console.log(document.querySelector('header button'));
    console.log($('header button'));

    $('header button').click(function () {
        // slide abrir formulario
        $('form').slideDown();
    })

    // slide fechar formulario
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();
        const enderecoDanovaImagem = $('#endereco-imagem-nova').val();
        // template literal
        const novoItem = $('<li style="display:none" ></li>');
        $(`<img src="${enderecoDanovaImagem}"<img/>`).appendTo(novoItem);
        $(` <div class="overlay-imagem-link">

            <a href="${enderecoDanovaImagem}"title="Ver imagem em tamanho real" target="_blank">
            Ver imagem em tamanho real.
            </a>

            <div/>
            `).appendTo(novoItem);
        // adicionar o template na ul
        $(novoItem).appendTo('ul');

        // animaçao adicionando nova imagem
        $(novoItem).fadeIn(1000);

        // limpar o campo do input
        $('#endereco-imagem-nova').val('');
    })

})