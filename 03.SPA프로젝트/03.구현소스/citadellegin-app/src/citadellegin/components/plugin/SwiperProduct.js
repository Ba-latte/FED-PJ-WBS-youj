// 스와이퍼 - 제품 배너 컴포넌트 JS - Swiper-Product.js

import React, { useRef, useState } from "react";
import $ from 'jquery';
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./swiperProduct.css";

// import required modules
import { Pagination } from "swiper";


// [ 컴포넌트 만들기 ]
export default function SwiperProduct() {
    return (
        <>
            <section className="swipe_banner">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={0}
                    centeredSlides={true}
                    className="swiper-product"
                >
                    <ul className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide slide">
                            <Link to='/original'>
                                <img src="./images/dt/sub/citadelle-original.png" alt="제품 이미지" />
                            </Link>
                                <div className="wrap">
                                    <span className="product_tit">Original</span>
                                </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <Link to="/dete">
                                <img src="./images/dt/sub/citadelle-jardin-dete.png" alt="제품 이미지" />
                                <div className="wrap">
                                    <span className="product_tit">Jardin <br /> d’Été</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <Link to='/rouge'>
                                <img src="./images/dt/sub/citadelle-rouge.png" alt="제품 이미지" />
                                <div className="wrap">
                                    <span className="product_tit">Rouge</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide slide">
                            <Link to='limited'>
                                <img src="./images/dt/sub/citadelle-sergent-pepper.png" alt="제품 이미지" />
                                <div className="wrap">
                                    <span className="product_tit">Our limited <br /> editions</span>
                                </div>
                            </Link>
                        </SwiperSlide>
                    </ul>
                </Swiper>
            </section>
            {/* js 로드 함수 호출 */}
            {jsFn()}
        </>
    );
}

const jsFn = ()=>{
    $(()=>{
        console.log("스와이프 배너 모듈 로딩 완료");

        //////////////////////////// [ 제품 타이틀 등장 액션 ] ////////////////////////////
        const slideUpAni = ()=>{
            const pd_slide = $(".slide");
            const pd_tit = $(".product_tit");
            console.log("제품 슬라이드 : ", pd_slide);
        
            // [ 애니메이트() 메서드로 만들 경우 ]
            // 제품 슬라이드에 마우스오버/아웃시 제품 타이틀 요소 등장 액션 부여하기
            pd_slide.hover(
                // 오버시
                function(){
                    // 오버한 요소의 타이틀 높이값 구하기
                    let hval = $(this).find(".product_tit").height();
                    console.log("마우스 오버한 요소의 타이틀 높이값 : ", hval);
        
                    // 오버한 요소를 제외한 형제 요소들의 투명도 흐리게 하기
                    $(this).siblings().find("img").stop().animate({
                        opacity: "0.5"
                    }, 400);
        
                    // 타이틀의 부모요소에 해당 높이값을 줘서 등장하도록 만들기
                    $(this).find(".wrap").stop().animate({
                        height: hval + "px",
                        opacity: "1"
                    }, 1500, "easeOutExpo");
                },
                // 아웃시
                function(){
                    console.log("마우스 아웃");
        
                    // 오버한 요소를 제외한 형제 요소들의 투명도 돌아오게 하기
                    $(this).siblings().find("img").stop().animate({
                        opacity: "1"
                    }, 400);
        
                    // 타이틀의 부모요소의 높이값을 0으로 만들어 사라지게 만들기
                    $(this).find(".wrap").stop().animate({
                        height: "0px",
                        opacity: "0"
                    }, 1500, "easeOutExpo");
                }
            );
        
        } //////////////////////// slideUpAni 함수 ///////////////////////////////


        // 제품 타이틀 등장 액션 호출
        slideUpAni;

        
    }); /////////////////////// jQB /////////////////////////////
}




