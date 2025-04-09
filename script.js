document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".filmes-container");
    const filmes = document.querySelectorAll(".filme");
    const btnEsquerda = document.querySelector(".esquerda");
    const btnDireita = document.querySelector(".direita");

    const larguraFilme = 320;
    let index = 0;

    // Clona os filmes para criar o loop
    filmes.forEach(filme => {
        const clone = filme.cloneNode(true);
        container.appendChild(clone);
    });

    function moverParaIndex(novoIndex) {
        container.style.transition = "transform 0.5s ease-in-out";
        container.style.transform = `translateX(-${novoIndex * larguraFilme}px)`;
        index = novoIndex;
    }

    btnDireita.addEventListener("click", () => {
        if (index >= container.children.length / 2) {
            container.style.transition = "none";
            container.style.transform = `translateX(0px)`;
            index = 0;
            setTimeout(() => moverParaIndex(1), 10);
        } else {
            moverParaIndex(index + 1);
        }
    });

    btnEsquerda.addEventListener("click", () => {
        if (index <= 0) {
            index = container.children.length / 2;
            container.style.transition = "none";
            container.style.transform = `translateX(-${index * larguraFilme}px)`;
            setTimeout(() => moverParaIndex(index - 1), 10);
        } else {
            moverParaIndex(index - 1);
        }
    });
});
