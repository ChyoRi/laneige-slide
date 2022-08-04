$(document).ready(function(){
    // 전역변수
    const slideUl = $('.slide_wrap > ul');
    let activeSlide = 0;
    
    function slide() {
        if (activeSlide >= 4) activeSlide = 0;
        slideUl.css({'left' : '0%'});
        slideUl.css({'left' : activeSlide * -100 + '%'});
        activeSlide++;
    }

    setInterval(slide, 2000);
});