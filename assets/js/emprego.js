const botao1 = document.querySelector(".botao1");
const botao2 = document.querySelector(".botao2");

// Adiciona um evento de clique no botão que alterna entre as classes hidden e show
botao1.addEventListener("click", () => {
  const fechar1 = document.querySelector(".fechar1");
  const segundaTela = document.querySelector(".segunda-tela");

  segundaTela.classList.replace("hidden", "show");

  fechar1.addEventListener("click", () => {
    segundaTela.classList.replace("show", "hidden");
  });
});

botao2.addEventListener("click", () => {
  const fechar2 = document.querySelector(".fechar2");
  const terceiraTela = document.querySelector(".terceira-tela");

  terceiraTela.classList.replace("hidden", "show");

  fechar2.addEventListener("click", () => {
    terceiraTela.classList.replace("show", "hidden");
  });
});