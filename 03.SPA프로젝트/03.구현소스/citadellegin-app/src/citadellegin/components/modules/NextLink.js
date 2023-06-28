// 제품 링크 모듈 : 다음 제품으로의 링크 - NextLink.js

import React from 'react';
import $ from "jquery";
import '../../css/nextLink.css';
import productIntro_data from '../../data/productIntro';
import { Link } from 'react-router-dom';


// [컴포넌트 만들기]
const NextLink = (props)=>{
    // props.pgname - 데이터 구분할 페이지 이름

    // 데이터 세팅
    const selcData = productIntro_data;

    // 들어온 페이지의 다음 페이지 데이터 넣기
    const next = (pgname)=>{
        // 객체 배열에서 속성들만 뽑아서 배열로 만들기
        let key = Object.keys(selcData);
        // 객체 배열에서 값들만 뽑아서 배열로 만들기
        let val = Object.values(selcData);
        // 속성만 뽑은 배열에서 파라미터로 받아온 페이지 이름(현재 페이지)속성의 순번에다 +1을 하면 다음 페이지의 이름(속성)의 순번이 됨
        let num = key.indexOf(pgname) + 1;
        // console.log("다음 객체 소환!", key[num].toLowerCase());
        
        // 제일 마지막 순번인 3번을 지나서 4번이 되면 0으로 되돌려서 다시 처음 페이지 이름 속성의 순번을 할당하기
        if(num == 4) num = 0;
        
        // 원본 객체 배열에서 값만 뽑은 val배열에서 데이터 뽑아서 리턴하기
        return [val[num].pdtit[0], val[num].pdtit[1], key[num]];
    }

    function fadeOut(){
        $(".stage").fadeOut();
    }


    // 리턴하기
    return(
        <>
            <section className='next_link'>
                <div className='next_link_container'>
                    <Link to={'/'+next(props.pgname)[2]} onClick={fadeOut}>
                        <div className="wrap">
                            <h2 className="name">
                                <span>
                                    {next(props.pgname)[0]} <br/>
                                    <i className={next(props.pgname)[1]=='Rouge' ? "rose" : "hit"}>
                                        {next(props.pgname)[1]}
                                    </i>
                                </span>
                            </h2>
                        </div>
                        <div className='wrap'>
                                {/* <img src={'./images/dt/sub/' + props.pgname.toLowerCase() + '/next-product.png'} alt='다음 제품 이미지' /> */}
                                <img src={'./images/dt/sub/' + props.pgname.toLowerCase() + '/next-product.png'} alt='다음 제품 이미지' />
                        </div>
                    </Link>
                </div>
            </section>
        </>
    );
} ////////////////////////// NextLink 컴포넌트 //////////////////////////

// 내보내기
export default NextLink;