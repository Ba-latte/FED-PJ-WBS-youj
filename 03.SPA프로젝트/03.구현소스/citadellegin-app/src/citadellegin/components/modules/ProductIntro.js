// 각 제품 소개 모듈 컴포넌트 JS - ProductIntro.js

import React, { useEffect } from 'react';
import $ from 'jquery';
import '../../css/productIntro.css';
import productIntro_data from '../../data/productIntro';
import Article from './Article';
import PromotionalPhrase from './PromotionalPhrase';
// 패럴랙스
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

// [ 제품 소개 모듈 컴포넌트 ]
const ProductIntro = (props)=>{
    // props.pgname - 데이터 구분할 페이지 이름(첫글자 대문자)

    /*************************************************************************************
        [패럴랙스 팁]
    -시차 효과는 이미지가 페이지보다 느리게 움직일 때 더 자연스러움 (speed < 0)
    -여러 레이어로 자연스러운 시각적 효과를 얻으려면 각 레이어가 speed이미지의 거리에 따라 달라짐.
    이미지의 항목이 가까울수록 더 빨리 움직여야하고, 멀어질수록 더 느리게 움직여야 함
    *************************************************************************************/

    // 데이터 세팅
    const selcData = productIntro_data;

    // [ 스크롤하면 병 돌아가는 함수 ] //////////////
    const rotateBottle = ()=>{
        // 화면의 높이값 읽기
        // 윈도우 화면 : 위치값 = 정한범위 : 실제이동값
        // ->실제이동값 = 정한범위 - (위치값 * 정한범위) / 윈도우화면
    }; ///////////////////// rotateBottle 함수 ///////////////////////////

    useEffect(()=>{
        repeatImg();
    }, []);


    const repeatImg = ()=>{
        const imgWrap = document.querySelector(".wrap:has(img#product)");
        let imgArr = [];
        console.log(imgWrap);
        
        let temp = "";
        for(let i=1; i <= 36; i++){
            temp += `
            <img src='./images/dt/sub/original/gin-${i}.png' alt='제품 이미지' />
            `;
        }
        console.log(temp);

        return temp;
        
    }; ///////////////////// repeatImg 함수 /////////////////////////
    repeatImg();

    return(
        <div id="product_intro">
            {/* 제품 소개 섹션 */}
            <section className="product_intro">
                {/* 0.배경 이미지 */}
                <div className='wrap'>
                    <img className='bg' src={'./images/dt/sub/'+props.pgname.toLowerCase()+'/background-right.png'} alt="배경 이미지" />
                </div>
                {/* 1. 제품명 */}
                <div className="product_name_container">
                    <div className="wrap">
                        <h2 className="name">
                            <span data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700" data-aos-easing="ease-in-out-quart">
                                {
                                    selcData[props.pgname]["pdtit"].map((v,i)=>
                                        <span key={i} className={'letter' + " " + props.pgname.toLowerCase()}>{v}</span>
                                    )
                                }
                            </span>
                        </h2>
                    </div>
                </div>
                {/* 👇제품 관련 부분 */}
                <aside className="gridBx">
                    {/* 2.제품 이미지 */}
                    <div className="product_img_container">
                    {/* <ParallaxBanner style={{height: '100%'}}> */}
                        {/* 2-1. 꾸밈 이미지 */}
                        {
                            selcData[props.pgname]["isrc"].map((v, i)=>
                                // 만약 데이터가 없다면 이미지 박스 만들지 않도록 제어하기!
                                v !== "" &&
                                <>
                                <div className='wrap' key={i}>
                                    {/* 클래스이름은 이미지이름에서 따오기 */}
                                    <Parallax speed={selcData[props.pgname]["speed"][i]}>
                                        <img className={"sticker " + v.split("/")[5].split(".")[0]} src={v} alt="사용된 보태니컬 종류 일러스트" />
                                    </Parallax>
                                </div>
                                </>
                            )
                        }
                        {/* 2-2. 제품 상세 이미지 */}
                        <div className="wrap">
                            {/* <ParallaxBannerLayer speed={window.innerWidth < 500 ? 0 : -70}> */}
                            <Parallax speed={0}>
                                {repeatImg}
                                {/* <img id="product" src={selcData[props.pgname]["pdsrc"][0] + 1 + selcData[props.pgname]["pdsrc"][1]} alt="제품 상세 이미지" /> */}
                            </Parallax>
                        </div>
                    {/* </ParallaxBanner> */}
                    </div>
                    {/* 3.제품 설명 아티클들 */}
                    <div className="product_desc_container">
                        <Article pgname={props.pgname} />
                    </div>
                </aside>
                {/* 4.제품 홍보 단락 섹션 */}
                <PromotionalPhrase pgname={props.pgname} />
            </section>
        </div>
    );
}; ///////////////////////// ProductIntro 컴포넌트 /////////////////////////

// 내보내기
export default ProductIntro;