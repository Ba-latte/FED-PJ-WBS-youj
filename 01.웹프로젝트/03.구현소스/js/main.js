// 서울미식주간 메인페이지 JS - main.js

////////////////////////////////////////// 로딩 구역 /////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", ()=>{
    console.log("로딩 완료");

    // a요소 클릭시 화면 맨 위로 튀는 기본값 적용 해제하기
    // document.querySelectorAll("a").preventDefault();
    // event.preventDefault();
    

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
        event.preventDefault();
        
        siteMap.classList.add("on");
    }; ////////////// onclick 이벤트 끝 /////////////////



    
    /*********************** 닫기 버튼 클릭하면 사이트맵 화면이 오른쪽으로 들어가기 ***********************/
    // 이벤트 대상 - .close
    const close = document.querySelector(".close");
    // 적용 대상 - .siteMap
    
    // 이벤트 세팅하기
    close.onclick = ()=>{

        // a요소 클릭하면 맨위로 튀는 기본값 해제하기
        event.preventDefault();

        siteMap.classList.remove("on");
    }; //////////// onclick 이벤트 끝 /////////////////












}); ////////////////////////////////// 로딩 구역 끝 /////////////////////////////////////////////////////

