$(document).ready(function() {
    const sliders = $('.slider ul li');
    const slideCount = sliders.length;
    let currentSlide = 0;

    sliders.css('right', '-1000px').css('opacity', '0');
    sliders.eq(currentSlide).css('right', '0px').css('opacity', '1');

    function moveSlides() {
        sliders.eq(currentSlide).animate({ 'right': '1000px', 'opacity': '0' }, 1000, function() {
            $(this).css('right', '-1000px');
        });

        currentSlide = (currentSlide + 1) % slideCount;

        sliders.eq(currentSlide).css('right', '-1000px').css('opacity', '1').animate({ 'right': '0px' }, 1000);
    }

    setInterval(moveSlides, 3000);
});
