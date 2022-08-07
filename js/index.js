// 전역변수
const slideUl = $('.slide_wrap > ul');
const listLen = slideUl.find('li').length;
const pageNavBtn = $('.page_navbtn_wrap > li > button');
const slidePrevBtn = $('.prev');
const slideNextBtn = $('.next');
const slideTimer = 3000;
let active = 0;
let interval = null;

pageNavBtn.parent().eq(active).addClass('active').siblings().removeClass('active');

const slide = (type) => {
    if (type === 'prev') {  // 이전
        slideUl.prepend(slideUl.find('li')[listLen - 1]).css('left', '-100%').stop().animate({'left': '0%'});
        active = active <= 0 ? listLen - 1 : active - 1;
    } else {  // 다음
        slideUl.stop().animate({'left': '-100%'}, undefined, undefined, () => {
            slideUl.append(slideUl.find('li')[0]).css('left', 0);
        });
        active = active >= listLen - 1 ? 0 : active + 1;
    }
    pageNavBtn.parent().eq(active).addClass('active').siblings().removeClass('active');

}

const intervalFn = () => {
    clearInterval(interval);
    interval = setInterval(() => slide('next'), slideTimer);
}

slidePrevBtn.click(() => {
    slide('prev');
    intervalFn();
});
slideNextBtn.click(() => {
    slide('next');
    intervalFn();
});

intervalFn();



// 1. 집안일을 서로 도와가며 지낸다. (설거지, 청소기, 화장실 청소 등)
// 2. 겉옷은 같이 빨래 돌리고 양말, 속옷은 따로 돌린다.
// 3. 주말 오전에는 서로 깨우지 않는다.
// 4. 필요한 생필품이 있을 경우 미리 말을 해준다.
// 5. 사용한 물건은 사용 후 있던 자리에 놓는다.
// 6. 외출 시 소등 필수
// 7. 화장실 볼일은 앉아서, 물 내릴 때에는 커버 닫고
// 8. 누구를 델고오지 않는다.
// 9. 개인적인 프라이버시 존중, 생리현상 존중 (방구, 트름, 똥소리)