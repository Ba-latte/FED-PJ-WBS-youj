// 불가리 PJ 주얼리,인게이지먼트 메뉴의 제품 리스트 페이지 JS - sub_product.js



// 각 제품 박스 컴포넌트 만들기
Vue.component("product-comp",{
    template:`
    <div class="wrap">
        <div class="rw1 productbx" v-bind:data-pnum="1">
            <div class="imgbx">
                <img v-bind:src="'./images/products/bracelets/shrinkage/sum1/' + pnum + '.png'" alt="브레이슬릿">
                <img class="hover" v-bind:src="'./images/products/bracelets/shrinkage/sum2/' + pnum + '.png'" alt="브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">세르펜티 바이퍼 브레이슬릿</h6>
                <div class="desc">
                    <p class="price">6650000</p>
                    <span class="material">로즈 골드</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">다이아몬드</span>
                </div>
            </div>
        </div>
    </div>
    `,
})



//////////////////////// [ 메인영역 필터바의 필터명 클릭시 필터옵션 박스에 클래스 추가해서 보이게 만들기 - 시작] ////////////////////////
$(".classification ul>ul>li").click(function(){
    const clsName = $(this).attr("class");
    const icon = $(this).find(".icon");
    // console.log("클릭한 자신의 클래스는? : ", clsName);
    let isMore = 1;
    // console.log("더보기상태야?: ", isMore);

    // 클릭된 요소의 아이콘 모양 바꾸기 + 옵션 선택 박스 보이기
    if(icon.text() === "expand_more"){
        icon.text("expand_less");
        isMore = 0;
        console.log("더보기상태야?: ", isMore);

        $(this).parents(".classification").siblings(".filterFn").addClass("on")
        .find(`.${clsName}`).addClass("on");
    }
    else{
        console.log("나말고!: ", $(this).siblings().find(".icon").text());

        // 만약 다른 요소들의 아이콘 모양이 "더보기"인 경우 자신의 옵션 선택 박스만 닫기
        if($(this).siblings().find(".icon").text() === "expand_more"){
            console.log("나말고 다른 옵션 더보기중!");
            // icon.text("expand_more");
            // $(this).parents(".classification").siblings(".filterFn").removeClass("on")
            // .find(`.${clsName}`).removeClass("on");
        }
        isMore = 1;
        console.log("더보기상태야?: ", isMore);



        icon.text("expand_more");
        // $().removeClass("on");
        // $(this).parents(".classification").siblings(".filterFn").removeClass("on")
        // .find(`.${clsName}`).removeClass("on");
    }
});

//////////////////////// [ 메인영역 필터바의 필터명 클릭시 필터옵션 박스에 클래스 추가해서 보이게 만들기 - 끝] ////////////////////////