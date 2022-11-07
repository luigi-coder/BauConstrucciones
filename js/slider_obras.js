const photosWorks = [
    "img/galeria/L102-00.jpg",
    "img/galeria/L152-00.jpg",
    "img/galeria/L170-00.jpg",
    "img/galeria/L-219.jpg",
    "img/galeria/L134-00.jpg",
    "img/galeria/L-147.jpg",
    "img/galeria/RG.jpg",
    "img/galeria/Gauna00.jpg",
    "img/galeria/VZ-00.jpg",
    "img/galeria/L-160.jpg",
    "img/galeria/Fra.png",
    "img/galeria/Casa10.png",
    "img/galeria/salmon00.jpg",
]

const d = document;

const containerPhotos = d.querySelector("#photosWorks");
containerPhotos.innerHTML = photosWorks.map((photo) => {
    return `<img src="${photo}" alt="photo" class="photo">`;
});



/* const img = document.querySelector('.img01');

img.addEventListener('click', ()=>{
    console.log('click en la imagen');
}) */