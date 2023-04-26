/* 불가리 PJ 공통 js - common.js */

/////////////////////////////////// jQB //////////////////////////////////////////
$(()=>{
    console.log("common.js 로딩 완료!");

    /* 🌈변수 모음🌈 */
    /* 모바일 버전) 햄버거 버튼 */
    const mob_ham_btn = $("#top>.mob.top .ham_btn");
    /* 모바일 버전) gnb메뉴 전체 박스 */
    const mob_gnb_menu = $("#top>.mob .gnb");
    /* 모바일 버전) gnb메뉴 아래에 있는 닫기 버튼 */
    const mob_close_btn = $("#top>.mob>.gnb .close");
    /* 모바일 버전) 상단 영역에 있는 검색 버튼 */
    const mob_search_btn = $("#top>.mob .search_btn");
    /* 메인페이지 - top버튼 박스 */
    const main_top_btn = $("#cont .top_btn_bx");
    /* 모바일 버전) 상단영역의 header태그 */
    const header_section = $(".mob.top");
    // console.log(main_top_btn);

    const my = $(".mob .entire.list>li");
    console.log("나야", my);
    my.click(function(){
        console.log("클릭했어?");
        
        const mob_lnb_menu = $(this).find(".lnb");

        if(mob_lnb_menu.hasClass("on")){
            mob_lnb_menu.removeClass("on");
        }
        else{
            mob_lnb_menu.addClass("on");
        }
    })


    /* 모바일 버전) 햄버거 버튼 클릭하면 gnb메뉴박스 보이고 상단영역 안보이게 만들기 */
    mob_ham_btn.click(function(e){
        e.preventDefault();

        $(this).parents(".mob.top").hide();
        mob_gnb_menu.addClass("on");
        $("html, body").css({overflowY: "hidden"});
    });

    /* 모바일 버전) 닫기 버튼 클릭하면 gnb메뉴박스가 닫히고 상단영역 보이게 만들기 */
    mob_close_btn.click(function(){
        mob_gnb_menu.removeClass("on");
        mob_ham_btn.parents(".mob.top").show();
        $("html, body").css({overflowY: "visible"});
    })

    /* 모바일 버전) 상단영역에 있는 검색버튼 클릭하면 검색박스 나타나게 만들기 */
    mob_search_btn.click(function(){
        console.log("야!");
        $(this).parents(".lmenu").find(".search.wrap")
        .toggle();
    })

    /* 상단으로 향하는 top버튼 클릭시 맨위로 이동하기 */
    main_top_btn.click(function(){
        $("html, body").animate({scrollTop: 0 }, 'slow');
    });

    /* 모바일 버전) 스크롤 내리면 상단 영역 박스의 포지션이 fixed로 바뀌어 상단에 고정되게 하기 */
    $(window).scroll(function(){
        let window_scl_top = $(document).scrollTop();
        // console.log(window_scl_top);

        /* 상단영역 박스의 높이값은 80px인데, 부드럽게 변화하는 모습을 보이기 위해서 기준값을 20으로 잡음 */
        if(window_scl_top > 20){
            header_section.addClass("fixed");
        }
        else if(window_scl_top < 20){
            header_section.removeClass("fixed");
        }
    })













    /* 메인 페이지 섹션2 추천 제품 - 스와이퍼 */
    let test1 = new Swiper(".section2.recommended_product>.recommended_Swiper", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 20, // 슬라이드 사이간격(px)
        slidesPerGroup: 1, // 슬라이드 그룹(개수단위로 넘어감!)

        loop: true, // 무한루프(기본값:false)
        loopFillGroupWithBlank: true,
        // 한 화면 단위지정시 단위보다 그룹이 작을 경우 빈칸을 채움
        pagination: {
            // 블릿설정
            el: ".swiper-pagination", // 블릿요소설정
            clickable: false, // 클릭가능여부
        },
        navigation: {
            // 양쪽이동버튼
            nextEl: ".swiper-button-next", // 다음버튼 요소설정
            prevEl: ".swiper-button-prev", // 이전버튼 요소설정
        },
    });

    // // const gnb = $(".dt>.gnb li:has(.lnb)");
    // const gnb = $(".dt>.gnb");
    // console.log(gnb);
    // gnb.hover(addOnFn, removeOnFn);

    // function addOnFn(){
    //     gnb.find("li .lnb").addClass("on");
    // }
    // function removeOnFn(){
    //     gnb.find("li .lnb").removeClass("on");
    // }

    /* 모바일 lnb메뉴 속 스와이퍼 */
    const swiper = new Swiper(".mob .entire.list .lnb.jewellery .recommended_Swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grabCursor: true,
    });

    


}); /////////////////////////////////// jQB //////////////////////////////////////////
