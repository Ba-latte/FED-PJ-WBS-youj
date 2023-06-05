// 메인 페이지 레이아웃 컴포넌트

import $ from 'jquery';
import { Outlet,Link } from 'react-router-dom';
import './css/layout.css';
import Header from './Header';



// [ 제이쿼리 로드구역 함수 ] ////////////////////
function jqFn(){
    $(()=>{
        
    }); ////////////// jQB //////////////
} ///////////////////// jqFn 함수 /////////////////////



// [ 레이아웃 컴포넌트 ] ////////////////////
const Layout = ()=>{
    return(
        <>
            {/* 1.상단 영역 */}
            <header>
                {/* <Link to="/main"></Link> */}
                <Header />
            </header>
            {/* 2.메인 영역 */}
            <main className='cont'>
                {/* 출력 파트 : 각 페이지 컴포넌트가 출력되는 부분 */}
                <Outlet />
            </main>
            {/* 3.하단 영역 */}
            <div id="info">
                <footer className="info">
                    {/* 로고 */}
                    <div className="logo_bx">
                        <a href="#">
                            <svg>
                                {/* svg 파일 불러오기 */}
                                <img src="./logo.svg" alt="로고 이미지" />
                            </svg>
                        </a>
                    </div>
                    {/* 라인 */}
                    <div className="line_bx">
                        {/* 숨겨둔 svg 불러오기 */}
                        <svg className="arrow-tail">
                            {/* <img src="./images/arrow-tail.svg" alt="화살표 꼬리모양" /> */}
                            {/* <use xlink:href="#arrow-tail"></use> */}
                        </svg>
                        <svg className="border_svg">
                            {/* <use xlink:href="#border_svg"></use> */}
                        </svg>
                        <svg className="arrow-tail">
                            {/* <use xlink:href="#arrow-tail"></use> */}
                        </svg>
                    </div>
                    {/* sns */}
                    <div className="sns_bx">
                        <ul className="sns_list">
                            <li>
                                <a href="https://www.instagram.com/citadellegin/?hl=en" target="_blank"><i className="fa-brands fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://youtube.com/@citadellegin1929" target="_blank"><i className="fa-brands fa-youtube"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/CitadelleGin" target="_blank"><i className="fa-brands fa-facebook-f"></i></a>
                            </li>
                        </ul>
                    </div>
                    {/* 기타 링크 */}
                    <ul className="etc_link">
                        <li>
                            <a href="#">Nos gins</a>
                        </li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                    </ul>
                    {/* 회사 정보 */}
                    <ul className="corp_info">
                        <li>
                            <i className="fa-solid fa-location-dot"></i>
                            Château de Bonbonnet 16130 Ars, France
                        </li>
                        <li>
                            © 2023 CITADELLE
                        </li>
                        <li>
                            <a href="http://maisonferrand.com/" target="_blank">MAISONFERRAND.COM</a>
                        </li>
                    </ul>
                </footer>
            </div>
            {/* JS로드 함수 */}
            {jqFn()}
        </>
    );
}; ///////////////////////////// Layout 컴포넌트 /////////////////////////////

// 내보내기
export default Layout;