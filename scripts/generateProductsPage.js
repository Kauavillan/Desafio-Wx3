export function generateProductsList(products, tag = null) {
  return products.map((product) => {
    return `
    <div class="prod">
        <a href="produto.html?id=${product.id}">
            <div class="img-container">
                ${tag ? `<div class="tag">${tag}</div>` : ""}
                <img src="${product.imagem}" />
                <div class="overlay">
                  <div>
                    <div>
                        <i class="fa-regular fa-heart"></i>
                        Favoritar
                    </div>
                    <div>
                        <i class="fa-regular fa-eye"></i>
                        Espiar
                    </div>
                  </div>
                </div>
            </div>
            <div class="stars">
                ${Array(product.nota)
                  .fill('<i class="fa-solid fa-star active"></i>')
                  .concat(
                    Array(5 - product.nota).fill(
                      '<i class="fa-regular fa-star"></i>'
                    )
                  )
                  .join("")}
                
            </div>
            <h5>${product.nome}</h5>
            <span>ref.: pcd202</span>
            <div class="preco">
                <span>R$ ${product.preco.toFixed(2)}</span>
                <span>no boleto</span>
                <span>em até 10x de R$ ${(
                  (product.preco + product.preco * 1.1) /
                  10
                ).toFixed(2)}</span>
            </div>
            <button>COMPRE AGORA</button>
        </a>
    </div>
`;
  });
}
