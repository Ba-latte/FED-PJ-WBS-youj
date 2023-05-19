// 불가리 PJ GNB 메뉴의 서브페이지 데이터 셋업 객체 JS - sub_page_data.js



// 각 서브 페이지별 데이터 세팅하기

const lnb_menu_data = [
    {
        pg: `bulgari_eden`,
        tit: `BULGARI EDEN, <br> THE GARDEN OF WONDERS`,
        cnt: 1,
        desc:`하이 주얼리 컬렉션 자세히 보기`,
    },
    {
        pg: `magnifica_creations`,
        tit: `매혹적인 작품`,
        cnt: 2,
        desc:`시대를 초월하는 매력의 작품을 만나보세요`,
    },
    {
        pg: `roman_high_jeweller`,
        tit: `로만 하이주얼러`,
        cnt: 3,
        desc:`하이 주얼리 아트 자세히 보기`,
    },
    {
        pg: `bulgari_history`,
        tit: `불가리 역사`,
        cnt: `tm_1.jpg`,
        desc: `자세히 보기`,
    },
    {
        pg: `bulgari_identity`,
        tit: `불가리의 아이덴티티`,
        cnt: `tm_2.jpg`,
        desc: `자세히 보기`,
    },
    {
        pg: `bulgari_innovation`,
        tit: `불가리의 혁신`,
        cnt: `tm_3.jpg`,
        desc: `자세히 보기`,
    },
];



////////////////////// [ 🔥세르펜티 메뉴의 서브페이지 데이터🔥 ] /////////////////////////////
const serpenti_75years_menu_data={
    // 세르펜티 75주년 페이지
    serpenti_75years: {
        // 해당 페이지명
        pgName: "serpenti_75years",
        // 섹션1 메인 동영상
        section1: {
            video_src: `serpenti_75years.mp4`,
            tit: `75년간 함께한 세르펜티`,
            desc: `불가리만의 독창성과 비전을 바탕으로 끊임없이 새로운 모습을 선보인 세르펜티는 지난 75년간 끊임없는 변모를 거듭해 왔습니다. 언제나 색다른 모습으로 매혹적인 자태를 자랑하는 이 아이콘은 영원토록 새롭게 태어나며 대담한 변신을 거듭하는 아이콘으로 남아 있을 것입니다.`,
        },
        // 섹션2 마우스오버 플렉스 그로우 배너
        section2: {
            slide_img_src: [
                `serpenti_75years1.jpg`,
                `serpenti_75years2.jpg`,
                `serpenti_75years3.jpg`,
                `serpenti_75years4.jpg`,
            ],
        },
        // 섹션3 새롭게 진화하는 아이콘
        section3: {
            tit: `새롭게 진화하는 아이콘`,
            desc: `1948년, 손목에 착용하는 주얼리 워치로 첫선을 보인 세르펜티는 아이코닉한 투보가스 기법이 돋보이는 유연하고 스타일리시한 라인을 드러냈습니다. 1950년대로 접어들면서 불가리 세르펜티는 보다 현대적인 스타일로 구현되었고, 1960년대에는 젬스톤과 컬러 에나멜을 활용하여 독창적이고 실험적인 디자인을 구현하는 하나의 캔버스로 거듭났습니다. 육각형 비늘 모티브를 화려하게 재해석한 디테일과 다채롭고 진귀한 매력, 그리고 탁월한 젬스톤의 독특한 조합이 돋보이는 매력적인 디자인과 독창적인 장인 정신을 담아낸 세르펜티는 늘 매혹적인 자태로 시선을 사로잡습니다.`,
            video_src: `serpenti_change.mp4`,
        },
        // 섹션4 여성의 힘
        section4: {
            tit: `여성의 힘`,
            desc: `지난 75년간 여성은 독립적인 인간으로서 재능을 키우고, 마음속의 꿈을 추구하며, 자신의 열망에 부합하는 삶을 살아갈 권리를 누렸습니다. 레드 카펫에서부터 사무실에 이르기까지 세르펜티는 이들의 삶에 함께하는 충실한 동반자로서 당당한 여성의 내면에 깃든 매력을 자연스레 드러냈습니다.`,
            slide_img_src: [
                `serpenti_75years_bn1.jpg`,
                `serpenti_75years_bn2.jpg`,
                `serpenti_75years_bn3.jpg`,
                `serpenti_75years_bn4.jpg`,
                `serpenti_75years_bn5.jpg`,
                `serpenti_75years_bn6.jpg`,
            ],
        },
    }
}; ////////////////////// [ 🔥세르펜티 메뉴의 서브페이지 데이터🔥 ] /////////////////////////////

