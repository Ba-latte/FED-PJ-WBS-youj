// 불가리 PJ 주얼리,인게이지먼트 메뉴의 제품 리스트 페이지 JS - sub_product.js


// 뷰엑스 스토어 불러오기
import store from "./product_store.js";
// 전체 리스트용 뷰 라우터 JS 가져오기
import router from "./glist-router.js";



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
    if(pm){
        store.commit("setData", decodeURI(pm));
    }
    // 👇메뉴를 선택해서 파라미터로 들어오지 않고! 그냥 들어갔을 때의 첫 화면은 아래 데이터가 뿌려지게 하기
    else{
        // store.commit("initData");
    }
    // URI/URIComponent의 차이점
    // decodeURI() : 딱 변경할 문자열만 있어야 변환됨
    // decodeURIComponent() : url 전체에 섞여 있어도 모두 변환해줌
})(); ////////////////////// (호출하지 않고도) 바로 실행 함수 구역 /////////////////////////////////////



////////////////////////////////// lnb메뉴 컴포넌트 ////////////////////////////////////////
Vue.component("lmenu-comp", {
    template:`
    <ol class="list category">
        <li class="rings">
            <a href="#" >
                <router-link to="/rings" tag="span" class="btn">링</router-link>
            </a>
        </li>
        <li class="necklaces">
            <a href="#" >
                <router-link to="/necklaces" tag="span" class="btn">목걸이</router-link>
            </a>
        </li>
        <li class="bracelets">
            <a href="#">
                <router-link to="/bracelets" tag="span" class="btn">브레이슬릿<router-link>
            </a>
        </li>
        <li class="earrings">
            <a href="#">
                <router-link to="/earrings" tag="span" class="btn">이어링<router-link>
            </a>
        </li>
    </ol>
    `,
    methods:{
    },
}); ////////////////////////////////// lnb메뉴 컴포넌트 ////////////////////////////////////////

////////////////////////////////// lnb메뉴 뷰 인스턴스 ////////////////////////////////////////
new Vue({
    el:"#lmenu",
    store,
    router,
}); ////////////////////////////////// lnb메뉴 뷰 인스턴스 ////////////////////////////////////////






////////////////////////// 1번째 그리드박스 뷰 인스턴스 만들기 //////////////////
new Vue({
    el:"#gbx1",
    store,
    router,
    data:{
        
    },
    mounted(){
        // 제품 이미지 마우스오버시 변경되는 함수 호출
        pdHoverFn();
    },
}); //////////////////// 1번째 그리드박스 뷰 인스턴스 만들기 //////////////////








/////////////////// 더보기 박스 컴포넌트 만들기 ///////////////////////
Vue.component("more-comp", {
    template:`
    <div class="morebx">
        <div class="txt">
            <span class="product_count"></span>개의 제품 중 <span class="product_count"></span>개
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
