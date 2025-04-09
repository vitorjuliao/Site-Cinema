const container = document.querySelector('.filmes-container');
const filmes = document.querySelectorAll('.filme');
const esquerdaBtn = document.querySelector('.seta.esquerda');
const direitaBtn = document.querySelector('.seta.direita');

let filmeLargura = filmes[0].offsetWidth + 20;
let index = 0;

// Clona os filmes para dar efeito de loop
filmes.forEach(filme => {
  const clone = filme.cloneNode(true);
  container.appendChild(clone);
});

direitaBtn.addEventListener('click', () => {
  index++;
  container.style.transition = 'transform 0.4s ease-in-out';
  container.style.transform = `translateX(-${index * filmeLargura}px)`;

  if (index >= filmes.length) {
    setTimeout(() => {
      container.style.transition = 'none';
      index = 0;
      container.style.transform = `translateX(0px)`;
    }, 400);
  }
});

esquerdaBtn.addEventListener('click', () => {
  if (index <= 0) {
    index = filmes.length;
    container.style.transition = 'none';
    container.style.transform = `translateX(-${index * filmeLargura}px)`;
  }

  setTimeout(() => {
    index--;
    container.style.transition = 'transform 0.4s ease-in-out';
    container.style.transform = `translateX(-${index * filmeLargura}px)`;
  }, 20);
});

// Atualiza largura se redimensionar a janela
window.addEventListener('resize', () => {
  filmeLargura = filmes[0].offsetWidth + 20;
  container.style.transform = `translateX(-${index * filmeLargura}px)`;
});
