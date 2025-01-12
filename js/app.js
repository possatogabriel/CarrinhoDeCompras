// VARIÁVEL PARA ARMAZENAMENTO E SOMA DO VALOR TOTAL 
let valorTotal = 0;

// FUNÇÃO AO CLICAR NO BOTÃO DE "ADICIONAR"
function adicionarItem() {
    let produto = document.getElementById('produto').value;
    let quantidade = parseInt(document.getElementById('quantidade').value);

    // .SPLIT - Divide o texto em duas partes, antes (parte "[0]") do elemento inserido ('-' e 'R$') e depois (parte "[1]")
    let nomeProduto = produto.split('-')[0];
    let valorProduto = produto.split('R$')[1];
    
    let valorProdutoFinal = quantidade * valorProduto;

    valorTotal = valorTotal + valorProdutoFinal

    // VARIÁVEL QUE INSERE O TEXTO NO HTML COM AS INFORMAÇÕES DOS ITENS ADICIONADOS
    // INNER.HTML x TEXT.CONTENT - INNER.HTML mexe NO PRÓPRIO HTML, enquanto o TEXT.CONTENT é mais recomendado para outras situações 
    let listaCarrinho = document.getElementById('lista-produtos');
    listaCarrinho.innerHTML = listaCarrinho.innerHTML + `<section class="carrinho__produtos__produto"> <span class="texto-azul"> ${quantidade}x </span> ${nomeProduto} <span class="texto-azul"> R$${valorProdutoFinal} </span> </section>`;

    // VARIÁVEL QUE MOSTRA O VALOR TOTAL DAS COMPRAS
    let campoTotal = document.getElementById('valor-total');
    campoTotal.textContent = `R$ ${valorTotal}`;
}

// FUNÇÃO AO CLICAR NO BOTÃO DE "LIMPAR"
function limparCarrinho() {
    document.getElementById('lista-produtos').textContent = '';
    document.getElementById('valor-total').textContent = 'R$ 0';
    document.getElementById('quantidade').value = '';

    quantidadeAnterior = 0;
    valorTotal = 0;
}