const photosWorks = [
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

const d = document;
const containerPhotos = d.querySelector("#photosWorks");
const containerPhotos2 = d.querySelector("#photosShows");

containerPhotos.innerHTML = photosWorks.map((photo) => {
    return `<img src="${photo}" alt="photo" class="photo">`;
});

// Add event click to each photo
const photos = d.querySelectorAll(".photo");
photos.forEach((photo) => {
    photo.addEventListener("click", (e) => {
        console.log(e.target.src);

        containerPhotos2.innerHTML = `<img src="${e.target.src}" alt="photo" class="photo">`;
    })
});




/* const img = document.querySelector('.img01');

img.addEventListener('click', ()=>{
    console.log('click en la imagen');
}) */