////////////////////// [ 🔥하이주얼리 메뉴의 서브페이지 데이터🔥 ] /////////////////////////////
const high_jewelry_menu_data={
    // 서브1 - 불가리 에덴 페이지
    bulgari_eden: {
        // 해당 페이지명
        pgName: "bulgari_eden",
        // 섹션1 메인 동영상
        section1: {
            video_src: `./videos/high_jewelry_sub_1.mp4`,
            tit: `BULGARI EDEN, THE GARDEN OF WONDERS <br> 경이로움의 에덴 컬렉션`,
            desc: `평범한 풍경을 뒤로한 채, 경이로움이 가득한 화려한 세계를 만나보세요. 불가리가 무한한 독창성과 방대한 장인 기술이 어우러지는 에덴 하이 주얼리 컬렉션을 통해 숨이 멎을 듯 아름다운 마스터피스를 선보입니다.`,
        },
        // 섹션2 주요 작품 소개 그리드 박스
        section2: {
            rw1: {
                img_src: `./images/sub_page/bulgari_eden/bulgari_eden1.jpg`,
                tit: `에메랄드 글로리 네크리스`,
                desc: `불가리를 대표하는 탁월한 품질과 기술이 돋보이는 에메랄드 글로리 네크리스는 특별한 젬스톤, 무한한 독창성, 독보적인 장인 정신이 만난 화려한 하이 주얼리 마스터피스입니다.`,
            },
            rw2: {
                img_src: `./images/sub_page/bulgari_eden/bulgari_eden2.jpg`,
                tit: `에덴 인챈트먼트 네크리스`,
                desc: `풍성하고 유쾌한 젬스톤으로 지중해의 매력적인 색조를 구성하는 컬러를 표현하는 에덴 인챈트먼트 네크리스는 불가리의 혁신적인 정신과 컬러를 향한 독자적인 접근법을 고스란히 담아낸 작품입니다.`,
            },
            rw3: {
                img_src: `./images/sub_page/bulgari_eden/bulgari_eden3.jpg`,
                tit: `주빌리 에메랄드 가든 티아라`,
                desc: `작품을 헌정받은 전설적인 여왕만큼이나 특별한 매력을 자랑하는 주빌리 에메랄드 가든 티아라는 영국 왕실 최초로 즉위 70주년을 맞이한 엘리자베스 2세의 2022 플래티넘 주빌리를 기념합니다.`,
            },
        },
        // 섹션3 그외 작품 소개 슬라이드 배너
        section3: {
            tit: `시대를 초월하는 매력의 작품을 만나보세요`,
            desc: `눈부신 젬스톤, 독창적인 디자인, 정교한 작업이 조화를 이뤄 놀라운 작품이 완성됩니다. <br> 시대를 초월하는 매력의 작품을 만나보세요.`,
            slide_1: {
                slide_img_src: `./images/sub_page/bulgari_eden/bulgari_eden_bn1.jpg`,
                slide_tit: `트리뷰트 투 파리 네크리스`,
                slide_desc: `화려한 자태로 빛의 도시 파리를 향해 경의를 표하는 트리뷰트 투 파리 네크리스에는 경이로운 5.53캐럿의 에메랄드와 에펠탑에서 영감을 받은 독특한 모티브가 자리하고 있습니다.`,
            },
            slide_2: {
                slide_img_src: `./images/sub_page/bulgari_eden/bulgari_eden_bn2.jpg`,
                slide_tit: `에메랄드 오드 링`,
                slide_desc: `진귀한 에메랄드와 불가리의 오랜 인연에 찬사를 보내는 에메랄드 오드 링은 화려한 젬스톤이 지닌 본연의 아름다움을 이끌어냅니다.`,
            },
            slide_3: {
                slide_img_src: `./images/sub_page/bulgari_eden/bulgari_eden_bn3.jpg`,
                slide_tit: `세르펜티 오션 트레저 네크리스`,
                slide_desc: `끊임없는 변화를 표현하는 매혹적인 상징과 같은 세르펜티 오션 트레저 네크리스에는 콘플라워 블루 컬러로 모두의 시선을 사로잡는 61.31캐럿의 사파이어가 자리잡고 있습니다.`,
            },
            slide_4: {
                slide_img_src: `./images/sub_page/bulgari_eden/bulgari_eden_bn4.jpg`,
                slide_tit: `에메랄드 비너스 네크리스`,
                slide_desc: `자연을 향한 서정적인 찬가와도 같은 에메랄드 비너스 네크리스는 상상력을 자극하는 디자인과 탁월한 장인 기술로 특별한 젬스톤에 우아한 품격을 불어넣습니다.`,
            },
            slide_5: {
                slide_img_src: `./images/sub_page/bulgari_eden/bulgari_eden_bn5.jpg`,
                slide_tit: `메디터레니언 레브리 네크리스`,
                slide_desc: `메디터레니언 레브리 네크리스의 중심부에는 독특한 로얄 블루 컬러로 경이로운 매력을 자아내는 107.15캐럿의 사파이어가 자리잡고 있습니다.`,
            },
            slide_6: {
                slide_img_src: `./images/sub_page/bulgari_eden/bulgari_eden_bn6.jpg`,
                slide_tit: `메디터레니언 사파이어 네크리스`,
                slide_desc: `불가리는 현대에 이르러 세르펜티의 수호자로서 모던한 디자인과 진귀한 젬스톤의 컬러풀한 조합을 통해 세르펜티를 하이 주얼리의 상징으로 다시금 되살리며 계속해서 새로운 변모를 모색합니다.`,
            },

        },
    },
    // 서브2 - 매그니피카 컬렉션
    magnifica_creations: {
        // 해당 페이지명
        pgName: "magnifica_creations",
        // 섹션1 메인 동영상
        section1: {
            video_src: `./videos/high_jewelry_sub_2.mp4`,
            tit: `매그니피카 하이 주얼리 컬렉션`,
            desc: `아름다움과 장인 정신을 표현하는 새로운 매그니피카 하이 주얼리 컬렉션에서는 장엄한 아름다움, 원동력, 궁극적인 목표를 향한 로마 주얼러의 불굴의 헌신을 엿볼 수 있습니다.`,
        },
        // 섹션2 주요 작품 소개 그리드 박스
        section2: {
            rw1: {
                img_src: `./images/sub_page/magnifica_creations/magnifica_creations1.jpg`,
                tit: `루비 메타모포시스 링`,
                desc: `품격 있는 루비 메타모포시스 링의 중심에서 6.80캐럿의 매혹적인 피전 블러드 루비가 눈부시게 빛나며 아름다움과 풍성함에 찬사를 보냅니다. 작지만 매혹적인 작품 속에 예술에 대한 기나긴 스토리를 담아 탁월한 장인 정신을 기품 있게 표현했습니다.`,
            },
            rw2: {
                img_src: `./images/sub_page/magnifica_creations/magnifica_creations2.jpg`,
                tit: `블루 판타지 네크리스`,
                desc: `불가리의 고귀한 컬러 젬스톤을 향한 애정과 숭고한 장인 정신을 향한 헌신을 보여주는 블루 판타지 네크리스는 눈을 뗄 수 없는 매혹적인 47.57캐럿의 사파이어로 완성된 독창적이고 매력적인 디자인을 선보입니다. 아름다움과 고귀함을 통해 감정과 열정을 드러내는 독창적이고 매혹적인 작품이 상상 그 이상의 놀라움을 선사합니다.`,
            },
            rw3: {
                img_src: `./images/sub_page/magnifica_creations/magnifica_creations3.jpg`,
                tit: `지중해의 여왕 네크리스`,
                desc: `놀라운 473.82캐럿의 무게를 지닌 5개의 독특한 쿠션 컷 타원형 파라이바 토르말린이 이 아름다운 지중해 여왕의 하이 주얼리 네크리스의 심장부에 세팅되어 있습니다. 끝없는 인내, 열정적인 끈기, 그리고 우아한 보석을 선택하는 불가리의 독특한 안목이 결합되어 완벽한 예술 작품이 탄생합니다.`,
            },
        },
        // 섹션3 그외 작품 소개 슬라이드 배너
        section3: {
            tit: `하나의 예술 작품으로 승화된 꿈을 만나보세요`,
            desc: `불가리 고유의 품격 있는 매력은 다양한 아이디어를 길이 남을 작품으로 거듭나게 하는 숙련된 불가리 장인의 손길을 거쳐야만 담아낼 수 있습니다. <br> 불가리 장인들은 정교한 장인 기술을 적용하여 탁월한 유연함, 섬세한 인레이, 작품과 어우러지는 유려한 부품을 완성합니다.`,
            slide_1: {
                slide_img_src: `./images/sub_page/magnifica_creations/magnifica_creations_bn1.jpg`,
                slide_tit: `사파이어 페탈 네크리스`,
                slide_desc: `불가리의 가치를 모두 담고 있는 사파이어 페탈 네크리스는 눈으로 보이는 소재뿐 아니라 무형의 풍요로움, 고대의 금세공 전통, 미래를 향한 비전을 독특하게 조합하여 선보입니다.`,
            },
            slide_2: {
                slide_img_src: `./images/sub_page/magnifica_creations/magnifica_creations_bn2.jpg`,
                slide_tit: `바로크 스파이럴 네크리스`,
                slide_desc: `로마, 그리고 로마의 강인한 여성 아이콘에게서 영감을 받은 바로크 스파이럴 네크리스는 역사상 최초의 여성 화가로서 성공적인 커리어를 영위한 이탈리아 예술가 아르테미시아 젠틸레스키를 향한 찬사와도 같습니다.`,
            },
            slide_3: {
                slide_img_src: `./images/sub_page/magnifica_creations/magnifica_creations_bn3.jpg`,
                slide_tit: `에메랄드 일립스 네크리스`,
                slide_desc: `숙련된 장인의 뛰어난 손길을 거쳐 눈부신 젬스톤이 품격 있는 마스터피스로 거듭납니다. 에메랄드 일립스 네크리스는 중앙에 자리잡은 64.03캐럿의 에메랄드에서 뻗어 나오는 매혹적인 나선형으로 시선을 사로잡습니다.`,
            },
            slide_4: {
                slide_img_src: `./images/sub_page/magnifica_creations/magnifica_creations_bn4.jpg`,
                slide_tit: `프로디지어스 컬러 네크리스`,
                slide_desc: `5개의 감탄을 자아내는 카보숑컷 젬스톤이 완벽하게 배치된 프로디지어스 컬러 네크리스는 생동감 넘치는 젬스톤, 놀라운 조합, 과감한 볼륨감을 향한 불가리의 무한한 애정을 드러냅니다.`,
            },
            slide_5: {
                slide_img_src: `./images/sub_page/magnifica_creations/magnifica_creations_bn5.jpg`,
                slide_tit: `임페리얼 스피넬 네크리스`,
                slide_desc: `컬러와 광채를 향한 화려한 찬사와도 같은 임페리얼 스피넬 네크리스는 131.21캐럿의 스피넬이 간직한 독특한 아름다움을 드러내며, 자연에서 만날 수 있는 희귀한 경이로움 속에 담긴 특별한 광채에 생기를 불어넣습니다.`,
            },
            slide_6: {
                slide_img_src: `./images/sub_page/magnifica_creations/magnifica_creations_bn6.jpg`,
                slide_tit: `루비 메타모포시스 네크리스`,
                slide_desc: `탁월한 젬스톤, 강렬한 움직임, 다채로운 착용 방식이 돋보이는 루비 메타모포시스 네크리스는 뛰어난 미적 아름다움을 숭배하는 예술성을 담은 매혹적인 작품입니다.`,
            },

        },
    },
    // 서브3 - 로만 하이주얼러
    roman_high_jeweller: {
        // 해당 페이지명
        pgName: "roman_high_jeweller",
        // 섹션1 메인 동영상
        section1: {
            video_src: `./videos/high_jewelry_sub_3.mp4`,
            tit: `로마의 하이 주얼러`,
            desc: `불가리의 하이 주얼리 컬렉션은 젬스톤의 선명한 컬러와 눈부신 광채로 완성된 특별한 예술 작품입니다. 자연이 선물한 보물과도 같은, 각기 다른 매력을 지닌 진귀한 젬스톤들은 엄격한 기준에 따라 선정된 후 세팅됩니다. 이렇게 완성된 창의적인 디자인은 불가리 스타일을 대표하는 시그니처입니다.`,
        },
        // 섹션2 주요 작품 소개 그리드 박스
        section2: {
            rw1: {
                img_src: `./images/sub_page/roman_high_jeweller/roman_high_jeweller1.jpg`,
                tit: `독특한 디자인`,
                desc: `생동감 넘치는 진귀한 젬스톤에 대한 심미안, 독창적인 컬러 조합, 독보적인 볼륨감이 어우러져 로마의 화려한 유산에서 영감을 받은 유쾌하고 독특한 디자인이 탄생했습니다.
                불가리는 젬스톤과 컬러, 커팅에 대한 독창적인 접근법과 혁신적인 정신을 바탕으로 하이 주얼리 분야에서 창의적인 행보를 이어왔습니다. 불가리의 시그니처 스타일을 고스란히 재현한 카보숑컷은 로마의 기념비적인 돔 형태를 연상시키는 우아하고 여유로운 곡선미를 강조합니다.`,
            },
            rw2: {
                img_src: `./images/sub_page/roman_high_jeweller/roman_high_jeweller2.jpg`,
                tit: `로마의 열정`,
                desc: `불가리의 모든 주얼리는 열정, 인내, 참을성 그리고 광기(Pazzia)와 같은 요소들을 완벽하게 구현합니다. 로마가 추구한 삶의 즐거움에 활기를 불어넣는 열정은 불가리 디자이너와 장인들에게 풍부한 영감을 선사합니다. 완벽한 보석을 찾아내는 데는 항상 인내가 필요하고, 탁월한 컷팅과 세팅, 결과물을 위해서는 참을성이 요구됩니다. “광기(Pazzia)”에 가까운 에너지가 있어야만 궁극의 독창성에 이르는 마법과도 같은 과정을 거칠 수 있습니다.`,
            },
            rw3: {
                img_src: `./images/sub_page/roman_high_jeweller/roman_high_jeweller3.jpg`,
                tit: `장인의 손길`,
                desc: `로마 공방에서 작업하는 숙련된 장인들은 극도로 복잡한 디자인을 현실로 불러내며 상상력을 마음껏 발휘하고 있습니다. 불가리 주얼리의 탁월한 촉감은 여러 세대를 거쳐 계승되어온 뛰어난 노하우와 최고 수준의 독창성으로부터 탄생합니다. 첫 번째 스케치부터 폴리싱, 스톤 선택 및 세팅에 이르는 모든 단계에는 기술적인 스킬 그 이상이 요구됩니다. 전통과 혁신, 독보적인 노하우 사이의 보이지 않는 균형을 이뤄야 하기 때문입니다.`,
            },
        },
        // 섹션3 그외 작품 소개 슬라이드 배너
        section3: {
            tit: `아름다움을 향한 궁극적인 탐구에서 비롯된 결실을 만끽하세요`,
            desc: `불가리는 메종의 보금자리와 같은 로마에서 시작하여 지중해와 그 인근 지역을 아우르는 여정을 통해 메종의 유산이 태동하기 시작했던 뿌리를 자세히 들여다봅니다.`,
            slide_1: {
                slide_img_src: `./images/sub_page/roman_high_jeweller/mediterranea_bn1.jpg`,
                slide_tit: `세르펜티 바로크 네크리스`,
                slide_desc: `세르펜티는 이집트부터 그리스에 이르기까지 고대 세계에서 보호의 상징으로서 소중히 여겨졌습니다. 세르펜티 바로크 네크리스는 이 모티브에 예상을 뛰어넘는 진귀한 젬스톤을 조합하여 고대의 상징이자 1940년대부터 불가리 그 자체로 여겨졌던 세르펜티를 위한 새로운 시대를 열어 나갑니다.`,
            },
            slide_2: {
                slide_img_src: `./images/sub_page/roman_high_jeweller/mediterranea_bn2.jpg`,
                slide_tit: `오리엔탈 버즈 네크리스`,
                slide_desc: `불가리가 선보이는 오리엔탈 버즈 네크리스는 지중해 지역의 영감이 피어나는, 상징적인 의미의 정원에 대한 서정적인 비전을 품은 화려한 하이 주얼리 아이템으로 손꼽힙니다.`,
            },
            slide_3: {
                slide_img_src: `./images/sub_page/roman_high_jeweller/mediterranea_bn3.jpg`,
                slide_tit: `메디테라니안 뮤즈 네크리스`,
                slide_desc: `메디테라니안 뮤즈 네크리스는 영감의 원천과도 같은 지중해에 경의를 표합니다. 이곳은 바로 이탈리아 남부 지역의 영혼이자, 눈부신 아름다움과 매혹적인 힘이 시작되는 공간입니다.`,
            },
            slide_4: {
                slide_img_src: `./images/sub_page/roman_high_jeweller/mediterranea_bn4.jpg`,
                slide_tit: `트리뷰트 투 베니스 네크리스`,
                slide_desc: `화려한 빛의 향연과 함께 다양한 문화에서 받은 영감을 층층이 담아낸 특별한 주얼리는 베니스의 영혼을 향한 매력적인 찬사와도 같습니다.`,
            },
            slide_5: {
                slide_img_src: `./images/sub_page/roman_high_jeweller/mediterranea_bn5.jpg`,
                slide_tit: `엑세드라 네크리스`,
                slide_desc: `에세드라 광장(Esedra Piazza)은 고대 로마 최대 규모의 스파였던 디오클레티아누스 황제 스파의 반원형 실외 응접실을 본떠 이름 지어졌습니다. 광장의 중앙에 자리 잡은 19세기 나이아드 분수에서는 고전적인 신화를 향한 찬사와 같은 네 님프를 만나볼 수 있습니다.`,
            },
            slide_6: {
                slide_img_src: `./images/sub_page/roman_high_jeweller/mediterranea_bn6.jpg`,
                slide_tit: `아칸서스 에메랄드 네크리스`,
                slide_desc: `“정교하게 조각된 아칸서스 플라워 모티브는 파사드 주위에 활력을 더하며 마치 실제로 화이트 컬러의 대리석 꽃잎을 떼어낼 수 있을 것만 같은 느낌을 선사합니다.`,
            },
        },
    },
}; /////////////////// [ 🔥하이주얼리 메뉴의 서브페이지 데이터🔥 ] /////////////////////////

