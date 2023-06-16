// 메인페이지 컴포넌트

import React from "react";
import PageIntro from "../modules/PageIntro";
import SectionIntro from "../modules/SectionIntro";
import SwiperProduct from "../plugin/SwiperProduct";


// [ 메인 컴포넌트 ] //////////////////
const Main= ()=>{
    return(
        <>
            {/* 1.페이지 소개 모듈 */}
            <PageIntro />
            {/* 2.섹션 소개 모듈 */}
            <SectionIntro snum="1" />
            {/* 3.스와이퍼 - 제품 배너 모듈 */}
            <SwiperProduct />
        </>
    );
}; ////////////////// Main 컴포넌트 //////////////////

// 내보내기
export default Main;