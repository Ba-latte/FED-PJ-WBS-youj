// 스와이프 배너 모듈 JS - swipe_banner.js


$(()=>{
    console.log("스와이프 배너 모듈 로딩 완료");

    // 스와이프 배너
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

    // 제품 타이틀 등장 액션
    function fadeUpAni(){
        const pd_slide = $(".slide");
        const pd_tit = $(".product_tit");
        console.log("제품 슬라이드 : ", pd_slide);

        // 맨처음에 제품 타이틀 요소 숨기기
        // pd_tit.hide();
        pd_tit.css({
            display: "none",
        });

        // 제품 슬라이드에 마우스오버/아웃시 제품 타이틀 요소 등장 액션 부여하기
        pd_slide.hover(
            // 오버시
            function(){
                console.log("마우스 오버");
                $(this).find(".product_tit").stop().slideDown(500);
                // $(this).find(".product_tit").animate({
                //     display:"block",
                    
                // }, 500, "easeOutExpo");
            },
            // 아웃시
            function(){
                    console.log("마우스 아웃");
                    $(this).find(".product_tit").stop().slideUp(500);
            }
        );
        // pd_slide.mouseover(function(){
        //     console.log("마우스 엔터");
        //     $(this).find(".product_tit").stop().slideDown(500);
        // });
        // pd_slide.mouseout(function(){
        //     console.log("마우스 아웃");
        //     $(this).find(".product_tit").stop().slideUp(500);
        // });


    }

    fadeUpAni();
}); /////////////////////// jQB /////////////////////////////



lighting = [
    {
        
    },
    {},
];