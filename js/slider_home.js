const sliderHome = [
    'assets/img/slider_home/1.jpg',
    'assets/img/slider_home/2.jpg',
    'assets/img/slider_home/3.jpg',
    'assets/img/slider_home/4.HEIC',
    'assets/img/slider_home/5.HEIC',
    'assets/img/slider_home/6.HEIC',
    'assets/img/slider_home/7.jpg',
    'assets/img/slider_home/8.jpg',
    'assets/img/slider_home/9.jpg',
    'assets/img/slider_home/10.jpg',
    'assets/img/slider_home/11.jpg',
    'assets/img/slider_home/12.jpg',
    'assets/img/slider_home/13.jpg',
    'assets/img/slider_home/14.jpg',
    'assets/img/slider_home/15.jpg',
    'assets/img/slider_home/16.jpg',
    'assets/img/slider_home/17.jpg',
    'assets/img/slider_home/18.jpg',
    'assets/img/slider_home/19.jpg',
    'assets/img/slider_home/20.jpg',
]

const carousel = document.querySelector('#carouselExampleCaptions');
const carouselInner = document.createElement('div');
carouselInner.classList.add('carousel-inner');
carouselInner.innerHTML = sliderHome.map((photo, index) => {
    return `
        <div class="carousel-item ${index === 0 ? 'active' : ''}">
            <img src="${photo}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div>
        </div>
    `
}).join('');
carousel.appendChild(carouselInner);



// Señale el número de veces que el número 3 va seguido o precedido de un número par: 243158125310397842538710539489351

const numbers = [2,4,3,1,5,8,1,2,5,3,1,0,3,9,7,8,4,2,5,3,8,7,1,0,5,3,9,4,8,9,3,5,1];
let count = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3 && (numbers[i - 1] % 2 === 0 || numbers[i + 1] % 2 === 0)) {
        count++;
    }
}
console.log(count);

