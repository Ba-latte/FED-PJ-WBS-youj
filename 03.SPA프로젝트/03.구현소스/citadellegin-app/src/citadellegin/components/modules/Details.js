// limited 페이지에서 한정판 제품의 각 상세 페이지 모듈 JS - Details.js

import React, { useEffect } from "react";
import $ from 'jquery';
import '../../css/details.css';
import limited_product_data from "../../data/limitedProduct";
// 한정판용으로 연결함
import Article from "./LimitedArticle";

// [ 컴포넌트 ]
const Details = (props)=>{ // props.dbseq - 슬라이드 인덱스 번호
    // 데이터 셋업하기
    const selecData = limited_product_data;

    
    
    // 닫기 버튼 클릭하면 details박스 숨기는 함수
    const clsFn = ()=>{
        console.log("닫아!");
        // 대상 선정
        const details_container = $(".details_container");

        // 세부사항 박스 닫기
        details_container.css({
            clipPath: `circle(0% at 50% 50%)`,
        });
        
        setTimeout(() => {
            // 바디의 스크롤 바 다시 보여주고 전체 겉박스인 루트에 스크롤바 숨기기
            $("body").css({overflowY: "visible"});
            // $("#root").css({overflowY: "hidden"});
        }, 430);

    };




    return(
        <div className="details_container">
        <div id="details">
            <section className="details">
                {/* 1. 박스 닫기 버튼 */}
                <div className="cls_btn_container">
                    <div>
                        <span className="material-symbols-outlined close" onClick={clsFn}>close</span>
                    </div>
                </div>
                {/* 2. 제품명 */}
                <div className="product_name_container">
                    <div className="wrap">
                        <h2 className="name">
                            <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000" data-aos-easing="ease-in-out-quart">
                                {
                                    selecData[props.dbseq]["productName"][1]
                                }
                            </span>
                        </h2>
                    </div>
                </div>
                {/* 👇제품 관련 부분 */}
                <aside className="gridBx">
                    {/* 3.제품 이미지 */}
                    <div className="product_img_container">
                        <div className="wrap">
                            <img id="product" src={selecData[props.dbseq]["bigSrc"]} alt="제품 상세 이미지" />
                        </div>
                    </div>
                    {/* 4.제품 설명 아티클들 */}
                    <div className="product_desc_container">
                        <Article pgname="details" dbseq={props.dbseq} />
                    </div>
                </aside>            
            </section>
        </div>
        </div>
    );
}; //////////////////////// Details 컴포넌트 ////////////////////////

// [ 내보내기 ]
export default Details;