// 상단 영역 컴포넌트 JS - Header.js

import React from 'react';
import $, { event } from 'jquery';
import {Link} from 'react-router-dom';
import '../../css/header.css';
import SwiperNaV from '../plugin/SwiperNav';



// [ 상단 영역 컴포넌트 만들기 ] /////////////////////////////
const Header = ()=>{
    // 메뉴 데이터 세팅하기
    const menuList = [
        {
            "original": ["Citadelle", "Original"],
        },
        {
            "dete": ["Jardin", "d’Été"],
        },
        {
            "dete": ["Jardin", "d’Été"],
        },

    ];

    return(
        <>
            {/* 1.상단 영역 */}
            <div id="top">
                <header className="top">
                    <div className="flx_container">
                        {/* 상단 로고 */}
                        <div className="tlogo">
                            <div className="logoBx">
                                    <Link to="/main">
                                        <img src="./images/logo.png" alt="로고" />
                                    </Link>
                            </div>
                        </div>
                        {/* 햄버거 버튼 */}
                        <div className="ham_btn">
                            <div className="wrap">
                                {/* 메뉴 박스 */}
                                <div className="button">
                                    <a href="#" onClick={(e)=>{e.preventDefault();}}>
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
                    {/* 닫기 버튼 */}
                    <div className="wrap">
                        <span className="material-symbols-outlined close">close</span>
                    </div>
                    <nav className="nav">
                        {/* 메뉴 */}
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
                        {/* 스와이프 배너 */}
                        <SwiperNaV pgname="Nav" />
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
        const cls_btn = $("#nav .close");
        let xval;
        let yval;
        
        

        // [ 햄버거 버튼 클릭시 내비 박스 클립패스 활성화 애니메이션 ] /////////////////////////////
        // 윈도우 리사이즈시 내비박스 위치 실시간 변경하기
        $(window).resize(function(){
            // console.log("윈도우 리사이즈");

            // 햄버거 버튼 따라서 위치 조정하는 내비게이션 박스 함수 호출하기
            positionFn(ham_btn, nav_bx);

        });

        // 햄버거버튼 클릭시 내비박스의 CSS 트랜지션 변화
        ham_btn.click(function(){
            console.log("햄버거버튼 클릭시!");
            xval = $(this).offset().left+22;
            yval = $(this).offset().top+22;


            // 🔥방법1 ) 내비 박스 css변경하기 : 애니메이션 설정하기
            // nav_bx.css({
            //     // clipPath: `circle(150% at ${xval}px ${yval}px)`,
            //     // transition: "clip-path 1s cubic-bezier(0.83, 0, 0.21, 1.33)",
            //     display:"block",
            //     animation:"navOpenAni 1s cubic-bezier(0.83, 0, 0.21, 1.33) forwards"
            // }); /////////// css //////////

            // 👉햄버거 버튼 클릭시 일정 시간 후에 애니메이션 실행 -> 그 뒤에 메뉴 타이틀 등장 함수 실행하기
            setTimeout(() => {
                // 🔥방법2) js에서 직접 애니메이션 키프레임 제작해서 적용하기
                document.querySelector("#nav").animate(
                    // 키프레임 - 배열
                    [
                        // 0%
                        {
                            clipPath: `circle(0% at ` + xval + `px 60px)`
    
                        },
                        // 100%
                        {
                            clipPath: `circle(300% at ` + xval + `px 60px)`
                        }
                    ],
                    // 옵션 - 객체
                    {
                        duration: 1000,
                        easing: "cubic-bezier(0.83, 0, 0.21, 1.33)",
                        fill: "forwards"
                    }
                ); ////////////////// 내비 박스 애니메이션 //////////////////
            }, 10, tit_appearFn(nav_list, txt));
    
    
        }); ////////////////// click /////////////////////
    
        // 닫기버튼 클릭시 내비박스의 CSS 트랜지션 변화
        cls_btn.click(function(){
            console.log("닫기버튼 클릭시!");
            xval = ham_btn.offset().left+22;
            yval = ham_btn.offset().top+22;


            // 🔥방법1 ) 내비 박스 css변경하기 : 애니메이션 설정하기
            // nav_bx.css({
            //     // clipPath: `circle(0% at ${xval}px ${yval}px)`,
            //     animation:"navCloseAni 1s cubic-bezier(0.83, 0, 0.21, 1.33) forwards"
            // }); /////////// css //////////


            // 👉닫기 버튼 클릭시 애니메이션 실행하기
            document.querySelector("#nav").animate(
                // 🔥방법2) js에서 직접 애니메이션 키프레임 제작해서 적용하기
                // 키프레임 - 배열
                [
                    // 0%
                    {
                        clipPath: `circle(150% at ` + xval + `px 60px)`

                    },
                    // 100%
                    {
                        clipPath: `circle(0% at ` + xval + `px 60px)`
                    }
                ],
                // 옵션 - 객체
                {
                    duration: 1000,
                    easing: "cubic-bezier(0.83, 0, 0.21, 1.33)",
                    fill: "forwards"
                }
            ); ////////////////// 내비 박스 애니메이션 //////////////////

        }); /////////////////// click //////////////////////
        
    
    
    
        // [ 햄버거 버튼의 x,y위치값 구하기 ]
        function positionFn(ham, nav){
            // 햄버거 버튼의 x,y위치값 구하기 : 내비박스 클립패스 시작 위치를 정하기 위함
            xval = ham.offset().left + 22;
            yval = ham.offset().top + 22;
            // console.log("햄버거버튼 x값 : ", xval);
            // console.log("햄버거버튼 y값 : ", yval);
        
            // 내비박스 클립패스 초기 설정
            nav.css({
                clipPath: `circle(0% at ${xval}px ${yval}px)`,
            }); /////////// css //////////

        } ////////////////// positionFn 함수 ////////////////////
        
        
        // [ 메뉴 박스 - 일정시간 후 타이틀 등장 함수 ]
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
        
            // 시차를 두고 타이틀 등장 애니메이션 발생하게 만들기
            setTimeout(() => {
                // .tit 요소에 애니메이션 부여
                lt.animate({
                    top: "0%"
                }, 800,);

                // 마우스오버한 자신 제외 형제 요소의 투명도 흐리게 하는 함수 호출
                blurFn(txt);
            }, 400);
            
            // 타이틀이 등장하는 동안에는 마우스오버 애니메이션 함수가 먹히지 않도록 막아두기
            $(".nav").addClass('on');
            setTimeout(()=>{$(".nav").removeClass('on')},1000);


        }; /////////////////////// tit_appearFn 함수 ///////////////////////
        
        
        // [ 마우스오버한 자신 제외 형제 요소의 투명도 흐리게 하기 ]
        const blurFn = function(ele){
            ele.hover(
                // 마우스오버시
                function(){
                    // 자기 자신의 텍스트 변수에 담기
                    let txt = $(this).text().replaceAll(" ", "_");
                    // console.log("마우스엔터한 나! : ", txt);

                    // 자신 제외 형제 요소의 투명도 흐리게 하기
                    $(this).parent().siblings().find("a").stop().animate({
                        opacity: "0.5"
                    }, 400);

                    // 스와이프 배너의 이미지요소 위치값 변경하기
                    $(".swiper-slide.nav").find(`.${txt}`) .css({
                        transform : 'translateY(3%)'
                    });
                    
                },
                // 마우스아웃시
                function(){
                    // 자기 자신의 텍스트 변수에 담기
                    let txt = $(this).text().replaceAll(" ", "_");
                    // console.log("마우스아웃한 나! : ", txt);

                    // 자신 제외 형제 요소의 되돌리기
                    $(this).parent().siblings().find("a").stop().animate({
                        opacity: "1"
                    }, 400);

                    // 스와이프 배너의 이미지요소 위치값 변경하기
                    $(".swiper-slide.nav").find(`.${txt}`).css({
                        transform : 'translateY(35%)'
                    });
                }
            );
        }; ///////////////////// blurFn 함수 /////////////////////



        // [ 메뉴 클릭시 메뉴 배경 박스 원모양으로 줄어들게 만들기 ] ///////////////////////////////
        txt.click(function(){
            // 위치 조정하기
            positionFn(ham_btn, nav_bx);

            // 페이지 맨 위로 이동하기
            // window.scrollTo(0,0);

            // 🔥방법2) js에서 직접 애니메이션 키프레임 제작해서 적용하기
            document.querySelector("#nav").animate(
                // 키프레임 - 배열
                [
                    // 0%
                    {
                        clipPath: `circle(150% at ` + xval + `px 60px)`

                    },
                    // 100%
                    {
                        clipPath: `circle(0% at ` + xval + `px 60px)`
                    }
                ],
                // 옵션 - 객체
                {
                    duration: 1000,
                    easing: "cubic-bezier(0.83, 0, 0.21, 1.33)",
                    fill: "forwards"
                }
            ); ////////////////// 내비 박스 애니메이션 //////////////////

        }); /////////////////////////////// click ///////////////////////////////


    }); ////////////////////////////// jQB ///////////////////////////////////////
} ///////////////////////////// loadingFn : 로드 구역 함수 /////////////////////////////





// 내보내기
export default Header;