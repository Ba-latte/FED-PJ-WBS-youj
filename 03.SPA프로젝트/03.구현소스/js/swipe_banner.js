// 스와이프 배너 모듈 JS - swipe_banner.js


$(()=>{
    // 스와이퍼 배너
    let swipe_banner = new Swiper(".product_swipe", {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true, // 센터모드 : true인 경우 활성 슬라이드가 항상 왼쪽이 아니라 중앙에 배치됨
        // centeredSlidesBounds: true, // 센터모드 true인 경우에만 활성화 가능함. 슬라이드 가운데에 올 때 오른쪽에 빈 공간 두지 않음
        // loop: true, // 센터 모드일때엔 안 쓰는게 좋음
        // loopAdditionalSlides: 1, // 슬라이드 반복 시 마지막 슬라이드에서 다음 슬라이드가 보여지지 않는 현상 수정
        // grabCursor: true, // dt일때 마우스포인터 설정
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
            clickable: true,
        },
    });
    
    swipe_banner;

    // AOS 라이브러리
    AOS.init();
});
