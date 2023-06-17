// 각 섹션 소개 모듈 컴포넌트 JS - SectionIntro.js

import React from 'react';
import $ from 'jquery';
import '../../css/sectionIntro.css';
import sectionIntro_data from '../../data/sectionIntro';
import RollingBanner from './RollingBanner';


// [ 각 섹션별 소개 모듈 컴포넌트 ]
const SectionIntro = (props)=>{
    //props.snum - 섹션 넘버
    // props.cls - 각 섹션별 css 세팅 위한 클래스 이름

    // 데이터 셋업하기
    const slcData = sectionIntro_data;


    return(
        <>
            {/* 각 섹션 소개하기 */}
            <div id="section_intro" className={props.cls}>
                <section className="section_intro">
                    <article>
                        <div>
                            {
                                props.snum == 0 ?
                                <img className='bgimg-right' src='./images/dt/main/background-right.png' alt='배경이미지' /> :
                                <img className='bgimg-left' src='./images/dt/main/background-left.png' alt='배경이미지' />
                            }
                        </div>
                        {/* 1.섹션 아티클 타이틀 */}
                        <div className='sec_title_container'>
                            <div className='title_bx'>
                                <h2 className={'title' + " " + props.cls}>
                                    {/* 타이틀 데이터를 필요한 만큼 나눠서 배열로 담음 -> 컴포넌트를 불러올 때 가지고 들어온 섹션번호로 데이터를 구분한 다음 title속성을 맵을 돌아 타이틀배열의 갯수만큼 요소에 들어가게 함 */}
                                {
                                    slcData[props.snum]["title"].map((v, i)=>
                                        <span key={i}>
                                            <span className='letter' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">{v}</span>
                                        </span>
                                    )
                                }
                                </h2>
                            </div>
                        </div>
                        {/* 2.섹션 아티클 설명 */}
                        <div className='sec_desc_container'>
                            <div className='desc_bx'>
                                <p className={'desc' + " " + props.cls}>{slcData[props.snum]["desc"]}</p>
                            </div>
                        </div>
                        {/* 3-1.snum이 1인 경우 롤링 배너 등장 */}
                        {
                            props.snum == 1 &&
                            <RollingBanner />
                        }
                        {/* 3-2.섹션 아티클 이미지 */}
                        <div className='sec_img_container'>
                            <div className={'img_bx' + " " + props.cls}>
                                {/* 2번째 섹션인 경우 스크롤 애니메이션 적용 안 함 */}
                                {
                                    props.cls == "sec2" ?
                                    <img className={props.cls} src={slcData[props.snum]["isrc"]} alt='이미지' /> :
                                    <img data-aos="imgAni" data-aos-duration="2000" data-aos-easing="liner" src={slcData[props.snum]["isrc"]} alt='이미지' />
                                }
                            </div>
                            {/* 각 섹션별로 추가 이미지 넣기 */}
                            {
                                props.snum == 1 &&
                                <>
                                <div className='wrap'>
                                    <img className='pharer' src="./images/dt/main/pharer.png" alt="등대 일러스트" />
                                </div>
                                <div>
                                    <img className='verres' src='./images/dt/main/verres.png' alt='와인잔 일러스트' />
                                </div>
                                </>
                            }
                            {
                                props.snum == 2 &&
                                <>
                                <div className='wrap'>
                                    <img data-aos="imgAni" data-aos-duration="2000" data-aos-easing="liner" className='addImg' src="./images/dt/main/3-1.jpg" alt="추가 이미지" />
                                </div>
                                <div>
                                    <img className='huitres' src='./images/dt/main/huitres.png' alt='굴 요리 일러스트' />
                                </div>
                                </>
                            }
                        </div>
                    </article>
                </section>
            </div>
        </>
    );
}; /////////////////////////////// SectionIntro 컴포넌트 ///////////////////////////////

// 내보내기
export default SectionIntro;