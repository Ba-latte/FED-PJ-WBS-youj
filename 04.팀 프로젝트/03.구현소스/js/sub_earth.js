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




    // 🚀스크롤 이벤트 세팅
    window.addEventListener("scroll", ()=>{
        // console.log("스크롤중");
        
        // 스크롤 등장 요소의 개수만큼 for문 돌리기
        // for(let x of figure) appearanceFn(x);
        
        for(let x of highlighter) highlighterFn(x);


        for(let x of figure) expansionFn(x);

    }); /////////////////////// scroll 이벤트 끝 ///////////////////////





    // 2페이지 박스에 마우스가 올라가서 움직이면 마우스 따라다니는 동그라미 만들기
    // 1.대상선정
    // 1-1.움직일 대상 : .move-mouse-pointer
    const move_mouse_pointer = document.querySelector(".move-mouse-pointer");
    // 1-2.마우스가 올라갔을 때의 대상 : .pg2
    const pg2 = document.querySelector(".pg2");
    // 1-3.동그라미와 마우스포인터 간 갭 조정
    let gap = move_mouse_pointer.clientWidth / 2;


    console.log("대상 선정: ", move_mouse_pointer);



    // 2.이벤트 적용 : mousemove 이벤트
    pg2.onmousemove = () => {
        event.stopPropagation();

        // 마우스 포인터 위치 알아내기
        // console.log("x: ", event.clientX, "\n y: ", event.clientY);

        // 위치값 보정하기 (gap은 move_mouse_pointer 크기의 절반임!)
        let posX = event.offsetX - gap;
        let posY = event.offsetY - gap;

        // move_mouse_pointer에게 위치값에 따라 이동하도록 세팅하기 (move_mouse_pointer의 중앙위치 보정)
        move_mouse_pointer.style.top = posY + "px";
        move_mouse_pointer.style.left = posX + "px";
    }; //////////////////// mousemove 이벤트 함수 끝 /////////////////////

    // pg2영역 바깥으로 나가면 사라지고 들어오면 나타나게 하기
    pg2.onmouseenter = ()=>{move_mouse_pointer.style.display = "block";};



});
/////////////////////////////////////////////////// 로딩 구역 끝 ///////////////////////////////////////////////////////////