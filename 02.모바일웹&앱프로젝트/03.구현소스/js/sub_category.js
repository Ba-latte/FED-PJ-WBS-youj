// 불가리 PJ 서브페이지(하이주얼리, 브랜드) JS - sub_category.js

// 뷰엑스 스토어 객체 JS 가져오기
import store from "./store.js";
// 서브페이지 데이터 객체 JS 가져오기
import {serpenti_75years_menu_data, high_jewelry_menu_data, brand_menu_data} from "./data/sub_page_data.js";

// 스와이퍼 불러오기
import make_v3_noNav_swiper from "./swiper_banner.js";




// 하이주얼리, 브랜드의 lnb메뉴 컴포넌트로 만들기
Vue.component("lnb1-comp",{
    template: `
    <ol class="list category">
        <li>
            <figure class="thumbnail_img" v-on:click="chgData('bulgari_eden')">
                <span class="tit tit1">BULGARI EDEN, <br> THE GARDEN OF WONDERS</span>
                <img src="./images/menu/dt/hj_1.jpg" alt="the garden of wonders 이미지">
                <span class="btn">하이 주얼리 컬렉션 자세히 보기</span>
            </figure>
        </li>
        <li>
            <figure class="thumbnail_img" v-on:click="chgData('magnifica_creations')">
                <span class="tit tit2">매혹적인 작품</span>
                <img src="./images/menu/dt/hj_2.jpg" alt="매혹적인 작품 이미지">
                <span class="btn">시대를 초월하는 매력의 작품을 만나보세요</span>
            </figure>
        </li>
        <li>
            <figure class="thumbnail_img" v-on:click="chgData('roman_high_jeweller')">
                <span class="tit tit3">로만 하이주얼러</span>
                <img src="./images/menu/dt/hj_3.jpg" alt="로만 하이주얼러 이미지">
                <span class="btn">하이 주얼리 아트 자세히 보기</span>
            </figure>
        </li>
    </ol>
    `,
    methods: {
        // 스토어 변수 업데이트 메서드
        chgData(pm){
            // console.log("업데이트!", pm);
            // console.log(store.state.sec1_desc);
            // 스토어 변수를 업데이트한다!!
            store.commit('chgData',pm);
            store.commit("chgtit",pm);
            
            this.setFirst(pm);
        },
        setFirst(pm){
            // console.log("자식에게 있는것!");
            // 서브페이지데이터 중 브랜드 메뉴의 페이지 속성명 배열
            let subCat = ["bulgari_history","bulgari_identity","bulgari_innovation"];
            // 서브페이지데이터 중 각 페이지의 객체명 배열
            let catName = [high_jewelry_menu_data,brand_menu_data];
            // 가지고 들어온 전달변수값이 subCat 변수에 담긴 배열 중 어느 값의 순번에 해당하는지 확인 후, 이 배열 안에 해당되는게 없으면 0을 / 해당되는 게 있다면 1을 할당하도록 하기
            let cnum = subCat.indexOf(pm)!=-1?1:0;

            // console.log("검사:",subCat.indexOf(pm));

            // 4. 메뉴 데이터 객체에서 카테고리값 선택하기
            // 서브페이지데이터 중 각 페이지의 객체명 배열이 cnum에 따라서 0/1이 되고, 그 말은 하이주얼리메뉴와 브랜드메뉴로 구분되어진다는 말임
            // ->그렇게 구분 후 각 객체의 pgName속성의 값에서 모든"_"를 " "로 바꾼 후, 전부 대문자로 바꾸기            
            const mdata = catName[cnum][pm].pgName.replaceAll("_", " ").toUpperCase();

            // console.log("서브페이지 데이터 객체에서 해당하는 속성명 가져오기 : ", mdata);

            // 5. 대상에 변경 적용하기 : 카테고리 페이지 타이틀 넣기
            // title태그 변수에 할당하기
            const sub_pg_tit = $("title");

            // title태그의 텍스트 데이터를 바꾸기
            sub_pg_tit.text(mdata + " | 불가리 공식 온라인 스토어");

            // 데이터 바꾸기 함수 호출
            // 가져온 전달변수의 값을 가지고 chgData로 들어가기(?)
            store.commit('chgData',pm);
    
            // cnum 이 1이면 브랜드 이므로 상단, 하단 안보이게 처리함!
            if(cnum===1)
            $(".video_bx").hide();
            else
            $(".video_bx").show();

            // 6.url 강제 변경하기
            history.pushState(null,null,"sub.html?cat="+pm);
        },
    }
}); /////////////////// lnb-comp 전역 컴포넌트 //////////////////////

