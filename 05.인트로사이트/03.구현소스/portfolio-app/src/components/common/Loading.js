// 로딩 화면 모듈 컴포넌트 JS - Loading.js

import React, { useEffect } from 'react';
// CSS
import '../../css/Loading.css';



// 컴포넌트
function Loading(){

    // [ 로딩페이지 열릴 때 적용되는 애니메이션 함수 ]
    const openFn = ()=>{
        const targetBox = document.querySelector(".loading_container");
        targetBox.animate(
            // 키프레임
            [
                // 0%
                {
                    // clipPath: "circle(0% at 50% 50%)"
                    opacity: 0

                },
                // 100%
                {
                    // clipPath: "circle(100% at 50% 50%)"
                    opacity: 1
                }
            ],
            // 옵션
            {
                duration: 1000,
                easing: "cubic-bezier(0.83, 0, 0.21, 1.33)",
                fill: "forwards"
            }
        )
    };

    useEffect(()=>openFn,[]);

    return(
        <>
        <section className="loading_container">

        </section>
        </>
    );
} //////////////////////// Loading 컴포넌트 ////////////////////////

// 내보내기
export default Loading;