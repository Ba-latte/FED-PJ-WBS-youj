// 아티클 모듈 컴포넌트 JS - ProductIntro.js

import React from "react";
import $ from "jquery";
import '../../css/article.css';
import article_data from '../../data/article';
import SwiperLimited from "../plugin/SwiperLimited";
import limited_product_data from "../../data/limitedProduct";

// [ 컴포넌트 만들기 ]
const Article = (props)=>{ 
    // props.pgname - 페이지 이름으로 구분 (첫글자 대문자)
    //props.dbseq - Limited페이지 스와이퍼 배너 슬라이드 인덱스번호 (숫자)

    // 데이터 세팅하기
    const selcData = article_data;
    const lmtData = limited_product_data;

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
            {/* 경우1) 제품 페이지에서 불린 경우 */}
            {
                (props.pgname == "Original" || props.pgname == "Dete" || props.pgname == "Rouge" || props.pgname == "Limited") &&
                selcData[props.pgname].map((v, i)=>
                    <div className="article_container" key={i}>
                        <article className={"description" + (v.tit==="As for awards..."?" medal":v.tit==="How to enjoy it: "?" recipe":"")}>
                            <div className="wrap">
                                {/* 큰 제목 */}
                                <div>
                                    <h3 className="tit" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={i===0?"700":""} data-aos-easing="ease-in-out-quart">
                                        {v.tit}
                                    </h3>
                                </div>
                                {/* 작은 제목 */}
                                {v.subtit.length >= 1 && <h4 className="subtit">{v.subtit}</h4>}
                            </div>
                            {/* 설명 : pgname이 "limited"고 desc 속성 값이 비어있다면 -> <SwiperProduct/>컴포넌트 불러오기 */}
                            {
                                props.pgname=="Limited" && v.desc === "" ?
                                // 스와이퍼 모듈
                                <SwiperLimited /> :
                                <p className="desc">{makeDesc(v.desc)}</p>
                            }
                            {/* 이미지 */}
                            {
                                v.isrc.length >= 1 &&
                                <div className="wrap">
                                    {
                                        v.isrc.map((val, idx)=>
                                            <img className="img" src={val} alt="메달 이미지" key={idx}/>
                                        )
                                    }
                                </div>
                            }
                        </article>
                    </div>
                )
            }
            {/* 경우2) limited 페이지의 스와이퍼 배너를 클릭한 경우 */}
            {
                props.pgname == "details"  &&
                lmtData[props.dbseq]["article"].map((v, i)=>
                    <div className="article_container details" key={i} >
                        <article className="description">
                            <div className="wrap">
                                {/* 1.큰제목 */}
                                <h3 className="tit">{v["tit"]}</h3>
                                {/* 2.작은 제목 : 있따면 박스 넣기 */}
                                {v["subtit"].length >= 1 && <h4 className="subtit">{v["subtit"]}</h4>}
                            </div>
                            {/* 3.설명 : 단락이 1개 이상일 경우 갯수만큼 p요소 만들어서 그 안에 데이터 넣기 */}
                            {
                                v["desc"].length >= 1 &&
                                <>
                                    {v["desc"].map((v, i)=>
                                        <p className="desc" key={i}>{v}</p>
                                    )}
                                </>
                            }
                            {/* 4.이미지 : 이미지 데이터가 있다면 태그 만들어서 넣기 */}
                            {
                                v["artiImgSrc"].length >= 1 &&
                                <div className="wrap">
                                    <img className="img" src={v["artiImgSrc"]} alt="제품 이미지" />
                                </div>
                            }
                            
                        </article>
                    </div>
                )
            }
            {/* js 로드 함수 호출 */}
            {/* {atclFn()} */}
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