const botao1 = document.querySelector(".apresentacao");
const botao2 = document.querySelector(".apresentacao2");
const botao3 = document.querySelector(".apresentacao3");
const botao4 = document.querySelector(".apresentacao4");
const botao5 = document.querySelector(".apresentacao5");
const botao6 = document.querySelector(".apresentacao6");
const botao7 = document.querySelector(".apresentacao7");
const botao8 = document.querySelector(".apresentacao8");

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

botao3.addEventListener("click", () => {
  const fechar3 = document.querySelector(".fechar3");
  const quartaTela = document.querySelector(".quarta-tela");

  quartaTela.classList.replace("hidden", "show");

  fechar3.addEventListener("click", () => {
    quartaTela.classList.replace("show", "hidden");
  });
});

botao4.addEventListener("click", () => {
  const fechar4 = document.querySelector(".fechar4");
  const quintaTela = document.querySelector(".quinta-tela");

  quintaTela.classList.replace("hidden", "show");

  fechar4.addEventListener("click", () => {
    quintaTela.classList.replace("show", "hidden");
  });
});

botao5.addEventListener("click", () => {
  const fechar5 = document.querySelector(".fechar5");
  const sextaTela = document.querySelector("sexta-tela");

  sextaTela.classList.replace("hidden", "show");

  fechar5.addEventListener("click", () => {
    sextaTela.classList.replace("show", "hidden");
  });
});

botao6.addEventListener("click", () => {
  const fechar6 = document.querySelector(".fechar6");
  const setimaTela = document.querySelector(".setima-tela");

  terceiraTela.classList.replace("hidden", "show");

  fechar6.addEventListener("click", () => {
    setimaTela.classList.replace("show", "hidden");
  });
});

botao7.addEventListener("click", () => {
  const fechar7 = document.querySelector(".fechar7");
  const oitavaTela = document.querySelector(".oitava-tela");

  oitavaTela.classList.replace("hidden", "show");

  fechar7.addEventListener("click", () => {
    oitavaTela.classList.replace("show", "hidden");
  });
});

botao8.addEventListener("click", () => {
  const fechar8 = document.querySelector(".fechar8");
  const nonaTela = document.querySelector(".nona-tela");

  nonaTela.classList.replace("hidden", "show");

  fechar8.addEventListener("click", () => {
    nonaTela.classList.replace("show", "hidden");
  });
});