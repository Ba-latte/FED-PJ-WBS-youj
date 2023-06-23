// 메인 페이지 레이아웃 컴포넌트

import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import $ from 'jquery';
import Header from '../modules/Header';
import Footer from '../modules/Footer';
import Loading from '../common/Loading';



// [ 제이쿼리 로드구역 함수 ] ////////////////////
function jqFn(){
    $(()=>{
        
    }); ////////////// jQB //////////////
} ///////////////////// jqFn 함수 /////////////////////


// [ 레이아웃 컴포넌트 ] ////////////////////
const Layout = ()=>{

    // 로딩화면 상태관리
    const [loa,setLoa] = useState(1);

    // 로딩화면 보여주는 함수
    function show(){
        setTimeout(()=>{setLoa(0)}, 2000);
        return <Loading />
    };



    return(
        <>
            {/* [1]로딩 화면 */}
            {
                loa == 1 ? 
                show()
                : null
            }
            {/* [2]전체 화면 레이아웃 */}
            {
                loa !== 1 ?
                <>
                    {/* 1.상단 영역 */}
                    <header>
                        <Header />
                    </header>
                    {/* 2.메인 영역 */}
                    <main className='cont'>
                    {/* 출력 파트 : 각 페이지 컴포넌트가 출력되는 부분 */}
                        <Outlet />
                    </main>
                    {/* 3.하단 영역 */}
                    <div id="info">
                        <Footer />
                    </div>
                </>
                : null
            }
            
        </>
    );
}; ///////////////////////////// Layout 컴포넌트 /////////////////////////////

// 내보내기
export default Layout;