// 브랜드의 lnb메뉴 컴포넌트로 만들기
Vue.component("lnb2-comp",{
    template: `
    <ol class="list category">
        <li>
            <figure class="thumbnail_img" v-on:click="chgData('bulgari_history');">
                <span class="tit tit1">불가리 역사</span>
                <img class="th_img1" src="./images/menu/dt/tm_1.jpg" alt="불가리 역사 이미지">
                <span class="btn">자세히 보기</span>
            </figure>
        </li>
        <li>
            <figure class="thumbnail_img" v-on:click="chgData('bulgari_identity')">
                <span class="tit tit2">불가리의 아이덴티티</span>
                <img class="th_img2" src="./images/menu/dt/tm_2.jpg" alt="불가리의 아이덴티티 이미지">
                <span class="btn">자세히 보기</span>
            </figure>
        </li>
        <li>
            <figure class="thumbnail_img" v-on:click="chgData('bulgari_innovation')">
                <span class="tit tit3">불가리의 혁신</span>
                <img class="th_img3" src="./images/menu/dt/tm_3.jpg" alt="불가리의 혁신 이미지">
                <span class="btn">자세히 보기</span>
            </figure>
        </li>
    </ol>
    `,
    methods: {
        // 스토어 변수 업데이트 메서드
        chgData(pm){
            this.setFirst(pm);
            // console.log("업데이트!", pm);
            // console.log(store.state.sec1_desc);
            // 스토어 변수를 업데이트한다!!
            store.commit('chgData',pm);
            store.commit("chgtit",pm);
        },
        setFirst(pm){
            // console.log("자식에게 있는것!");
            // 서브페이지데이터 중 브랜드 메뉴의 페이지 속성명 배열
            let subCat = ["bulgari_history","bulgari_identity","bulgari_innovation"];
            // 서브페이지데이터 중 각 페이지의 객체명 배열
            let catName = [high_jewelry_menu_data,brand_menu_data];
            // 가지고 들어온 전달변수값이 subCat 변수에 담긴 배열 중 어느 값의 순번에 해당하는지 확인 후, 이 배열 안에 해당되는게 없으면 0을 / 해당되는 게 있다면 1을 할당하도록 하기
            let cnum = subCat.indexOf(pm)!=-1?1:0;

            // console.log("검사:",subCat.indexOf(pm));

            // 4. 메뉴 데이터 객체에서 카테고리값 선택하기
            // 서브페이지데이터 중 각 페이지의 객체명 배열이 cnum에 따라서 0/1이 되고, 그 말은 하이주얼리메뉴와 브랜드메뉴로 구분되어진다는 말임
            // ->그렇게 구분 후 각 객체의 pgName속성의 값에서 모든"_"를 " "로 바꾼 후, 전부 대문자로 바꾸기            
            const mdata = catName[cnum][pm].pgName.replaceAll("_", " ").toUpperCase();

            // console.log("서브페이지 데이터 객체에서 해당하는 속성명 가져오기 : ", mdata);

            // 5. 대상에 변경 적용하기 : 카테고리 페이지 타이틀 넣기
            // title태그 변수에 할당하기
            const sub_pg_tit = $("title");

            // title태그의 텍스트 데이터를 바꾸기
            sub_pg_tit.text(mdata + " | 불가리 공식 온라인 스토어");

            // 데이터 바꾸기 함수 호출
            // 가져온 전달변수의 값을 가지고 chgData로 들어가기(?)
            store.commit('chgData',pm);
    
            // cnum 이 1이면 브랜드 이므로 상단, 하단 안보이게 처리함!
            if(cnum===1)
            $(".video_bx").hide();
            else
            $(".video_bx").show();

            // 6.url 강제 변경하기
            history.pushState(null,null,"sub.html?cat="+pm);
        },
    }
}); /////////////////// lnb-comp 전역 컴포넌트 //////////////////////



