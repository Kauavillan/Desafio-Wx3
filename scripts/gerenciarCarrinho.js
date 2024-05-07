function getLocalStorage() {
  let carrinho = localStorage.getItem("carrinho");
  if (carrinho) {
    return JSON.parse(carrinho);
  }
  return [];
}

function gerarProdutosCarrinho() {
  let carrinho = getLocalStorage();
  let produtos = $("#produtos-listagem");
  produtos.innerHTML = "";
  // console.log(carrinho);
  if (carrinho.length === 0) {
    $("main").html("<h2>Seu carrinho está vazio</h2>");
    return;
  }
  carrinho.forEach((produto) => {
    let produtoElement = $(`
    <div class="card">
      <div class="img-container">
        <img src="${produto.imagem}" class="card-img-top" alt="${produto.nome}">
      </div>
      <div class="card-body">
        <h5 class="card-title">${produto.nome}</h5>
        <span>R$${produto.preco.toFixed(2)}</span>
      </div>
    </div>
  `);
    produtos.append(produtoElement);
  });
  $("#cart-container").append(
    `<button id="del-cart">
        Apagar carrinho <i class="fa-solid fa-trash"></i>
      </button>`
  );
  let total = carrinho.reduce((acc, produto) => acc + produto.preco, 0);
  $("#total").html(`R$${total.toFixed(2)}`);
  console.log(total);
}
gerarProdutosCarrinho();

$("#del-cart").on("click", () => {
  if (
    confirm(
      "Todos os produtos serão RETIRADOS do carrinho. Realmente quer continuar?"
    )
  ) {
    localStorage.removeItem("carrinho");
    gerarProdutosCarrinho();
  }
});
