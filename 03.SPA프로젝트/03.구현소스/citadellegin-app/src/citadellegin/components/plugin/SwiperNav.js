// 스와이퍼 - 제품 배너 컴포넌트 JS - SwiperLimited.js

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// CSS 불러오기
import "./swiperNav.css";



// [ 컴포넌트 만들기 ]
export default function SwiperLimited(props) {
    // props.pgname - 페이지 이름 (첫글자 대문자)


    // 온고잉 제품 데이터
    const ginsData = [
        {
            "tit" : "Original",
            "src" : "./images/dt/main/original.png",
            "cls" : "Citadelle_Original",
        },
        {
            "tit" : "Jardin d’Été",
            "src" : "./images/dt/main/dete.png",
            "cls" : "Jardin_d’Été",
        },
        {
            "tit" : "Rouge",
            "src" : "./images/dt/main/rouge.png",
            "cls" : "Citadelle_Rouge",
        },
        {
            "tit" : "Our limited editions",
            "src" : "./images/dt/main/limited.png",
            "cls" : "Limited_Editions",
        },
    ];
    
    return (
        <>
            <section className="swipe_banner nav">
                <div className="wrap">
                    <h2 className="tit">Our <i>gins</i> made in <i>France</i></h2>
                </div>
                <Swiper
                
                    slidesPerView={1}
                    spaceBetween={30}
                    centeredSlides={false}
                    breakpoints={{
                        500: {
                            slidesPerView: 2,
                        },
                        900: {
                            slidesPerView: 3,
                        },
                        1250: {
                            slidesPerView: 4,
                        },
                    }}
                    className="swiper-nav"
                >
                    <ul className="swiper-wrapper">
                        {
                            props.pgname == "Nav" &&
                            ginsData.map((v,i)=>
                            <SwiperSlide className="swiper-slide slide nav" key={i}>
                                {/* {console.log("내비!")} */}
                                <div className="wrap">
                                    <img className={"banner_img" + " " + v["cls"]} src={v["src"]} alt={v["tit"] + "이미지"} />
                                </div>
                                <div className="wrap">
                                    <span className="product_tit nav">{v["tit"]}</span>
                                </div>
                            </SwiperSlide>
                            )
                        }
                    </ul>
                </Swiper>
            </section>
        </>
    );
}



