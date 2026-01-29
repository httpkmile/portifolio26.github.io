document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector('.paicard');
  const btnRight = document.querySelector('.arrow.right');
  const btnLeft = document.querySelector('.arrow.left');

  const move = 670;

  btnRight.addEventListener('click', () => {
    track.scrollLeft += move;
  });

  btnLeft.addEventListener('click', () => {
    track.scrollLeft -= move;
  });
});
