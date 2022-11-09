let offset = 0; 
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-first').addEventListener('click', function(){
    offset = 0;
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-second').addEventListener('click', function(){
    offset = 1320;
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-third').addEventListener('click', function(){
    offset = 2640;
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-fourth').addEventListener('click', function(){
    offset = 3960;
    sliderLine.style.left = -offset + 'px';
});