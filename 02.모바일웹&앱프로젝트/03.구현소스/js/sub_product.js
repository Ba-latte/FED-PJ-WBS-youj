// 불가리 PJ 주얼리,인게이지먼트 메뉴의 제품 리스트 페이지 JS - sub_product.js


// 뷰엑스 스토어 불러오기
import store from "./product_store.js";

// 필터 박스 데이터 불러오기
import fillter_data from "./data/fillter_data.js";
// 제품 상세사항 데이터 불러오기
import detail_data from "./data/sub_detail_data.js";

////////////////////// (호출하지 않고도) 바로 실행 함수 구역 /////////////////////////////////////
(()=>{
    // 파라미터 변수
    let pm;

    // GET 방식으로 넘어온 데이터 처리하여 분류별 서브 페이지 구성하기
    // location.href : 상단 url 읽어옴
    // indexOf("?")!== -1 : 물음표가 없는 게 아니면 = 물음표가 있으면!
    if(location.href.indexOf("?")!== -1){
        pm = location.href.split("?")[1].split("=")[1];
        // 물음표로 잘라내서 뒤의 것, 이퀄로 잘라내서 뒤의 것 값(파라미터값)만 추출함! split()
        // pm에 할당이 되었다면 undefined가 아니므로 true가 나옴!
    }
    if(pm){
        let temp = decodeURI(pm);
        store.commit("setData", temp);
    }
    // 👇메뉴를 선택해서 파라미터로 들어오지 않고! 그냥 들어갔을 때의 첫 화면은 아래 데이터가 뿌려지게 하기
    else{
        store.commit("initData");
    }

    // 대상에 변경 적용하기 : 카테고리 페이지 타이틀 넣기
    // title태그 변수에 할당하기
    const sub_pg_tit = $("title");

    // title태그의 텍스트 데이터를 바꾸기
    sub_pg_tit.text(pm.replaceAll("_", " ").toUpperCase() + " | 불가리 공식 온라인 스토어");

    

})(); ////////////////////// (호출하지 않고도) 바로 실행 함수 구역 /////////////////////////////////////



////////////////////////////////// lnb메뉴 컴포넌트 ////////////////////////////////////////
Vue.component("lmenu-comp", {
    template:`
    <ol class="list category">
        <li class="rings">
            <a href="#" v-on:click="setData('rings')">
                <span class="btn">링</span>
            </a>
        </li>
        <li class="necklaces">
            <a href="#" v-on:click="setData('necklaces')">
                <span class="btn">네크리스</span>
            </a>
        </li>
        <li class="bracelets">
            <a href="#" v-on:click="setData('bracelets')">
                <span class="btn">브레이슬릿</span>
            </a>
        </li>
        <li class="earrings">
            <a href="#" v-on:click="setData('earrings')">
                <span class="btn">이어링</span>
            </a>
        </li>
    </ol>
    `,
    methods:{
        setData(param){
            console.log("업데이트!", param);
            // 스토어 변수를 업데이트한다!!

            store.commit('setData',param);
            store.commit('chgFn');

            // lnb메뉴 클릭해서 페이지 넘어가면 마우스오버 상태 해제하기
            mouseOutFn();

            // 5. 대상에 변경 적용하기 : 카테고리 페이지 타이틀 넣기
            // title태그 변수에 할당하기
            const sub_pg_tit = $("title");

            // title태그의 텍스트 데이터를 바꾸기
            sub_pg_tit.text(param.toUpperCase() + " | 불가리 공식 온라인 스토어");

            // 6.url 강제 변경하기
            history.pushState(null,null,"sub_product.html?cat="+param);
        },
    },
}); ////////////////////////////////// lnb메뉴 컴포넌트 ////////////////////////////////////////

////////////////////////////////// block) lnb메뉴 뷰 인스턴스 ////////////////////////////////////////
new Vue({
    el:"#lmenu1",
    store,
}); ////////////////////////////////// lnb메뉴 뷰 인스턴스 ////////////////////////////////////////

////////////////////////////////// flexed) lnb메뉴 뷰 인스턴스 ////////////////////////////////////////
new Vue({
    el:"#lmenu2",
    store,
}); ////////////////////////////////// lnb메뉴 뷰 인스턴스 ////////////////////////////////////////


//////////////////////////// 필터 박스 컴포넌트 ////////////////////////////////////
Vue.component("fillter-comp",{
    template:fillter_data.fillter_data,
}); //////////////////////////// 필터 박스 컴포넌트 ////////////////////////////////////

////////////////////////////////// 필터박스 뷰 인스턴스 ////////////////////////////////////////
new Vue({
    el:"#fillter_bx",
    store,
}); ////////////////////////////////// 필터박스 뷰 인스턴스 ////////////////////////////////////////



