function slideImage(el, direction) {
    const carousel = el.parentElement.querySelector(".carousel-images");
    const images = carousel.querySelectorAll("img");
    let index = +carousel.getAttribute("data-index");
    index = (index + direction + images.length) % images.length;
    carousel.setAttribute("data-index", index);
    carousel.style.transform = `translateX(-${index * 100}%)`;
  }