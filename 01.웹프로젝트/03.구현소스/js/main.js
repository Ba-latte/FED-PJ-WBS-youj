// 서울미식주간 메인페이지 JS - main.js

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
        initFn(idx);

        siteMap.classList.remove("on");

        /* 스크롤바, 스크롤기능 다시 추가하기 */
        document.body.classList.remove("scrollOff");
    }; //////////// onclick 이벤트 끝 /////////////////

    /*********************** 주요프로그램 섹션의 스크롤 액션 ***********************/
    // 기능 : 주요 프로그램 섹션에 진입하기 전에는 이미지가 scale(0)이었다가, 스크롤되어 특정 위치 진입하면 scale(1)이 되어서 제자리에서 등장하도록 만들기
    // 이벤트 대상 - .pl
    const tg = document.querySelectorAll(".pl img");
    // console.log(pl);

    // 화면 높이값의 5분의4(4/5) 구하기
    const hv = (window.innerHeight / 5) * 4;
    // console.log("화면 높이값의 5분의 4 지점은?: ", hv);

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
        // // 현재스크롤 위치 이동값
        // let scTop = window.scrollY;
        // // 이동비율
        // let perSc = Math.floor((scTop / totalSc) * 100);
        // // console.log("위치:",scTop," | 비율:",perSc);

        // // 바크기 업데이트
        // bar.style.height = perSc + "%";

        indicFn();

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




    /*********************** 인디케이터 스크롤 액션 ***********************/
    // 기능 : 스크롤 위치에 따라서 인디케이터의 바가 채워진다

    // 스크롤과 위치표시바의 이동비율 계산을 위한 전체이동크기
    // let totalSc = document.body.clientHeight - window.innerHeight;
    let totalSc = document.body.scrollHeight - window.innerHeight;
    // 전체문서높이값 - 윈도우높이값 = 이동할 스크롤범위
    // console.log("스크롤범위",totalSc);

    // 인디케이터 박스 : .indicator
    const indicator = document.querySelector(".indicator");

    // 스크롤위치바 : .indicBar
    const bar = document.querySelector(".indicBar");

    function indicFn(){
        
        // 현재스크롤 위치 이동값
        let scTop = window.scrollY;
        // 이동비율
        let perSc = Math.floor((scTop / totalSc) * 100);
        // console.log("위치:",scTop," | 비율:",perSc);

        // 바크기 업데이트
        bar.style.width = perSc + "%";

    } /////////////////////////// indicFn 함수 끝 //////////////////////////////////




    /*********************** 셰프&바텐더 소개 섹션의 스크롤 액션 ***********************/
    // 기능 : 셰프&바텐더 소개 섹션에 진입하기 전에는 셰프 이미지가 translateX(110%)이었다가, 스크롤되어 특정 위치 진입하면 translateX(0%)이 되어서 아래쪽에서 등장하도록 만들기
    // 변경 대상 : .introList img들
    // 이벤트 종류 : 스크롤 이벤트
    // 이벤트 적용할 대상 : .CnBIntro .rside (rside박스 안에 .introList가 있음)
    const CnBIntroImgs = document.querySelectorAll(".introList img");
    const CnBIntroInRside = document.querySelector(".CnBIntro .rside");
    // console.log(CnBIntroImgs);

    // 화면 높이값의 10분의 9 지점 구하기
    const CnBIntro_hv = (window.innerHeight / 10) * 9;
    // console.log("화면 높이값의 10분의 9 지점은?: ", CnBIntro_hv);

    // 화면의 토탈 높이값 구하기
    const totalHv = window.innerHeight;
    // console.log("화면의 높이값: ", totalHv);

    // 등장액션 대상 위치값 리턴 함수 -> retVal에 담겨있음

    // 함수 만들기
    function introFn() {
        // console.log("스크롤 중!");

        CnBIntroImgs.forEach((ele) => {
            let eleVal = retVal(ele);
            // console.log(eleVal);

            // 구간 적용 여부 검사하기
            if (eleVal < CnBIntro_hv && eleVal > 0) {
                // console.log("작동!!");
                ele.classList.add("appear");
            }
        });
    }

    // 이벤트 세팅하기
    window.addEventListener("scroll", introFn);

    /*********************** 모바일버전에서 사이트맵 상위메뉴 클릭시 하위메뉴 등장 ***********************/
    // 이벤트 적용 대상 : .siteMap ul>li
    const gnb = document.querySelectorAll(".siteMap ul>li:has(.smenu)");
    // console.log(gnb);

    // 적용할 이벤트 : click 이벤트
    gnb.forEach((ele, idx) => {
        ele.querySelector("a").onclick = () => {
            // 📌모바일 버전이 아니라면 이 함수 적용 안되도록 리턴하기!
            if (!mob) return;

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
            


            // 구글 심볼 바꾸기
            const symbols = ele.querySelector("span");
            // symbols.innerText = lnb.clientHeight === 0 ? "expand_more" : "expand_less";
            symbols.innerText = lnb.clientHeight === 0 ? "expand_less" : "expand_more";

        }; ///////////// click 이벤트 끝 ///////////////
    }); /////////////// forEach() 끝 /////////////

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
        const symbols = document.querySelectorAll(".siteMap li span");
        // console.log("초기화할 심볼들: ", symbols);
        symbols.forEach(ele=>ele.innerText = "expand_more");

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

    function playFn(sort) {
        // console.log("어떤거 클릭했어?: ", sort);

        // 다음 버튼 제어
        if (sort === "next") {
            // 동영상 번호 변수 1씩 증가시키기
            vNum++;

            // 동영상 번호 변수의 한계값 체크하기 (10이 되면 0으로 돌아가기)
            if (vNum === 11) vNum = 0;

            // 동영상 인덱스 번호 바꿔서 출력하기
            screen.setAttribute("src", `https://www.youtube.com/embed/${videoObj[vNum].vID}`);

            // console.log(vNum);
        } ///////////// if : nextbtn 클릭한 경우 //////////////////
        else {
            if (vNum === 0) vNum = 11;

            vNum--;

            // console.log(vNum);

            screen.setAttribute("src", `https://www.youtube.com/embed/${videoObj[vNum].vID}`);
        } //////////////// else : prebtn 클릭한 경우 //////////////////////////
    } //////////////// playFn() 함수 끝 /////////////////////

    // 이벤트 적용하기
    prebtn.onclick = () => {
        playFn("prev");
    };
    nextbtn.onclick = () => {
        playFn("next");
    };

    /******************************* 동영상 썸네일 클릭시 해당 동영상으로 바뀌는 함수 *******************************/
    // 기능 : 동영상 목록에 있는 썸네일을 클릭하면, 해당 동영상으로 바뀐다
    // 이벤트 적용 대상 : . videoList li img들
    // 변경 대상 : .vArea iframe -> screen
    // 이벤트 종류 : 클릭 이벤트
    const thumbnailImg = document.querySelectorAll(".videoList li img");

    thumbnailImg.forEach((ele, idx) => {
        // console.log(ele);
        ele.onclick = () => {
            console.log(idx);

            vNum = idx + 1;
            // console.log(vNum);
            screen.setAttribute("src", `https://www.youtube.com/embed/${videoObj[vNum].vID}`);

            // 모든 대상에서 on클래스 빼기
            for (let x of thumbnailImg) x.classList.remove("on");

            // 클릭된 요소에만 on클래스 넣기
            ele.classList.add("on");
        };
    });

    /******************************* 동영상 썸네일 목록 아래의 좌/우 버튼 클릭시 썸네일 목록 이동되는 함수 *******************************/
    // 기능 : 썸네일 목록 아래의 이전/다음 버튼을 클릭하면, 리스트 박스 내의 썸네일이 한개씩 좌우로 이동된다
    // 이벤트 적용 대상 : .movebtn아래의 divd img들
    // 변경 대상 : .videoList박스 li img들
    // 이벤트 종류 : 클릭 이벤트
    const thumbnailbtns = document.querySelectorAll(".movebtn div img");
    // console.log(thumbnailbtns);
    let clickNum = 0;

    const vSlide = document.querySelector(".vSection .videoList ol");
    // 광클금지(1-금지,0-허용)
    let prot_vslide = 0;

    thumbnailbtns.forEach((ele, idx) => {
        ele.onclick = () => {
            // 광클금지 ///////////
            if (prot_vslide) return;
            prot_vslide = 1; //잠금
            setTimeout(() => {
                prot_vslide = 0; // 해제
            }, 500);

            // console.log("누가 버튼 클릭했어? : ", idx);
            // 오른쪽 버튼 클릭한 경우
            if (idx === 1) {
                vSlide.style.transition = `transform .5s ease-in-out`;
                vSlide.style.transform = `translateX(-20%)`;
                console.log("왼쪽 클릭했을때 숫자: ", clickNum);
                // 이동후 자르기
                setTimeout(() => {
                    let tg = vSlide.querySelectorAll("li");
                    vSlide.appendChild(tg[0]);
                    vSlide.style.transition = `none`;
                    vSlide.style.transform = `translateX(0%)`;
                }, 500);
            }
            // 왼쪽 버튼 클릭한 경우
            else {
                let tg = vSlide.querySelectorAll("li");
                vSlide.insertBefore(tg[tg.length-1],tg[0]);
                vSlide.style.transition = `none`;
                vSlide.style.transform = `translateX(-20%)`;

                // 코드실행차주기
                setTimeout(() => {
                    vSlide.style.transition = `transform .5s ease-in-out`;
                    vSlide.style.transform = `translateX(0%)`;
                }, 1);
                console.log("왼쪽 클릭했을때 숫자: ", clickNum);
                // 이동후 자르기
            }
            console.log("클릭 다 하고 넘어간 숫자는?: ", clickNum);

            // if(idx === 1){
            //     clickNum--;
            //     vSlide.style.transform = `translateX(${20 * clickNum}%)`;
            //     console.log("왼쪽 클릭했을때 숫자: ", clickNum);
            // }
            // // 왼쪽 버튼 클릭한 경우
            // else{
            //     clickNum++;
            //     vSlide.style.transform = `translateX(${20 * clickNum}%)`;
            //     console.log("오른쪽 클릭했을때 숫자: ", clickNum);
            // }
            // console.log("클릭 다 하고 넘어간 숫자는?: ", clickNum);
        };
    });





    /******************************* 가로로 스크롤 이동되는 함수 *******************************/
    // 기능 : 스크롤바를 내리면 화면이 가로로 움직인다
    // 적용 대상 : .tpg, .slidePg
    // 타겟박스 : .tpg
    const hScrollBx = document.querySelector(".tpg");
    const hScrollSlide = document.querySelector(".hScrollTgBx");
    const moveBx = hScrollSlide.querySelector("ul");
    // console.log(hScrollBx, hScrollSlide);

    // 이벤트 세팅하기
    window.addEventListener("scroll", hScrollFn);

    // getBoundingClientRect() 값을 리턴받기
    const retRectVal = x => x.getBoundingClientRect().top;
    
    function hScrollFn(){
        // 스크롤 위치값 확인
        // console.log(window.scrollY);
        let tgpos = retRectVal(hScrollBx);
        // console.log("바운딩값: ", tgpos);

        // 적용구간 설정하기 : 200이하 -3000px 이상!
        if(tgpos <= 0 && tgpos >= -3000){
            moveBx.style.left = tgpos + "px";
        }
        else if(tgpos > 0){
            moveBx.style.left = "0";
        }
    } //////////////// hScrollFn 끝 /////////////////

    
    /******************************* 지도 섹션 배경 상단의 svg 변경 함수 *******************************/
    // 기능 : 스크롤바(scrollY가 3066부터 4000까지...ㅠㅠ)가 특정 위치에 오면 지도 섹션의 배경 상단에 있는 svg의 scaleY속성이 0.1에서부터 1까지 변화함
    // 
    // 변경 대상 : .circleStart>svg
    const svgScale = document.querySelector(".circleStart>svg");
    const winH = window.innerHeight;
    // 이벤트 종류 : 스크롤 이벤트

    function svgChgFn(){
        // console.log("해당 요소의 top 위치값: ", svgScale.getBoundingClientRect().top + window.scrollY);
        // console.log("현재 스크롤바 위치값: ", window.scrollY);

        let chkPos = retVal(svgScale);

        if(chkPos < winH && chkPos > 0){
            console.log(chkPos);
            let ratio = 1-chkPos/winH;
            console.log(ratio);
            svgScale.style.transform = `scale(1,${ratio})`;

        }

    }
    window.addEventListener("scroll", svgChgFn);





}); ////////////////////////////////// 로딩 구역 끝 /////////////////////////////////////////////////////
