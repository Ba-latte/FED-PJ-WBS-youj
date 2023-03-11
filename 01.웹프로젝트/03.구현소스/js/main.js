// 서울미식주간 메인페이지 JS - main.js



// 모바일 상태값
let mob = 0; // 1모바일
const chgMob = () => {
    if (window.innerWidth < 1100) mob = 1;
    else mob = 0;

    if(!mob){
        document.querySelectorAll(".smenu").forEach(ele=>ele.style="");
    }

    // console.log("in모바일:", mob);
}; ////// chgMob //////////

// 최초 호출하기
chgMob();

// console.log("모바일:", mob);

// 사이즈 변경 이벤트 실행시 chgMob 함수 실행!
window.addEventListener("resize", chgMob);

////////////////////////////////////////// 로딩 구역 /////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
    console.log("메인js - 로딩 완료");

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
    // console.log(siteMap);

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
        /* 사이트맵 하위메뉴 펼쳐져 있을 시 초기화 해주기 */
        // initFn(idx);


        siteMap.classList.remove("on");

        /* 스크롤바, 스크롤기능 다시 추가하기 */
        document.body.classList.remove("scrollOff");
    }; //////////// onclick 이벤트 끝 /////////////////






    /*********************** 주요프로그램 섹션의 스크롤 액션 ***********************/
    // 기능 : 주요 프로그램 섹션에 진입하기 전에는 이미지가 scale(0)이었다가, 스크롤되어 특정 위치 진입하면 scale(1)이 되어서 제자리에서 등장하도록 만들기
    // 이벤트 대상 - .pl
    const tg = document.querySelectorAll(".pl img");
    // console.log(pl);
    // 화면 높이값의 3분의2(2/3) 구하기
    const hv = (window.innerHeight / 5) * 4;
    // console.log(hv);

    // 등장액션 대상 위치값 리턴 함수
    const retVal = (ele) => ele.getBoundingClientRect().top;
    // console.log(retVal);

    // .on클래스를 넣을 함수 만들기
    const showIt = (x) => {
        // 대상 요소의 현재 스크롤 위치 구하기
        let xval = retVal(x);

        // 구간 적용 여부 검사하기
        if (xval < hv && xval > 0) {
            // console.log("작동!!");
            x.classList.add("on");
        }
    };

    // 스크롤 액션 세팅하기
    window.addEventListener("scroll", () => {
        // pl들에 스크롤 액션 함수 적용하기
        for (let x of tg) showIt(x);

        // 현재 첫번째 이미지(tg변수)의 위치값을 tgpos변수에다 담기
        let tgpos = retVal(tg[0]);
        // console.log(tgpos);

        // if(tgpos < 기준점->hv!){
        // : 근데 이렇게 한계를 하나만 주지 않고, 구간으로 준다
        // 예) if(tgpos < hv && tgpos > 0){
        // : 이렇게 구간으로 잡아주는게 더 좋다
        if (tgpos < hv && tgpos > 0) {
            // console.log("작동!!");

            // 위치값이 0이 되면 클래스 on을 줘서 등장하게 만들기
            tg[0].classList.add("on");
        }
    }); /////////////////////// 스크롤 액션 끝 /////////////////////////////////////






    /*********************** 모바일버전에서 사이트맵 상위메뉴 클릭시 하위메뉴 등장 ***********************/
    // 이벤트 적용 대상 : .siteMap ul>li
    const gnb = document.querySelectorAll(".siteMap ul>li:has(.smenu)");
    // console.log(gnb);

    // 적용할 이벤트 : click 이벤트
    gnb.forEach((ele, idx) => {
        ele.querySelector("a").onclick = () => {
            // 📌모바일 버전이 아니라면 이 함수 적용 안되도록 리턴하기!
            if(!mob)return;

            // 0.초기화 함수 호출
            initFn(idx);

            // 하위메뉴 변수
            const lnb = ele.querySelector(".smenu");

            // 높이값 가져오기
            let heightValue = ele.querySelector(".smenu ol").clientHeight;

            console.log("높이값: ", heightValue);

            // console.log(lnb.clientHeight);

            lnb.style.height = (lnb.clientHeight === 0 ? heightValue : 0) + "px";
            lnb.style.opacity = lnb.clientHeight === 0 ? 1 : 0;
            // 구글 심볼 바꾸기
            const symbols = ele.querySelector("span");
            symbols.innerText = lnb.clientHeight === 0 ? "expand_more" : "expand_less";

            //
        }; ///////////// click 이벤트 끝 ///////////////
    }); /////////////// forEach() 끝 /////////////







    /******************************* 사이트맵 클릭 초기화 함수 *******************************/
    function initFn(seq) {
        // 호출확인
        console.log("초기화 함수: ", seq);

        // 모든 서브메뉴 높이값 0 만들기
        const smenu = document.querySelectorAll(".siteMap ul li .smenu");
        console.log("smenu: ", smenu);

        smenu.forEach((ele, idx) => {
            if (idx === seq) return;
            // console.log("lnb 순번: ", idx);

            // 높이값 0 만들기
            ele.style.height = 0;
            // 투명도 0 만들기
            ele.style.opacity = 0;
        }); ///////////////// forEach() 끝 ////////////////////
    } //////////////////// initFn 함수 끝 //////////////////////





    /******************************* 동영상 좌/우 버튼 클릭시 동영상 넘어가는 함수 *******************************/
    // 기능 : 좌/우 버튼 클릭하면 동영상 영상이 바뀜
    // 이벤트 적용 대상 : .prebtn img, .nextbtn img
    // 변경 대상 : .vArea iframe
    // 이벤트 종류 : click 이벤트
    const prebtn = document.querySelector(".vArea .prebtn img");
    const nextbtn = document.querySelector(".vArea .nextbtn img");
    const screen = document.querySelector(".vArea iframe");
    // 동영상 번호 변수
    let vNum = 0;
    
    function playFn(sort){
        // console.log("어떤거 클릭했어?: ", sort);

        // 다음 버튼 제어
        if(sort === "next"){
            // 동영상 번호 변수 1씩 증가시키기
            vNum++;
            
            // 동영상 번호 변수의 한계값 체크하기 (10이 되면 0으로 돌아가기)
            if(vNum === 11) vNum = 0;

            // 동영상 인덱스 번호 바꿔서 출력하기
            screen.setAttribute("src", `https://www.youtube.com/embed/${videoObj[vNum].vID}`);
            
            // console.log(vNum);
            
        } ///////////// if : nextbtn 클릭한 경우 //////////////////
        else{
            if(vNum === 0) vNum = 11;
            
            vNum--;

            // console.log(vNum);

            screen.setAttribute("src", `https://www.youtube.com/embed/${videoObj[vNum].vID}`);

        } //////////////// else : prebtn 클릭한 경우 //////////////////////////
        
    } //////////////// playFn() 함수 끝 /////////////////////

    // 이벤트 적용하기
    prebtn.onclick = ()=>{playFn("prev")};
    nextbtn.onclick = ()=>{playFn("next")};




    /******************************* 동영상 썸네일 클릭시 해당 동영상으로 바뀌는 함수 *******************************/
    // 기능 : 동영상 목록에 있는 썸네일을 클릭하면, 해당 동영상으로 바뀐다
    // 이벤트 적용 대상 : . videoList li img들
    // 변경 대상 : .vArea iframe -> screen
    // 이벤트 종류 : 클릭 이벤트
    const thumbnailImg = document.querySelectorAll(".videoList li img");


    thumbnailImg.forEach((ele, idx)=>{
        // console.log(ele);
        ele.onclick=()=>{
            console.log(idx);
            
            vNum = idx + 1;
            // console.log(vNum);
            screen.setAttribute("src", `https://www.youtube.com/embed/${videoObj[vNum].vID}`);
            
            // 모든 대상에서 on클래스 빼기
            for(let x of thumbnailImg) x.classList.remove("on");

            // 클릭된 요소에만 on클래스 넣기
            ele.classList.add("on");



        };
    });
    





    /******************************* 동영상 썸네일 목록 아래의 좌/우 버튼 클릭시 썸네일 목록 이동되는 함수 *******************************/
    // 기능 : 썸네일 목록 아래의 이전/다음 버튼을 클릭하면, 리스트 박스 내의 썸네일이 한개씩 좌우로 이동된다
    // 이벤트 적용 대상 : .movebtn아래의 .prebtn img, .nextbtn img
    // 변경 대상 : .videoList박스 li img들
    // 이벤트 종류 : 클릭 이벤트
    

}); ////////////////////////////////// 로딩 구역 끝 /////////////////////////////////////////////////////
