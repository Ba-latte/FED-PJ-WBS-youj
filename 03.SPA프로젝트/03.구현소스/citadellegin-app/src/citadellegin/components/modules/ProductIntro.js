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
    
    //  이미지 넘버 배열
    const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];



    // [ 스크롤하면 병 돌아가는 함수 ] //////////////
    // : 스크롤 방향에 따라서 병 이미지가 순서대로 보여진다
    const scrollRotate = (num)=>{
        console.log("돌아가는 병 함수!");

        // 대상 선정
        const imgContainer = $("#product_intro .product_img_container");
        // 이미지 순번 변경을 위한 함수
        let chgImgNum = 0;
        // 이전 스크롤 위치값 담기
        let before_Position = document.documentElement.scrollTop || 0;
        // 스크롤 이벤트 발생 횟수 조절하는 변수 : 0-허용, 1-불허용
        let wait = 0;

        // [ 첫번째 이미지만 보이게 하고 모두 숨겨두기 ]
        imgContainer.find("img.product").hide().first().show();

        // [ 스크롤 이벤트 함수 ]
        $(window).on("scroll", function(){
            // 이벤트 발생 횟수 조절하기 (만약 wait이 1이라면 이벤트 발생 못하게 돌려 보내기)
            if(wait) return;
            // 잠깐 멈추게 막기 위해 변수 업데이트
            wait = 1;
            // 일정 시간이 지난 후 풀어주기
            setTimeout(()=>wait = 0, 30);

            // 현재 위치값 담기
            let documentY = document.documentElement.scrollTop;

            // 방향 정하기 : 현재 위치값 - 이전위치값  = 0보다 크면 아랫방향(1), 0보다 작으면 윗방향(-1) 나타내기
            let direction = documentY - before_Position >= 0 ? 1 : -1;
            // console.log("방향 : ", direction);

            // 이미지 바꾸기
            rotateBottle(direction);

            // 이전 스크롤 위치값 업데이트하기
            before_Position = documentY;

        }); ////////////////////////// scroll 이벤트 //////////////////////////

        // [ 이미지 변경 함수 ]
        const rotateBottle = (dir)=>{
            // dir-방향 (1:아래 / -1:위)

            // 아래 방향으로 움직일 경우
            if(dir === 1){
                // 1증가
                chgImgNum++;
                if(chgImgNum === 36) chgImgNum = 0;
            }
            // 위 방향으로 움직일 경우
            else{
                // 1감소
                chgImgNum--;
                if(chgImgNum === -1) chgImgNum = 35;
            }

            // 이미지를 순서대로 보여주기
            imgContainer.find("img.product:visible").hide();
            imgContainer.find("img.product").eq(chgImgNum).show();

        }; ///////////////// rotateBottle 함수 ///////////////


    }; ///////////////////// scrollRotate 함수 ///////////////////////////
    
    useEffect(()=>{
        scrollRotate();
    }, []);




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
                                <div className='wrap' key={i}>
                                    {/* 클래스이름은 이미지이름에서 따오기 */}
                                    <Parallax speed={selcData[props.pgname]["speed"][i]}>
                                        <img className={"sticker " + v.split("/")[5].split(".")[0]} src={v} alt="사용된 보태니컬 종류 일러스트" />
                                    </Parallax>
                                </div>
                            )
                        }
                        {/* 2-2. 제품 상세 이미지 */}
                        <div className="wrap">
                            {/* 경우2) Original페이지 혹은 Dete페이지인 경우 */}
                            {
                                ((props.pgname == "Original") || (props.pgname == "Dete")) &&
                                numArr.map((v)=>
                                <img className={'product' + ' ' + 'product' + v} src={'./images/dt/sub/' + props.pgname.toLowerCase() + '/gin-'+ v +'.png'} alt='제품 상세 이미지' key={v}/>
                                )
                            }
                            {/* 경우1) Rouge페이지 혹은 Limited페이지인 경우 */}
                            {
                                props.pgname == "Rouge" ? 
                                <Parallax speed={0}>
                                    <img id="product" src={selcData[props.pgname]["pdsrc"]} alt="제품 상세 이미지" />
                                </Parallax>
                                :
                                props.pgname == "Limited" ?
                                <Parallax speed={0}>
                                    <img id="product" src={selcData[props.pgname]["pdsrc"]} alt="제품 상세 이미지" />
                                </Parallax>
                                : null
                            }
                        </div>
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