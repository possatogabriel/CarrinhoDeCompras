let listaProdutos = [];

let quantidadeAnterior = 0;

function adicionarItem() {
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];

    quantidadeAnterior = quantidadeAnterior + quantidade;

    if (listaProdutos.includes(nomeProduto)) {
        quantidade = quantidadeAnterior;
    }

    let valorProdutoFinal = quantidade * valorProduto;
    
    listaProdutos.push(nomeProduto);

    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> R$${valorProdutoFinal} </span> </section>`;
}
