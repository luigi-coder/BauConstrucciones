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
            </div>
        </div>
    `
}).join('');
carousel.appendChild(carouselInner);



