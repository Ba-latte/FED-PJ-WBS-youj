// 스와이프 배너 모듈 JS - swipe_banner.js


$(()=>{
    // 스와이퍼 배너
    let swipe_banner = new Swiper(".product_swipe", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
    
    swipe_banner;
});
