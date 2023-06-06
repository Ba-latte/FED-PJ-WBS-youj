// 각 제품 소개 모듈 컴포넌트 JS - ProductIntro.js


import './css/productIntro.css';


// [ 제품 소개 모듈 컴포넌트 ]
const ProductIntro = ()=>{
    return(
        <div id="product_intro">
            {/* 제품 소개 섹션 */}
            <section className="product_intro">
                {/* 1. 제품명 */}
                <div className="product_name_container">
                    <div className="wrap">
                        <h2 className="name">
                            <span>
                                <span id="lt1" className="letter" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" >Citadelle</span>
                                <span id="lt2" className="letter" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500"  >Original</span>
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
                        <div className="article_container">
                            <article className="description">
                                <h3 className="tit">
                                    Citadelle Original, the pioneer of french gin.
                                </h3>
                                <p className="desc">
                                Citadelle Original is our very first gin, the French gin par excellence. Dry and structured, it strikes a perfect balance between finesse and intensity. It has been the signature expression of our savoir-faire since 1996.
                                </p>
                            </article>
                        </div>

                        <div className="article_container">
                            <article className="description">
                                <h3 className="tit">
                                    Experience the taste.
                                </h3>
                                <h4 className="subtit">
                                    Citadelle Original offers a rich and complete aromatic palette.
                                </h4>
                                <p className="desc">
                                Juniper introduces Citadelle’s signature botanical from the outset, then opens up to bright citrus notes that enhances the juniper berry’s freshness. The finish leans more exotic… long and spicy thanks to touches of pepper, nutmeg and cinnamon.
                                </p>
                            </article>
                        </div>

                        <div className="article_container">
                            <article className="description recipe">
                                <h3 className="tit">
                                    How to enjoy it:
                                </h3>
                                <h4 className="subtit">
                            
                                </h4>
                                <p className="desc">
                                Citadelle Original is ideal in a gin & tonic, with a twist of lemon peel. It goes perfectly with a platter of oysters for a true pairing of the best of south-west France.
                                </p>
                                <p className="desc">
                                Have you tried it in our Citadelle Gin Tonic?
                                </p>
                                <div className="wrap">
                                    <img className="img" src="./images/dt/sub/original/recipe.jpg" alt="레시피 이미지" />
                                </div>
                            </article>
                        </div>

                        <div className="article_container">
                            <article className="description medal">
                                <h3 className="tit">
                                    As for awards...
                                </h3>
                                <h4 className="subtit">
                            
                                </h4>
                                <p className="desc">
                                Citadelle Original has won over 80 medals, including “Spirit of the Year” at the World Spirits Award 2017. It was also voted “Best French Gin in the World” in the Top 100 Spirits and awarded “Gin Grand Master” in London.
                                </p>
                                <div className="wrap">
                                    <img className="img" src="./images/dt/sub/original/medal1.png" alt="메달 이미지" />
                                </div>
                            </article>
                        </div>
                    </div>
                </aside>
            </section>
        </div>
    );
}; ///////////////////////// ProductIntro 컴포넌트 /////////////////////////

// 내보내기
export default ProductIntro;