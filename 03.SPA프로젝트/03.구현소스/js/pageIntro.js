// 페이지 소개 모듈 JS

////////////// jQB ///////////////
$(()=>{
    console.log("페이지 소개 모듈 로딩 완료");

    




    // 시간차를 두고 타이틀 등장 함수 호출
    setTimeout(tit_appearFn, 500);
}); ///////////////// jQB ////////////////////




// [ 일정시간 후 타이틀 등장 함수 ]
const tit_appearFn = function(){
    console.log("타이틀 등장 함수");

    // 대상 선정
    const tit = $(".tit");
    const letter = $(".letter");
    const hval = $(".tit").height();

    // 겉박스에 타이틀요소 높이값 부여
    tit.css({height: hval});
    console.log(hval);

    // .tit 요소에 애니메이션 부여
    letter.animate({
        top: "0%"
    }, 1500, "easeOutExpo");

}; /////////////////////// tit_appearFn 함수 ///////////////////////

