const track__s = document.querySelector('.carousel__track--s');
const slides__s = Array.from(track__s.children);
const nextButton__s = document.querySelector('.carousel__button--right--s');
const prevButton__s = document.querySelector('.carousel__button--left--s');
const dotsNav__s = document.querySelector('.carousel__nav--s');
const dots__s = Array.from(dotsNav__s.children);

const slideWidth__s = slides__s[0].getBoundingClientRect().width;







//arange the slides next to each other
//slides[0].style.left = slideWidth * 0 + 'px';
//slides[1].style.left = slideWidth * 1 + 'px';
//slides[2].style.left = slideWidth * 2 + 'px';

const setSlidePosition__s = (slide__s, index__s) => {
    slide__s.style.left = slideWidth__s * index__s + 'px';
}

slides__s.forEach(setSlidePosition__s);//

const moveToSlide__s = (track__s, currentSlide__s, targetSlide__s) => {
    track__s.style.transform = 'translateX(-' + targetSlide__s.style.left + ')';
    currentSlide__s.classList.remove('current-slide--s');
    targetSlide__s.classList.add('current-slide--s');
}

const updateDots__s = (currentDot__s, targetDot__s) => {
    currentDot__s.classList.remove('current-slide--s');
    targetDot__s.classList.add('current-slide--s');
}

const hideShowArrows__s = (slides__s, prevButton__s, nextButton__s, targetIndex__s) => {
    if (targetIndex__s === 0) {
        prevButton__s.classList.add('is-hidden--s');
        nextButton__s.classList.remove('is-hidden--s');
    }  else if (targetIndex__s === slides__s.length - 1) {
        prevButton__s.classList.remove('is-hidden--s');
        nextButton__s.classList.add('is-hidden--s');
    } else {
        prevButton__s.classList.remove('is-hidden--s');
        nextButton__s.classList.remove('is-hidden--s');
    }
}

//when I click left, move slides to the left
prevButton__s.addEventListener('click', e => {
    const currentSlide__s = track__s.querySelector('.current-slide--s');
    const prevSlide__s = currentSlide__s.previousElementSibling;
    const currentDot__s = dotsNav__s.querySelector('.current-slide--s');
    const prevDot__s = currentDot__s.previousElementSibling;
    const prevIndex__s = slides__s.findIndex(slide__s => slide__s === prevSlide__s);


    moveToSlide__s(track__s, currentSlide__s, prevSlide__s);
    updateDots__s(currentDot__s, prevDot__s);
    hideShowArrows__s(slides__s, prevButton__s, nextButton__s, prevIndex__s);

})


//when I click right, move slides to the right
nextButton__s.addEventListener('click', e => {
    const currentSlide__s = track__s.querySelector('.current-slide--s');
    const nextSlide__s = currentSlide__s.nextElementSibling;
    const currentDot__s = dotsNav__s.querySelector('.current-slide--s');
    const nextDot__s = currentDot__s.nextElementSibling;
    const nextIndex__s = slides__s.findIndex(slide__s => slide__s === nextSlide__s);

    moveToSlide__s(track__s, currentSlide__s, nextSlide__s);
    updateDots__s(currentDot__s, nextDot__s);
    hideShowArrows__s(slides__s, prevButton__s, nextButton__s, nextIndex__s);
})



//when I click the nav indicator, move to that slide

dotsNav__s.addEventListener('click', e => {
    //what indecator was clicked on
    const targetDot__s = e.target.closest('button');
   
    if(!targetDot__s) return; 
    
    const currentSlide__s = track__s.querySelector('.current-slide--s');
    const currentDot__s = dotsNav__s.querySelector('.current-slide--s');
    const targetIndex__s = dots__s.findIndex(dot__s => dot__s === targetDot__s);
    const targetSlide__s = slides__s[targetIndex__s];

    moveToSlide__s(track__s, currentSlide__s, targetSlide__s);

    updateDots__s(currentDot__s, targetDot__s);

    hideShowArrows__s(slides__s, prevButton__s, nextButton__s, targetIndex__s);

    

})