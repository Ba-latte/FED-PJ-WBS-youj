// 메인페이지 컴포넌트

import React, { useState } from "react";
import PageIntro from "../modules/PageIntro";
import SectionIntro from "../modules/SectionIntro";
import SwiperProduct from "../plugin/SwiperProduct";
import LegalAgeVerification from "../common/LegalAgeVerification";


// [ 메인 컴포넌트 ] //////////////////
const Main= ()=>{
    
    // 나이 확인 팝업창 상태관리
    const [check, setCheck] = useState(true);

    return(
        <>
            {/* 0.법적 나이 확인 팝업창 */}
            {/* <LegalAgeVerification /> */}
            {
                check == true &&
                <>
                <LegalAgeVerification />
                {/* 1.페이지 소개 모듈 */}
                <PageIntro />
                {/* 2.섹션 소개 모듈 */}
                <SectionIntro snum="0" cls="sec1" />
                <SectionIntro snum="1" cls="sec2" />
                <SectionIntro snum="2" cls="sec3" />
                {/* 3.스와이퍼 - 제품 배너 모듈 */}
                <SwiperProduct />
                </>
            }
            {
                check == false &&
                <>
                {/* 1.페이지 소개 모듈 */}
                <PageIntro />
                {/* 2.섹션 소개 모듈 */}
                <SectionIntro snum="0" cls="sec1" />
                <SectionIntro snum="1" cls="sec2" />
                <SectionIntro snum="2" cls="sec3" />
                {/* 3.스와이퍼 - 제품 배너 모듈 */}
                <SwiperProduct />
                </>
            }
            
        </>
    );
}; ////////////////// Main 컴포넌트 //////////////////

// 내보내기
export default Main;