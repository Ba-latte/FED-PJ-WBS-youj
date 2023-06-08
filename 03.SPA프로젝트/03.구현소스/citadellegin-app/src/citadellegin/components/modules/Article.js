// 아티클 모듈 컴포넌트 JS - ProductIntro.js

import React from "react";
import $ from "jquery";
import '../../css/article.css';
import article_data from '../../data/article';

// [ 컴포넌트 만들기 ]
const Article = (props)=>{
    // props.pgname - 페이지 이름으로 구분

    // 데이터 세팅하기
    const selcData = article_data;

    // desc 요소 구성하는 함수
    const makeDesc = (data)=>{
        // data - 아티클 데이터 중 설명 데이터
        return(
            <>
                {data.split("^")[0]}
                <br />
                <br />
                {data.split("^")[1]}
            </>
        );
    }

    return(
        <>
            {
                selcData[props.pgname].map((v, i)=>
                <div className="article_container" key={i}>
                    <div>{'😎테스트 : ' + i}</div>
                    <article className={"description"+(i=selcData.length-1?" medal":"")}>
                        <h3 className="tit" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-anchor="product_name_container">
                            {v.tit}
                        </h3>
                        {v.subtit.length >= 1 && <h4 className="subtit">{v.subtit}</h4>}
                        
                        <p className="desc">{makeDesc(v.desc)}</p>
                        {
                            v.isrc.length >= 1 &&
                            <div className="wrap">
                                {
                                    v.isrc.map((val)=>
                                        <img className="img" src={val} alt="메달 이미지" />
                                    )
                                }
                            </div>
                        }
                    </article>
                </div>
                )
            }
            {/* js 로드 함수 호출 */}
            {jsFn()}
        </>
    );
}; /////////////////////////// Article 컴포넌트 ///////////////////////////


// js 로드 함수
function jsFn(){
    $(()=>{

    });
}



// 내보내기
export default Article;