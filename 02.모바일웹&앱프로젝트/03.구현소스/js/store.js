// 뷰엑스 스토어 : 전역 뷰 데이터 저장소 JS  - store.js


// 하이주얼리 하위메뉴 데이터, 브랜드 하위메뉴 데이터 가져오기
import {lnb_menu_data, high_jewelry_menu_data, brand_menu_data} from "./data/sub_page_data.js";

////////////////////////////// 😊뷰엑스 스토어를 활용한 변수 세팅하기😊 /////////////////////////////////////
// 1.뷰엑스 스토어 인스턴스를 생성한다
const store = new Vuex.Store({
    // (1)데이터 세팅 구역
    state:{
        // 하이주얼리 하위메뉴와 브랜드 하위메뉴 데이터 셋업
        subPgData:{high_jewelry_menu_data, brand_menu_data},
        
        // 페이지의 title 요소 데이터 변경 셋업 변수
        pg_tit:"",

        // 섹션1 데이터 셋업 변수
        sec1_vdsrc:"",
        sec1_tit:"",
        sec1_desc:"",

        // 섹션2 데이터 셋업 변수
        sec2_rw1_img_src:"",
        sec2_rw1_tit:"",
        sec2_rw1_desc:"",
        sec2_rw2_img_src:"",
        sec2_rw2_tit:"",
        sec2_rw2_desc:"",
        sec2_rw3_img_src:"",
        sec2_rw3_tit:"",
        sec2_rw3_desc:"",

        // 섹션3 데이터 셋업 변수
        sec3_tit:"",
        sec3_desc:"",
        sec3_slide_1_slide_img_src:"",
        sec3_slide_1_slide_tit:"",
        sec3_slide_1_slide_desc:"",
        sec3_slide_2_slide_img_src:"",
        sec3_slide_2_slide_tit:"",
        sec3_slide_2_slide_desc:"",
        sec3_slide_3_slide_img_src:"",
        sec3_slide_3_slide_tit:"",
        sec3_slide_3_slide_desc:"",
        sec3_slide_4_slide_img_src:"",
        sec3_slide_4_slide_tit:"",
        sec3_slide_4_slide_desc:"",
        sec3_slide_5_slide_img_src:"",
        sec3_slide_5_slide_tit:"",
        sec3_slide_5_slide_desc:"",
        sec3_slide_6_slide_img_src:"",
        sec3_slide_6_slide_tit:"",
        sec3_slide_6_slide_desc:"",
        

    }, /////////// state 구역 ///////////
    // (2)데이터 변경 메서드 구역 : 호출시 commit() 사용!
    mutations:{
        // 초기 데이터 셋업 메서드
        initSet(헐, param){
            // console.log("데이터변경! 초기화 : ", 헐,param);

        }, ///////////////// initSet 메서드 /////////////////////

        // 각 페이지의 타이틀요소 바꾸는 메서드
        chgtit(state, pm){
            let subCat = ["bulgari_history","bulgari_identity","bulgari_innovation"];
            let catName = [high_jewelry_menu_data,brand_menu_data];
            let cnum = subCat.indexOf(pm)!=-1?1:0;

            // 4. 메뉴 데이터 객체에서 카테고리값 선택하기
            const mdata = catName[cnum][pm].pgName.replaceAll("_", " ").toUpperCase();
            // console.log("서브페이지 데이터 객체에서 해당하는 속성명 가져오기 : ", mdata);
            // 5. 대상에 변경 적용하기 : 카테고리 페이지 타이틀 넣기
            const sub_pg_tit = $("title");
            sub_pg_tit.text(mdata + " | 불가리 공식 온라인 스토어");

            // cnum 이 1이면 브랜드 이므로 상단, 하단 안보이게 처리함!
            if(cnum===1)
            $(".video_bx").hide();
            else
            $(".video_bx").show();
        }, ///////////////////// chgtit() /////////////////////////////

        // 각 페이지의 데이터 바꾸는 메서드
        chgData(헐,슉){
            // console.log("데이터변경! 클릭시!", 슉);
            let high_jewelry_Obj = 헐.subPgData.high_jewelry_menu_data[슉];
            let bulgari_brand_Obj = 헐.subPgData.brand_menu_data[슉];
            if(슉==="bulgari_eden" || 슉==="magnifica_creations" || 슉==="roman_high_jeweller"){
                // console.log("하이주얼리 하위 메뉴들이야!!");
                헐.sec1_vdsrc = high_jewelry_Obj.section1.video_src;
                헐.sec1_tit = high_jewelry_Obj.section1.tit;
                헐.sec1_desc = high_jewelry_Obj.section1.desc;

                헐.sec2_rw1_img_src = high_jewelry_Obj.section2.rw1.img_src;
                헐.sec2_rw1_tit = high_jewelry_Obj.section2.rw1.tit;
                헐.sec2_rw1_desc = high_jewelry_Obj.section2.rw1.desc;
                헐.sec2_rw2_img_src = high_jewelry_Obj.section2.rw2.img_src;
                헐.sec2_rw2_tit = high_jewelry_Obj.section2.rw2.tit;
                헐.sec2_rw2_desc = high_jewelry_Obj.section2.rw2.desc;
                헐.sec2_rw3_img_src = high_jewelry_Obj.section2.rw3.img_src;
                헐.sec2_rw3_tit = high_jewelry_Obj.section2.rw3.tit;
                헐.sec2_rw3_desc = high_jewelry_Obj.section2.rw3.desc;

                헐.sec3_tit = high_jewelry_Obj.section3.tit;
                헐.sec3_desc = high_jewelry_Obj.section3.desc;
                헐.sec3_slide_1_slide_img_src = high_jewelry_Obj.section3.slide_1.slide_img_src;
                헐.sec3_slide_1_slide_tit = high_jewelry_Obj.section3.slide_1.slide_tit;
                헐.sec3_slide_1_slide_desc = high_jewelry_Obj.section3.slide_1.slide_desc;
                헐.sec3_slide_2_slide_img_src = high_jewelry_Obj.section3.slide_2.slide_img_src;
                헐.sec3_slide_2_slide_tit = high_jewelry_Obj.section3.slide_2.slide_tit;
                헐.sec3_slide_2_slide_desc = high_jewelry_Obj.section3.slide_2.slide_desc;
                헐.sec3_slide_3_slide_img_src = high_jewelry_Obj.section3.slide_3.slide_img_src;
                헐.sec3_slide_3_slide_tit = high_jewelry_Obj.section3.slide_3.slide_tit;
                헐.sec3_slide_3_slide_desc = high_jewelry_Obj.section3.slide_3.slide_desc;
                헐.sec3_slide_4_slide_img_src = high_jewelry_Obj.section3.slide_4.slide_img_src;
                헐.sec3_slide_4_slide_tit = high_jewelry_Obj.section3.slide_4.slide_tit;
                헐.sec3_slide_4_slide_desc = high_jewelry_Obj.section3.slide_4.slide_desc;
                헐.sec3_slide_5_slide_img_src = high_jewelry_Obj.section3.slide_5.slide_img_src;
                헐.sec3_slide_5_slide_tit = high_jewelry_Obj.section3.slide_5.slide_tit;
                헐.sec3_slide_5_slide_desc = high_jewelry_Obj.section3.slide_5.slide_desc;
                헐.sec3_slide_6_slide_img_src = high_jewelry_Obj.section3.slide_6.slide_img_src;
                헐.sec3_slide_6_slide_tit = high_jewelry_Obj.section3.slide_6.slide_tit;
                헐.sec3_slide_6_slide_desc = high_jewelry_Obj.section3.slide_6.slide_desc;
            }
            else if(슉==="bulgari_history" || 슉==="bulgari_identity" || 슉==="bulgari_innovation"){
                // console.log("브랜드 하위 메뉴들이야!!");
                헐.sec1_tit = bulgari_brand_Obj.section1.tit;
                헐.sec1_desc = bulgari_brand_Obj.section1.desc;

                if(슉==="bulgari_history"){
                헐.sec2_rw1_img_src = bulgari_brand_Obj.section2.rw1.img_src;
                헐.sec2_rw1_tit = bulgari_brand_Obj.section2.rw1.tit;
                헐.sec2_rw1_desc = bulgari_brand_Obj.section2.rw1.desc;
                헐.sec2_rw2_img_src = bulgari_brand_Obj.section2.rw2.img_src;
                헐.sec2_rw2_tit = bulgari_brand_Obj.section2.rw2.tit;
                헐.sec2_rw2_desc = bulgari_brand_Obj.section2.rw2.desc;
                헐.sec2_rw3_img_src = bulgari_brand_Obj.section2.rw3.img_src;
                헐.sec2_rw3_tit = bulgari_brand_Obj.section2.rw3.tit;
                헐.sec2_rw3_desc = bulgari_brand_Obj.section2.rw3.desc;

                }
            }
        }, ///////////// chgData() /////////////
        

    }, ////////////// mutations 구역 ////////////////////

    
}); /////////////////////////// 뷰엑스 스토어 인스턴스 /////////////////////////////////////


// 내보내기
export default store;