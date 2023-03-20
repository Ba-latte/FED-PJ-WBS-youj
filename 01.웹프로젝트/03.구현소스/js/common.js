// 서울미식주간  공통 모듈 JS - common.js
/* 상단 영역, 하단 영역 JS */


/*********************************************************
    [ 모바일 관련 함수 ]
*********************************************************/
// 모바일 상태값
let mob = 0; // 1모바일
const chgMob = () => {
    if (window.innerWidth < 1100) mob = 1;
    else mob = 0;

    if (!mob) {
        document.querySelectorAll(".smenu").forEach((ele) => (ele.style = ""));
    }

    // console.log("in모바일:", mob);
}; ////// chgMob //////////

// 최초 호출하기
chgMob();

// console.log("모바일:", mob);

// 사이즈 변경 이벤트 실행시 chgMob 함수 실행!
window.addEventListener("resize", chgMob);



/////////////////////////////////////// 로딩 구역 //////////////////////////////////////
window.addEventListener("DOMContentLoaded", commonLinkFn());

function commonLinkFn(){
    console.log("공통 모듈 js - 로딩 완료");

    doNotDf();
} ///////////////////////////// commonLinkFn 함수 ///////////////////////////////

function doNotDf(){
    // console.log("a요소 금지 함수");
    
} //////////////////////////// doNotDf ///////////////////////////