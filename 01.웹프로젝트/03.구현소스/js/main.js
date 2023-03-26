// 서울미식주간 메인페이지 JS - main.js



////////////////////////////////////////// 로딩 구역 /////////////////////////////////////////////////////////
window.addEventListener("DOMContentLoaded", () => {
    console.log("메인js - 로딩 완료");

    // 새로고침시 맨위로 위치설정!
    setTimeout(() => window.scrollTo(0, 0), 100);


    /*********************** 주요프로그램 섹션의 스크롤 액션 ***********************/
    // 기능 : 주요 프로그램 섹션에 진입하기 전에는 이미지가 scale(0)이었다가, 스크롤되어 특정 위치 진입하면 scale(1)이 되어서 제자리에서 등장하도록 만들기
    // 이벤트 대상 - .pl
    const tg = document.querySelectorAll(".pl img");
    // console.log(pl);

    // 화면 높이값의 5분의4(4/5) 구하기
    // const hv = (window.innerHeight / 10) * 9;
    const hv = window.innerHeight;
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


    /*********************** 2페이지 주요프로그램 소개 섹션의 li들 지그재그로 위치 변경하는 함수 ***********************/
    // 기능 : 윈도우 가로 사이즈가 1100px 이하가 되면, .programList(ul)의 li들이 세로 일렬 정렬에서 지그재그로 정렬을 바꾼다
    function zigzagFn(){
        const plLists = document.querySelectorAll(".programList li");
        // console.log(plLists);
        // console.log(plLists.item(1));
        if(window.innerWidth <= 1100){
            plLists.forEach((ele, idx)=>{
                if(idx % 2 === 0){
                    // ele.style.position="relative";
                    ele.style.transform="translateX(15%)";
                }
                else{
                    // ele.style.position="relative";
                    ele.style.transform="translateX(-15%)";
                }
            })
        }

    } ///////////////////// zigzagFn //////////////////////
    // 함수 호출
    zigzagFn();




    /*********************** 인디케이터 스크롤 액션 ***********************/
    // 기능 : 스크롤 위치에 따라서 인디케이터의 바가 채워진다
    const handleScrollIndicator = () => {
        const scrollIndicator = document.querySelector("#scroll-indicator");
        const maxHeight = document.body.scrollHeight - window.innerHeight;

        const widthPercentage = (window.scrollY / maxHeight) * 100;
        scrollIndicator.style.width = `${widthPercentage}%`;
    };

    // 이벤트 적용하기
    window.addEventListener("scroll", handleScrollIndicator);




    /******************************* 3페이지 지도 섹션의 가로로 스크롤 이동되는 함수 *******************************/
    // 기능 : 스크롤바를 내리면 화면이 가로로 움직인다
    // 적용 대상 : .tpg, .slidePg
    // 타겟박스 : .tpg
    const hScrollBx = document.querySelector(".tpg");
    const hScrollSlide = document.querySelector(".hScrollTgBx");
    const moveBx = hScrollSlide.querySelector("ul");
    // console.log(hScrollBx, hScrollSlide);

    // 이벤트 세팅하기
    if(!mob){
        window.addEventListener("scroll", hScrollFn);
    }

    // getBoundingClientRect() 값을 리턴받기
    const retRectVal = (x) => x.getBoundingClientRect().top;

    function hScrollFn() {
        // 스크롤 위치값 확인
        // console.log(window.scrollY);
        let tgpos = retRectVal(hScrollBx);
        // console.log("바운딩값: ", tgpos);

        // 적용구간 설정하기 : 200이하 -3000px 이상!
        if (tgpos <= 0 && tgpos >= -3000) {
            moveBx.style.left = tgpos + "px";
        } else if (tgpos > 0) {
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

    function svgChgFn() {
        // console.log("해당 요소의 top 위치값: ", svgScale.getBoundingClientRect().top + window.scrollY);
        // console.log("현재 스크롤바 위치값: ", window.scrollY);

        let chkPos = retVal(svgScale);

        if (chkPos < winH && chkPos > 0) {
            // console.log(chkPos);
            // 계산법 : 1 - 바운딩수 / 전체높이
            // 1~0까지 계산 되므로 반대수치는 1에서 빼면 된다!
            let ratio = 1 - chkPos / winH;
            // console.log(ratio);
            svgScale.style.transform = `scale(1,${ratio})`;
        }
    }
    // 이벤트 적용하기
    window.addEventListener("scroll", svgChgFn);





    /*********************** 셰프&바텐더 소개 섹션의 스크롤 액션 ***********************/
    // 기능 : 셰프&바텐더 소개 섹션에 진입하기 전에는 셰프 이미지가 translateX(110%)이었다가, 스크롤되어 특정 위치 진입하면 translateX(0%)이 되어서 왼쪽에서 등장하도록 만들기
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
                setTimeout(()=>{ele.setAttribute("data-ap", "1");}, 1000);
            }
        });
    }

    // 이벤트 세팅하기
    window.addEventListener("scroll", introFn);



    /******************************* 셰프&바텐더 소개 섹션의 셰프이미지 마우스오버 함수 *******************************/
    // 기능 : 클래스 on을 주어서! 셰프 이미지에 마우스오버하면 more 글씨가 나타나며 이미지가 조금 어두워진다!
    // 이벤트 대상 : .introList .stageBx>img
    // 이벤트 종류 : mouseenter, mouseleave 이벤트
    // 변경 대상 : .moreContMoveBx 
    // const CnBIntro_img = document.querySelectorAll(".introList .stageBx>img");
    const CnBIntro_img = document.querySelectorAll(".introList>ul>li>a");
    const CnBIntro_moveMorBx = document.querySelectorAll(".moreContMoveBx");
    
    // console.log(CnBIntro_moveMorBx);

    // 이벤트 함수 만들기 : 마우스엔터시
    function mouseEnterFn(ele, seq){
        // console.log("more 등장하게 만들기!", ele.querySelector("img").getAttribute("data-ap"));
        let tempSeq = seq;
        // console.log("tempSeq:", tempSeq);
        let img_data_ap = ele.querySelector("img");
        if(tempSeq === "5"){
            return;
        }
        else{
            // data-ap가 1이면, 가져온 순번에 맞는 .moreContMoveBx를 찾아서 거기에 클래스 .on을 부여하기 (0이면 부여하면 안됨!)
            if(img_data_ap.getAttribute("data-ap") === "1"){
                // console.log("data-ap값은?: ", ele.querySelector("img").getAttribute("data-ap"));
                CnBIntro_moveMorBx[tempSeq].classList.add("on");
            }

        }


    } ////////////////// mouseEnterFn 함수 ///////////////////////

    // 이벤트 함수 만들기 : 마우스리브시
    function mouseLeaveFn(ele, seq){
        // console.log("more 등장하게 만들기!", seq);
        let tempSeq = seq;
        // console.log("tempSeq:", tempSeq);

        // 가져온 순번에 맞는 .moreContMoveBx를 찾아서 클래스 .on 빼기
        CnBIntro_moveMorBx[tempSeq].classList.remove("on");

    } ////////////////// mouseLeaveFn 함수 ///////////////////////

    // 이벤트 적용하기
    // 맨처음 1초동안은 이미지가 왼쪽에서 오른쪽으로 등장하는데 시간이 걸리기 때문에, 1초가 지난 후부터 마우스오버 액션이 적용되면 좋겠음
    CnBIntro_img.forEach((ele, idx)=>{
        ele.addEventListener("mouseover", ()=>{mouseEnterFn(ele, idx)});
        ele.addEventListener("mouseout", ()=>{mouseLeaveFn(ele, idx)});
    }); //////////////////////// forEach //////////////////////////


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
            // console.log(idx);

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
                // console.log("왼쪽 클릭했을때 숫자: ", clickNum);
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
                vSlide.insertBefore(tg[tg.length - 1], tg[0]);
                vSlide.style.transition = `none`;
                vSlide.style.transform = `translateX(-20%)`;

                // 코드실행차주기
                setTimeout(() => {
                    vSlide.style.transition = `transform .5s ease-in-out`;
                    vSlide.style.transform = `translateX(0%)`;
                }, 1);
                // console.log("왼쪽 클릭했을때 숫자: ", clickNum);
                // 이동후 자르기
            }
            // console.log("클릭 다 하고 넘어간 숫자는?: ", clickNum);
        };
    });


    /////////////////////////////// 동영상 썸네일 리스트 드래그 함수 ///////////////////////////////
    // 기능 : 동영상 목록에 있는 썸네일을 드래그하면하면 썸네일이 하나씩 넘어가진다
    // 적용 대상 : 슬라이드 배너
    const slideBanner = document.querySelector("#slideBanner");
    const imgDfStop = document.querySelectorAll("slideBanner>li>a>img");
    // console.log(document.querySelector(".sb1"));
    
    // 이벤트 적용하기
    dragFn(slideBanner);
    

    

    /*****************************************
        함수명 : dragFn
        기능 : 다중 드래그 기능 적용
    *****************************************/
    function dragFn(obj){
        console.log("드래그!");
        // 대상 선정 : .videoList>ol (아이디가 slideBanner인 것!!)
        
        

        // 드래그 상태 변수 - true:드래그 중 / false:드래그 안함
        let drag = false;
        // 첫번째 위치 포인트 : first x, first y
        let firstX, firstY;
        // 마지막 위치 포인트 : last x, last y -> 맨 처음에는 마지막 위치 포인트가 없으므로 0이라 해줘야 함

        // 슬라이드의 처음 left값 세팅하기
        let leftX = obj.offsetLeft;
        let leftY = 0;
        
        // 움직일 때 위치 포인트 move x, move y
        let moveX, moveY;
        // 위치 이동한 차이값을 저장할 변수 result x, result y
        let resultX, resultY;
        
        // 함수 만들기
        // (1)드래그 상태가 true인 변수
        const dragT = ()=>{drag = true};
        // (2)드래그 상태가 false인 변수
        const dragF = ()=>{drag = false};
        // (3)드래그 작동할 때의 작동 함수
        const dragMove = ()=>{
            // console.log("드래그 상태", drag);

            // 드래그 상태일때만 실행하기
            if(drag){
                obj.style.transition = "none";
                console.log("왜안돼ㅠ");

                // 1.드래그한 상태에서 움직일 때의 위치값 : moveX,Y
                moveX = event.pageX;
                moveY = event.pageY;

                // 2.움직일 때의 위치값 - 처음위치값 = resultX,Y에 담기
                resultX = moveX - firstX;
                resultY = moveY - firstY;

                // 3.움직인 x,y값을 타겟 요소에 적용하기
                obj.style.transform = `translateX(-20%)`;
            } //////////////////// if : 드래그 /////////////////////////
        };
        // (4)첫번째 위치 포인트 세팅하는 함수 : 처음 찍었을 때 작동하는 것
        const firstPoint = ()=>{
            firstX = event.pageX;
            firstY = event.pageY;
        };
        // (5)마지막 위치 포인트 세팅하는 함수 : 클릭버튼에서 손 뗄 때 작동하는 것!
        const lastPoint = ()=>{
            leftX += resultX;
            leftY += resultY;
        };
        // 최종 이동 결과값인 resultX,Y값을 항상 대입연산해서 값을 업데이트 해줘야함!!!!

        // 이벤트 등록하기
        // 1.마우스 내려갈때 : 드래그 true + 첫번쨰 위치값 업데이트하기
        obj.addEventListener("mousedown", ()=>{
            // 드래그 true
            dragT();
            // 첫번째 위치값 업데이트
            firstPoint();

            event.preventDefault();

        });
        // 2.마우스 올라올 때 : 드래그 false + 마지막 위치값 업데이트하기
        obj.addEventListener("mouseup",()=>{
            // 드래그 false
            dragF();
            
            // 드래그 이동방향 판별하는 함수 호출하기
            whereDrag(obj);
        });
        
        // 3.마우스 움직일 때
        obj.addEventListener("mousemove", dragMove);
        // 4.마우스 벗어날 때
        obj.addEventListener("mouseleave", dragF);
        
    } //////////////////// dragFn 함수 /////////////////////////

    /************************************************************
        함수명 : goWhere
        기능 : 드래그시 왼쪽으로 갈 것인지, 오른쪽으로 갈 것인지 이동 방향을 판별해준다
        호출 : 드래그시 mouseup 이벤트 함수에서 호출한다
    ************************************************************/
    function whereDrag(obj){
        // 1.현재 드래그 대상의 left 위치값
        let tg_left = obj.offsetLeft;

        // 유동적 사이즈 변경에 따른 위치값 구하기
        let tg_point = obj.parentElement.clientHeight * 0.2;

        // 3.방향 판별하기 : 특정값을 더하거나 빼기
        // 3-1.왼쪽 방향으로 이동하기 = 오른쪽 버튼 클릭 기능과 동일함
        if(tg_left < tg_point - 50){
            console.log("왼쪽으로!");
            dragFn(1);
        }
        // 3-2.오른쪽 방향 이동하기 = 왼쪽 버튼 클릭 기능과 동일함
        else if(tg_left > tg_point + 50){
            console.log("오른쪽으로!");
            dragFn(0);
        }
        else{
            console.log("제자리로!");
            
            // 기준값 left로 다시 보내기
            obj.style.left = -tg_point + "px";

            // 트랜지션을 줘서 부드럽게 움직이게 만들기
            obj.style.transition = "left .2s ease-in-out";
        }
    }






    


    



    ////////////////////////// 화면 하단 오른쪽의 top버튼 링크 //////////////////////////
    /*********************************************************************
        함수명 : topLinkFn
        기능 : 화면 하단 오른쪽의 top버튼을 클릭하면 페이지 맨 위로 올라가기
    *********************************************************************/
    function topLinkFn(){
        const mainTopBtn = document.querySelector(".pageTopBtn");
        // console.log(mainTopBtn);

        mainTopBtn.addEventListener("click", ()=>{
            window.scrollTo(0,0);
        });

    } ///////////////////// topLinkFn 함수 끝 ///////////////////////////

    // 화면 하단 오른쪽의 top버튼 링크
    topLinkFn();




}); ////////////////////////////////// 로딩 구역 끝 /////////////////////////////////////////////////////
