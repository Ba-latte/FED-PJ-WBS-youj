
const fillter_data = {
    fillter_data:`
    <div class="wrap">
        <!-- 1-1.네비게이션바 -->
        <nav class="nav_bar">
            <ol>
                <li><a href="#">HOME</a></li>
                <li>|</li>
                <li class="current_location"><a href="#">{{$store.state.cat.toUpperCase()}}</a></li>
            </ol>
        </nav>
        <!-- 1-2.표제 -->
        <div class="txt_bx">
            <h2 class="headline">{{$store.state.cat.toUpperCase()}}</h2>
        </div>
        <!-- 1-3.총 재고, 정렬 기준, 필터바 -->
        <div class="classification">
            <!-- (1)정렬 기준 -->
            <div class="sort_bar">
                <div class="total_stock">
                    <span class="product_count">{{$store.state.cnt}}</span>개의 제품 중 <span class="product_count">{{$store.state.cnt}}</span>개
                </div>
                <div class="sort">
                    <span class="txt">정렬 기준:</span>
                    <form action="" method="post" class="selecFn">
                        <select name="selec" id="selecbx">
                            <option value="recommended">추천 제품</option>
                            <option value="high">높은 가격순</option>
                            <option value="low">낮은 가격순</option>
                        </select>
                    </form>
                </div>
            </div>
            <!-- (2) 필터 바 -->
            <div class="filter_bar">
                <!-- 필터 제목들 -->
                <ul class="filter">
                    <li class="material-symbols-outlined">tune</li>
                    <li class="tit">필터: </li>
                    <ul>
                        <li class="category">
                            <span class="category_name">카테고리</span>
                            <span class="material-symbols-outlined expand_more icon">expand_more</span>
                            <span class="material-symbols-outlined expand_less">expand_less</span>
                        </li>
                        <li class="material">
                            <span class="category_name">소재</span>
                            <span class="material-symbols-outlined expand_more icon">expand_more</span>
                            <span class="material-symbols-outlined expand_less">expand_less</span>
                        </li>
                        <li class="gemstone">
                            <span class="category_name">젬스톤</span>
                            <span class="material-symbols-outlined expand_more icon">expand_more</span>
                            <span class="material-symbols-outlined expand_less">expand_less</span>
                        </li>
                        <li class="price">
                            <span class="category_name">가격</span>
                            <span class="material-symbols-outlined expand_more icon">expand_more</span>
                            <span class="material-symbols-outlined expand_less">expand_less</span>
                        </li>
                    </ul>
                </ul>
            </div>
        </div>
        <!-- 필터 옵션들 -->
        <form action="" method="post" class="filterFn">
            <!-- 필터 옵션 선택 겉박스 -->
            <div class="filter_opt">
                <!-- 카테고리 선택 -->
                <ul class="sel_opt category">
                    <li>
                        <input type="checkbox" name="category" id="rings"
                        v-model="$store.state.chkarr[0]"
                        @change="$store.commit('resCheck')" />
                        <label for="rings">링</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category" id="necklaces"
                        v-model="$store.state.chkarr[1]"
                        @change="$store.commit('resCheck')" />
                        <label for="necklaces">네크리스</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category" id="bracelets"
                        v-model="$store.state.chkarr[2]"
                        @change="$store.commit('resCheck')" />
                        <label for="bracelets">브레이슬릿</label>
                    </li>
                    <li>
                        <input type="checkbox" name="category" id="earrings"
                        v-model="$store.state.chkarr[3]"
                        @change="$store.commit('resCheck')" />
                        <label for="earrings">이어링</label>
                    </li>
                </ul>
                <!-- 소재 선택 -->
                <ul class="sel_opt material">
                    <li>
                        <input type="checkbox" name="material" id="rg" 
                        v-model="$store.state.material_chk[0]" 
                        @change="$store.commit('checkFn')" />
                        <label for="rg">로즈 골드</label>
                    </li>
                    <li>
                        <input type="checkbox" name="material" id="yg" 
                        v-model="$store.state.material_chk[1]" 
                        @change="$store.commit('checkFn')" />
                        <label for="yg">옐로 골드</label>
                    </li>
                    <li>
                        <input type="checkbox" name="material" id="wg" 
                        v-model="$store.state.material_chk[2]" 
                        @change="$store.commit('checkFn')" />
                        <label for="wg">화이트 골드</label>
                    </li>
                </ul>
                <!-- 젬스톤 선택 -->
                <ul class="sel_opt gemstone">
                    <!-- 1.다이아몬드 -->
                    <li>
                        <input type="checkbox" name="gemstone" id="diamond" />
                        <label for="diamond">
                            <div class="gemimg"><img src="./images/sub_page/jewelry/diamond.png" alt="다이아몬드"></div>
                            <span class="gemname">다이아몬드</span>
                        </label>
                    </li>
                    <!-- 2.루벨라이트 -->
                    <li>
                        <input type="checkbox" name="gemstone" id="rubelite" />
                        <label for="rubelite">
                            <div class="gemimg"><img src="./images/sub_page/jewelry/rubellite.png" alt="루벨라이트"></div>
                            <span class="gemname">루벨라이트</span>
                        </label>
                    </li>
                    <!-- 3.루비 -->
                    <li>
                        <input type="checkbox" name="gemstone" id="ruby" />
                        <label for="ruby">
                            <div class="gemimg"><img src="./images/sub_page/jewelry/rubies.png" alt="루비"></div>
                            <span class="gemname">루비</span>
                        </label>
                    </li>
                    <!-- 4.마더오브펄 -->
                    <li>
                        <input type="checkbox" name="gemstone" id="mop" />
                        <label for="mop">
                            <div class="gemimg"><img src="./images/sub_page/jewelry/mother-of-pearl.png" alt="마더오브펄"></div>
                            <span class="gemname">마더오브펄</span>
                        </label>
                    </li>
                    <!-- 5.말라카이트 -->
                    <li>
                        <input type="checkbox" name="gemstone" id="malachite" />
                        <label for="malachite">
                            <div class="gemimg"><img src="./images/sub_page/jewelry/malachite.png" alt="말라카이트"></div>
                            <span class="gemname">말라카이트</span>
                        </label>
                    </li>
                    <!-- 6.사파이어 -->
                    <li>
                        <input type="checkbox" name="gemstone" id="sapphire" />
                        <label for="sapphire">
                            <div class="gemimg"><img src="./images/sub_page/jewelry/sapphires.png" alt="사파이어"></div>
                            <span class="gemname">사파이어</span>
                        </label>
                    </li>
                    <!-- 7.에메랄드 -->
                    <li>
                        <input type="checkbox" name="gemstone" id="emerald" />
                        <label for="emerald">
                            <div class="gemimg"><img src="./images/sub_page/jewelry/emeralds.png" alt="에메랄드"></div>
                            <span class="gemname">에메랄드</span>
                        </label>
                    </li>
                    <!-- 8.오닉스 -->
                    <li>
                        <input type="checkbox" name="gemstone" id="onyx" />
                        <label for="onyx">
                            <div class="gemimg"><img src="./images/sub_page/jewelry/onyx.png" alt="오닉스"></div>
                            <span class="gemname">오닉스</span>
                        </label>
                    </li>
                </ul>
            </div>
        </form>
    </div>
    `,
};

export default fillter_data;