
$(()=>{
    console.log("버튼테스트 로딩완료");

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
    });





    // [ 햄버거 버튼 클릭시 내비 박스 클립패스 활성화 애니메이션 ] /////////////////////////////
    const ham_btn = $(".button--bubble__container");
    const nav_bx = $("#nav");
    const cls_btn = $(".close");

    // 햄버거 버튼의 x,y위치값 구하기 : 내비박스 클립패스 시작 위치를 정하기 위함
    let xval = ham_btn.offset().left+20;
    let yval = ham_btn.offset().top+20;
    console.log("햄버거버튼 x값 : ", xval);
    console.log("햄버거버튼 y값 : ", yval);

    // 내비박스 클립패스 초기 설정
    nav_bx.css({
        clipPath: `circle(10px at ${xval}px ${yval}px)`,
    });
    
    // 햄버거버튼 클릭시 내비박스의 CSS 트랜지션 변화
    ham_btn.click(function(){
        console.log("햄버거버튼 클릭시!");
        nav_bx.css({
            clipPath: `circle(150% at ${xval}px ${yval}px)`,
            transition: "1s",
        }); /////////// css //////////
    }); ////////////////// click /////////////////////
    
    // 닫기버튼 클릭시 내비박스의 CSS 트랜지션 변화
    cls_btn.click(function(){
        console.log("닫기버튼 클릭시!");
        nav_bx.css({
            clipPath: `circle(10px at ${xval}px ${yval}px)`,
        }); /////////// css //////////
    }); /////////////////// click //////////////////////
});
