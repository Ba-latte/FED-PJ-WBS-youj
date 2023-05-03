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
            main_video_src: `../00.자료수집/03.동영상데이터/high_jewelry_sub_${this.vnum}.mp4`
        }
    },
    props:["vnum"],
    methods:{
        setNum(){
            num+=1;
            return num;
        },
        chgMenu(){
            this.main_video_src = 1;

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

const menuData = [
        {
            tit:`BULGARI EDEN, <br> THE GARDEN OF WONDERS`,
            isrc:`../00.자료수집/02.이미지데이터/menu/dt/hj_1.jpg`,
            desc:`the garden of wonders 이미지`,
            btns:`하이 주얼리 컬렉션 자세히 보기`
        },
        {
            tit:`매혹적인 작품`,
            isrc:`../00.자료수집/02.이미지데이터/menu/dt/hj_2.jpg`,
            desc:`매혹적인 작품 이미지`,
            btns:`시대를 초월하는 매력의 작품을 만나보세요`
        },
        {
            tit:`로만 하이주얼러`,
            isrc:`../00.자료수집/02.이미지데이터/menu/dt/hj_3.jpg`,
            desc:`로만 하이주얼러 이미지`,
            btns:`하이 주얼리 아트 자세히 보기`
        },
    ];

new Vue({
    el:"#mym",
    data:{
        mydata : menuData
    },
    methods:{
        myFn(n){
            console.log("처리",n);
            contVue.setVid(n);
        }
    },
    moundted:function(){
        this.myFn();
        console.log(myFn);
    }
})



// 뷰 인스턴스 생성하기
const contVue = new Vue({
    el: ".cont",
    data:{
        vidnum : 1,
    },
    methods:{
        setVid(n){
            console.log("요기",n);
            this.vidnum = n+1;
            console.log("다음",this.vidnum);
        }
    }
});


// 스와이퍼 불러오기
import make_v3_noNav_swiper from "./swiper_banner.js";

/* 👉호출해서 스와이퍼 개별 적용하기 */
make_v3_noNav_swiper(".section3.introduction_to_works>.intro_Swiper");

make_v3_noNav_swiper(".power_of_women .power_of_women_banner");




// AOS 라이브러리 불러오기
AOS.init();
