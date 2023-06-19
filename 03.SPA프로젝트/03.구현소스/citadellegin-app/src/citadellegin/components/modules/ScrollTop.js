// 스크롤 최상단 이동 모듈 컴포넌트 JS - ScrollTop.js

import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// AOS 라이브러리
import AOS from 'aos';
import 'aos/dist/aos.css';


// 컴포넌트 만들기
const ScrollTop = ()=>{
    // 현재 라우터의 매핑페이지 알아오기
    const {pathname} = useLocation();

    // 부가 효과 주기
    useEffect(()=>{
        // 스크롤 최상단으로 이동시키기
        window.scrollTo(0, 0);

        // AOS 초기화 : DOM 요소 로딩과 함수 실행 사이의 타이밍 문제가 있는 것 같아서 시차를 주려고 setTimeout을 씀
        setTimeout(()=>AOS.init(), 50);
        
    }, [pathname]); /////////////// useEffect() ///////////////

    // null리턴하기 : 다른 부가적인 코드 실행하지 않는다는 의미
    return null;

}; /////////////////////// ScrollTop 컴포넌트 ///////////////////////

// 내보내기
export default ScrollTop;