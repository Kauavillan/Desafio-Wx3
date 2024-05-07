import { getProducts } from "./getProducts.js";
import { generateProductsList } from "./generateProductsPage.js";

const products = await getProducts();
// Cada session tem seu próprio contador
let paginaAtual = {
  lancamentos: 1,
  destaques: 1,
  outlet: 1,
};

function criarPaginacao(sectionId, prodPorPagina, tag) {
  const numPages = Math.ceil(products.length / prodPorPagina);
  $(`#${sectionId}-paginacao`).html("");

  const arrowLeft = $(`<i class="bi bi-chevron-left"></i>`);
  arrowLeft.on("click", () =>
    gerenciarPaginacao(
      paginaAtual[sectionId] - 1,
      sectionId,
      prodPorPagina,
      numPages,
      tag
    )
  );

  const arrowRight = $(`<i class="bi bi-chevron-right"></i>`);

  $(`#${sectionId}-paginacao`).append(arrowLeft);

  for (let i = 1; i <= numPages; i++) {
    const button = $(`<button class="page-item"></button>`);
    if (i === paginaAtual[sectionId]) {
      button.addClass("active");
    }
    button.on("click", () =>
      gerenciarPaginacao(i, sectionId, prodPorPagina, numPages, tag)
    );

    $(`#${sectionId}-paginacao`).append(button);
  }
  arrowRight.on("click", () =>
    gerenciarPaginacao(
      paginaAtual[sectionId] + 1,
      sectionId,
      prodPorPagina,
      numPages,
      tag
    )
  );
  $(`#${sectionId}-paginacao`).append(arrowRight);
}

function gerenciarPaginacao(
  proximaPagina,
  sectionId,
  prodPorPagina,
  numPages,
  tag
) {
  if (paginaAtual[sectionId] > numPages) paginaAtual[sectionId] = 1;
  else if (proximaPagina <= 0) paginaAtual[sectionId] = numPages;
  else if (proximaPagina > numPages) paginaAtual[sectionId] = 1;
  else paginaAtual[sectionId] = proximaPagina;

  mostrarProdutos(sectionId, prodPorPagina, tag);
}

export function mostrarProdutos(sectionId, prodPorPagina, tag = null) {
  const startIndex = (paginaAtual[sectionId] - 1) * prodPorPagina;
  const endIndex = startIndex + prodPorPagina;
  $(`#${sectionId}`).html(
    generateProductsList(products.slice(startIndex, endIndex), tag)
  );
  criarPaginacao(sectionId, prodPorPagina, tag);
}
