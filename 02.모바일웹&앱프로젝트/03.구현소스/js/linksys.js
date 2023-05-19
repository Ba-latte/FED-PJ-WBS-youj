// 불가리 PJ 링크 시스템 JS - linksys.js //////
// : 메뉴 클릭하면 거기로 가게 만들기


///////////////////////////// [ 제이쿼리 로드 구역 ] /////////////////////////////
$(()=>{
    console.log("링크시스템 JS - 로딩 완료");


    ////////////////////////// [ GNB 메뉴 링크 기능 시작 ] //////////////////////////////
    // 대상 선정 : dt버전) 모든 gnb메뉴의 li들 직계하위 a요소
    const dtgnb = $(".dt>nav>ul.list>li>a");

    dtgnb.click(function(e){
        // console.log("클릭 완료!");
        // 1. a요소 기본기능 막기
        e.preventDefault();

        // 2. 클릭된 a요소의 텍스트를 읽어오기
        let atxt = $(this).attr("class");
        // console.log("클릭된 a요소의 클래스 가져오기 : ", atxt);


        // 3. 서브 페이지로 이동하기
        if(atxt === "bulgari_eden" || atxt === "bulgari_history"){
            // console.log("하이 주얼리, 브랜드 페이지로 이동!");
            location.href = "sub_category.html?cat=" + encodeURIComponent(atxt);
            // encodeURIComponent() : 2byte문자나 특수문자가 있을 경우, 인코딩해줘야함! -> 받아가는 곳에서도 디코딩 해줘야 정확히 나옴
        }
        else if(atxt === "serpenti_75years"){
            // console.log("세르펜티 75주년 페이지로 이동!");
            location.href = "sub_serpent.html?cat=" + encodeURIComponent(atxt);
        }
        else if(atxt === "jewellery" || atxt === "engagement_and_wedding"){
            // console.log("주얼리, 인게이지먼트 페이지로 이동!");
            location.href = "sub_product.html?cat=" + encodeURIComponent(atxt);
        }
        else if(atxt === "hotel_resort"){
            window.open("https://www.bulgarihotels.com/");
        }
    });
    ////////////////////////// [ GNB 메뉴 링크 기능 끝 ] //////////////////////////////

    ////////////////////////// [ dt버전) LNB 메뉴 링크 기능 시작 ] //////////////////////////////
    const dtlnb = $(".dt .lnb>.list>li");
    dtlnb.click(function(){
        // 클릭된 a요소의 텍스트를 읽어오기
        let atxt = $(this).attr("class");
        // console.log("하위메뉴 클릭했음! : ", atxt);

        // 분기하기
        // 하이주얼리 하위 메뉴
        if(atxt === "bulgari_eden" || atxt === "magnifica_creations" || atxt === "roman_high_jeweller"){
            location.href = "sub_category.html?cat=" + encodeURIComponent(atxt);
        }
        // 주얼리 하위 메뉴
        else if(atxt === "rings" || atxt === "necklaces" || atxt === "bracelets" || atxt === "earrings"){
            location.href = "sub_product.html?cat=" + encodeURIComponent(atxt);
        }
        // 인게이지먼트&웨딩 하위 메뉴
        else if(atxt === "engagement_rings" || atxt === "women's_wedding_bands" || atxt === "men's_wedding_bands" || atxt === "couple_rings"){
            location.href = "sub_product.html?cat=" + encodeURIComponent(atxt);
        }
        // 브랜드 하위 메뉴
        else if(atxt === "bulgari_history" || atxt === "bulgari_identity" || atxt === "bulgari_innovation"){
            location.href = "sub_category.html?cat=" + encodeURIComponent(atxt);
        }
    });
    ////////////////////////// [ dt버전) LNB 메뉴 링크 기능 끝 ] //////////////////////////////


    ////////////////////////// [ mob버전) LNB 메뉴 링크 기능 시작 ] //////////////////////////////
    const moblnb = $(".mob .lnb .list.category>li");
    moblnb.click(function(){
        // 클릭된 a요소의 텍스트를 읽어오기
        let atxt = $(this).attr("class");
        // console.log("하위메뉴 클릭했음! : ", atxt);

        // 분기하기
        // 하이주얼리 하위 메뉴
        if(atxt === "bulgari_eden" || atxt === "magnifica_creations" || atxt === "roman_high_jeweller"){
            location.href = "sub_category.html?cat=" + encodeURIComponent(atxt);
        }
        // 주얼리 하위 메뉴
        else if(atxt === "rings" || atxt === "necklaces" || atxt === "bracelets" || atxt === "earrings"){
            location.href = "sub_product.html?cat=" + encodeURIComponent(atxt);
        }
        // 인게이지먼트&웨딩 하위 메뉴
        else if(atxt === "engagement_rings" || atxt === "women's_wedding_bands" || atxt === "men's_wedding_bands" || atxt === "couple_rings"){
            location.href = "sub_product.html?cat=" + encodeURIComponent(atxt);
        }
        // 브랜드 하위 메뉴
        else if(atxt === "bulgari_history" || atxt === "bulgari_identity" || atxt === "bulgari_innovation"){
            location.href = "sub_category.html?cat=" + encodeURIComponent(atxt);
        }
    });
    ////////////////////////// [ mob버전) LNB 메뉴 링크 기능 끝 ] //////////////////////////////



    ////////////////////////// [ 로그인/회원가입 아이콘 클릭시 해당 페이지로 넘어가기 시작 ] //////////////////////////////
    $(".account_circle").parent().click(function(){
        // console.log("로그인 아이콘 클릭!");
        location.href = "login.html";
    });
    ////////////////////////// [ 로그인/회원가입 아이콘 클릭시 해당 페이지로 넘어가기 시작 ] //////////////////////////////
    
    


    ///////////////////////////// [ 로그인/회원가입 페이지 시작 ] /////////////////////////////
    /***************************************************
        !!주의!! 항상 html DOM 변경 후에 이벤트 작업을 할 것!!
        먼저 이벤트를 걸고 DOM 변경을 하면 이벤트가 풀린다~!
    ***************************************************/
    $(".tab_bx>.tit_tab>div").click(function(e){
        // 기본 이동 막기
        e.preventDefault();

        // 1.클릭된 a요소 text 읽기 + 앞뒤공백제거(trim())
        let atxt = $(this).find("a").text().trim();
        // console.log(atxt);

        // 2. 클릭된 탭에 따라서 박스 골라 보여주기
        if(atxt === "로그인"){
            // console.log("로그인 탭 클릭했음");
            // 로그인 탭의 아랫경계선 진하게 표시하기 + 형제 탭은 지우기
            $(this).css({borderBottom: "3px solid var(--black)"})
            .siblings().css({borderBottom: "none"});

            // 로그인 탭 박스 보이기 + 형제 탭은 숨기기
            $("section.login").show()
            .siblings("section.member, section#terms").hide();
        }
        else if(atxt === "회원가입"){
            // console.log("회원가입 탭 클릭했음");
            // 회원가입 탭의 아랫경계선 진하게 표시하기 + 형제 탭은 지우기
            $(this).css({borderBottom: "3px solid var(--black)"})
            .siblings().css({borderBottom: "none"});

            // 회원가입 탭 박스 보이기 + 형제 탭은 숨기기
            $("section#terms").show()
            .siblings("section.member, section.login").hide();
        }


    }); ////////////////// click ///////////////////
    ///////////////////////////// [ 로그인/회원가입 페이지 끝 ] /////////////////////////////




    


}); ////////////////////////////////////// jQB ///////////////////////////////////////







