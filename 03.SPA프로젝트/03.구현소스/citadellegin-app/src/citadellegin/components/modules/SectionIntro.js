// 각 섹션 소개 모듈 컴포넌트 JS - SectionIntro.js

import React from 'react';
import $ from 'jquery';
import '../../css/sectionIntro.css';
import sectionIntro_data from '../../data/sectionIntro';
import RollingBanner from './RollingBanner';


// [ 각 섹션별 소개 모듈 컴포넌트 ]
const SectionIntro = (props)=>{ //props.snum - 섹션 넘버
    // 데이터 셋업하기
    const slcData = sectionIntro_data;


    return(
        <>
            {/* 각 섹션 소개하기 */}
            <div id="section_intro">
                <section className="section_intro">
                   
                </section>
            </div>
        </>
    );
}; /////////////////////////////// SectionIntro 컴포넌트 ///////////////////////////////

// 내보내기
export default SectionIntro;