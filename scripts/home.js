import { mostrarProdutos } from "./products-slider.js";

let prodPorPagina;
// Faz com que prodPorPagina chame a função mostrarProdutos() sempre que seu valor for alterado
// Isso permite que a quantidade de produtos exibidos seja ajustada automaticamente quando o usuário redimensionar a tela
let _prodPorPagina;
Object.defineProperty(window, "prodPorPagina", {
  get() {
    return _prodPorPagina;
  },
  set(value) {
    _prodPorPagina = value;
    mostrarProdutos("lancamentos", window.prodPorPagina, "Lançamento");
    mostrarProdutos("destaques", window.prodPorPagina);
    mostrarProdutos("outlet", window.prodPorPagina);
  },
});

function ajustarProdPorPagina() {
  const screenWidth = window.innerWidth;
  if (screenWidth < 950) {
    window.prodPorPagina = 1;
  } else if (screenWidth < 1400) {
    window.prodPorPagina = 2;
  } else if (screenWidth < 1860) {
    window.prodPorPagina = 3;
  } else {
    window.prodPorPagina = 4;
  }
}
ajustarProdPorPagina();
window.addEventListener("resize", ajustarProdPorPagina);