// v-if="v.category == $store.state.cat || $store.state.cat == 'jewellery'"
/////////////////////// 제품 그리드박스 컴포넌트 만들기 ///////////////////////////////////////
Vue.component("product-comp",{
    template:`
    <div class="grid grid2">
        <div class="productbx" data-pnum="" v-for="(v,i) in $store.state.items" 
        v-if="v.category == $store.state.cat || $store.state.cat == 'jewellery'">
            <div class="imgbx" v-on:click="$store.commit('openFn', v.idx)">
                <img v-bind:src="'./images/products/'+v.category+'/shrinkage/sum1/'+v.ginfo[0]+'.png'" alt="제품 이미지">
                <img class="hover" v-bind:src="'./images/products/'+v.category+'/shrinkage/sum2/'+v.ginfo[0]+'.png'" alt="제품 이미지">
            </div>
            <div class="descbx">
                <h6 class="tit">{{v.ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-if="v.ginfo[1]!==''" v-text="'￦ ' + insComma(v.ginfo[1])"></p>
                    <span class="material">{{v.material}}</span>
                    <div class="gem_opt_bx">
                        <span class="bar"> / </span>
                        <span class="gemstone">{{v.gemstone}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    methods:{
        // 가격 3자리마다 콤마 붙이는 메서드
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
}); ///////////////////// 제품 그리드박스 컴포넌트 만들기 ///////////////////////////////////////



//////////////// 제품 그리드박스 뷰 인스턴스 생성하기 ////////////////////////////////
new Vue({
    el:"#gbx1",
    store,
    // 뷰 인스턴스에서 사용할 데이터 구역
    data:{
        // 제이슨 데이터 담을 변수
        items:{},
    },
    // 뷰 인스턴스 생성 직후의 구역
    created(){
        // 뷰엑스 스토어 액션스 구역 메서드인 initData() 호출하기
        store.commit("initData", "jewellery");
        
    },
    // 돔 연결 후 구역
    mounted(){
        // 마우스오버시 이미지 변경되는 함수 호출하기
        pdHoverFn();

        // lnb클릭시 a요소 기본기능 막기
        $(".category.list>li").click(function(e){
            e.preventDefault();
        });

        
    },
}); ///////////////// 제품 그리드박스 뷰 인스턴스 생성하기 ////////////////////////////////






/////////////////// 더보기 박스 컴포넌트 만들기 ///////////////////////
Vue.component("more-comp", {
    template:`
    <div class="morebx">
        <div class="txt">
            <span class="product_count">{{$store.state.cnt}}</span>개의 제품 중 <span class="product_count">{{$store.state.cnt}}</span>개
        </div>
        <button class="morebtn">더 보기</button>
    </div>
    `,
}); //////////////// 더보기 박스 컴포넌트 만들기 ///////////////////////


////////////////// 더보기 박스 뷰 인스턴스 만들기 /////////////////////////
new Vue({
    el:"#morebx",
    store,
    data:{
        items:{},
    },
}); ////////////////// 더보기 박스 뷰 인스턴스 만들기 ////////////////////////


////////////////// 제품 상세사항 박스 컴포넌트 /////////////////////////
Vue.component("detail-comp",{
    template: detail_data.detail_data,
    methods:{
        // 가격 3자리마다 콤마 붙이는 메서드
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },

    },
}); ////////////////// 제품 상세사항 박스 컴포넌트 /////////////////////////


////////////////// 제품 상세사항 박스 뷰 인스턴스 /////////////////////////
new Vue({
    el:"#detail_bx",
    store,

}); ////////////////// 제품 상세사항 박스 뷰 인스턴스 /////////////////////////






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
    else {
        console.log("나말고!: ");

        // 만약 다른 요소들의 아이콘 모양이 "더보기"인 경우 자신의 옵션 선택 박스만 닫기
        isMore = 1;
        console.log("더보기상태야?: ", isMore);

        icon.text("expand_more");
        $(this).parents(".classification").siblings(".filterFn").removeClass("on")
        .find(`.${clsName}`).removeClass("on");
    }

}); //////////////////////// [ 메인영역 필터바의 필터명 클릭시 필터옵션 박스에 클래스 추가해서 보이게 만들기 - 끝 ] ////////////////////////



//////////////////////// [ 제품 이미지에 마우스오버시 다른 이미지가 보이게 만들기 - 시작] ////////////////////////
function pdHoverFn(){
    $(".productbx>.imgbx").mouseover(function(){
        // console.log("마우스오버!");
        $(this).find("img").last().animate({opacity:"1"}, 100);
    });
    $(".productbx>.imgbx").mouseout(function(){
        // console.log("마우스 아웃!");
        $(this).find("img").last().animate({opacity:"0"}, 100);
    });
} //////////////////////// [ 제품 이미지에 마우스오버시 다른 이미지가 보이게 만들기 - 끝 ] ////////////////////////



// 마우스 아웃 이벤트 발생시키기
function mouseOutFn(){
    console.log("마우스아웃 효과!!: ");
    $(".dt>.gnb>.list>li").mouseout();
}


