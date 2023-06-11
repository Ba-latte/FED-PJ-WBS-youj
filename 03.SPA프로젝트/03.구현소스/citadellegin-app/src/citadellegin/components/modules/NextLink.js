// 제품 링크 모듈 : 다음 제품으로의 링크 - NextLink.js

import React from 'react';
import $ from "jquery";
import '../../css/nextLink.css';
import productIntro_data from '../../data/productIntro';


// [컴포넌트 만들기]
const NextLink = (props)=>{
    // props.pgname - 데이터 구분할 페이지 이름

    // 데이터 세팅
    const selcData = productIntro_data;

    // 들어온 페이지의 다음 페이지 데이터 넣기
    const next = (pgname)=>{
        console.log("다음 객체 소환!");
        let key = Object.keys(selcData);
        let val = Object.values(selcData);
        let num = key.indexOf(pgname) + 1;

        if(num == 4) num = 0;
        
        let hcode = `
            ${val[num].pdtit[0]}<i className='hit'>${val[num].pdtit[1]}</i>
        `;
        console.log("얍! : ", hcode);
        
        return hcode
    }


    // 리턴하기
    return(
        <>
            <section className='next_link'>
                <div className='next_link_container'>
                    <div className="wrap">
                        <h2 className="name">
                            <span>
                                {/* {
                                    selcData[props.pgname]["pdtit"].map((v,i)=>
                                        <span key={i} className={'letter' + " " + props.pgname.toLowerCase()}>{v}</span>
                                    )
                                } */}
                                {next(props.pgname)}
                                {/* Citadelle <i className='hit'>Jardin <br /> d’Été</i> */}
                            </span>
                        </h2>
                    </div>
                    <div className='wrap'>
                        <img src={'./images/dt/sub/' + props.pgname + '/next-product.png'} alt='다음 제품 이미지' />
                    </div>
                </div>
            </section>
        </>
    );
} ////////////////////////// NextLink 컴포넌트 //////////////////////////

// 내보내기
export default NextLink;