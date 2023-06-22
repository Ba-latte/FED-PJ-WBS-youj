// 로딩 화면 모듈 컴포넌트 JS - Loading.js

import '../../css/loading.css';


const Loading = ()=>{
    return(
        <>
            <section className="loading_container">
                {/* 1.배경이미지 */}
                <div className="bg_wrap">
                    <img src="./images/dt/main/background-left.png" alt="배경이미지" data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out" />
                    <img src="./images/dt/main/background-right.png" alt="배경이미지" data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-delay="500" />
                </div>
                {/* 2. svg - 로딩 애니메이션 박스 */}
                <div className="svg_wrap">
                    <svg className="loading" x="0px" y="0px" viewBox="0 0 520 120">
                        <defs>
                            <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
                                <path fill="#fff" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
                            </pattern>
                            <text id="text" transform="matrix(1 0 0 1 -8.0684 116.7852)">Loading</text>
                            <mask id="text_mask">
                                <use x="0" y="0" xlinkHref="#text" opacity="1" fill="#fcb900"/>
                            </mask>
                        </defs>
                        <use x="0" y="0" xlinkHref="#text" fill="#fcb900"/>
                        <rect className="water-fill" mask="url(#text_mask)" fill="url(#water)" x="-400" y="0" width="1600" height="120"/>
                    </svg>
                </div>
            </section>
        </>
    );
};

// 내보내기
export default Loading;