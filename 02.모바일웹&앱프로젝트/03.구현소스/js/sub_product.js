// 불가리 PJ 주얼리,인게이지먼트 메뉴의 제품 리스트 페이지 JS - sub_product.js


// 뷰엑스 스토어 불러오기
import store from "./product_store.js";

// 각 제품 박스 컴포넌트 만들기
Vue.component("product2-comp",{
    template:`
    <div class="wrap">
        <div v-bind:class="
        
        'rw' + (v.idx>4?v.idx:5) + ' productbx'" v-bind:data-pnum="v.idx" v-for="(v,i) in $store.state.items" v-bind:key="v.idx">
            <div class="imgbx">
                <img v-bind:src="'./images/products/bracelets/shrinkage/sum1/' + (v.gname) + '.png'" v-bind:alt="v.gname + '_' + v.category">
                <img class="hover" v-bind:src="'./images/products/bracelets/shrinkage/sum2/' + (v.idx) + '.png'" alt="브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{v.gname}}</h6>
                <div class="desc">
                    <p class="price">{{v.gprice}}</p>
                    <span class="material">{{v.material}}</span>
                    <div class="gem_opt_bx" v-if="v.gemstone!==''">
                        <span class="bar"> / </span>
                        <span class="gemstone">{{v.gemstone}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,

});


// 뷰 인스턴스 생성하기
new Vue({
    el:"#gbx2",
    store,
    // 뷰 인스턴스에서 사용할 데이터 구역
    data:{
        // 제이슨 데이터 담을 변수
        items:{},

    },
    // 뷰 인스턴스 생성 직후의 구역
    created(){
        // 뷰엑스 스토어 액션스 구역 메서드인 initData() 호출하기
        store.dispatch("initData");
    },
    // 돔 연결 후 구역
    mounted(){
        
    },
});

// 클래스 바꾸는 메서드
function chgCls(idx){
    if(idx){
        
    }
}



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