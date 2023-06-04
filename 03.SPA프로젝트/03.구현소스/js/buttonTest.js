
$(()=>{
    console.log("버튼테스트 로딩완료");
    // [ 햄버거 버튼 클릭시 방울 svg 등장 이벤트 ] ///////////////////////////////
    $(".button--bubble").each(function () {
        var $circlesTopLeft = $(this).parent().find(".circle.top-left");
        var $circlesBottomRight = $(this).parent().find(".circle.bottom-right");
    
        var tl = new TimelineLite();
        var tl2 = new TimelineLite();
    
        var btTl = new TimelineLite({ paused: true });
    
        tl.to($circlesTopLeft, 1.2, { x: -10, y: -10, scaleY: 2, ease: SlowMo.ease.config(0.1, 0.7, false) });
        tl.to($circlesTopLeft.eq(0), 0.1, { scale: 0.2, x: "+=6", y: "-=2" });
        tl.to($circlesTopLeft.eq(1), 0.1, { scaleX: 1, scaleY: 0.8, x: "-=10", y: "-=7" }, "-=0.1");
        tl.to($circlesTopLeft.eq(2), 0.1, { scale: 0.2, x: "-=15", y: "+=6" }, "-=0.1");
        tl.to($circlesTopLeft.eq(0), 1, { scale: 0, x: "-=5", y: "-=15", opacity: 0 });
        tl.to($circlesTopLeft.eq(1), 1, { scaleX: 0.4, scaleY: 0.4, x: "-=10", y: "-=10", opacity: 0 }, "-=1");
        tl.to($circlesTopLeft.eq(2), 1, { scale: 0, x: "-=15", y: "+=5", opacity: 0 }, "-=1");
    
        var tlBt1 = new TimelineLite();
        var tlBt2 = new TimelineLite();
    
        tlBt1.set($circlesTopLeft, { x: 0, y: 0, rotation: -45 });
        tlBt1.add(tl);
    
        tl2.set($circlesBottomRight, { x: 0, y: 0 });
        tl2.to($circlesBottomRight, 1.1, { x: 15, y: 15, ease: SlowMo.ease.config(0.1, 0.7, false) });
        tl2.to($circlesBottomRight.eq(0), 0.1, { scale: 0.2, x: "-=6", y: "+=3" });
        tl2.to($circlesBottomRight.eq(1), 0.1, { scale: 0.8, x: "+=7", y: "+=3" }, "-=0.1");
        tl2.to($circlesBottomRight.eq(2), 0.1, { scale: 0.2, x: "+=15", y: "-=6" }, "-=0.2");
        tl2.to($circlesBottomRight.eq(0), 1, { scale: 0, x: "+=5", y: "+=15", opacity: 0 });
        tl2.to($circlesBottomRight.eq(1), 1, { scale: 0.4, x: "+=7", y: "+=7", opacity: 0 }, "-=1");
        tl2.to($circlesBottomRight.eq(2), 1, { scale: 0, x: "+=15", y: "-=5", opacity: 0 }, "-=1");
    
        tlBt2.set($circlesBottomRight, { x: 0, y: 0, rotation: 45 });
        tlBt2.add(tl2);
    
        btTl.add(tlBt1);
        btTl.to($(this).parent().find(".button.effect-button"), 0.8, { scaleY: 1.1 }, 0.1);
        btTl.add(tlBt2, 0.2);
        btTl.to(
            $(this).parent().find(".button.effect-button"),
            1.8,
            { scale: 1, ease: Elastic.easeOut.config(1.2, 0.4) },
            1.2
        );
    
        btTl.timeScale(2.6);


        $(this).stop().on("mouseenter", function () {
            btTl.restart();
        });
    }); ////////// [ 햄버거 버튼 클릭시 방울 svg 등장 이벤트 ] ///////////////////



    const nav_list = $(".nav ul li");
    const txt = nav_list.find("a");

    // [ 햄버거 버튼 클릭시 내비 박스 클립패스 활성화 애니메이션 ] /////////////////////////////
    const ham_btn = $(".button--bubble__container");
    const nav_bx = $("#nav");
    const cls_btn = $(".close");
    let xval;
    let yval;

    // 윈도우 리사이즈시 내비박스 위치 실시간 변경하기
    $(window).resize(function(){
        console.log("윈도우 리사이즈");
        positionFn(ham_btn, nav_bx);
    });

    // 햄버거버튼 클릭시 내비박스의 CSS 트랜지션 변화
    ham_btn.click(function(){
        console.log("햄버거버튼 클릭시!");
        xval = $(this).offset().left+20;
        yval = $(this).offset().top+20;

        nav_bx.css({
            clipPath: `circle(150% at ${xval}px ${yval}px)`,
            transition: "1s cubic-bezier(0.83, 0, 0.21, 1.33)",
        }); /////////// css //////////

        // li에 a의 높이값 주고 오버플로우 히든을 주고, a의 top값을 -100%로 해서 아래쪽에 숨긴다음 올라오게 하기...?

        // 일정시간 후 타이틀 등장 함수 호출
        tit_appearFn(nav_list, txt);

        // 마우스오버한 자신 제외 형제 요소의 투명도 흐리게 하는 함수 호출
        blurFn(txt);

    }); ////////////////// click /////////////////////

    // 닫기버튼 클릭시 내비박스의 CSS 트랜지션 변화
    cls_btn.click(function(){
        console.log("닫기버튼 클릭시!");
        xval = ham_btn.offset().left+20;
        yval = ham_btn.offset().top+20;

        nav_bx.css({
            clipPath: `circle(0% at ${xval}px ${yval}px)`,
        }); /////////// css //////////
    }); /////////////////// click //////////////////////
    




}); ////////////////////////////// jQB ///////////////////////////////////////


