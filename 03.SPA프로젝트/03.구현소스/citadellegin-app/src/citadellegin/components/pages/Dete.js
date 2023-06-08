// 서브페이지 : dete 페이지 컴포넌트

import React from "react";
import ProductIntro from "../modules/ProductIntro";
import Scroll from "../modules/Scroll";

// AOS 라이브러리
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();



// [ 서브페이지 : dete 페이지 컴포넌트 ] //////////////////
const Dete = ()=>{
    return(
        <>
            <h1>서브페이지 : dete 페이지</h1>
            <ProductIntro pgname="Dete" />
            <Scroll />
        </>
    );
}; ////////////////// 서브페이지 : dete 페이지 컴포넌트 //////////////////

// 내보내기
export default Dete;