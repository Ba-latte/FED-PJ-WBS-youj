/* 불가리 PJ 공통 js - common.js */

/////////////////////////////////// jQB //////////////////////////////////////////
$(()=>{

    let test1 = new Swiper(".section2.recommended_product>.recommended_Swiper", {
        slidesPerView: 3, // 한 화면당 슬라이드 개수
        spaceBetween: 20, // 슬라이드 사이간격(px)
        slidesPerGroup: 1, // 슬라이드 그룹(개수단위로 넘어감!)

        loop: true, // 무한루프(기본값:false)
        loopFillGroupWithBlank: true,
        // 한 화면 단위지정시 단위보다 그룹이 작을 경우 빈칸을 채움
        pagination: {
            // 블릿설정
            el: ".swiper-pagination", // 블릿요소설정
            clickable: false, // 클릭가능여부
        },
        navigation: {
            // 양쪽이동버튼
            nextEl: ".swiper-button-next", // 다음버튼 요소설정
            prevEl: ".swiper-button-prev", // 이전버튼 요소설정
        },
        // autoplay: {
        //     // 자동넘김설정
        //     delay: 2000, // 시간간격(1/1000초)
        //     disableOnInteraction: false,
        //     // 상호작용(건드리는 것!)이 없으면 다시 재시작(false일때)
        // },
        // 사이즈별 슬라이드 개수, 간격 동적 변경 세팅하기
        // Responsive breakpoints
        // breakpoints: {
        //     // when window width is >= 200px
        //     200: {
        //         slidesPerView: 1,
        //         spaceBetween: 0,
        //     },
        //     // when window width is >= 700px
        //     700: {
        //         slidesPerView: 2,
        //         spaceBetween: 10,
        //     },
        //     // when window width is >= 1000px
        //     1000: {
        //         slidesPerView: 3,
        //         spaceBetween: 20,
        //     },
        // },
    });




    /* 좌우버튼 클릭하거나 슬라이드할 때 튀는 이유 알아냄 : 뷰 갯수와 슬라이드 총 갯수가 맞아떨어지지 않아서 그럤음! */
    /* 근데 이제 불릿 클릭하면 반대 방향으로 돌아버림 */
    /* 메인페이지의 추천 제품 스와이퍼 */
    const main_recommended_swiper = new Swiper("", {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        //선택된 슬라이드를 가운데로 오게 하기 : t/f
        centeredSlides: true,
        // loopFillGroupWithBlank : false,
        // slidesPerGroup: 3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            // type: "bullets",
            clickable: false,
        },
        grabCursor: true,
        // loopedSlides: 3
    });

    /* 모바일 lnb메뉴 속 스와이퍼 */
    const swiper = new Swiper(".mob .entire.list .lnb.jewellery .recommended_Swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        grabCursor: true,
    });

    


    /* 🔥성해가 준 샘플🔥 */
    const test_swiper = new Swiper('', {
        //기본 셋팅
        //방향 셋팅 vertical 수직, horizontal 수평 설정이 없으면 수평
        direction: 'horizontal',
        //한번에 보여지는 페이지 숫자
        slidesPerView: 1,
        //페이지와 페이지 사이의 간격
        spaceBetween: 0,
        //드레그 기능 true 사용가능 false 사용불가
        debugger: true,
        //마우스 휠기능 true 사용가능 false 사용불가
        mousewheel: false,
        //반복 기능 true 사용가능 false 사용불가
        loop: true,
        //선택된 슬라이드를 중심으로 true 사용가능 false 사용불가 djqt
        centeredSlides: true,
        // 페이지 전환효과 slidesPerView효과와 같이 사용 불가
        // effect: 'fade',
        speed: 1000,
        //자동 스크를링
        autoplay: {
            //시간 1000 이 1초
            delay: 3500,
            disableOnInteraction: false,
        },
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
        });

}); /////////////////////////////////// jQB //////////////////////////////////////////
