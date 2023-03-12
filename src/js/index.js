
// Pega o elemento HTML dos botões 
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Identifica o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {

    botao.addEventListener('click', () => {
        
        // Desmarca o botão selecionado anterior
        desativarBotaoSelecionado();

        // Marca o próximo botão selecionado
        selecionarBotaoCarrossel(botao);

        // Esconder imagem ativa de fundo
        esconderImagemAtiva();

        // Aparecer nova imagem de fundo
        mostrarImagemDeFundo(indice);
    
    })
});

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
