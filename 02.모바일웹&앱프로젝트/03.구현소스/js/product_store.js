// 뷰엑스 스토어 : 제품리스트 페이지 뷰 데이터 저장소 JS  - product_store.js


// 제품 데이터 json 가져오기
import bracelets from "./data/goods-bracelets.js";
import necklaces from "./data/goods-necklaces.js";
import earrings from "./data/goods-earrings.js";

///////////////////////////// [ 뷰엑스 스토어를 활용한 변수 세팅하기 ] /////////////////////////////
const store = new Vuex.Store({
    // [ 데이터 세팅 구역 ]
    state:{
        // 제품 데이터를 담은 변수
        items: {bracelets,necklaces,earrings},

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
        setData(st, pm){
            // st - state변수, pm - 전달변수
            // url 강제 변경하기
            // history.pushState(null,null,"sub.html?cat="+pm);

            if(pm === "jewellery"){
                console.log("주얼리로 들어왔어! 데이터 다 뿌려줘");
            }

            // state 구역의 items변수에 가지고온 pm을 넣기
            st.cat === st.items.pm


            // pm값에 어떤게 넘어와서 할당되는지 확인해보기
            console.log("여기는 뮤테이션스야 : ", );
            
        },

        // 제품 데이터 초기화하는 메서드
        initData(){
            // 제이슨 데이터를 변수에 할당하기
            const result = "bracelets";

            console.log("제품 데이터 초기화!! : ", result);

            // state의 items 변수 변경하는 메서드 호출하기
            this.commit("setData", result);
        }
    },


});


// 내보내기
export default store;