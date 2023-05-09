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
        // 페이지의 title 요소 데이터 변경 셋업 변수
        pg_tit:"",

    }, /////////// state 구역 ///////////
    // (2)데이터 변경 메서드 구역 : 호출시 commit() 사용!
    mutations:{
        // 초기 데이터 셋업 메서드
        initSet(헐, param){
            console.log("데이터변경! 초기화 : ", 헐,param);

            // 섹션1 데이터 셋업 변수
            헐.sec1_vdsrc = param.vdsrc;
            헐.sec1_tit = param.tit;
            헐.sec1_desc = param.desc;

        }, ///////////////// initSet 메서드 /////////////////////

        chgData(헐,슉){
            console.log("데이터변경! 클릭시! : ", 헐,슉);
            헐.sec1_vdsrc = 헐.section1Data.high_jewelry_menu_data[슉].section1.video_src;
            헐.sec1_tit = 헐.section1Data.high_jewelry_menu_data[슉].section1.tit;
            헐.sec1_desc = 헐.section1Data.high_jewelry_menu_data[슉].section1.desc;
        },

        chgtit(state, pm){
            state.pg_tit = state.section1Data.high_jewelry_menu_data[pm].pgName;
            console.log("해당 페이지 title요소의 데이터 변경! : ", pm);
            $("title").text(state.pg_tit.replaceAll("_", " ").toUpperCase() + " | 불가리");
        }
    },
    
}); /////////////////////////// 뷰엑스 스토어 인스턴스 /////////////////////////////////////


// 내보내기
export default store;