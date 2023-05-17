// 뷰엑스 스토어 : 제품리스트 페이지 뷰 데이터 저장소 JS  - product_store.js


// 제품 데이터 JS 가져오기
import goods_total_list from "./data/goods-total.js";

///////////////////////////// [ 뷰엑스 스토어를 활용한 변수 세팅하기 ] /////////////////////////////
const store = new Vuex.Store({
    // [ 데이터 세팅 구역 ]
    state:{
        // 제품 데이터를 담은 변수
        items: goods_total_list,

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

        // 공통 처리 이름뒤의숫자 변수
        number:"",
    },

    // [ 데이터 변경 메서드 구역 ] : 여기에 있는 것 호출 시 commit()사용하기
    mutations:{
        setData(st, pm){

            // 카테고리명 바꾸기
            st.cat = pm;
            console.log("카테고리는? : ", st.cat);

        },

        // 가격 3자리마다 콤마 붙이는 정규식 메서드
        insComma(x) {
            // 만약 x가 비어있으면 아무런 처리 없이 리턴하고, x에 값이 있다면 정규식으로 표현하기
            if(!x) return;
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        },
        chgFn(st, x){
            st.items.forEach((v,i)=>{
                let name = v.ginfo[0];
                // 이름에서 뒤의 숫자만 잘라내서 가져오기
                let number = name.substring(10);
                console.log("이름뒤의 숫자!!: ", number);

                st.number = number;
            });
            
        },
    },


});


// 내보내기
export default store;