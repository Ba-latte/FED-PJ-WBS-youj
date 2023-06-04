// 섹션 소개 모듈 JS

window.addEventListener("DOMContentLoaded", ()=>{
    console.log("섹션 소개 모듈 로딩 완료");
    
    const bx = $(".name>span");
    const lt = $(".letter");

    // setTimeout(function(){
    //     tit_appearFn(bx, lt);
    // }, 400);

    AOS.init();
});

// [ 일정시간 후 타이틀 등장 함수 ]
const tit_appearFn = function(bx, lt){
    console.log("타이틀 등장 함수");

    // 대상 선정
    const tit = bx;
    // const letter = lt;
    const hval = bx.height();

    // 겉박스에 타이틀요소 높이값 부여
    tit.css({height: hval});


    // .tit 요소에 애니메이션 부여
    lt.animate({
        top: "0%"
    }, 1500, "easeOutExpo");

}; /////////////////////// tit_appearFn 함수 ///////////////////////