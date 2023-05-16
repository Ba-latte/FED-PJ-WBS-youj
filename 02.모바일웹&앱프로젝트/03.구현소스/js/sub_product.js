// 불가리 PJ 주얼리,인게이지먼트 메뉴의 제품 리스트 페이지 JS - sub_product.js


// 뷰엑스 스토어 불러오기
import store from "./product_store.js";




////////////////////// (호출하지 않고도) 바로 실행 함수 구역 /////////////////////////////////////
(()=>{
    // 파라미터 변수
    let pm;

    // GET 방식으로 넘어온 데이터 처리하여 분류별 서브 페이지 구성하기
    // location.href : 상단 url 읽어옴
    // indexOf("?")!== -1 : 물음표가 없는 게 아니면 = 물음표가 있으면!
    if(location.href.indexOf("?")!== -1)
        pm = location.href.split("?")[1].split("=")[1];
        // 물음표로 잘라내서 뒤의 것, 이퀄로 잘라내서 뒤의 것 값(파라미터값)만 추출함! split()
    // pm에 할당이 되었다면 undefined가 아니므로 true가 나옴!
    if(pm)
        store.commit("setData", decodeURI(pm));
    // 👇메뉴를 선택해서 파라미터로 들어오지 않고! 그냥 들어갔을 때의 첫 화면은 아래 데이터가 뿌려지게 하기
    else
        store.commit("setData", pm);
    // URI/URIComponent의 차이점
    // decodeURI() : 딱 변경할 문자열만 있어야 변환됨
    // decodeURIComponent() : url 전체에 섞여 있어도 모두 변환해줌
})(); ////////////////////// (호출하지 않고도) 바로 실행 함수 구역 /////////////////////////////////////



////////////////////////////////// lnb메뉴 컴포넌트 ////////////////////////////////////////
Vue.component("lmenu-comp", {
    template:`
    <ol class="list category">
        <li class="rings">
            <a href="#" v-on:click="$store.commit('setData','rings')">
                <span class="btn">링</span>
            </a>
        </li>
        <li class="necklaces">
            <a href="#" v-on:click="$store.commit('setData','necklaces')">
                <span class="btn">네크리스</span>
            </a>
        </li>
        <li class="bracelets">
            <a href="#" v-on:click="$store.commit('setData','bracelets')">
                <span class="btn">브레이슬릿</span>
            </a>
        </li>
        <li class="earrings">
            <a href="#" v-on:click="$store.commit('setData','earrings')">
                <span class="btn">이어링</span>
            </a>
        </li>
    </ol>
    `,
}); ////////////////////////////////// lnb메뉴 컴포넌트 ////////////////////////////////////////

////////////////////////////////// lnb메뉴 뷰 인스턴스 ////////////////////////////////////////
new Vue({
    el:"#lmenu",
    store,
}); ////////////////////////////////// lnb메뉴 뷰 인스턴스 ////////////////////////////////////////