// 섹션1 컴포넌트로 만들기
Vue.component("sec1-comp", {
    template: `
    <section class="section1 main_video">
        <div class="video_bx wrap" >
            <video class="main_video_class bulgari_eden" v-bind:src="$store.state.sec1_vdsrc" autoplay muted loop playsinline></video>
        </div>
        <div class="txt">
            <span class="headline" v-html="$store.state.sec1_tit"></span>
            <span class="catchphrase" v-text="$store.state.sec1_desc"></span>
        </div>
    </section>
    `,
    data: function(){
        return{}
    },
    methods:{
        
    },
}); ///////////////// sec1-comp 전역 컴포넌트 /////////////////////////

// top버튼 컴포넌트로 만들기
Vue.component("topbtn-comp", {
    template: `
    <button class="top_btn_bx">
        <span class="material-symbols-outlined keyboard_arrow_up">keyboard_arrow_up</span>
    </button>
    `,
}); ///////////////// topbtn-comp 전역 컴포넌트 /////////////////////////

// 섹션2 컴포넌트로 만들기
Vue.component("sec2-comp", {
    template: `
    <section class="section2 bulgari_eden ibx">
        <!-- 레이아웃 겉박스 -->
        <article class="list characteristics grid">
            <!-- 첫번째 줄 -->
            <div class="rw1 image" data-aos="fade-right" data-aos-duration="1300">
                <img v-bind:src="$store.state.sec2_rw1_img_src" v-bind:alt="$store.state.sec2_rw1_tit">
            </div>
            <div class="rw1 txt_bx" data-aos="fade-right" data-aos-duration="1300">
                <h3 class="title" v-text="$store.state.sec2_rw1_tit"></h3>
                <p class="txt" v-text="$store.state.sec2_rw1_desc">
                    불가리를 대표하는 탁월한 품질과 기술이 돋보이는 에메랄드 글로리 네크리스는 특별한 젬스톤, 무한한 독창성, 독보적인 장인 정신이 만난 화려한 하이 주얼리 마스터피스입니다.
                </p>
            </div>
            <!-- 두번째 줄 -->
            <div class="rw2 txt_bx" data-aos="fade-left" data-aos-duration="1300">
                <h3 class="title" v-text="$store.state.sec2_rw2_tit">에덴 인챈트먼트 네크리스</h3>
                <p class="txt" v-text="$store.state.sec2_rw2_desc">
                    풍성하고 유쾌한 젬스톤으로 지중해의 매력적인 색조를 구성하는 컬러를 표현하는 에덴 인챈트먼트 네크리스는 불가리의 혁신적인 정신과 컬러를 향한 독자적인 접근법을 고스란히 담아낸 작품입니다.
                </p>
            </div>
            <div class="rw2 image" data-aos="fade-left" data-aos-duration="1300">
                <img v-bind:src="$store.state.sec2_rw2_img_src" v-bind:alt="$store.state.sec2_rw2_tit">
            </div>
            <!-- 세번째 줄 -->
            <div class="rw3 image" data-aos="fade-right" data-aos-duration="1300">
                <img v-bind:src="$store.state.sec2_rw3_img_src" v-bind:alt="$store.state.sec2_rw3_tit">
            </div>
            <div class="rw3 txt_bx" data-aos="fade-right" data-aos-duration="1300">
                <h3 class="title" v-text="$store.state.sec2_rw3_tit">주빌리 에메랄드 가든 티아라</h3>
                <p class="txt" v-text="$store.state.sec2_rw3_desc">
                    작품을 헌정받은 전설적인 여왕만큼이나 특별한 매력을 자랑하는 주빌리 에메랄드 가든 티아라는 영국 왕실 최초로 즉위 70주년을 맞이한 엘리자베스 2세의 2022 플래티넘 주빌리를 기념합니다.
                </p>
            </div>
        </article>
    </section>
    `,
}); //////////////////// sec2-comp 전역 컴포넌트 ///////////////////////////////

