// 뷰엑스 스토어 : 제품리스트 페이지 뷰 데이터 저장소 JS  - product_store.js


// 제품 데이터 json 가져오기
import goods_bracelets from "./data/goods-bracelets.js";
import goods_necklaces from "./data/goods-necklaces.js";
import goods_earrings from "./data/goods-earrings.js";

///////////////////////////// [ 뷰엑스 스토어를 활용한 변수 세팅하기 ] /////////////////////////////
const store = new Vuex.Store({
    // [ 데이터 세팅 구역 ]
    state:{
        // 제품 데이터를 담을 변수
        items: {goods_bracelets, goods_necklaces, goods_earrings},

        // 공통 처리 제품명 변수
        name:"",
        // 공통 처리 가격 변수
        price:"",
        // 공통 처리 카테고리명 변수
        cat:"",
        // 공통 처리 재질 변수
        metarial:"",
        // 공통 처리 젬스톤 변수
        gemstone:"",
    },

    // [ 데이터 변경 메서드 구역 ] : 여기에 있는 것 호출 시 commit()사용하기
    mutations:{
        setData(st, pm, ){
            // st - state변수, pm - 전달변수

            if(pm === "jewellery"){
                console.log("주얼리로 들어왔어");
            }

            // state 구역의 items변수에 제이슨 데이터 담기
            st.items = pm;

            // st.categorys = pm;

            // pm값에 어떤게 넘어와서 할당되는지 확인해보기
            console.log("여기는 뮤테이션스야 : ", pm, "넘버 : ", );
            
        },
        chgTit(){

        },
        chgCat(x){
            st.stcategorys = x;
            console.log("카테고리좀 바꾸자ㅠㅠ: ", st.stcategorys);
        },
        // 제품 데이터 초기화하는 메서드
        initData(){
            // 제이슨 데이터를 변수에 할당하기
            const result = goods_bracelets;

            console.log("여기는 액션구역! : ", result);

            // state의 items 변수 변경하는 메서드 호출하기
            commit("setData", result);
        }
    },

    // // [ 백엔드 관련 코딩 비동기 처리 메서드 구역 ] : 호출시 dispatch() 사용하기
    // actions:{
    //     
    // },
});


// 내보내기
export default store;