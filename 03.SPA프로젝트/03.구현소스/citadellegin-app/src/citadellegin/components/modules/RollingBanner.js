// 전광판처럼 돌아가는 롤링 배너 모듈 컴포넌트 JS - RollingBanner.js


import React from "react";
import $ from 'jquery';
import '../../css/rollingBanner.css';


// 컴포넌트
const RollingBanner = ()=>{
    
    //////////////// [ 롤링 배너 함수 ] ////////////////
    function rollingFn(){    
        $(()=>{
            let originalID, cloneID; //인터벌 포인터

            //롤링 배너 복제본 생성
            const roller = document.querySelector('.rolling_container .roller');
            roller.id = 'roller1';

            const clone = roller.cloneNode(true);
            clone.id = 'roller2';
            document.querySelector('.rolling_container .wrap').appendChild(clone); //부착

            // 가로값 확인
            console.log("roller의 가로값 : ", document.querySelector('.rolling_container .roller ul').offsetWidth+'px');
            
            //원본, 복제본 배너 위치 지정
            document.querySelector('#roller1').style.left = '0px';
            document.querySelector('#roller2').style.left = document.querySelector('.rolling_container .roller ul').offsetWidth+'px';

            // 상,하단 svg 구분선 크기 지정
            // let wval = document.querySelector('.rolling_container .roller ul').offsetWidth;
            // $(".rolling_container .line_bx .border").css({
            //     width: `${wval}px`
            // })

            //클래스 할당
            roller.classList.add('original');
            clone.classList.add('clone');

            //인터벌 메서드로 애니메이션 생성
            let rollerWidth = document.querySelector('.rolling_container .roller ul').offsetWidth;//회전 배너 너비값
            let betweenDistance = 1; //이동 크기 - 정수여야 함 (이동하는 속도가 변함)

            //롤링 시작 함수 : parseInt()의 분수를 수정하면 속도가 달라짐
            function startRoller(){
                originalID = window.setInterval(betweenRollCallback, parseInt(1500/100), betweenDistance, document.querySelector('#roller1'));
                cloneID = window.setInterval(betweenRollCallback, parseInt(1500/100), betweenDistance, document.querySelector('#roller2'));
            }


            //롤링 정지 함수
            function stopRoller(){
                clearInterval(originalID);
                clearInterval(cloneID);
            }

            //마우스 호버시 롤링이 멈추었다 벗어나면 다시 롤링이 되도록 처리
            document.getElementById('roller1').addEventListener('mouseover',()=>{stopRoller()});
            document.getElementById('roller2').addEventListener('mouseover',()=>{stopRoller()});
            document.getElementById('roller1').addEventListener('mouseout',()=>{startRoller()});
            document.getElementById('roller2').addEventListener('mouseout',()=>{startRoller()});

            //인터벌 애니메이션 함수(공용)
            function betweenRollCallback(d, roller){
                let left = parseInt(roller.style.left);
                roller.style.left = (left - d)+'px';//이동
                //조건부 위치 리셋
                if(rollerWidth + (left - d) <= 0){
                    roller.style.left = rollerWidth+'px';
                }
            }

            startRoller(); //롤링 초기화
        })
    } //////////////////////////////// rollingFn 함수 ////////////////////////////////



    return(
        <div className="rolling_container">
            {/* 1. 롤링 배너 상단의 svg 구분선 */}
            <div className="line_bx">
                {/* 화살표 꼬리 모양 svg */}
                <svg className="arrow-tail left" viewBox="0 0 20 20">
                    <g className='Group-1' >
                        <g className="Group-2" transform="translate(0.500000, 7.500000)">
                            <path d="M-2.66453526e-15,0 C-2.66453526e-15,1.65685425 1.69470739,3 3.7852349,3" className="Path-1"></path>
                            <path d="M-2.66453526e-15,3 C-2.66453526e-15,4.65685425 1.69470739,6 3.7852349,6" className="Path-2" transform="translate(1.892617, 4.500000) scale(1, -1) translate(-1.892617, -4.500000) "></path>
                        </g>
                        <line x1="3.5" y1="10.5" x2="20" y2="10.5" className="Line-2"></line>
                    </g>
                </svg>
                {/* 가운데 라인 svg */}
                <div className="cir">
                    <svg className="border">
                        <line x1="0" y1="10.5" x2="100%" y2="10.5" stroke="#D9D7D2"></line>
                    </svg>
                </div>
                {/* 화살표 꼬리모양 svg */}
                <svg className="arrow-tail right" viewBox="0 0 20 20">
                    <g className='Group-1' >
                        <g className="Group-2" transform="translate(0.500000, 7.500000)">
                            <path d="M-2.66453526e-15,0 C-2.66453526e-15,1.65685425 1.69470739,3 3.7852349,3" className="Path-1"></path>
                            <path d="M-2.66453526e-15,3 C-2.66453526e-15,4.65685425 1.69470739,6 3.7852349,6" className="Path-2" transform="translate(1.892617, 4.500000) scale(1, -1) translate(-1.892617, -4.500000) "></path>
                        </g>
                        <line x1="3.5" y1="10.5" x2="20" y2="10.5" className="Line-2"></line>
                    </g>
                </svg>
            </div>
            {/* 롤링 배너 구역 */}
            <div>
                <section className="rolling_banner">
                    {/* 배너 뷰포트 : 배너 표시 영역 */}
                    <div className="wrap">
                        {/* 배너 내용 wrapper */}
                        <div className="roller">
                            {/* 배너 데이터 리스트 */}
                            <ul>
                                <li className="slide">
                                    <img src="./images/rolling/rolling1.png" alt="롤링 배너 이미지" />
                                    <span className="rolTxt">CUBEB PEPPER</span>
                                </li>
                                <li className="slide">
                                    <img src="./images/rolling/rolling2.png" alt="롤링 배너 이미지" />
                                    <span className="rolTxt">ORANGE PEEL</span>
                                </li>
                                <li className="slide">
                                    <img src="./images/rolling/rolling3.png" alt="롤링 배너 이미지" />
                                    <span className="rolTxt">JUNIPER</span>
                                </li>
                                <li className="slide">
                                    <img src="./images/rolling/rolling4.png" alt="롤링 배너 이미지" />
                                    <span className="rolTxt">LEMON PEEL</span>
                                </li>
                                <li className="slide">
                                    <img src="./images/rolling/rolling5.png" alt="롤링 배너 이미지" />
                                    <span className="rolTxt">VIOLET</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            {/* 1. 롤링 배너 하단의 svg 구분선 */}
            <div className="line_bx">
                {/* 화살표 머리 모양 svg */}
                <svg className="arrow-head left" viewBox="0 0 20 20">
                    <g className="Group-3">
                        <path d="M5.97150759,11.7738182 L3.97285161,7.44375547 C3.90272333,7.28979428 3.71237514,7.18791946 3.49998663,7.18791946 C3.28859996,7.18791946 3.09825177,7.28979428 3.02812349,7.44375547 L1.02846567,11.7738182 C0.96434839,11.9132259 1.01043269,12.067187 1.14768375,12.1721258 L3.14633974,13.700248 C3.240512,13.7722498 3.36574107,13.8120805 3.49998663,13.8120805 C3.6342322,13.8120805 3.75946127,13.7722498 3.85463536,13.700248 L5.85329135,12.1721258 C5.98954058,12.067187 6.03562488,11.9132259 5.97150759,11.7738182" className="Fill-1" fill="#D0D0D0" transform="translate(3.500000, 10.500000) rotate(-90.000000) translate(-3.500000, -10.500000) "></path>
                        <line x1="1.5" y1="10.5" x2="19.5" y2="10.5" className="Line-1"></line>
                    </g>
                </svg>
                
                {/* 가운데 라인 svg */}
                <div className="cir">
                    <svg className="border">
                        <line x1="0" y1="10.5" x2="100%" y2="10.5" stroke="#D9D7D2"></line>
                    </svg>
                </div>
                {/* 화살표 머리 모양 svg */}
                <svg className="arrow-head right" viewBox="0 0 20 20">
                    <g className="Group-3">
                        <path d="M5.97150759,11.7738182 L3.97285161,7.44375547 C3.90272333,7.28979428 3.71237514,7.18791946 3.49998663,7.18791946 C3.28859996,7.18791946 3.09825177,7.28979428 3.02812349,7.44375547 L1.02846567,11.7738182 C0.96434839,11.9132259 1.01043269,12.067187 1.14768375,12.1721258 L3.14633974,13.700248 C3.240512,13.7722498 3.36574107,13.8120805 3.49998663,13.8120805 C3.6342322,13.8120805 3.75946127,13.7722498 3.85463536,13.700248 L5.85329135,12.1721258 C5.98954058,12.067187 6.03562488,11.9132259 5.97150759,11.7738182" className="Fill-1" fill="#D0D0D0" transform="translate(3.500000, 10.500000) rotate(-90.000000) translate(-3.500000, -10.500000) "></path>
                        <line x1="1.5" y1="10.5" x2="19.5" y2="10.5" className="Line-1"></line>
                    </g>
                </svg>
            </div>
            {/* 롤링 배너 함수 호출 */}
            {rollingFn()}
        </div>
    );
}; /////////////////////// RollingBanner 컴포넌트 ///////////////////////

// 내보내기
export default RollingBanner;