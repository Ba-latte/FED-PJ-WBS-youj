// 카드 넘기는 형식의 스와이퍼 모듈 컴포넌트 JS - SwiperCard.js

import React from "react";
import { Link } from "react-router-dom";
// 스와이퍼
import { Swiper, SwiperSlide } from "swiper/react";
// 스와이퍼 모듈
import { EffectCards } from "swiper";

// CSS
import "../../css/SwiperCard.css";
import "swiper/css";
import "swiper/css/effect-cards";



// 컴포넌트
function SwiperCard(){
    return(
        <>
        <section className="swiperCard_container">
            <Swiper
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
                className="swiper-card"
            >
                {/* 1. 이력서 카드 */}
                <SwiperSlide className="slide-card">
                    😎이력서
                </SwiperSlide>
                {/* 2. 1차 플젝 카드 */}
                <SwiperSlide className="slide-card">🙂1차 플젝 : 서울미식주간</SwiperSlide>
                {/* 3. 2차 플젝 카드 */}
                <SwiperSlide className="slide-card">😊2차 플젝 : 불가리</SwiperSlide>
                {/* 4. 3차 플젝 카드 */}
                <SwiperSlide className="slide-card">🥰3차 플젝 : 시타델</SwiperSlide>
            </Swiper>
        </section>
        </>
    );
} ////////////////// SwiperCard 컴포넌트 //////////////////

// 내보내기
export default SwiperCard;