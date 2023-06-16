// 각 섹션 소개 모듈 컴포넌트 JS - SectionIntro.js

import React from 'react';
import $ from 'jquery';
import '../../css/sectionIntro.css';
import sectionIntro_data from '../../data/sectionIntro';
import RollingBanner from './RollingBanner';


// [ 각 섹션별 소개 모듈 컴포넌트 ]
const SectionIntro = ()=>{
    // 데이터 셋업하기
    const slcData = sectionIntro_data;


    return(
        <>
            {/* 각 섹션 소개하기 */}
            <div id="section_intro">
                <section className="section_intro">
                    {
                        slcData.map((v, i)=>
                        <article key={i} >
                            {/* 1.섹션 아티클 타이틀 */}
                            <div className="sec_title_container">
                                <div className="title_bx">
                                    <h2 className="title">
                                        <span>
                                            <span className="letter" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">{v["title"]}</span>
                                        </span>
                                    </h2>
                                </div>
                            </div>
                            {/* 2.섹션 아티클 설명 */}
                            <div className="sec_desc_container">
                                <div className="desc_bx">
                                    <p className="desc">{v["desc"]}</p>
                                </div>
                            </div>
                            {/* 3-1. 2번 섹션일 때 롤링 배너 등장 */}
                            {
                                i == 1 &&
                                <RollingBanner />
                            }
                            {/* 3-2. 섹션 아티클 이미지 */}
                            {
                                v["isrc"].length >= 1 &&
                                <div className="sec_img_container">
                                    <div className="img_bx">
                                        <img src={v["isrc"]} alt="레시피 이미지" />
                                    </div>
                                </div>
                            }

                        </article>
                        )
                    }
                </section>
            </div>
        </>
    );
}; /////////////////////////////// SectionIntro 컴포넌트 ///////////////////////////////

// 내보내기
export default SectionIntro;