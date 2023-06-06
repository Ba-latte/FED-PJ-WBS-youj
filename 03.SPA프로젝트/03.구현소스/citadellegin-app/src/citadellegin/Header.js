// 상단 영역 컴포넌트 JS - Header.js

import React from 'react';
import $ from 'jquery';
import './css/header.css';
import {Link} from 'react-router-dom';



// [ 상단 영역 컴포넌트 만들기 ] /////////////////////////////
const Header = ()=>{
    return(
        <>
            {/* 구글 심볼 이렇게 쓰면 되나?ㅠ */}
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

            {/* 1.상단 영역 */}
            <div id="top">
                <header className="top">
                    <div className="flx_container">
                        {/* 상단 로고 */}
                        <div className="tlogo">
                            <div className="logoBx">
                                    <Link to="/">
                                        <img src="./images/logo.png" alt="로고" />
                                    </Link>
                            </div>
                        </div>
                        {/* 햄버거 버튼 */}
                        <div className="ham_btn">
                            <div className="wrap">
                                {/* 메뉴 박스 */}
                                <div className="button">
                                    <a href="#">
                                        <span className="material-symbols-outlined ham_icon">menu</span>
                                    </a>
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
                                <Link to="/original">Citadelle Original</Link>
                            </li>
                            <li>
                                <Link to="/dete">Jardin d’Été</Link>
                            </li>
                            <li>
                                <Link to="/rouge">Citadelle Rouge</Link>
                            </li>
                            <li>
                                <Link to="/limited">Limited Editions</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* 바깥에 빈 루트를 만들고 JS 로드 함수 포함시키기 */}
            {loadingFn()}
        </>
    );
};


// [ JS 로드 구역 ] /////////////////////////////
function loadingFn(){
    $(()=>{
        console.log("상단영역 로딩완료");
    
        // 대상 선정
        const nav_list = $(".nav ul li");
        const txt = nav_list.find("a");
    
        const ham_btn = $(".button");
        const nav_bx = $("#nav");
        const cls_btn = $(".close");
        let xval;
        let yval;
        
        

        // [ 햄버거 버튼 클릭시 내비 박스 클립패스 활성화 애니메이션 ] /////////////////////////////
        // 윈도우 리사이즈시 내비박스 위치 실시간 변경하기
        $(window).resize(function(){
            // console.log("윈도우 리사이즈");
            positionFn(ham_btn, nav_bx);
        });
    
        // 햄버거버튼 클릭시 내비박스의 CSS 트랜지션 변화
        ham_btn.click(function(){
            console.log("햄버거버튼 클릭시!");
            xval = $(this).offset().left+20;
            yval = $(this).offset().top+20;
    
            nav_bx.css({
                clipPath: `circle(150% at ${xval}px ${yval}px)`,
                transition: "1s cubic-bezier(0.83, 0, 0.21, 1.33)",
            }); /////////// css //////////
    
    
            // 일정시간 후 타이틀 등장 함수 호출
            tit_appearFn(nav_list, txt);
    
            // 마우스오버한 자신 제외 형제 요소의 투명도 흐리게 하는 함수 호출
            blurFn(txt);
    
        }); ////////////////// click /////////////////////
    
        // 닫기버튼 클릭시 내비박스의 CSS 트랜지션 변화
        cls_btn.click(function(){
            console.log("닫기버튼 클릭시!");
            xval = ham_btn.offset().left+20;
            yval = ham_btn.offset().top+20;
    
            nav_bx.css({
                clipPath: `circle(0% at ${xval}px ${yval}px)`,
            }); /////////// css //////////
        }); /////////////////// click //////////////////////
        
    
    
    
        // [ 햄버거 버튼의 x,y위치값 구하기 ]
        function positionFn(ham, nav){
            // 햄버거 버튼의 x,y위치값 구하기 : 내비박스 클립패스 시작 위치를 정하기 위함
            xval = ham.offset().left+20;
            yval = ham.offset().top+20;
            console.log("햄버거버튼 x값 : ", xval);
            console.log("햄버거버튼 y값 : ", yval);
        
            // 내비박스 클립패스 초기 설정
            nav.css({
                clipPath: `circle(0% at ${xval}px ${yval}px)`,
            });
        } ////////////////// positionFn 함수 ////////////////////
        
        
        // [ 일정시간 후 타이틀 등장 함수 ]
        const tit_appearFn = function(bx, lt){
            console.log("타이틀 등장 함수");
        
            // 대상 선정
            const tit = bx;
            // const letter = lt;
            const hval = bx.height();
        
            // 겉박스에 타이틀요소 높이값 + 자식요소 숨기기 CSS 부여
            tit.css({
                height: hval,
                overflow: "hidden",
            });
            // 글자 요소에 por, top 위치값 CSS 부여
            lt.css({
                position: "relative",
                top: "100%",
            });
        
            // 시차를 두고 애니메이션 발생하게 만들기
            setTimeout(() => {
                // .tit 요소에 애니메이션 부여
                lt.animate({
                    top: "0%"
                }, 800);
            }, 400);
        
        }; /////////////////////// tit_appearFn 함수 ///////////////////////
        
        
        // [ 마우스오버한 자신 제외 형제 요소의 투명도 흐리게 하기 ]
        const blurFn = function(ele){
        
            ele.hover(
                // 마우스오버시
                function(){
                    $(this).parent().siblings().find("a").stop().animate({
                        opacity: "0.5"
                    }, 400);
                },
                // 마우스아웃시
                function(){
                    $(this).parent().siblings().find("a").stop().animate({
                        opacity: "1"
                    }, 400);
                }
            );
        }; ///////////////////// blurFn 함수 /////////////////////



        // [ 메뉴 클릭시 메뉴 배경 박스 원모양으로 줄어들게 만들기 ]
        txt.click(function(){
            // 햄버거 버튼의 위치에 맞게 원모양으로 줄어드는 함수 호출하기
            positionFn(ham_btn, nav_bx);
        });
    


    }); ////////////////////////////// jQB ///////////////////////////////////////
} ///////////////////////////// loadingFn : 로드 구역 함수 /////////////////////////////





// 내보내기
export default Header;