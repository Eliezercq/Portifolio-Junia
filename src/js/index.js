const botaoMostrarProdutos = document.querySelector('.btn-mostrar-produtos');
const produtosInativos = document.querySelectorAll('.produto:not(.ativo)');

botaoMostrarProdutos.addEventListener('click', () => {
    mostrarMaisProdutos();

    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProdutos.classList.add("remover");
}

function mostrarMaisProdutos() {
    produtosInativos.forEach(produtoInativo => {
        produtoInativo.classList.add('ativo');
    });
}

