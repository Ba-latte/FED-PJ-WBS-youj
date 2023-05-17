// 뷰 라우터 인스턴스 설정파일 - glist-router.js

// ⭐라우터 템플릿 만들기
let Bracelets = {
    template: `
    <div class="grid grid1">
        <!-- 1번째 줄 -->
        <div class="rw1 imgbx">
            <span class="tit">끝없는 변모</span>
            <img src="./images/sub_page/jewelry/grid_jew_1.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <div class="rw1 productbx" data-pnum="1">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[0].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[0].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[0].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[0].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw1 productbx" data-pnum="2">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[1].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[1].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[1].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[1].gemstone}}</span>
                </div>
            </div>
        </div>
        <!-- 2번째 줄 -->
        <div class="rw2 productbx" data-pnum="3">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[2].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[2].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[2].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[2].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw2 productbx" data-pnum="4">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[3].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[3].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[3].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[3].gemstone}}</span>
                </div>
            </div>
        </div>
        <!-- 3번째 줄 -->
        <div class="rw3 productbx" data-pnum="5">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[4].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[4].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[4].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[4].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 productbx" data-pnum="6">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[5].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[5].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[5].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[5].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 imgbx">
            <span class="tit">매혹의 아이콘</span>
            <img src="./images/sub_page/jewelry/grid_jew_2.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <!-- 4번째 줄 -->
        <div class="rw4 productbx" data-pnum="7">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[6].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[6].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[6].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[6].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw4 productbx" data-pnum="8">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[7].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[7].ginfo[1]!=''" v-text="'￦ ' + insComma($store.state.items[7].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[7].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[7].gemstone}}</span>
                </div>
            </div>
        </div>
    </div>
    `,
};


let Necklaces = {
    template: `
    <div class="grid grid1">
        <!-- 1번째 줄 -->
        <div class="rw1 imgbx">
            <span class="tit">끝없는 변모</span>
            <img src="./images/sub_page/jewelry/grid_jew_1.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <div class="rw1 productbx" data-pnum="1">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[0].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[0].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[0].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[0].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw1 productbx" data-pnum="2">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[1].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[1].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[1].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[1].gemstone}}</span>
                </div>
            </div>
        </div>
        <!-- 2번째 줄 -->
        <div class="rw2 productbx" data-pnum="3">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[2].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[2].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[2].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[2].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw2 productbx" data-pnum="4">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[3].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[3].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[3].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[3].gemstone}}</span>
                </div>
            </div>
        </div>
        <!-- 3번째 줄 -->
        <div class="rw3 productbx" data-pnum="5">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[4].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[4].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[4].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[4].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 productbx" data-pnum="6">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[5].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[5].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[5].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[5].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 imgbx">
            <span class="tit">매혹의 아이콘</span>
            <img src="./images/sub_page/jewelry/grid_jew_2.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <!-- 4번째 줄 -->
        <div class="rw4 productbx" data-pnum="7">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[6].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[6].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[6].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[6].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw4 productbx" data-pnum="8">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[7].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[7].ginfo[1]!=''" v-text="'￦ ' + insComma($store.state.items[7].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[7].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[7].gemstone}}</span>
                </div>
            </div>
        </div>
    </div>
    `,
};
let Earrings = {
    template: `
    <div class="grid grid1">
        <!-- 1번째 줄 -->
        <div class="rw1 imgbx">
            <span class="tit">끝없는 변모</span>
            <img src="./images/sub_page/jewelry/grid_jew_1.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <div class="rw1 productbx" data-pnum="1">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[0].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[0].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[0].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[0].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw1 productbx" data-pnum="2">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[1].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[1].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[1].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[1].gemstone}}</span>
                </div>
            </div>
        </div>
        <!-- 2번째 줄 -->
        <div class="rw2 productbx" data-pnum="3">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[2].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[2].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[2].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[2].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw2 productbx" data-pnum="4">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[3].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[3].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[3].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[3].gemstone}}</span>
                </div>
            </div>
        </div>
        <!-- 3번째 줄 -->
        <div class="rw3 productbx" data-pnum="5">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[4].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[4].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[4].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[4].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 productbx" data-pnum="6">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[5].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[5].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[5].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[5].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 imgbx">
            <span class="tit">매혹의 아이콘</span>
            <img src="./images/sub_page/jewelry/grid_jew_2.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <!-- 4번째 줄 -->
        <div class="rw4 productbx" data-pnum="7">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[6].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[6].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[6].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[6].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw4 productbx" data-pnum="8">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[7].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[7].ginfo[1]!=''" v-text="'￦ ' + insComma($store.state.items[7].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[7].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[7].gemstone}}</span>
                </div>
            </div>
        </div>
    </div>
    `,
};
let Rings = {
    template: `
    <div class="grid grid1">
        <!-- 1번째 줄 -->
        <div class="rw1 imgbx">
            <span class="tit">끝없는 변모</span>
            <img src="./images/sub_page/jewelry/grid_jew_1.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <div class="rw1 productbx" data-pnum="1">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name1.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[0].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[0].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[0].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[0].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw1 productbx" data-pnum="2">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name2.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[1].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[1].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[1].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[1].gemstone}}</span>
                </div>
            </div>
        </div>
        <!-- 2번째 줄 -->
        <div class="rw2 productbx" data-pnum="3">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name3.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[2].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[2].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[2].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[2].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw2 productbx" data-pnum="4">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name4.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[3].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[3].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[3].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[3].gemstone}}</span>
                </div>
            </div>
        </div>
        <!-- 3번째 줄 -->
        <div class="rw3 productbx" data-pnum="5">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name5.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[4].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[4].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[4].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[4].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 productbx" data-pnum="6">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name6.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[5].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[5].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[5].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[5].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw3 imgbx">
            <span class="tit">매혹의 아이콘</span>
            <img src="./images/sub_page/jewelry/grid_jew_2.jpg" alt="주얼리 그리드 이미지">
            <span class="btn">자세히 보기</span>
        </div>
        <!-- 4번째 줄 -->
        <div class="rw4 productbx" data-pnum="7">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name7.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[6].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-text="'￦ ' + insComma($store.state.items[6].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[6].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[6].gemstone}}</span>
                </div>
            </div>
        </div>
        <div class="rw4 productbx" data-pnum="8">
            <div class="imgbx">
                <img src="./images/products/bracelets/shrinkage/sum1/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
                <img class="hover" src="./images/products/bracelets/shrinkage/sum2/goods_name8.png" alt="세르펜티 바이퍼 브레이슬릿">
            </div>
            <div class="descbx">
                <h6 class="tit">{{$store.state.items[7].ginfo[0]}}</h6>
                <div class="desc">
                    <p class="price" v-if="$store.state.items[7].ginfo[1]!=''" v-text="'￦ ' + insComma($store.state.items[7].ginfo[1])"></p>
                    <span class="material">{{$store.state.items[7].material}}</span>
                    <span class="bar"> / </span>
                    <span class="gemstone">{{$store.state.items[7].gemstone}}</span>
                </div>
            </div>
        </div>
    </div>
    `,
};

// 뷰 라우터 인스턴스 생성하기
const router = new VueRouter({
    routes: [
        // 1.필터 리스트
        {
            path: "/bracelets",
            component: Bracelets,
        },
        {
            path: "/necklaces",
            component: Necklaces,
        },
        {
            path: "/earrings",
            component: Earrings,
        },
        {
            path: "/rings",
            component: Rings,
        },

    ],
});


// 내보내기
export default router;