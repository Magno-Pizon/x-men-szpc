/* O que precisa fazer? - quando passar o mouse em cima do personagem na lista temos que adicionar a borda azul de seleção na imagem pequena do personagem e mostrar a imagem, o nome e o texto grande do personagem que está selecionado

    OBJETIVO 1 - quando passar o mouse em cima do personagem na listagem , devemos selecioná-lo
        Passo 1 - pegar os personagens no JS pra poder verificar quando o usuário passar o mouse em cima de um deles
        Passo 2 - adicionar a classe selecionado no personagem que o usuário passar o cursor do mouse
        Passo 3 - verificar se já existe um personagem selecionado, se sim, devemos remover a seleção dele

    OBJETIVO 2 - quando passar o mouse em cima do personagem na listagem, trocar a imagem, nome e a decrição do personagem grande
        Passo 1 - pegar o elemento do personagem grande pra adicionar as informações nele
        Passo 2 - alterar a iamgem do personagem grande
        Passo 3 - alterar o nome do personagem
        Passo 4 - alterar a descrição do personagem grande
*/

const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener(('mouseenter'), () => {
        
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        
        const idPersonagem = personagem.attributes.id.value;

        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;

        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');

        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');

        
    })
})