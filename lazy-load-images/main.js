const images = document.querySelectorAll('img');

let imageOptions = {};

let observer = new IntersectionObserver((entries, observer) => {
  console.log(entries);

  entries.forEach((entry) => {
    console.log(entry)
    if (!entry.isIntersecting) return;
    const image = entry.target;
    image.src = image.src.replace('photos/10/', 'photos/400/')
    observer.unobserve(image)
  });
}, imageOptions);

images.forEach((image) => {
  observer.observe(image);
})
