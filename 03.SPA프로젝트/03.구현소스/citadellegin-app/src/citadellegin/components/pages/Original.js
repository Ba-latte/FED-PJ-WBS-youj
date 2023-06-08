// 서브페이지 : Original 컴포넌트

import React from "react";
import ProductIntro from "../modules/ProductIntro";
import Scroll from "../modules/Scroll";

// AOS 라이브러리
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

// [ 서브페이지 : Original 컴포넌트 ] //////////////////
const Original = ()=>{
    return(
        <>
            <ProductIntro pgname="Original" />
            <Scroll />
        </>
    );
}; ////////////////// 서브페이지 : Original 컴포넌트 //////////////////

// 내보내기
export default Original;