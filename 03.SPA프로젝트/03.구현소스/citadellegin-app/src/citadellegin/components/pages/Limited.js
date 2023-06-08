// 서브페이지 : limited 페이지 컴포넌트

import React from "react";
import ProductIntro from "../modules/ProductIntro";
import Scroll from "../modules/Scroll";


// [ 서브페이지 : limited 페이지 컴포넌트 ] //////////////////
const Limited = ()=>{
    return(
        <>
            {/* 1.제품 소개 모듈 : Limited */}
            <ProductIntro pgname="Limited" />
            {/* 2.스크롤 안내 표시 모듈 */}
            <Scroll />
        </>
    );
}; ////////////////// 서브페이지 : limited 페이지 컴포넌트 //////////////////

// 내보내기
export default Limited;