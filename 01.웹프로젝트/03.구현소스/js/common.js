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
window.addEventListener("DOMContentLoaded", commonLinkFn);

function commonLinkFn(){
    console.log("공통 모듈 js - 로딩 완료");

    doNotDf();

    /*************************** 햄버거 버튼 클릭하면 사이트맵 화면이 오른쪽에서 등장하기 ***************************/
    // ⭐대상 선정
    // 이벤트 대상 - .hambtn
    const hambtn = document.querySelector(".hambtn");
    // 적용 대상 - .siteMap
    const siteMap = document.querySelector(".siteMap");
    console.log(hambtn);

    // ⭐이벤트 세팅하기
    hambtn.onclick = () => {
        siteMap.classList.add("on");

        /* 스크롤바, 스크롤기능 없애기 */
        document.body.classList.add("scrollOff");
    }; ////////////// onclick 이벤트 끝 /////////////////

    /*********************** 닫기 버튼 클릭하면 사이트맵 화면이 오른쪽으로 들어가기 ***********************/
    // 이벤트 대상 - .close
    const closebtn = document.querySelector(".close img");
    // 적용 대상 - .siteMap

    // 이벤트 세팅하기
    closebtn.onclick = (idx) => {
        /* 모바일 버전에서 사이트맵 하위메뉴 펼쳐져 있을 시 초기화 해주기 */
        if(mob) initFn(idx);

        siteMap.classList.remove("on");

        /* 스크롤바, 스크롤기능 다시 추가하기 */
        document.body.classList.remove("scrollOff");
    }; //////////// onclick 이벤트 끝 /////////////////


} ///////////////////////////// commonLinkFn 함수 ///////////////////////////////



function doNotDf(){
    // console.log("a요소 금지 함수");
    
} //////////////////////////// doNotDf ///////////////////////////