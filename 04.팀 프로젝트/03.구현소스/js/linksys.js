/* 링크 연결 시스템 - linksys.js */

////////////////////////////////////// 로드 구역 ////////////////////////////////////////
window.addEventListener("DOMContentLoaded", linkFn);

function linkFn(){
    // 이벤트 대상 : .gnb a
    const gnb = document.querySelectorAll(".gnb a");
    // console.log(gnb);

    // 적용할 이벤트 : click 이벤트
    // 이벤트 적용하기
    for(let x of gnb){
        
        x.addEventListener("click", txtLoadFn);

        function txtLoadFn(){
            // 클릭된 a요소의 텍스트 읽어오기
            let atxt = x.innerText;
            // console.log("gnb 내부 a요소 텍스트: ", atxt);

            // 전달할 페이지에 Get 방식으로 데이터 전송하기 (url?키=값)
            // location.href = "earth.html?planet=" + encodeURIComponent(atxt);
            location.href = `${encodeURIComponent(atxt)}.html`;
            
        } /////////////////// txtLoadFn 함수 끝 ///////////////////////

    }; /////////////////// for of문 끝 //////////////////////


    

    // Get방식으로 넘어온 값 받기
    let pm = location.href;

    // 다른 방식으로 페이지에 접근할 경우 돌려보내기
    console.log("pm의 위치는?: ", pm.indexOf("?"));





} //////////////////// linkFn 함수 끝 ////////////////////////