// 상단 영역 컴포넌트

import React from "react";


const Header = ()=>{
    return(
        <>
            {/* 1.상단 영역 */}
            <div id="top">
                <header className="top">
                    <div className="flx_container">
                        {/* 상단 로고 */}
                        <div className="tlogo">
                            <div className="logoBx">
                                로고
                            </div>
                        </div>
                        {/* 햄버거 버튼 */}
                        <div className="ham_btn">
                            {/* 물방울 SVG */}
                            <svg className="goo">
                                <defs>
                                    <filter id="goo">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -9" result="goo" />
                                        <feComposite in="SourceGraphic" in2="goo" />
                                    </filter>
                                </defs>
                            </svg>
                        
                            <div className="menu_wrap">
                                {/* 메뉴 박스 */}
                                <div className="button--bubble__container">
                                    <a href="#" className="button button--bubble">
                                        <span className="material-symbols-outlined ham_icon">menu</span>
                                    </a>
                                    <span className="button--bubble__effect-container">
                                        <span className="circle top-left"></span>
                                        <span className="circle top-left"></span>
                                        <span className="circle top-left"></span>
                                        <span className="button effect-button"></span>
                                        <span className="circle bottom-right"></span>
                                        <span className="circle bottom-right"></span>
                                        <span className="circle bottom-right"></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
            {/* 2. 전체 메뉴 박스 */}
            <div id="nav">
                <div className="wrap">
                    <nav className="nav">
                        <div className="wrap">
                            <span className="material-symbols-outlined close">close</span>
                        </div>
                        <ul>
                            <li>
                                <a href="#">Citadelle Original</a>
                            </li>
                            <li>
                                <a href="#">Jardin d’Été</a>
                            </li>
                            <li>
                                <a href="#">Citadelle Rouge</a>
                            </li>
                            <li>
                                <a href="#">Limited Editions</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    );
};

// 내보내기
export default Header;