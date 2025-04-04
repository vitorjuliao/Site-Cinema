document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".filmes-container");
    const btnEsquerda = document.querySelector(".esquerda");
    const btnDireita = document.querySelector(".direita");

    let deslocamento = 0;
    const larguraFilme = 300; // Largura aproximada de cada filme + gap
    const totalFilmes = container.childElementCount;
    const filmesVisiveis = 3;

    btnDireita.addEventListener("click", () => {
        if (deslocamento > -((totalFilmes - filmesVisiveis) * larguraFilme)) {
            deslocamento -= larguraFilme;
            container.style.transform = `translateX(${deslocamento}px)`;
        }
    });

    btnEsquerda.addEventListener("click", () => {
        if (deslocamento < 0) {
            deslocamento += larguraFilme;
            container.style.transform = `translateX(${deslocamento}px)`;
        }
    });
});
