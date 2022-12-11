const slideImg = [
    "assets/img/galeria/L102-00.jpg",
    "assets/img/galeria/L152-00.jpg",
    "assets/img/galeria/L170-00.jpg",
    "assets/img/galeria/L-219.jpg",
    "assets/img/galeria/L134-00.jpg",
    "assets/img/galeria/L-147.jpg",
    "assets/img/galeria/RG.jpg",
    "assets/img/galeria/Gauna00.jpg",
    "assets/img/galeria/VZ-00.jpg",
    "assets/img/galeria/L-160.jpg",
    "assets/img/galeria/Fra.png",
    "assets/img/galeria/Casa10.png",
    "assets/img/galeria/salmon00.jpg",
  ]
  
  const slideShow = document.querySelector('#slideShow');
  const imgClicks = document.querySelector('.imgClick');
  const columna = document.querySelector('.columna');



  slideImg.forEach((img) => {
    const div = document.createElement('div');
    div.classList.add('mySlides');
  
    div.innerHTML = `
        <div class="img-container">
          <img src="${img}">
        </div>`
    // insertar como primer hijo
    slideShow.insertBefore(div, slideShow.firstChild);
    
  });
  
  slideImg.forEach((img, index) => {

    const imagen = document.createElement('img');
    imagen.src = img;
    imagen.classList.add(`img${index}`);
    
    columna.appendChild(imagen);

    imagen.addEventListener('click', (e) => {
        showSlides(slideIndex = index);
    });
  
  });
  
  
  let slideIndex = 0;
  showSlides(slideIndex);
  
  const prev = document.querySelector('.prev');
  prev.addEventListener('click', () => {
    showSlides(slideIndex += -1);
  });
  const next = document.querySelector('.next');
  next.addEventListener('click', () => {
    showSlides(slideIndex += 1);
  });
  
  
  function showSlides(n) {
  
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
  
    
    slides = [...slides].reverse();
  
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
  
    slides[slideIndex].style.display = "block";
  
  }

  
  
  
  