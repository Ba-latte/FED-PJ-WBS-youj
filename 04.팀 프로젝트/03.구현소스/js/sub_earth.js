/* 서브페이지 : 지구 JS - sub_earth.js */

///////////////////////////////////////////////////// 로딩 구역 //////////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", ()=>{
    console.log("로딩 완료");

    // 대상 선정
    const figure = document.querySelectorAll(".cont figure>img");
    const highlighter = document.querySelectorAll(".pg5 #contTxt span");
    // console.log(highlighter);
    // 화면 높이값의 3분의2(2/3)지점
    const hv = window.innerHeight/3*2;
    console.log("화면 높이값의 3분의 2 지점 : ", hv);


    // 등장액션 대상 위치값 리턴하는 함수
    const retVal = ele => ele.getBoundingClientRect().top;



    /***************************************************
        함수명 :  highlighterFn
        기능 : 스크롤바가 특정 위치에 왔을 때 글자색 변경됨
    ***************************************************/
    const highlighterFn = x => {
        // x는 등장 요소

        // 대상 요소의 현재 스크롤 위치
        let xval = retVal(x);

        // 구간적용여부 검사
        if(xval < hv && xval >0){
            x.classList.add("on");
        } ////////////////// if 끝 //////////////////////
        else{
            x.classList.remove("on");
        }
    }; ///////////////////// highlighterFn 함수 끝 //////////////////////




    /*********************************************************
        함수명 : appearFn
        기능 : 스크롤바가 특정 위치에 왔을 때 글자가 왼쪽에서 등장함
    *********************************************************/
    const appearFn = x => {
        // x는 등장 요소
        
        // 대상 요소의 현재 스크롤 위치
        let xval = retVal(x);

        // 구간 적용 여부 검사
        if(xval < hv && xval > 0){
            x.classList.add("appear");
        }
        else{
            x.classList.remove("appear");
        }
    }; ///////////////// appearFn 함수 끝 ////////////////////




    /***************************************************
        함수명 :  expansionFn
        기능 : 스크롤바가 움직이면 이미지 크기 변경됨
    ***************************************************/
    const expansionFn = x => {
        // x는 등장 요소
        
        // 대상 요소의 현재 스크롤 위치
        let xval = retVal(x);

        if(xval > 0 && xval < window.innerHeight){
            x.classList.add("on");
        }
        else{
            x.classList.remove("on");
        }
    }; ///////////////////// expansionFn 함수 끝 //////////////////////




    ////////////////////// 🚀스크롤 이벤트 세팅 //////////////////////////////////
    window.addEventListener("scroll", ()=>{
        // console.log("스크롤중");
        
        // 스크롤 등장 요소의 개수만큼 for문 돌리기
        // for(let x of figure) appearanceFn(x);
        
        for(let x of highlighter) highlighterFn(x);


        for(let x of figure) expansionFn(x);

        const formationTit = document.querySelector(".formation .artit");
        const formationContTxt = document.querySelector(".formation .contTxt");
        
        appearFn(formationTit);
        appearFn(formationContTxt);

    }); /////////////////////// scroll 이벤트 끝 ///////////////////////








});
/////////////////////////////////////////////////// 로딩 구역 끝 ///////////////////////////////////////////////////////////