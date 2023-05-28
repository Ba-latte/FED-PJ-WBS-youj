
// 롤링 배너 JS - rolling.js

//DOM 생성 후
window.addEventListener("DOMContentLoaded", function () {
    console.log("롤링배너 JS");

    let swiper = new Swiper(".roller", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 0, // 슬라이드 사이간격(px)
        slidesPerGroup: 1, // 슬라이드 그룹(개수단위로 넘어감!)

        loop: true, // 무한루프(기본값:false)
        loopFillGroupWithBlank: true,
        // 한 화면 단위지정시 단위보다 그룹이 작을 경우 빈칸을 채움
        // autoplay: {
        //     // 자동넘김설정
        //     delay: 2000, // 시간간격(1/1000초)
        //     disableOnInteraction: false,
        //     // 상호작용(건드리는 것!)이 없으면 다시 재시작(false일때)
        // },
        // 사이즈별 슬라이드 개수, 간격 동적 변경 세팅하기
        // Responsive breakpoints
        // breakpoints: {
        //     // when window width is >= 200px
        //     200: {
        //         slidesPerView: 1,
        //         spaceBetween: 0,
        //     },
        //     // when window width is >= 700px
        //     700: {
        //         slidesPerView: 2,
        //         spaceBetween: 10,
        //     },
        // },
    });
});