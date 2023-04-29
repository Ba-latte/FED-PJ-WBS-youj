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
    /* 모바일버전) gnb메뉴의 li들 */
    const gnb_lists = $(".mob .entire.list>li");
    const top_logo_bx = $("#top .svgBx");
    // console.log(main_top_btn);

    /* 👉상단 영역의 모든 svg로고 클릭하면 메인페이지로 이동하기 */
    top_logo_bx.click(function(){
        console.log("이동!");
        location.href="index.html";
    })

    /* 👉모바일 버전) 햄버거 버튼 클릭하면 gnb메뉴박스 보이고 상단영역 안보이게 만들기 */
    mob_ham_btn.click(function(e){
        e.preventDefault();

        $("body").css({overflowY: "hidden"});
        mob_gnb_menu.addClass("on");
    });

    /* 👉모바일 버전) 닫기 버튼 클릭하면 gnb메뉴박스가 닫히고 상단영역 보이게 만들기 */
    mob_close_btn.click(function(e){
        e.preventDefault();

        mob_gnb_menu.removeClass("on");
        $("body").css({overflowY: "visible"});

        /* lnb메뉴도 닫아주기 */
        // if($(".mob .gnb .lnb").hasClass("on")){
        //     $(".mob .gnb .lnb").removeClass("on");
        // }
    });

    /* 👉모바일 버전) gnb박스의 li들을 클릭하면 lnb박스가 오른쪽에서부터 등장하기 */
    gnb_lists.click(function(){
        // console.log("클릭했어?");
        const mob_lnb_menu = $(this).find(".lnb");
        // 이벤트 버블링 막기
        mob_lnb_menu.click(e=>e.stopPropagation());
        /* 만약에 lnb메뉴에 클래스 on을 가지고 있다면 지우고, 없다면 on을 추가하도록 하기  */
        mob_lnb_menu.css({height:"auto"})
        .animate({
            right: "0%",
        }, 1000);
        
        
    });

    /* 👉모바일 버전) lnb박스에서 gnb메뉴를 클릭하면 lnb박스가 오른쪽으로 되돌아가기 */
    const mob_lnb_backLnk = $(".mob>.gnb .lnb>.top_area>.lnk");
    mob_lnb_backLnk.click(function(){
        // console.log("클릭했어?");
        // $(this).parents(".lnb").removeClass("on"); <<- 원래는 on으로 했었음,,
        $(this).parents(".lnb")
        .animate({right: "-120%"}, 1000, 
        function(){$(this).css({height: "0"})
        });
        
        
    });

    /* 👉모바일 버전) 상단영역에 있는 돋보기 아이콘 클릭하면 검색박스 나타나게 만들기 */
    mob_search_btn.click(function(e){
        // console.log("상단 돋보기!");
        e.preventDefault();
        $(this).parents(".lmenu").find(".search.wrap")
        .toggleClass("on");
    })

    /* 👉상단으로 향하는 top버튼 클릭시 맨위로 이동하기 */
    main_top_btn.click(function(){
        $("html, body").animate({scrollTop: 0 }, 'slow');
    });

    /* 👉모바일 버전) 스크롤 내리면 상단 영역 박스의 포지션이 fixed로 바뀌어 상단에 고정되게 하기 */
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
    });

    /* 👉모바일 버전) 하단영역 아코디언 기능 적용하기 */
    const accordionFn = function (){
        // 모바일버전 하단영역 서브카테고리 박스
        const mob_info_sub_ctg = $(".mob>.info_section .sub_category");
        // 모바일버전 하단영역 헤드라인
        const mob_info_headline = $(".mob>.info_section .headline");
        
        mob_info_sub_ctg.hide();

        mob_info_headline.click(function(){
            if($(this).find(".remove").attr("data-hide") === "0"){
                $(this).find(".remove").hide().attr("data-hide", "1").siblings().show();
            }
            else{
                $(this).children(".add").hide().siblings().show().attr("data-hide", "0");

            }

            /* 자신의 뒷형제들 슬라이드 토글 */
            $(this).next().slideToggle(300);

            // /* 다른 헤드라인 클릭시 기존에 펼쳐진 내용 접히게 하고, -아이콘 +로 바꾸기 */
            mob_info_headline.not(this).next().slideUp(300)
            .prev().children(".remove").hide().attr("data-hide", "1").siblings().show();
        });
    } ///////////////////// accordionFn 함수 //////////////////////////

    // 아코디언함수 최초 호출하기
    accordionFn();












    /* 메인 페이지 섹션2 추천 제품 - 뷰3 스와이퍼 */
    const make_v3_swiper = function make_v3_swiper(cls){
        new Swiper(cls, {
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

    }; //////////////////////// make_v3_swiper 함수 //////////////////////////////



    /* 👉모바일 버전) lnb 메뉴 추천 제품 - 뷰1 스와이퍼 */
    const make_v1_swiper = function make_v1_swiper(cls){
        // console.log("이거 담아서 스와이퍼만들거야!: ", cls);
        new Swiper(cls, {
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
    }; //////////////////////// make_v1_swiper 함수 //////////////////////////////


    /* 👉서브페이지) 하이주얼리 작품 소개 스와이퍼 */
    const make_v3_noNav_swiper = function make_v3_noNav_swiper(cls){
        new Swiper(cls, {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });
    }; /////////////////////// make_v3_noNav_swiper 함수 ////////////////////////


    /* 👉호출해서 스와이퍼 개별 적용하기 */
    make_v1_swiper(".mob_jewellery_recommended_Swiper");
    make_v1_swiper(".mob_engagement_and_wedding_recommended_Swiper");
    make_v3_swiper(".section2.recommended_product>.recommended_Swiper");
    make_v3_noNav_swiper(".section3.introduction_to_works>.intro_Swiper");


    



}); /////////////////////////////////// jQB //////////////////////////////////////////
