let listItems = [...document.querySelectorAll('li')];

let options = {
  rootMargin: '-10%',
  threshold: 0.0
}

let observer = new IntersectionObserver(showItem, options);

function showItem(entries) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    let letters = [...entry.target.querySelectorAll('span')];
    letters.forEach((letter, idx) => {
      setTimeout(() => {
        letter.classList.add('active');
      }, idx * 10);
    });
    entry.target.children[0].classList.add('active');
  })
}

listItems.forEach(item => {
  let newString = '';
  let itemText = item.children[0].innerText.split('');
  itemText.map(letter => (newString += letter == ' ' ? `<span class='gap'></span>` : `<span>${letter}</span>`));
  console.log(newString)
  item.innerHTML = newString;

  observer.observe(item);
})