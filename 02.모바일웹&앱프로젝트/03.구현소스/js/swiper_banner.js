// 스와이퍼 배너 모음 JS - swiper_banner.js





/* 👉서브페이지) 하이주얼리 작품 소개 스와이퍼 */
const make_v3_noNav_swiper = function make_v3_noNav_swiper(cls){
    new Swiper(cls, {
        // 초기값 설정을 모바일일때라고 생각하고 해야 함
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true, // 한 화면 단위지정시 단위보다 그룹이 작을 경우 빈칸을 채움
        pagination: {
            el: ".swiper-pagination",
            clickable: false,
        },
        grabCursor: true,
        // autoplay: {
        //     // 자동넘김설정
        //     delay: 3000, // 시간간격(1/1000초)
        //     disableOnInteraction: false,
        //     // 상호작용(건드리는 것)이 없으면 다시 재시작(false일때)
        // },
        // 사이즈별 슬라이드 개수, 간격 동적 변경 세팅하기
        breakpoints: {
            // when window width is >= 500px
            500: {
                slidesPerView: 2,
                slidesPerGroup: 1, // 슬라이드 그룹(개수단위로 넘어감!)
                spaceBetween: 30,
            },
            // when window width is >= 1000px
            1000: {
                slidesPerView: 3,
                slidesPerGroup: 1, // 슬라이드 그룹(정한 단위로 넘어감!)
                spaceBetween: 30,
            },
        },
    });
    }; /////////////////////// make_v3_noNav_swiper 함수 ////////////////////////


    
    // 내보내기 /////////////////////////////
    export default make_v3_noNav_swiper;