import { getProducts } from "./getProducts.js";

const produtos = await getProducts();

const url = window.location.search;

let urlParams = new URLSearchParams(url);

let id = urlParams.get("id");

// Os ids começam em 1, mas o array começa em 0
let indiceProduto = id - 1;
if (id === null || produtos[indiceProduto] === undefined) {
  window.location.href = "404.html";
}

const produto = produtos[indiceProduto];

$("#conteudo").html(
  `     <div id="img-container">
            <img src="${produto.imagem}" />
        </div>
        <div id="info-produto">
            <h1>${produto.nome}</h1>
            <div class="stars">
                ${Array(produto.nota)
                  .fill('<i class="fa-solid fa-star active"></i>')
                  .concat(
                    Array(5 - produto.nota).fill(
                      '<i class="fa-regular fa-star"></i>'
                    )
                  )
                  .join("")}
                
            </div>
            <h2>R$${produto.preco.toFixed(2)}</h2>
            <button id="addCarrinho" value="${
              produto.id
            }">Adicionar ao carrinho <i class="fa-solid fa-cart-shopping"></i></button>
        </div>
    `
);
