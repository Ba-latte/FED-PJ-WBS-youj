// 각 제품 소개 모듈 컴포넌트 JS - ProductIntro.js


import '../../css/productIntro.css';
import productIntro_data from '../../data/productIntro';
import Article from './Article';


// [ 제품 소개 모듈 컴포넌트 ]
const ProductIntro = (props)=>{
    // props.pgname - 데이터 구분할 페이지 이름

    // 데이터 세팅
    const selcData = productIntro_data;
    return(
        <div id="product_intro">
            {/* 제품 소개 섹션 */}
            <section className="product_intro">
                {/* 1. 제품명 */}
                <div className="product_name_container">
                    <div className="wrap">
                        <h2 className="name">
                            <span>
                                <span id="lt1" className="letter" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >{selcData[props.pgname].pdtit[0]}</span>
                                <span id="lt2" className="letter" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"  >{selcData[props.pgname].pdtit[1]}</span>
                            </span>
                        </h2>
                    </div>
                </div>
                {/* 👇제품 관련 부분 */}
                <aside className="gridBx">
                    {/* 2.제품 이미지 */}
                    <div className="product_img_container">
                        {/* 꾸밈 이미지 */}
                        <div className="wrap">
                            <img className="sticker lemon" src="./images/dt/sub/original/lemon.png" alt="레몬 일러스트" />
                        </div>
                        <div className="wrap">
                            <img className="sticker leaf-3" src="./images/dt/sub/original/leaf-3.png" alt="이파리 일러스트" />
                        </div>
                        <div className="wrap">
                            <img className="sticker berry" src="./images/dt/sub/original/berry.png" alt="베리 일러스트" />
                        </div>
                        {/* 제품 상세 이미지 */}
                        <div className="wrap">
                            <img id="product" src="./images/dt/sub/original/gin-citadelle-original-1.png" alt="제품 상세 이미지" />
                        </div>
                    </div>
                    {/* 3.제품 설명 아티클들 */}
                    <div className="product_desc_container">
                        <Article pgname={props.pgname} />
                    </div>
                </aside>
            </section>
        </div>
    );
}; ///////////////////////// ProductIntro 컴포넌트 /////////////////////////

// 내보내기
export default ProductIntro;