// [ 햄버거 버튼의 x,y위치값 구하기 ]
function positionFn(ham, nav){
    // 햄버거 버튼의 x,y위치값 구하기 : 내비박스 클립패스 시작 위치를 정하기 위함
    xval = ham.offset().left+20;
    yval = ham.offset().top+20;
    console.log("햄버거버튼 x값 : ", xval);
    console.log("햄버거버튼 y값 : ", yval);

    // 내비박스 클립패스 초기 설정
    nav.css({
        clipPath: `circle(0% at ${xval}px ${yval}px)`,
    });
} ////////////////// positionFn 함수 ////////////////////


// [ 일정시간 후 타이틀 등장 함수 ]
const tit_appearFn = function(bx, lt){
    console.log("타이틀 등장 함수");

    // 대상 선정
    const tit = bx;
    // const letter = lt;
    const hval = bx.height();

    // 겉박스에 타이틀요소 높이값 + 자식요소 숨기기 CSS 부여
    tit.css({
        height: hval,
        overflow: "hidden",
    });
    // 글자 요소에 por, top 위치값 CSS 부여
    lt.css({
        position: "relative",
        top: "100%",
    });

    // 시차를 두고 애니메이션 발생하게 만들기
    setTimeout(() => {
        // .tit 요소에 애니메이션 부여
        lt.animate({
            top: "0%"
        }, 800);
    }, 400);

}; /////////////////////// tit_appearFn 함수 ///////////////////////


// [ 마우스오버한 자신 제외 형제 요소의 투명도 흐리게 하기 ]
const blurFn = function(ele){

    ele.hover(
        // 마우스오버시
        function(){
            $(this).parent().siblings().find("a").stop().animate({
                opacity: "0.5"
            }, 400);
        },
        // 마우스아웃시
        function(){
            $(this).parent().siblings().find("a").stop().animate({
                opacity: "1"
            }, 400);
        }
    );
}; ///////////////////// blurFn 함수 /////////////////////
