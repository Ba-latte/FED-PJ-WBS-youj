// 제품 상세 사항 데이터 JS - sub_detail_data.js

const detail_data = {
    detail_data: `
    <div class="pd_detail_bx">
        <!-- 제품 상세설명 박스 -->
        <div class="wrap">
            <!-- 닫기 버튼 -->
            <div class="close_btn_bx">
                <span class="material-symbols-outlined close" v-on:click="$store.commit('closeFn')">close</span>
            </div>
            <!-- 이미지 배너 박스 -->
            <div class="img_ban_bx">
                <!-- 슬라이드 이미지 -->
                <div class="swiper mySwiper2">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img :src="'./images/products/'+$store.state.cat+'/shrinkage/sum1/'+$store.state.name+'.png'" />
                        </div>
                        <div class="swiper-slide">
                            <img :src="'./images/products/'+$store.state.cat+'/shrinkage/sum2/'+$store.state.name+'.png'" />
                        </div>
                        <div class="swiper-slide">
                            <img :src="'./images/products/'+$store.state.cat+'/shrinkage/sum3/'+$store.state.name+'.png'" />
                        </div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                <!-- 썸네일 리스트 -->
                <div thumbsSlider="" class="swiper mySwiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img :src="'./images/products/'+$store.state.cat+'/shrinkage/sum1/'+$store.state.name+'.png'" />
                        </div>
                        <div class="swiper-slide">
                            <img :src="'./images/products/'+$store.state.cat+'/shrinkage/sum2/'+$store.state.name+'.png'" />
                        </div>
                        <div class="swiper-slide">
                            <img :src="'./images/products/'+$store.state.cat+'/shrinkage/sum3/'+$store.state.name+'.png'" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- 제품 설명 박스 -->
            <div class="desc_bx">
                <h3 class="title">{{$store.state.name}}</h3>
                <div class="desc">
                    <div class="material">{{$store.state.material}}</div>
                    <div class="gemstone">{{$store.state.gemstone}}</div>
                </div>
                <form action="" method="" class="size-selec">
                    <select name="size-selec" id="size-selec">
                        <option value="XS">사이즈 : XS</option>
                        <option value="S">사이즈 : S</option>
                        <option value="M">사이즈 : M</option>
                        <option value="L">사이즈 : L</option>
                        <option value="XL">사이즈 : XL</option>
                    </select>
                </form>
                <div class="price" v-if="$store.state.price!==''" v-text="'￦ ' + insComma($store.state.price)"></div>
                <button class="shoppingback">장바구니에 추가</button>
                <button class="reservation">스토어 방문 예약하기</button>
                <button class="store_find">가까운 스토어 찾기</button>
            </div>
        </div>
    </div>
    `,
};

// 내보내기
export default detail_data;
