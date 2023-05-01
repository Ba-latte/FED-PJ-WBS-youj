// 불가리 PJ 메인 JS - main.js

// 템플릿 html 코드 객체 JS 가져오기





/* 메인 페이지 섹션2 추천 제품 - 뷰3 스와이퍼 */
const make_v3_swiper = function make_v3_swiper(cls){
    new Swiper(cls, {
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

}; //////////////////////// make_v3_swiper 함수 //////////////////////////////


/* 👉호출해서 스와이퍼 개별 적용하기 */
make_v3_swiper(".section2.recommended_product>.recommended_Swiper");

/* 👉AOS라이브러리 호출하기 */
AOS.init();

/* 👉윈도우 사이즈 1100이하에서 아이콘에 title 넣기 */
const win_width = $(window).width();
// console.log(win_width);
// $(window).resize(function(){
//     if(win_width < 1100){
//         $(".top.mob .shopping_bag").attr("title", "장바구니");
//     }
// });

// if($(".top.mob .shopping_bag").show()){
//     $(".top.mob .shopping_bag").attr("title", "장바구니");
// }