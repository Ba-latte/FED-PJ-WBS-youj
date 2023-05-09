// 뷰엑스 스토어 : 전역 뷰 데이터 저장소 JS  - store.js


// 하이주얼리 하위메뉴 데이터, 브랜드 하위메뉴 데이터 가져오기
import {high_jewelry_menu_data, brand_menu_data} from "./data/sub_page_data.js";

////////////////////////////// 😊뷰엑스 스토어를 활용한 변수 세팅하기😊 /////////////////////////////////////
// 1.뷰엑스 스토어 인스턴스를 생성한다
const store = new Vuex.Store({
    // (1)데이터 세팅 구역
    state:{
        // 하이주얼리 하위메뉴와 브랜드 하위메뉴 데이터 셋업
        section1Data:{high_jewelry_menu_data},
        // 섹션1 데이터 셋업 변수
        sec1_vdsrc:"",
        sec1_tit:"",
        sec1_desc:"",

    }, /////////// state 구역 ///////////
    // (2)데이터 변경 메서드 구역 : 호출시 commit() 사용!
    mutations:{
        // 초기 데이터 셋업 메서드
        initSet(헐, param){
            console.log("데이터변경! 초기화 : ", 헐);

            // 섹션1 데이터 셋업 변수
            헐.sec1_vdsrc = param.vdsrc;
            헐.sec1_tit = param.tit;
            헐.sec1_desc = param.desc;

        }, ///////////////// initSet 메서드 /////////////////////
    },
    
}); /////////////////////////// 뷰엑스 스토어 인스턴스 /////////////////////////////////////


// 내보내기
export default store;