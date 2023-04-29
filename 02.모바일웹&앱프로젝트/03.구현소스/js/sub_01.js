// 불가리 PJ 서브페이지(세르펜티, 하이주얼리, 브랜드) JS - sub_01.js

// 템플릿 html 코드 객체 JS 가져오기
import html_code from "./html_code.js";

// 숫자 증감 변수
let num = 0;

// 섹션1 컴포넌트로 만들기
Vue.component("sec1-comp", {
    template: html_code.section_1,
    data: function(){
        return{
            main_video_class: [`bulgari_eden`, `magnificent_creations`, `roman_high`],
            main_video_src: `../00.자료수집/03.동영상데이터/high_jewelry_sub_${this.setNum()}.mp4`
        }
    },
    methods:{
        setNum(){
            num+=1;
            return num;
        }
    }
}); ///////////////// sec1-comp 전역 컴포넌트 /////////////////////////

// top버튼 컴포넌트로 만들기
Vue.component("topbtn-comp", {
    template: html_code.top_btn,
}); ///////////////// topbtn-comp 전역 컴포넌트 /////////////////////////

// 섹션2 컴포넌트로 만들기
Vue.component("sec2-comp", {
    template: html_code.section_2,
}); //////////////////// sec2-comp 전역 컴포넌트 ///////////////////////////////

// 섹션3 컴포넌트로 만들기
Vue.component("sec3-comp", {
    template: html_code.section_3,
}); ///////////////////// sec3-comp 전역 컴포넌트 //////////////////////////////


// 뷰 인스턴스 생성하기
new Vue({
    el: ".cont"
});


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
    autoplay: {
        // 자동넘김설정
        delay: 3000, // 시간간격(1/1000초)
        disableOnInteraction: false,
        // 상호작용(건드리는 것)이 없으면 다시 재시작(false일때)
    },
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

/* 👉호출해서 스와이퍼 개별 적용하기 */
make_v3_noNav_swiper(".section3.introduction_to_works>.intro_Swiper");


AOS.init();
