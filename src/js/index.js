// OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar no botão como selecionado

const botoes = document.querySelectorAll(".botao");

// objetivo 2 - QUANDO CLICAR NO BOTÃO DO PERSONAGEM MOSTRAR AS INFORMAÇÕES DO PERSONAGEM
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        desselecionarBotao();
        desselecionarPersonagem();

        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado");
    });
});

function desselecionarPersonagem() {
    const personagemSelecionado = document.querySelector(
        ".personagem.selecionado"
    );
    personagemSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const botaoSelecionado = document.querySelector(".botao.selecionado");
    botaoSelecionado.classList.remove("selecionado");
}