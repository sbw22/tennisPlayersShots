const track__b = document.querySelector('.carousel__track--b');
const slides__b = Array.from(track__b.children);
const nextButton__b = document.querySelector('.carousel__button--right--b');
const prevButton__b = document.querySelector('.carousel__button--left--b');
const dotsNav__b = document.querySelector('.carousel__nav--b');
const dots__b = Array.from(dotsNav__b.children);

const slideWidth__b = slides__b[0].getBoundingClientRect().width;







//arange the slides next to each other
//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition__b = (slide__b, index__b) => {
    slide__b.style.left = slideWidth__b * index__b + 'px';
}

slides__b.forEach(setSlidePosition__b);

const moveToSlide__b = (track__b, currentSlide__b, targetSlide__b) => {
    track__b.style.transform = 'translateX(-' + targetSlide__b.style.left + ')';
    currentSlide__b.classList.remove('current-slide--b');
    targetSlide__b.classList.add('current-slide--b');
}

const updateDots__b = (currentDot__b, targetDot__b) => {
    currentDot__b.classList.remove('current-slide--b');
    targetDot__b.classList.add('current-slide--b');
}

const hideShowArrows__b = (slides__b, prevButton__b, nextButton__b, targetIndex__b) => {
    if (targetIndex__b === 0) {
        prevButton__b.classList.add('is-hidden--b');
        nextButton__b.classList.remove('is-hidden--b');
    }  else if (targetIndex__b === slides__b.length - 1) {
        prevButton__b.classList.remove('is-hidden--b');
        nextButton__b.classList.add('is-hidden--b');
    } else {
        prevButton__b.classList.remove('is-hidden--b');
        nextButton__b.classList.remove('is-hidden--b');
    }
}

//when I click left, move slides to the left
prevButton__b.addEventListener('click', e => {
    const currentSlide__b = track__b.querySelector('.current-slide--b');
    const prevSlide__b = currentSlide__b.previousElementSibling;
    const currentDot__b = dotsNav__b.querySelector('.current-slide--b');
    const prevDot__b = currentDot__b.previousElementSibling;
    const prevIndex__b = slides__b.findIndex(slide__b => slide__b === prevSlide__b);


    moveToSlide__b(track__b, currentSlide__b, prevSlide__b);
    updateDots__b(currentDot__b, prevDot__b);
    hideShowArrows__b(slides__b, prevButton__b, nextButton__b, prevIndex__b);

})


//when I click right, move slides to the right
nextButton__b.addEventListener('click', e => {
    const currentSlide__b = track__b.querySelector('.current-slide--b');
    const nextSlide__b = currentSlide__b.nextElementSibling;
    const currentDot__b = dotsNav__b.querySelector('.current-slide--b');
    const nextDot__b = currentDot__b.nextElementSibling;
    const nextIndex__b = slides__b.findIndex(slide__b => slide__b === nextSlide__b);

    moveToSlide__b(track__b, currentSlide__b, nextSlide__b);
    updateDots__b(currentDot__b, nextDot__b);
    hideShowArrows__b(slides__b, prevButton__b, nextButton__b, nextIndex__b);
})



//when I click the nav indicator, move to that slide

dotsNav__b.addEventListener('click', e => {
    //what indecator was clicked on
    const targetDot__b = e.target.closest('button');
   
    if(!targetDot__b) return; 
    
    const currentSlide__b = track__b.querySelector('.current-slide--b');
    const currentDot__b = dotsNav__b.querySelector('.current-slide--b');
    const targetIndex__b = dots__b.findIndex(dot__b => dot__b === targetDot__b);
    const targetSlide__b = slides__b[targetIndex__b];

    moveToSlide__b(track__b, currentSlide__b, targetSlide__b);

    updateDots__b(currentDot__b, targetDot__b);

    hideShowArrows__b(slides__b, prevButton__b, nextButton__b, targetIndex__b);

    

})