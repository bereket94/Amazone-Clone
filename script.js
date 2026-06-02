const slider = document.querySelector('.header-slider ul');
const slides = document.querySelectorAll('.header-slider li');
const prevBtn = document.querySelector('.control-prev');
const nextBtn = document.querySelector('.control-next');

let currentIndex = 0;
const totalSlides = slides.length;

function goToSlide(index) {
    if (index < 0)    
          index = totalSlides - 1;
    if (index >= totalSlides)  index = 0;
    currentIndex = index;
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}
prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(currentIndex - 1);
});
nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    goToSlide(currentIndex + 1);
});
const scrollContainers = document.querySelectorAll('.products');
for (const container of scrollContainers) {
    container.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        container.scrollLeft += evt.deltaY;
    });
}