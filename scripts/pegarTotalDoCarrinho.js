export function getTotalCarrinho() {
  let carrinho = localStorage.getItem("carrinho");

  let total = 0.0;
  let contador = 0;
  if (carrinho) {
    total = JSON.parse(carrinho).reduce((acc, produto, index) => {
      contador = index + 1;
      return acc + produto.preco;
    }, 0);
  }
  $(".cart-qtd").html(contador);
  $(".cart-total").html(`R$${total.toFixed(2).replace(".", ",")}`);
}
getTotalCarrinho();
