// 뷰엑스 스토어 : 제품리스트 페이지 뷰 데이터 저장소 JS  - product_store.js


// 제품 데이터 json 가져오기
import jsnData from "./data/bulgari-goods.json" assert{type:"json"};

///////////////////////////// [ 뷰엑스 스토어를 활용한 변수 세팅하기 ] /////////////////////////////
const store = new Vuex.Store({
    // [ 데이터 세팅 구역 ]
    state:{
        // 제이슨 데이터를 담을 변수
        items: [],

        // 카테고리 변수
        categorys: ["bracelets", "earrings", "necklaces", "rings"],

        // 공통 처리 카테고리명 변수
        cat:"",
    },

    // [ 데이터 변경 메서드 구역 ] : 여기에 있는 것 호출 시 commit()사용하기
    mutations:{
        setData(st, pm){
            // st - state변수, pm - 전달변수
            
            // state 구역의 items변수에 제이슨 데이터 담기
            st.items = pm;

            // pm값에 어떤게 넘어와서 할당되는지 확인해보기
            console.log("여기는 뮤테이션스야 : ", pm);
            
        },
    },

    // [ 백엔드 관련 코딩 비동기 처리 메서드 구역 ] : 호출시 dispatch() 사용하기
    actions:{
        // 제이슨 데이터 로드하는 메서드
        initData({commit}){
            // 제이슨 데이터를 변수에 할당하기
            const result = jsnData;

            console.log("여기는 액션구역! : ", result);

            // state의 items 변수 변경하는 메서드 호출하기
            commit("setData", result);
        }
    },
});


// 내보내기
export default store;