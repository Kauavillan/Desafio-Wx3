import { getProducts } from "./getProducts.js";

const produtos = await getProducts();

const btnCarrinho = $("#addCarrinho");
const produtoId = parseInt(btnCarrinho.val());
if (produtos[produtoId] !== undefined) {
  btnCarrinho.click(() => {
    let carrinho = localStorage.getItem("carrinho");
    if (carrinho) {
      carrinho = JSON.parse(carrinho);
    } else {
      carrinho = [];
    }
    const produtoExistente = carrinho.find(
      (produto) => produto.id === produtoId
    );
    if (produtoExistente) {
      alert("O produto já existe no carrinho!");
    } else {
      carrinho.push({ ...produtos[produtoId - 1] });
      localStorage.setItem("carrinho", JSON.stringify(carrinho));
      alert("Produto adicionado ao carrinho!");
    }
  });
}
