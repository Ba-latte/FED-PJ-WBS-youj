// 각 제품 소개 모듈 컴포넌트 JS - ProductIntro.js


import '../../css/productIntro.css';
import productIntro_data from '../../data/productIntro';
import Article from './Article';
import PromotionalPhrase from './PromotionalPhrase';


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
                        <div className="wrap">
                            <img className="sticker lemon" src={"./images/dt/sub/"+props.pgname.toLowerCase()+"/lemon.png"} alt="레몬 일러스트" />
                        </div>
                        <div className="wrap">
                            <img className="sticker leaf-3" src={"./images/dt/sub/"+props.pgname.toLowerCase()+"/leaf-3.png"} alt="이파리 일러스트" />
                        </div>
                        <div className="wrap">
                            <img className="sticker berry" src={"./images/dt/sub/"+props.pgname.toLowerCase()+"/berry.png"} alt="베리 일러스트" />
                        </div>
                        {/* 제품 상세 이미지 */}
                        <div className="wrap">
                            <img id="product" src={"./images/dt/sub/"+props.pgname.toLowerCase()+"/gin-1.png"} alt="제품 상세 이미지" />
                        </div>
                    </div>
                    {/* 3.제품 설명 아티클들 */}
                    <div className="product_desc_container">
                        <Article pgname={props.pgname} />
                    </div>
                </aside>
                {/* 4.제품 홍보 문구 섹션 */}
                <PromotionalPhrase pgname={props.pgname} />
            </section>
        </div>
    );
}; ///////////////////////// ProductIntro 컴포넌트 /////////////////////////

// 내보내기
export default ProductIntro;