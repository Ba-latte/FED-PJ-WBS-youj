// 스크롤 유도 표시 컴포넌트 - Scroll.js

import './css/scroll.css';


// [ 스크롤 유도 표시 컴포넌트 ]
const Scroll = ()=>{
    return(
        <div className="scrl_container">  
            {/* 화살표 꼬리모양 svg */}
            <svg className="arrow-tail" viewBox="0 0 20 20">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Group-2" transform="translate(0.500000, 7.500000)" stroke="#D9D7D2" stroke-linecap="round">
                        <path d="M-2.66453526e-15,0 C-2.66453526e-15,1.65685425 1.69470739,3 3.7852349,3" id="Path"></path>
                        <path d="M-2.66453526e-15,3 C-2.66453526e-15,4.65685425 1.69470739,6 3.7852349,6" id="Path-Copy-2" transform="translate(1.892617, 4.500000) scale(1, -1) translate(-1.892617, -4.500000) "></path>
                    </g>
                    <line x1="3.5" y1="10.5" x2="20" y2="10.5" id="Line-2-Copy-3" stroke="#D9D7D2"></line>
                </g>
            </svg>

            {/* 점 */}
            <div className="dot"></div>
            {/* 텍스트 박스 */}
            <div className="txt_bx">
                <div className="txt">Scroll Down</div>
            </div>
            {/* 점 */}
            <div className="dot"></div>

            {/* 화살표 머리모양 svg */}
            <svg className="arrow-head" viewBox="0 0 20 20">
                <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <path d="M5.97150759,11.7738182 L3.97285161,7.44375547 C3.90272333,7.28979428 3.71237514,7.18791946 3.49998663,7.18791946 C3.28859996,7.18791946 3.09825177,7.28979428 3.02812349,7.44375547 L1.02846567,11.7738182 C0.96434839,11.9132259 1.01043269,12.067187 1.14768375,12.1721258 L3.14633974,13.700248 C3.240512,13.7722498 3.36574107,13.8120805 3.49998663,13.8120805 C3.6342322,13.8120805 3.75946127,13.7722498 3.85463536,13.700248 L5.85329135,12.1721258 C5.98954058,12.067187 6.03562488,11.9132259 5.97150759,11.7738182" id="Fill-1" fill="#D0D0D0" transform="translate(3.500000, 10.500000) rotate(-90.000000) translate(-3.500000, -10.500000) "></path>
                    <line x1="1.5" y1="10.5" x2="19.5" y2="10.5" id="Line-2-Copy-3" stroke="#D0D0D0" stroke-linecap="square"></line>
                </g>
            </svg>

            
        </div>
    );
}; /////////////////////////////// Scroll 컴포넌트 ///////////////////////////////

// 내보내기
export default Scroll;