// 섹션3 컴포넌트로 만들기
Vue.component("sec3-comp", {
    template: `
    <section class="section3 introduction_to_works ibx">
        <div class="txt_bx">
            <h3 class="headline" v-text="$store.state.sec3_tit">시대를 초월하는 매력의 작품을 만나보세요</h3>
            <p class="txt" v-html="$store.state.sec3_desc">
                눈부신 젬스톤, 독창적인 디자인, 정교한 작업이 조화를 이뤄 놀라운 작품이 완성됩니다. <br>
                시대를 초월하는 매력의 작품을 만나보세요.
            </p>
        </div>
        <div class="swiper intro_Swiper">
            <ol class="swiper-wrapper">
                <li class="swiper-slide">
                    <img class="img" v-bind:src="$store.state.sec3_slide_1_slide_img_src" v-bind:alt="$store.state.sec3_slide_1_slide_tit">
                    <div class="txt_bx">
                        <h3 class="title" v-text="$store.state.sec3_slide_1_slide_tit">트리뷰트 투 파리 네크리스</h3>
                        <p class="txt" v-text="$store.state.sec3_slide_1_slide_desc">
                            화려한 자태로 빛의 도시 파리를 향해 경의를 표하는 트리뷰트 투 파리 네크리스에는 경이로운 5.53캐럿의 에메랄드와 에펠탑에서 영감을 받은 독특한 모티브가 자리하고 있습니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" v-bind:src="$store.state.sec3_slide_2_slide_img_src" v-bind:alt="$store.state.sec3_slide_2_slide_tit">
                    <div class="txt_bx">
                        <h3 class="title" v-text="$store.state.sec3_slide_2_slide_tit">에메랄드 오드 링</h3>
                        <p class="txt" v-text="$store.state.sec3_slide_2_slide_desc">
                            진귀한 에메랄드와 불가리의 오랜 인연에 찬사를 보내는 에메랄드 오드 링은 화려한 젬스톤이 지닌 본연의 아름다움을 이끌어냅니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" v-bind:src="$store.state.sec3_slide_3_slide_img_src" v-bind:alt="$store.state.sec3_slide_3_slide_tit">
                    <div class="txt_bx">
                        <h3 class="title" v-text="$store.state.sec3_slide_3_slide_tit">세르펜티 오션 트레저 네크리스</h3>
                        <p class="txt" v-text="$store.state.sec3_slide_3_slide_desc">
                            끊임없는 변화를 표현하는 매혹적인 상징과 같은 세르펜티 오션 트레저 네크리스에는 콘플라워 블루 컬러로 모두의 시선을 사로잡는 61.31캐럿의 사파이어가 자리잡고 있습니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" v-bind:src="$store.state.sec3_slide_4_slide_img_src" v-bind:alt="$store.state.sec3_slide_4_slide_tit">
                    <div class="txt_bx">
                        <h3 class="title" v-text="$store.state.sec3_slide_4_slide_tit">에메랄드 비너스 네크리스</h3>
                        <p class="txt" v-text="$store.state.sec3_slide_4_slide_desc">
                            자연을 향한 서정적인 찬가와도 같은 에메랄드 비너스 네크리스는 상상력을 자극하는 디자인과 탁월한 장인 기술로 특별한 젬스톤에 우아한 품격을 불어넣습니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" v-bind:src="$store.state.sec3_slide_5_slide_img_src" v-bind:alt="$store.state.sec3_slide_5_slide_tit">
                    <div class="txt_bx">
                        <h3 class="title" v-text="$store.state.sec3_slide_5_slide_tit">메디터레니언 레브리 네크리스</h3>
                        <p class="txt" v-text="$store.state.sec3_slide_5_slide_desc">
                            메디터레니언 레브리 네크리스의 중심부에는 독특한 로얄 블루 컬러로 경이로운 매력을 자아내는 107.15캐럿의 사파이어가 자리잡고 있습니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" v-bind:src="$store.state.sec3_slide_6_slide_img_src" v-bind:alt="$store.state.sec3_slide_6_slide_tit">
                    <div class="txt_bx">
                        <h3 class="title" v-text="$store.state.sec3_slide_6_slide_tit">메디터레니언 레브리 네크리스</h3>
                        <p class="txt" v-text="$store.state.sec3_slide_6_slide_desc">
                            메디터레니언 레브리 네크리스의 중심부에는 독특한 로얄 블루 컬러로 경이로운 매력을 자아내는 107.15캐럿의 사파이어가 자리잡고 있습니다.
                        </p>
                    </div>
                </li>
            </ol>
            <!-- 스와이퍼의 불릿 -->
            <div class="swiper-pagination"></div>
        </div>
    </section>
    `,
}); ///////////////////// sec3-comp 전역 컴포넌트 //////////////////////////////





