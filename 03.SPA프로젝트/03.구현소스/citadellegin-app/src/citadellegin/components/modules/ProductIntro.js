// 각 제품 소개 모듈 컴포넌트 JS - ProductIntro.js


import '../../css/productIntro.css';
import productIntro_data from '../../data/productIntro';
import Article from './Article';
import PromotionalPhrase from './PromotionalPhrase';
// 패럴랙스
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

// [ 제품 소개 모듈 컴포넌트 ]
const ProductIntro = (props)=>{
    // props.pgname - 데이터 구분할 페이지 이름(첫글자 대문자)

    // 데이터 세팅
    const selcData = productIntro_data;
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
                        {/* 꾸밈 이미지 */}
                        {
                        
                            selcData[props.pgname]["isrc"].map((v, i)=>
                                // 만약 데이터가 없다면 이미지 박스 만들지 않도록 제어하기!
                                v !== "" &&
                                <>
                                <div className='wrap' key={i}>
                                    {/* 클래스이름은 이미지이름에서 따오기 */}
                                    {/* <Parallax speed={selcData[props.pgname]["speed"][i]}> */}
                                        <img className={"sticker " + v.split("/")[5].split(".")[0]} src={v} alt="사용된 보태니컬 종류 일러스트" />
                                    {/* </Parallax> */}
                                </div>


                                {/* <div className='wrap'>
                                    <Parallax speed={-50}>
                                        <img className='sticker deco-1' src={selcData[props.pgname]["isrc"][0]} alt="데코이미지" />
                                    </Parallax>
                                </div>
                                <div className='wrap'>
                                    <Parallax speed={15}>
                                        <img className='sticker deco-2' src={selcData[props.pgname]["isrc"][1]} alt="데코이미지" />
                                    </Parallax>
                                </div>
                                <div className='wrap'>
                                    <Parallax speed={20}>
                                        <img className='sticker deco-3' src={selcData[props.pgname]["isrc"][2]} alt="데코이미지" />
                                    </Parallax>
                                </div> */}
                                </>
                            )
                        }
                        
                        {/* [ Parallax 컴포넌트를 써서 각각 옵션 주는 방법 ] */}
                        {/* <div className='parallaxBx'>
                            <Parallax speed={-50} style={{position:"absolute"}}>
                                <img className='sticker' src='./images/dt/sub/rouge/raspberry3.png' alt="라즈베리" />
                            </Parallax>
                            <Parallax speed={-20} style={{position:"absolute"}}>
                                <img src='./images/dt/sub/rouge/blackberry1.png' alt="블랙베리" />
                            </Parallax>
                        </div> */}
                    
                        {/*
                        [ ParallaxBanner를 써서 하나의 세트로 만드는 방법 : 적용 못함^_ㅠ ]
                        <ParallaxBanner
                            layers={
                                [
                                    {image:'./images/dt/sub/rouge/raspberry3.png', speed: -30},
                                    {image:'./images/dt/sub/rouge/blackberry2.png', speed: 30},
                                    {image:'./images/dt/sub/rouge/raspberry1.png', speed: -50},
                                    {image:'./images/dt/sub/rouge/blackberry1.png', speed: 50}
                                ]
                            }
                            // style={{
                            //     height:"100%",
                            //     width: "100%",
                            //     position: "absolute",
                            //     zIndex: "99",
                            // }}
                        />
                        */}

                        {/* 제품 상세 이미지 */}
                        <div className="wrap">
                            <Parallax speed={window.innerWidth < 500 ? 0 : -50}>
                                <img id="product" src={selcData[props.pgname]["pdsrc"]} alt="제품 상세 이미지" />
                            </Parallax>
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