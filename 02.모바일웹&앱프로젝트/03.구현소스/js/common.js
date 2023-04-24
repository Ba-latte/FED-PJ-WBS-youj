/* 불가리 PJ 공통 js - common.js */

/////////////////////////////////// jQB //////////////////////////////////////////
$(()=>{
    console.log("common.js 로딩 완료!");

    /* 메인 페이지 섹션2 추천 제품 - 스와이퍼 */
    let test1 = new Swiper(".section2.recommended_product>.recommended_Swiper", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 20, // 슬라이드 사이간격(px)
        slidesPerGroup: 1, // 슬라이드 그룹(개수단위로 넘어감!)

        loop: true, // 무한루프(기본값:false)
        loopFillGroupWithBlank: true,
        // 한 화면 단위지정시 단위보다 그룹이 작을 경우 빈칸을 채움
        pagination: {
            // 블릿설정
            el: ".swiper-pagination", // 블릿요소설정
            clickable: false, // 클릭가능여부
        },
        navigation: {
            // 양쪽이동버튼
            nextEl: ".swiper-button-next", // 다음버튼 요소설정
            prevEl: ".swiper-button-prev", // 이전버튼 요소설정
        },
    });

    // // const gnb = $(".dt>.gnb li:has(.lnb)");
    // const gnb = $(".dt>.gnb");
    // console.log(gnb);
    // gnb.hover(addOnFn, removeOnFn);

    // function addOnFn(){
    //     gnb.find("li .lnb").addClass("on");
    // }
    // function removeOnFn(){
    //     gnb.find("li .lnb").removeClass("on");
    // }

    /* 모바일 lnb메뉴 속 스와이퍼 */
    const swiper = new Swiper(".mob .entire.list .lnb.jewellery .recommended_Swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grabCursor: true,
    });

    


}); /////////////////////////////////// jQB //////////////////////////////////////////