//////////////////////// 1번째 그리드박스 컴포넌트 만들기 /////////////////////////////////
Vue.component("product1-comp",{
    template:`
    <div class="grid grid1">
        <!-- 1번째 줄 -->
        <div class="rw1 imgbx">
            <span class="tit">끝없는 변모</span>
            <img src="./images/sub_page/jewelry/grid_jew_1.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <div class="rw1 productbx" data-pnum="1">
            <div class="imgbx">
                <img :src="'./images/products/'+$store.state.categorys+'/shrinkage/sum1/goods_name1.png'" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[0]["gname"]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[0].gprice!==''" v-text="'￦ ' + insComma($store.state.items[0].gprice)"></p>
                    <span class="material">{{$store.state.items[0]["material"]}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[0]["gemstone"]}}</span>
                </div>
            </div>
        </div>
        <div class="rw1 productbx" data-pnum="2">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[1]["gname"]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[1].gprice!==''" v-text="'￦ ' + insComma($store.state.items[1].gprice)"></p>
                    <span class="material">{{$store.state.items[1]["material"]}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[1]["gemstone"]}}</span>
                </div>
            </div>
        </div>
        <!-- 2번째 줄 -->
        <div class="rw2 productbx" data-pnum="3">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[2]["gname"]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[2].gprice!==''" v-text="'￦ ' + insComma($store.state.items[2].gprice)"></p>
                    <span class="material">{{$store.state.items[2]["material"]}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[2]["gemstone"]}}</span>
                </div>
            </div>
        </div>
        <div class="rw2 productbx" data-pnum="4">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[3]["gname"]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[3].gprice!==''" v-text="'￦ ' + insComma($store.state.items[0].gprice)"></p>
                    <span class="material">{{$store.state.items[3]["material"]}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[3]["gemstone"]}}</span>
                </div>
            </div>
        </div>
        <!-- 3번째 줄 -->
        <div class="rw3 productbx" data-pnum="5">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[4]["gname"]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[4].gprice!==''" v-text="'￦ ' + insComma($store.state.items[3].gprice)"></p>
                    <span class="material">{{$store.state.items[4]["material"]}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[4]["gemstone"]}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 productbx" data-pnum="6">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[5]["gname"]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[5].gprice!==''" v-text="'￦ ' + insComma($store.state.items[4].gprice)"></p>
                    <span class="material">{{$store.state.items[5]["material"]}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[5]["gemstone"]}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 imgbx">
            <span class="tit">매혹의 아이콘</span>
            <img src="./images/sub_page/jewelry/grid_jew_2.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <!-- 4번째 줄 -->
        <div class="rw4 productbx" data-pnum="7">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[6]["gname"]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[6].gprice!==''" v-text="'￦ ' + insComma($store.state.items[5].gprice)"></p>
                    <span class="material">{{$store.state.items[6]["material"]}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[6]["gemstone"]}}</span>
                </div>
            </div>
        </div>
        <div class="rw4 productbx" data-pnum="8">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[7]["gname"]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[7].gprice!==''" v-text="'￦ ' + insComma($store.state.items[6].gprice)"></p>
                    <span class="material">{{$store.state.items[7]["material"]}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[7]["gemstone"]}}</span>
                </div>
            </div>
        </div>
    </div>
    `,
    methods:{
        // 가격 3자리마다 콤마 붙이는 정규식 메서드
        insComma(x) {
            // 만약 x가 비어있으면 아무런 처리 없이 리턴하고, x에 값이 있다면 정규식으로 표현하기
            if(!x) return;
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
    },
}); /////////////////////////////// 1번째 그리드박스 컴포넌트 만들기 ///////////////////////////////


////////////////////////// 1번째 그리드박스 뷰 인스턴스 만들기 //////////////////
new Vue({
    el:"#gbx1",
    store,
    data:{
        items:[],
    },
    mounted(){

    },
}); //////////////////// 1번째 그리드박스 뷰 인스턴스 만들기 //////////////////



/////////////////////// 2번째 그리드박스 컴포넌트 만들기 ///////////////////////////////////////
Vue.component("product2-comp",{
    template:`
    <div class="grid grid2">
        <div v-bind:class="'productbx'" v-bind:data-pnum="v.idx" v-for="(v,i) in $store.state.items" v-if="v.idx>8">
            <div class="imgbx">
                <img
                    v-bind:src="'./images/products/'+v.category+'/shrinkage/sum1/goods_name' + (v.idx) + '.png'"
                    v-bind:alt="'goods_name' + (v.idx) + '_' + v.category">
                <img class="hover"
                    v-bind:src="'./images/products/'+v.category+'/shrinkage/sum2/goods_name' + (v.idx) + '.png'" 
                    v-bind:alt="'goods_name' + (v.idx) + '_' + v.category">
            </div>
            <div class="descbx">
                <h6 class="tit" v-text="v.gname"></h6>
                <div class="desc">
                    <p class="price" v-if="v.gprice!==''" v-text="'￦ ' + insComma(v.gprice)"></p>
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
    methods:{
        // 가격 3자리마다 콤마 붙이는 메서드
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        chgCtg(x){

        },
    },
}); ///////////////////// 2번째 그리드박스 컴포넌트 만들기 ///////////////////////////////////////



//////////////// 2번째 그리드박스 뷰 인스턴스 생성하기 ////////////////////////////////
new Vue({
    el:"#gbx2",
    store,
    // 뷰 인스턴스에서 사용할 데이터 구역
    data:{
        // 제이슨 데이터 담을 변수
        items:{},
        categorys:{},
    },
    // 뷰 인스턴스 생성 직후의 구역
    created(){
        // 뷰엑스 스토어 액션스 구역 메서드인 initData() 호출하기
        store.dispatch("initData");
    },
    // 돔 연결 후 구역
    mounted(){
        // 마우스오버시 이미지 변경되는 함수 호출하기
        pdHoverFn();
    },
}); ///////////////// 2번째 그리드박스 뷰 인스턴스 생성하기 ////////////////////////////////



/////////////////////// 3번째 그리드박스 컴포넌트 만들기 ///////////////////////////////////////
Vue.component("product3-comp",{
    template:`
    `,
    methods:{
        // 가격 3자리마다 콤마 붙이는 메서드
        insComma(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        chgCtg(x){

        },
    },
}); ///////////////////// 3번째 그리드박스 컴포넌트 만들기 ///////////////////////////////////////


//////////////// 3번째 그리드박스 뷰 인스턴스 생성하기 ////////////////////////////////
new Vue({
    el:"#gbx3",
    store,
    // 뷰 인스턴스에서 사용할 데이터 구역
    data:{
        // 제이슨 데이터 담을 변수
        items:{},
        categorys:{},
    },
    // 뷰 인스턴스 생성 직후의 구역
    created(){
        // 뷰엑스 스토어 액션스 구역 메서드인 initData() 호출하기
        store.dispatch("initData");
    },
    // 돔 연결 후 구역
    mounted(){
        // 마우스오버시 이미지 변경되는 함수 호출하기
        pdHoverFn();
    },
}); ///////////////// 3번째 그리드박스 뷰 인스턴스 생성하기 ////////////////////////////////



/////////////////// 더보기 박스 컴포넌트 만들기 ///////////////////////
Vue.component("more-comp", {
    template:`
    <div class="morebx">
        <div class="txt">
            <span class="product_count">{{$store.state.items.length}}</span>개의 제품 중 <span class="product_count">{{$store.state.items.length}}</span>개
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
