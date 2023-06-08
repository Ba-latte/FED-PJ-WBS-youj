// 서브페이지 : Original 컴포넌트

import React from "react";
import ProductIntro from "../modules/ProductIntro";
import Scroll from "../modules/Scroll";


// [ 서브페이지 : Original 컴포넌트 ] //////////////////
const Original = ()=>{
    return(
        <>
            {/* 1.제품 소개 모듈 : dete */}
            <ProductIntro pgname="Original" />
            {/* 2.스크롤 안내 표시 모듈 */}
            <Scroll />
        </>
    );
}; ////////////////// 서브페이지 : Original 컴포넌트 //////////////////

// 내보내기
export default Original;