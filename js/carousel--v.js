const track__v = document.querySelector('.carousel__track--v');
const slides__v = Array.from(track__v.children);
const nextButton__v = document.querySelector('.carousel__button--right--v');
const prevButton__v = document.querySelector('.carousel__button--left--v');
const dotsNav__v = document.querySelector('.carousel__nav--v');
const dots__v = Array.from(dotsNav__v.children);

const slideWidth__v = slides__v[0].getBoundingClientRect().width;







//arange the slides next to each other
//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition__v = (slide__v, index__v) => {
    slide__v.style.left = slideWidth__v * index__v + 'px';
}

slides__v.forEach(setSlidePosition__v);//

const moveToSlide__v = (track__v, currentSlide__v, targetSlide__v) => {
    track__v.style.transform = 'translateX(-' + targetSlide__v.style.left + ')';
    currentSlide__v.classList.remove('current-slide--v');
    targetSlide__v.classList.add('current-slide--v');
}

const updateDots__v = (currentDot__v, targetDot__v) => {
    currentDot__v.classList.remove('current-slide--v');
    targetDot__v.classList.add('current-slide--v');
}

const hideShowArrows__v = (slides__v, prevButton__v, nextButton__v, targetIndex__v) => {
    if (targetIndex__v === 0) {
        prevButton__v.classList.add('is-hidden--v');
        nextButton__v.classList.remove('is-hidden--v');
    }  else if (targetIndex__v === slides__v.length - 1) {
        prevButton__v.classList.remove('is-hidden--v');
        nextButton__v.classList.add('is-hidden--v');
    } else {
        prevButton__v.classList.remove('is-hidden--v');
        nextButton__v.classList.remove('is-hidden--v');
    }
}

//when I click left, move slides to the left
prevButton__v.addEventListener('click', e => {
    const currentSlide__v = track__v.querySelector('.current-slide--v');
    const prevSlide__v = currentSlide__v.previousElementSibling;
    const currentDot__v = dotsNav__v.querySelector('.current-slide--v');
    const prevDot__v = currentDot__v.previousElementSibling;
    const prevIndex__v = slides__v.findIndex(slide__v => slide__v === prevSlide__v);


    moveToSlide__v(track__v, currentSlide__v, prevSlide__v);
    updateDots__v(currentDot__v, prevDot__v);
    hideShowArrows__v(slides__v, prevButton__v, nextButton__v, prevIndex__v);

})


//when I click right, move slides to the right
nextButton__v.addEventListener('click', e => {
    const currentSlide__v = track__v.querySelector('.current-slide--v');
    const nextSlide__v = currentSlide__v.nextElementSibling;
    const currentDot__v = dotsNav__v.querySelector('.current-slide--v');
    const nextDot__v = currentDot__v.nextElementSibling;
    const nextIndex__v = slides__v.findIndex(slide__v => slide__v === nextSlide__v);

    moveToSlide__v(track__v, currentSlide__v, nextSlide__v);
    updateDots__v(currentDot__v, nextDot__v);
    hideShowArrows__v(slides__v, prevButton__v, nextButton__v, nextIndex__v);
})



//when I click the nav indicator, move to that slide

dotsNav__v.addEventListener('click', e => {
    //what indecator was clicked on
    const targetDot__v = e.target.closest('button');
   
    if(!targetDot__v) return; 
    
    const currentSlide__v = track__v.querySelector('.current-slide--v');
    const currentDot__v = dotsNav__v.querySelector('.current-slide--v');
    const targetIndex__v = dots__v.findIndex(dot__v => dot__v === targetDot__v);
    const targetSlide__v = slides__v[targetIndex__v];

    moveToSlide__v(track__v, currentSlide__v, targetSlide__v);

    updateDots__v(currentDot__v, targetDot__v);

    hideShowArrows__v(slides__v, prevButton__v, nextButton__v, targetIndex__v);
    
})