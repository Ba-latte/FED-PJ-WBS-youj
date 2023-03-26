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
    console.log("공통 모듈js - 로딩 완료");


    /************************* a요소 클릭시 화면 맨 위로 튀는 기본값 적용 해제하기 *************************/
    // 대상선정 : 모든 a요소
    const atag = document.querySelectorAll("a");
    for (let x of atag) {
        // console.log(x);
        x.onclick = (e) => {
            e.preventDefault();
        };
    } ///////////// for of 끝 ////////////////



    /*************************** 햄버거 버튼 클릭하면 사이트맵 화면이 오른쪽에서 등장하기 ***************************/
    // ⭐대상 선정
    // 이벤트 대상 - .hambtn
    const hambtn = document.querySelector(".hambtn");
    // 적용 대상 - .siteMap
    const siteMap = document.querySelector(".siteMap");
    // console.log(hambtn);
    const test1 = siteMap.querySelectorAll(".smenu a");
    // ⭐이벤트 세팅하기
    hambtn.onclick = () => {
        siteMap.classList.add("on");

        /* 스크롤바, 스크롤기능 없애기 */
        document.body.classList.add("scrollOff");

        // 사이트맵 타이틀 글자 등장 액션 주기 (모바일일 때에는 액션 기능 없애기)
        // if(!mob){comingUpFn();};
        
        // 사이트맵 상위메뉴 글자 등장 액션 주기(DT든 모바일이든 상관 없음)
        rexidFn(siteMapGnbBx);
        
        
        rexidFn(test1);
        
        rexidFn(document.querySelector(".siteMap>div>h2"));
        
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


    /*********************** 사이트맵 화면 등장하고 나서 글자 등장 이벤트 함수 ***********************/
    // 기능 : 사이트맵 화면이 나타나고 나서 메뉴가 아래쪽에서 등장하기
    const siteMapGnbBx = document.querySelectorAll(".siteMapGnbBx>ul>li>a");

    function rexidFn(obj){
        console.log(obj.length);
        let hcode = "";

        for(let i = 0; i < obj.length; i++){
            
        }

        obj.forEach((ele)=>{
            // siteMapGnbBx.forEach((ele)=>{
            let tempHTML = ele.innerHTML;

            hcode = `<span class="rexid">${tempHTML}</span>`;
            ele.innerHTML = hcode;
            });
            setTimeout(()=>{
                const upAni = document.querySelectorAll(".rexid");
                for(let x of upAni){ x.classList.add("up")};
            }, 700);

        // // 모바일 버전일 때
        // if(mob){
        //     obj.forEach((ele)=>{
        //     // siteMapGnbBx.forEach((ele)=>{
        //         let tempHTML = ele.innerHTML;
        //         console.log(tempHTML)
    
        //         hcode = `<span class="rexid">${tempHTML}</span>`;
        //         ele.innerHTML = hcode;
        //     });
    
        //     setTimeout(()=>{
        //         const upAni = document.querySelectorAll(".rexid");
        //         for(let x of upAni){ x.classList.add("up")};
        //     }, 700);
        // }
        // // 모바일 버전이 아닐 때
        // else{
        //     obj.forEach((ele)=>{
        //     // siteMapGnbBx.forEach((ele)=>{
        //     let tempHTML = ele.innerHTML;

        //     hcode = `<span class="rexid">${tempHTML}</span>`;
        //     ele.innerHTML = hcode;
        //     });
        //     setTimeout(()=>{
        //         const upAni = document.querySelectorAll(".rexid");
        //         for(let x of upAni){ x.classList.add("up")};
        //     }, 700);
        // }
        
    } //////////////////////// rexidFn 함수 끝 /////////////////////////


    function comingUpFn(){
        const sateMapTit = document.querySelector(".siteMap h2>span");
        // sateMapTit.parentElement.style.overflow = "hidden";
        sateMapTit.classList.add("rexid");

        setTimeout(()=>{
            sateMapTit.classList.add("up");
        }, 500)
    } ///////////////////////////// comingUpFn //////////////////////////
    

    


    /*********************** 모바일버전에서 사이트맵 상위메뉴 클릭시 하위메뉴 등장 ***********************/
    // 이벤트 적용 대상 : .siteMap ul>li
    const gnb = document.querySelectorAll(".siteMap ul>li:has(.smenu)");
    // console.log(gnb);

    // 적용할 이벤트 : click 이벤트
    
    // 📢📢모바일 버전일 때만!!! 상위메뉴 클릭하면 하위메뉴 등장 기능이 먹혀야 함
    function topMenuClickFn(){
        gnb.forEach((ele, idx) => {
            ele.querySelector("a").onclick = () => {
                // 0.초기화 함수 호출
                initFn(idx);
    
                // 하위메뉴 변수
                const lnb = ele.querySelector(".smenu");
    
                // 높이값 가져오기
                let heightValue = ele.querySelector(".smenu ol").clientHeight;
    
                // console.log("높이값: ", heightValue);
    
                // console.log(lnb.clientHeight);
    
                lnb.style.height = (lnb.clientHeight === 0 ? heightValue : 0) + "px";
                lnb.style.opacity = lnb.clientHeight === 0 ? 1 : 0;
    
                // 클릭할 때마다 구글 심볼 바꾸기
                const symbols = ele.querySelector(".siteMapGnbBx>ul>li .lnbMoreIcon");
                symbols.innerHTML = lnb.clientHeight === 0 ? "expand_less" : "expand_more";
            }; ///////////// click 이벤트 끝 ///////////////
        }); /////////////// forEach() 끝 /////////////
    } ////////////////////////// topMenuClickFn  함수 끝 ////////////////////////////

    // 모바일 버전일때만 위의 함수 실행하기
    if(mob===1){
        topMenuClickFn();
    }
    // 📢📢 DT 버전일떄 상위메뉴 클릭해도 무반응


    /******************************* 사이트맵 클릭 초기화 함수 *******************************/
    function initFn(seq) {
        // 호출확인
        // console.log("초기화 함수: ", seq);

        // 모든 서브메뉴 높이값 0 만들기
        const smenu = document.querySelectorAll(".siteMap ul li .smenu");
        // console.log("smenu: ", smenu);

        smenu.forEach((ele, idx) => {
            if (idx === seq) return;
            // console.log("lnb 순번: ", idx);

            // 높이값 0 만들기
            ele.style.height = 0;
            // 투명도 0 만들기
            ele.style.opacity = 0;
        }); ///////////////// forEach() 끝 ////////////////////

        // 모든 심볼 innerText의 내용을 expand_more라고 바꾸기
        const symbols = document.querySelectorAll(".siteMapGnbBx>ul>li .lnbMoreIcon");
        // console.log("초기화할 심볼들: ", symbols);
        symbols.forEach((ele) => (ele.innerText = "expand_more"));
    } //////////////////// initFn 함수 끝 //////////////////////



    /******************************* 사이트맵 섹션의 gnb상위메뉴 li안에서 마우스 따라다니는 박스 함수 *******************************/
    // 기능 : 처음엔 안보이다가 ul박스 안에 마우스가 들어가면 .moveGnbIndicBx박스가 마우스를 따라다닌다!
    // 변경 대상 : .moveGnbIndicBx
    const moveGnbIndic = document.querySelector(".moveGnbIndicBx");
    // 이벤트 종류 : mouseenter 이벤트, mouseleave 이벤트
    // 이벤트 적용 대상 : .siteMapGnbBx li
    const tgInSiteMap = document.querySelectorAll(".siteMapGnbBx>ul>li");
    // console.log(moveGnbIndic);

    // 이벤트 설정하기
    // 1.마우스가 들어오면 박스가 따라다니게 만들기
    tgInSiteMap.forEach((ele)=>{
        let tg_a = ele.querySelector("a");
        ele.onmouseenter = (e)=>{
            if(!mob){
                // console.log("마우스 올렸어!");
                // 정보 알아내기
                // 1.left 위치값
                let eLeft = tg_a.offsetLeft;
                // 2.width값
                // let eWidth = ele.querySelector("a").offsetWidth;
                let eWidth = tg_a.offsetWidth;
                // console.log(eLeft);
                // console.log(ele.querySelector("a").offsetWidth);
    
                // 움직이는 배경박스 스타일값 변경하기
                moveGnbIndic.style.left = (eLeft-10) + "px";
                moveGnbIndic.style.width = eWidth + "px";
                moveGnbIndic.style.opacity = 1;
    
                // a요소의 글자색 변경하기
                // tg_a.style.color = "#fff";
                // tg_a.style.transitionDelay = ".25s";
            } //////////////// if : !mob //////////////////
        }; ////////////////// mouseenter ////////////////////////
        // 2.마우스가 나갈때 투명도를 0으로 바꿔서 박스를 사라지게 만들기
        ele.onmouseleave = e => {
            if(!mob){
                moveGnbIndic.style.opacity = 0;
                
                // a요소의 글자색 변경하기
                // tg_a.style.color = "#555";
            } ////////////// if : !mob //////////////////////
        }; /////////////////// mouseleave /////////////////////
    }); /////////////// forEach /////////////////////
    



} ///////////////////////////// commonLinkFn 함수 ///////////////////////////////

