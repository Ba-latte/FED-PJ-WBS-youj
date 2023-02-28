// 서울미식주간 메인페이지 JS - main.js

////////////////////////////////////////// 로딩 구역 /////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", ()=>{
    console.log("로딩 완료");

    // a요소 클릭시 화면 맨 위로 튀는 기본값 적용 해제하기
    // document.querySelectorAll("a").preventDefault();
    // ->안돼
    // event.preventDefault();
    // ->안돼
    const atag = document.querySelectorAll("a");
    console.log(atag);
    const dntADft = ()=>{
        console.log("a 튀는거 막아줘 제발ㅠㅠ");
        event.preventDefault();
    };
    
    atag.onclick = dntADft;
    // 안돼ㅠ
    

    

    /*************************** 햄버거 버튼 클릭하면 사이트맵 화면이 오른쪽에서 등장하기 ***************************/
    // ⭐대상 선정
    // 이벤트 대상 - .hambtn
    const hambtn = document.querySelector(".hambtn");
    // 적용 대상 - .siteMap
    const siteMap = document.querySelector(".siteMap");
    // console.log(siteMap);


    // ⭐이벤트 세팅하기
    hambtn.onclick = ()=>{

        // a요소 클릭하면 맨위로 튀는 기본값 해제하기
        // event.preventDefault();
        // dntADft;
        
        siteMap.classList.add("on");
    }; ////////////// onclick 이벤트 끝 /////////////////



    
    /*********************** 닫기 버튼 클릭하면 사이트맵 화면이 오른쪽으로 들어가기 ***********************/
    // 이벤트 대상 - .close
    const closebtn = document.querySelector(".close img");
    // 적용 대상 - .siteMap
    
    // 이벤트 세팅하기
    closebtn.onclick = ()=>{

        // a요소 클릭하면 맨위로 튀는 기본값 해제하기
        event.preventDefault();

        siteMap.classList.remove("on");
    }; //////////// onclick 이벤트 끝 /////////////////

    /*********************** 주요프로그램 섹션의 스크롤 액션 ***********************/
    // 기능 : 주요 프로그램 섹션에 진입하기 전에는 이미지가 scale(0)이었다가, 스크롤되어 특정 위치 진입하면 scale(1)이 되어서 제자리에서 등장하도록 만들기
    // 이벤트 대상 - .pl
    const tg = document.querySelectorAll(".pl img");
    // console.log(pl);
    // 화면 높이값의 3분의2(2/3) 구하기
    const hv = window.innerHeight/5*4;
    // console.log(hv);



    // 등장액션 대상 위치값 리턴 함수
    const retVal = ele => ele.getBoundingClientRect().top;
    // console.log(retVal);

    // .on클래스를 넣을 함수 만들기
    const showIt = x => {
        // 대상 요소의 현재 스크롤 위치 구하기
        let xval = retVal(x);

        // 구간 적용 여부 검사하기
        if(xval < hv && xval > 0){
            // console.log("작동!!");
            x.classList.add("on");
        }
    }

    // 스크롤 액션 세팅하기
    window.addEventListener("scroll", ()=>{
        // pl들에 스크롤 액션 함수 적용하기
        for(let x of tg) showIt(x);


        // 현재 첫번째 이미지(tg변수)의 위치값을 tgpos변수에다 담기
        let tgpos = retVal(tg[0]);
        // console.log(tgpos);

        // if(tgpos < 기준점->hv!){
            // : 근데 이렇게 한계를 하나만 주지 않고, 구간으로 준다
            // 예) if(tgpos < hv && tgpos > 0){
            // : 이렇게 구간으로 잡아주는게 더 좋다
        if(tgpos < hv && tgpos > 0){
            // console.log("작동!!");

            // 위치값이 0이 되면 클래스 on을 줘서 등장하게 만들기
            tg[0].classList.add("on");
        }

    }); /////////////////////// 스크롤 액션 끝 /////////////////////////////////////

    








}); ////////////////////////////////// 로딩 구역 끝 /////////////////////////////////////////////////////

