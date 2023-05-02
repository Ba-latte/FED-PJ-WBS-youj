// 불가리 PJ 템플릿 데이터 JS - html_code.js

const html_code = {
    // 0. top버튼
    top_btn: `
    <button class="top_btn_bx">
        <span class="material-symbols-outlined keyboard_arrow_up">keyboard_arrow_up</span>
    </button>
    `,
    // 1. 섹션1 메인 동영상
    section_1: `
    <section class="section1 main_video">
        <div class="video_bx wrap">
            <video v-bind:class="main_video_class" v-bind:src="'../00.자료수집/03.동영상데이터/high_jewelry_sub_'+vnum+'.mp4'" v-bind:mynum="vnum" autoplay muted loop playsinline></video>
        </div>
        <div class="txt">
            <span class="headline">
                BULGARI EDEN, THE GARDEN OF WONDERS <br>
                경이로움의 에덴 컬렉션
            </span>
            <span class="catchphrase">
                평범한 풍경을 뒤로한 채, 경이로움이 가득한 화려한 세계를 만나보세요. 불가리가 무한한 독창성과 방대한 장인 기술이 어우러지는 에덴 하이 주얼리 컬렉션을 통해 숨이 멎을 듯 아름다운 마스터피스를 선보입니다.
            </span>
        </div>
    </section>
    `,
    // 2. 섹션2 불가리 에덴 대표 작품 그리드 박스
    section_2: `
    <section class="section2 bulgari_eden ibx">
        <!-- 레이아웃 겉박스 -->
        <article class="list characteristics grid">
            <!-- 첫번째 줄 -->
            <div class="rw1 image" data-aos="fade-right" data-aos-duration="1300">
                <img src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden1.jpg" alt="에메랄드 글로리 네크리스">
            </div>
            <div class="rw1 txt_bx" data-aos="fade-right" data-aos-duration="1300">
                <h3 class="title">에메랄드 글로리 네크리스</h3>
                <p class="txt">
                    불가리를 대표하는 탁월한 품질과 기술이 돋보이는 에메랄드 글로리 네크리스는 특별한 젬스톤, 무한한 독창성, 독보적인 장인 정신이 만난 화려한 하이 주얼리 마스터피스입니다.
                </p>
            </div>
            <!-- 두번째 줄 -->
            <div class="rw2 txt_bx" data-aos="fade-left" data-aos-duration="1300">
                <h3 class="title">에덴 인챈트먼트 네크리스</h3>
                <p class="txt">
                    풍성하고 유쾌한 젬스톤으로 지중해의 매력적인 색조를 구성하는 컬러를 표현하는 에덴 인챈트먼트 네크리스는 불가리의 혁신적인 정신과 컬러를 향한 독자적인 접근법을 고스란히 담아낸 작품입니다.
                </p>
            </div>
            <div class="rw2 image" data-aos="fade-left" data-aos-duration="1300">
                <img src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden2.jpg" alt="에덴 인챈트먼트 네크리스">
            </div>
            <!-- 세번째 줄 -->
            <div class="rw3 image" data-aos="fade-right" data-aos-duration="1300">
                <img src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden3.jpg" alt="주빌리 에메랄드 가든 티아라">
            </div>
            <div class="rw3 txt_bx" data-aos="fade-right" data-aos-duration="1300">
                <h3 class="title">주빌리 에메랄드 가든 티아라</h3>
                <p class="txt">
                    작품을 헌정받은 전설적인 여왕만큼이나 특별한 매력을 자랑하는 주빌리 에메랄드 가든 티아라는 영국 왕실 최초로 즉위 70주년을 맞이한 엘리자베스 2세의 2022 플래티넘 주빌리를 기념합니다.
                </p>
            </div>
        </article>
    </section>
    `,
    // 3. 섹션3 그외 작품 소개 배너
    section_3: `
    <section class="section3 introduction_to_works ibx">
        <div class="txt_bx">
            <h3 class="headline">시대를 초월하는 매력의 작품을 만나보세요</h3>
            <p class="txt">
                눈부신 젬스톤, 독창적인 디자인, 정교한 작업이 조화를 이뤄 놀라운 작품이 완성됩니다. <br>
                시대를 초월하는 매력의 작품을 만나보세요.
            </p>
        </div>
        <div class="swiper intro_Swiper">
            <ol class="swiper-wrapper">
                <li class="swiper-slide">
                    <img class="img" src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden_bn1.jpg" alt="트리뷰트 투 파리 네크리스">
                    <div class="txt_bx">
                        <h3 class="title">트리뷰트 투 파리 네크리스</h3>
                        <p class="txt">
                            화려한 자태로 빛의 도시 파리를 향해 경의를 표하는 트리뷰트 투 파리 네크리스에는 경이로운 5.53캐럿의 에메랄드와 에펠탑에서 영감을 받은 독특한 모티브가 자리하고 있습니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden_bn2.jpg" alt="에메랄드 오드 링">
                    <div class="txt_bx">
                        <h3 class="title">에메랄드 오드 링</h3>
                        <p class="txt">
                            진귀한 에메랄드와 불가리의 오랜 인연에 찬사를 보내는 에메랄드 오드 링은 화려한 젬스톤이 지닌 본연의 아름다움을 이끌어냅니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden_bn3.jpg" alt="세르펜티 오션 트레저 네크리스">
                    <div class="txt_bx">
                        <h3 class="title">세르펜티 오션 트레저 네크리스</h3>
                        <p class="txt">
                            끊임없는 변화를 표현하는 매혹적인 상징과 같은 세르펜티 오션 트레저 네크리스에는 콘플라워 블루 컬러로 모두의 시선을 사로잡는 61.31캐럿의 사파이어가 자리잡고 있습니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden_bn4.jpg" alt="에메랄드 비너스 네크리스">
                    <div class="txt_bx">
                        <h3 class="title">에메랄드 비너스 네크리스</h3>
                        <p class="txt">
                            자연을 향한 서정적인 찬가와도 같은 에메랄드 비너스 네크리스는 상상력을 자극하는 디자인과 탁월한 장인 기술로 특별한 젬스톤에 우아한 품격을 불어넣습니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden_bn5.jpg" alt="메디터레니언 레브리 네크리스">
                    <div class="txt_bx">
                        <h3 class="title">메디터레니언 레브리 네크리스</h3>
                        <p class="txt">
                            메디터레니언 레브리 네크리스의 중심부에는 독특한 로얄 블루 컬러로 경이로운 매력을 자아내는 107.15캐럿의 사파이어가 자리잡고 있습니다.
                        </p>
                    </div>
                </li>
                <li class="swiper-slide">
                    <img class="img" src="../00.자료수집/02.이미지데이터/sub_page/bulgari_eden/bulgari_eden_bn5.jpg" alt="메디터레니언 레브리 네크리스">
                    <div class="txt_bx">
                        <h3 class="title">메디터레니언 레브리 네크리스</h3>
                        <p class="txt">
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
}; ////////////////////////////////// html_code 객체 ////////////////////////////////////////

// 객체 내보내기
export default html_code;
