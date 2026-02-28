const imagens = ["images/imagem1.jpg", "images/imagem2.jpg"];

const botaoTrocar = document.getElementById("trocar-imagem");
const imagem = document.getElementById("imagem1");

botaoTrocar.addEventListener("click", () => {
  // Obtém o atributo src atual da imagem
  const srcAtual = imagem.getAttribute("src");

  // Faz a verificação: se for a primeira imagem, muda para a segunda.
  // Caso contrário, volta para a primeira.
  if (srcAtual === imagens[0]) {
    imagem.setAttribute("src", imagens[1]);
  } else {
    imagem.setAttribute("src", imagens[0]);
  }
});