///////////////////////////////////// [ 뷰 인스턴스 생성하기 ] /////////////////////////////////////
const contVue = new Vue({
    el: "#test",
    store,
    data:{
        param:"",
    },
    methods:{
        setFirst(){
            // 서브페이지데이터 중 브랜드 메뉴의 페이지 속성명 배열
            let subCat = ["bulgari_history","bulgari_identity","bulgari_innovation"];
            // 서브페이지데이터 중 각 페이지의 객체명 배열
            let catName = [high_jewelry_menu_data,brand_menu_data];
            // 가지고 들어온 전달변수값이 subCat 변수에 담긴 배열 중 어느 값의 순번에 해당하는지 확인 후, 이 배열 안에 해당되는게 없으면 0을 / 해당되는 게 있다면 1을 할당하도록 하기
            let cnum = subCat.indexOf(this.param)!=-1?1:0;
    
            // console.log("검사:",subCat.indexOf(this.param));
    
            // 4. 메뉴 데이터 객체에서 카테고리값 선택하기
            // 서브페이지데이터 중 각 페이지의 객체명 배열이 cnum에 따라서 0/1이 되고, 그 말은 하이주얼리메뉴와 브랜드메뉴로 구분되어진다는 말임
            // ->그렇게 구분 후 각 객체의 pgName속성의 값에서 모든"_"를 " "로 바꾼 후, 전부 대문자로 바꾸기
            const mdata = catName[cnum][this.param].pgName.replaceAll("_", " ").toUpperCase();
            // console.log("서브페이지 데이터 객체에서 해당하는 속성명 가져오기 : ", mdata);

            // 5. 대상에 변경 적용하기 : 카테고리 페이지 타이틀 넣기
            // title태그 변수에 할당하기
            const sub_pg_tit = $("title");
            // title태그의 텍스트 데이터를 바꾸기
            sub_pg_tit.text(mdata + " | 불가리 공식 온라인 스토어");
    
            // 가져온 전달변수의 값을 가지고 chgData로 들어가기(?)
            store.commit('chgData',this.param);
    
            // cnum 이 1이면 브랜드 이므로 상단, 하단 안보이게 처리함!
            if(cnum===1)
            $(".video_bx").hide();
            else
            $(".video_bx").show();
        },
        takeThis(){
            // console.log("여기요");
        }
    },
    // 데이터 세팅하기
    created(){
        store.commit('chgData','bulgari_eden')
        

        // 클릭된 lnb메뉴의 이름으로 title요소 데이터값 바꾸기
        // 🌷1.넘어온 url 받기 : 넘어온 url은 로딩구역 밖에서 받아도 된다!
        let pm = location.href;
        // 2.문자열 잘라서 값으로 읽어오기
        pm = pm.split("?")[1].split("=")[1];

        
        // 3.pm값 특수문자 복원하기 : 디코딩하기!
        pm = decodeURIComponent(pm);
        // console.log("넘어온 url받은 pm변수의 값은? : ",pm);
        
        this.param = pm;
        
        // console.log("여기요~!!",this.param);


    }, //////////////// created 구역 ///////////////////
    // jQB 구역
    mounted(){
        // 각페이지 첫화면에 데이터 셋업하기
        this.setFirst();

        
        }, //////////////// mounted 구역 ///////////////////

}); ////////////////// contVue 인스턴스 ////////////////////
///////////////////////////////////// [ 뷰 인스턴스 생성하기 ] /////////////////////////////////////




/* 👉호출해서 스와이퍼 개별 적용하기 */
make_v3_noNav_swiper(".section3.introduction_to_works>.intro_Swiper");

make_v3_noNav_swiper(".power_of_women .power_of_women_banner");





// AOS 라이브러리 불러오기
AOS.init();