///////////////////// [ 🔥브랜드 메뉴의 서브페이지 데이터🔥 ] /////////////////////////////
const brand_menu_data={
    // 서브1 - 불가리 역사 페이지
    bulgari_history: {
        // 해당 페이지명
        pgName: "bulgari_history",
        // 섹션1 전체 소개
        section1: {
            tit: `불가리 역사`,
            desc: `불가리는 그리스 출신의 은세공가 소티리오 불가리(Sotirio Bulgari)가 1884년에 이탈리아 로마에 설립한 이래로, 이탈리아의 아름다움을 담은 작품과 장인정신, 그리고 장엄한 주얼리 디자인으로 독보적인 명성을 얻었습니다. 불가리는 수 십년 동안 다채로운 컬러 조합으로 차별화된 디자인, 이탈리아 로마의 헤리티지에서 얻은 특별한 모티브와 볼륨감의 완벽한 조화를 담고 있습니다. 브랜드의 풍부한 유산에 늘 깊은 경의를 표하는 한편, 혁신적인 변화와 새로운 트렌드를 도입하는데 주저하지 않은 불가리는 현대 디자인의 아이콘으로 자리매김하게 됩니다.`,
        },
        // 섹션2 주요 소개 박스
        section2: {
            rw1: {
                img_src: `./images/sub_page/bulgari_history/1.png`,
                tit: `실버에서 골드까지`,
                desc: `소티리오 불가리가 세공한 정교한 은공예품은 17-18세기에 유행한 그랜드 투어(Grand Tour)를 즐기던 영국 여행객들에게 큰 사랑을 받았으며 사업은 놀라울 정도로 호황을 맞이합니다. 소티리오 불가리는 로마의 시스티나 거리(Via Sistina )에 첫 번째 스토어를 오픈한 데 이어, 콘도티 거리(Via Condotti)와 관광객들의 방문이 잦은 지역에도 스토어를 오픈했습니다. 그 후, 그의 아들 조르지오(Giorgio)와 코스탄티노(Costantino)가 경영에 합류하면서 불가리는 패밀리 비지니스로 운영되기 시작하였습니다. 그리고 그 무렵 뛰어난 은공예 전문지식을 기반으로, 하이주얼리 비지니스의 성장에 몰두하기 시작하였습니다.`,
            },
            rw2: {
                img_src: `./images/sub_page/bulgari_history/2.png`,
                tit: `화려한 컬러와 다채로운 매력`,
                desc: `1950년대 중반, 불가리는 진귀한 스톤들의 다양한 컬러를 완벽히 어우르는 조화로운 주얼리를 선보이며 다시 한 번 도약합니다. 로마 건축물의 둥근 지붕을 연상시키는 카보숑컷을 통해 보석 본연의 컬러를 극대화하였으며, 이는 브랜드를 대표하는 시그니처가 되었습니다.`,
            },
            rw3: {
                img_src: `./images/sub_page/bulgari_history/3.png`,
                tit: `모듈식 주얼리와 유니크한 소재`,
                desc: `1980년대와 1990년대에 걸쳐 불가리는 브랜드만의 매력을 간직하면서 어느 자리에나 어울리는, 매혹적인 주얼리를 선보였습니다. 모듈식 주얼리는 새로운 센세이션을 불러일으켰습니다. 특히, 강렬한 디자인의 싱글 피스는, 첫 선을 보인 이래 헤마타이트에서부터 코랄, 스틸부터 파베 세팅 다이아몬드까지 다양한 소재로 다채로운 스타일로 선보였습니다.`,
            },
        },
    },
    // 서브2 - 불가리의 아이덴티티 페이지
    bulgari_identity: {
        // 해당 페이지명
        pgName: "bulgari_identity",
        // 섹션1 전체 소개
        section1: {
            tit: `불가리의 아이덴티티`,
            desc: `로마 기반 주얼러 불가리의 트레이드마크가 된, 시대를 초월하여 사랑받는 과감하고 혁신적인 디자인을 만나보세요.`,
        },
        // 섹션2 주요 아이콘 소개 박스
        section2: {
            identity1: {
                main_img_src: `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity1.jpg`,
                tit: `피오레`,
                desc: `100년이 넘는 세월 동안, 불가리는 대담한 창의성을 통해 싱그러운 꽃들의 자연스러운 아름다움에 찬사를 보내고 있습니다. 다이아몬드의 광채로 반짝이는 선명한 컬러의 매혹적인 꽃들이 화려하게 피어납니다. 불가리 고유의 스타일 코드가 플로럴 인스퍼레이션과 조화롭게 균형을 이뤄 더없이 우아한 실루엣을 펼쳐보입니다. 여성스러운 광채로 빛나는, 다이아몬드가 세팅된 트렝블랑 브로치가 움직임에 따라 가볍게 진동합니다. 한편, 다른 모델에서는 부드러운 바람이 어루만지는 듯 신선하고 자연스러운 디자인의 화관이 활짝 피어납니다. 풍성한 컬러와 대담한 형태를 갖춘 탁월한 스타일이 꽃의 활기 넘치는 생명력을 강조합니다. 꽃봉오리와 화관에 생기가 돌며 여성의 아름다움을 더욱 돋보이게 합니다. 모던한 스타일의 화환처럼, 자연의 무한함에서 영감을 얻는 불가리는 꽃의 신비롭고 매혹적인 아름다움을 포착하여 세월이 흘러도 변치 않는 주얼리에 생명을 불어넣습니다.`,
                slide_img_src: [
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_fiore_bn1.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_fiore_bn2.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_fiore_bn3.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_fiore_bn4.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_fiore_bn5.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_fiore_bn6.jpg`,
                ],
            },
            identity2: {
                main_img_src: `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity2`,
                tit: `불가리 불가리`,
                desc: `불가리 불가리 럭셔리 워치는 1975년 크리스마스에 VIP 고객 100명에게 증정하기 위해 제작한 “BVLGARI ROMA”가 새겨진 리미티드 에디션 디지털 워치의 성공적인 반응으로 런칭되었습니다.
                1977년 불가리 로마 모델이 대성공을 거두었고, 워치 역사상 가장 상징적인 디자인 중의 하나인 불가리 불가리 타임피스를 런칭하게 되었습니다. 홍보 활동이 없었음에도 불구하고 입소문으로 빠르게 퍼져나가 점점 더 많은 고객들이 콘도티 스토어를 방문하였습니다.
                시계에는 불가리 불가리 로고가 인그레이빙 되어 있었으며 디자인적인 면에서 호평을 받았습니다. 이 로고 디자인은 고대 로마 코인에 새겨진 황제의 얼굴과 그 주변을 둘러싼 황제의 권력과 권위를 상징하는 인그레이빙에서 영감을 받았습니다. 원형의 불가리 불가리 케이스는 로마 성전의 기둥에서 영감을 받았으며, 세심한 건축학적인 연구를 통해 완성된 심플한 외관의 특징은 디자인과 실험 정신의 새로운 지평을 열어주었습니다.`,
                slide_img_src: [
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn1.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn2.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn3.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn4.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn5.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn6.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn7.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn8.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn9.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_bulgari_bn10.jpg`,
                ],
            },
            identity3: {
                main_img_src: `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity3`,
                tit: `모네떼`,
                desc: `불가리의 가장 유명한 아이콘인 모네떼는 고대 로마 시대의 오랜 주얼리 전통에서 영감을 받아 고대 코인을 장식한 제품입니다. 열정적인 코인 컬렉터인 니콜라 불가리(Nicola Bulgari)는 1960년대에 고대 코인과 결합한 불가리 모네떼 주얼리를 탄생시켰습니다. 모네떼 컬렉션의 모든 제품은 코인의 구조는 그대로 남겨둔 채, 윤곽을 따라 다양하게 세팅하여, 대비를 이루면서도 공통된 디자인을 간직한 독특한 스타일을 완성합니다.
                1966년에 최초로 제작된 코인 주얼리는 현대적이면서도 우아한 매력을 지니고 있으며, 황제의 이름과 통치 기간, 코인의 종류가 인그레이빙 되어 있습니다. 이러한 교육적인 요소가 모든 코인 컬렉션의 일부를 이루고 있습니다.`,
                slide_img_src: [
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn1.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn2.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn3.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn4.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn5.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn6.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn7.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn8.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn9.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_monete_bn10.jpg`,
                ],
            },
            identity4: {
                main_img_src: `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity4`,
                tit: `세르펜티`,
                desc: `고대 시대부터 매혹적인 신화에 등장해 온 뱀은, 지혜와 새로운 탄생, 생명력을 상징하며, 끊임없이 장신구와 부적으로 주얼리에 사용되고 있습니다. 불가리는 이러한 오랜 역사의 모티브를 타임피스에 도입한 최초의 20세기 주얼러입니다. 1940년대 말의 스타일리시한 모델에는 폴리싱 처리된 옐로 골드에 투보가스 밴드 또는 골드 메시가 적용된 유연한 바디를 선보였습니다. 뱀 형태의 투보가스 버전은 다양한 형태의 케이스와 다이얼과 골드에서부터 스틸까지의 다양한 소재로 제작되었습니다.
                1960년대에는 각각 분리된 많은 요소들로 뱀의 비늘을 표현하여 뱀을 형상화하였으며, 워치케이스는 뱀의 머리 부분에 감춰졌습니다. 1970년대에는 투보가스 기법을 불가리 스네이크 워치에 적용함으로써 세련된 워치를 선보였습니다. 현실감 있게 또는 추상적인 기하학적 스타일을 통해 구현된 뱀은 컬러에 대한 열정, 소재 배열, 확실한 착용감, 최첨단 금세공 기술의 상징적인 특징으로 불가리의 오랜 역사를 이어가고 있습니다.`,
                slide_img_src: [
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn1.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn2.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn3.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn4.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn5.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn6.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn7.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn8.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn9.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_serpenti_bn10.jpg`,
                ],
            },
            identity5: {
                main_img_src: `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity5`,
                tit: `파렌티지`,
                desc: `1980년대에 불가리는 비즈니스 여성들의 라이프 스타일에 맞도록 아침부터 밤까지 착용 가능한 주얼리를 제작해야 하는 시대가 왔음을 인식하였습니다. 이러한 아이디어를 바탕으로 불가리는 탁월한 디자인으로 다양하게 제작된 각 부품들을 수작업으로 완성하여 다른 제품과 연결하여 사용할 수 있는 모듈 주얼리를 선보였습니다. 불가리에서 선보인 최초의 모듈 주얼리는 파렌티지 컬렉션이었습니다. 파렌티지는 영감의 원천이자 영원의 도시 로마의 트래버틴 스톤에서 사용된 보도블록 연결방식에서 영감을 받아 탄생하였습니다.
                어느 자리에나 어울리는 탁월한 착용감과 대담하고 독창적인 스타일의 파렌티지 모듈은 그 당시 가장 많이 카피된 디자인 중 하나였습니다.`,
                slide_img_src: [
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn1.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn2.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn3.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn4.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn5.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn6.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn7.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn8.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn9.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_parentesi_bn10.jpg`,
                ],
            },
            identity6: {
                main_img_src: `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity6`,
                tit: `투보가스`,
                desc: `불가리 투보가스는 용접 없이 특별한 전문가의 오랜 시간의 작업으로 제작된 둥근 윤곽선의 유연한 밴드 제품입니다. 세련되고 유연한 투보가스 모티브는 1920년대부터 사용된 가스 파이프의 모양에서 영감을 받았습니다. 19세기 후반에 개발된 이 기술은 1970년대에 불가리가 재현하여 브랜드의 트레이드마크 중 하나가 되었습니다.`,
                slide_img_src: [
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn1.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn2.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn3.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn4.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn5.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn6.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn7.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn8.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn9.jpg`,
                    `../00.자료수집/02.이미지데이터/sub_page/bulgari_identity/bulgari_identity_tubogas_bn10.jpg`,
                ],
            },
        },
    },
    // 서브3 - 불가리의 혁신
    bulgari_innovation: {
        // 해당 페이지명
        pgName: "bulgari_innovation",
        // 섹션1 메인 동영상
        section1: {
            video_src: `../00.자료수집/03.동영상데이터/bulgari_innovation.mp4`,
            tit: `불가리의 혁신`,
            desc: `불가리는 135년간의 대담하고 획기적인 선택을 바탕으로 혁신적인 브랜드로 거듭났습니다. 이탈리아 장인 정신이라는 가치에 깊게 뿌리내린 불가리는 다양한 분야를 넘나들면서 독창적인 세계를 향한 비전을 끊임없이 확장하며 럭셔리의 새로운 미래를 그려 나가고 있습니다.`,
        },
        // 섹션2 마우스오버 배너
        section2: {
            slide_img_src: [
                `../00.자료수집/02.이미지데이터/sub_page/bulgari_innovation/bulgari_innovation1.jpg`,
                `../00.자료수집/02.이미지데이터/sub_page/serpenti_75years/bulgari_innovation2.jpg`,
                `../00.자료수집/02.이미지데이터/sub_page/serpenti_75years/bulgari_innovation3.jpg`,
                `../00.자료수집/02.이미지데이터/sub_page/serpenti_75years/bulgari_innovation4.jpg`,
            ],
        },
    },
}; /////////////////// [ 🔥브랜드 메뉴의 서브페이지 데이터🔥 ] /////////////////////////


/////////////////// [ 🔥주얼리 메뉴의 서브페이지 데이터🔥 ] /////////////////////////
/////////////////// [ 🔥주얼리 메뉴의 서브페이지 데이터🔥 ] /////////////////////////




/////////////////// [ 🔥인게이지먼트&웨딩 메뉴의 서브페이지 데이터🔥 ] /////////////////////////
/////////////////// [ 🔥인게이지먼트&웨딩 메뉴의 서브페이지 데이터🔥 ] /////////////////////////



// 객체 내보내기 ////////////////////////////////////////
export {lnb_menu_data, serpenti_75years_menu_data, high_jewelry_menu_data, brand_menu_data};

