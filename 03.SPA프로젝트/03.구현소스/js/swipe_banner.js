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
        // pagination: {
        //     el: ".swiper-pagination",
        //     type: "progressbar",
        // },
    });

    // 제품 타이틀 등장 액션 호출
    slideUpAni();
}); /////////////////////// jQB /////////////////////////////




//////////////////////////// [ 제품 타이틀 등장 액션 ] ////////////////////////////
function slideUpAni(){
    const pd_slide = $(".slide");
    const pd_tit = $(".product_tit");
    console.log("제품 슬라이드 : ", pd_slide);

    // [ 애니메이트() 메서드로 만들 경우 ]
    // 제품 슬라이드에 마우스오버/아웃시 제품 타이틀 요소 등장 액션 부여하기
    pd_slide.hover(
        // 오버시
        function(){
            // 오버한 요소의 타이틀 높이값 구하기
            let hval = $(this).find(".product_tit").height();
            console.log("마우스 오버한 요소의 타이틀 높이값 : ", hval);

            // 오버한 요소를 제외한 형제 요소들의 투명도 흐리게 하기
            $(this).siblings().find("img").stop().animate({
                opacity: "0.5"
            }, 400);

            // 타이틀의 부모요소에 해당 높이값을 줘서 등장하도록 만들기
            $(this).find(".wrap").stop().animate({
                height: hval + "px",
                opacity: "1"
            }, 1500, "easeOutExpo");
        },
        // 아웃시
        function(){
            console.log("마우스 아웃");

            // 오버한 요소를 제외한 형제 요소들의 투명도 돌아오게 하기
            $(this).siblings().find("img").stop().animate({
                opacity: "1"
            }, 400);

            // 타이틀의 부모요소의 높이값을 0으로 만들어 사라지게 만들기
            $(this).find(".wrap").stop().animate({
                height: "0px",
                opacity: "0"
            }, 1500, "easeOutExpo");
        }
    );

    // [ 슬라이드업/다운 메서드로 만들 경우 ]
    // pd_slide.mouseover(function(){
    //     console.log("마우스 엔터");
    //     $(this).find(".product_tit").stop().slideDown(500);
    // });
    // pd_slide.mouseout(function(){
    //     console.log("마우스 아웃");
    //     $(this).find(".product_tit").stop().slideUp(500);
    // });
} //////////////////////// slideUpAni 함수 ///////////////////////////////