const target = document.querySelectorAll('.scroll');
let length = target.length;

window.addEventListener('scroll', (e) => {
  for ( let index = 0; index < length; index++ ) {
    let pos = window.pageYOffset * target[index].dataset.rate;

    if (target[index].dataset.direction === 'vertical') {
      target[index].style.transform = `translate3d(0px, ${pos}px, 0px)`;
    } else {
      let posX = window.pageYOffset * target[index].dataset.ratex;
      let posY = window.pageYOffset * target[index].dataset.ratey;

      target[index].style.transform = `translate3d(${posX}px, ${posY}px, 0px)`;
    }
  }
})