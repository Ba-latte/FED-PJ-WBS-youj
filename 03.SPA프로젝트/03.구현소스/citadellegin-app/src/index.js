// public/index.html 페이지에 적용되는 컴포넌트

import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import './index.css';
import Layout from './citadellegin/components/modules/Layout';
import Main from './citadellegin/components/pages/Main';
import Original from './citadellegin/components/pages/Original';
import Dete from './citadellegin/components/pages/Dete';
import Rouge from './citadellegin/components/pages/Rouge';
import Limited from './citadellegin/components/pages/Limited';
import ScrollTop from './citadellegin/components/modules/ScrollTop';
import Loading from './citadellegin/components/common/Loading';



// 라우터 구성 컴포넌트 : 스스로 내보내기 세팅 필수
export default function App(){
  return(
    <CookiesProvider> {/* 쿠키 provider : 모든 컴포넌트에서 쿠키 관리가 가능해짐 */}
      {/* 배포 위해 basename 속성 사용 */}
      {/* <BrowserRouter basename={process.env.PUBLIC_URL}> */}
      <BrowserRouter>
        {/* 👇 라우터 링크 이동할 때 스크롤 최상단으로 이동하기 */}
        <ScrollTop />
        {/* 리액트 suspens를 사용하여 로딩페이지 구현해보기(?) */}
        <Suspense>
        <Routes>
          {/* 레이아웃 컴포넌트를 루트로 잡기 */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/main' element={<Main />} />
            <Route path="/original" element={<Original />} />
            <Route path="/dete" element={<Dete />} />
            <Route path='/rouge' element={<Rouge />} />
            <Route path='/limited' element={<Limited />} />
            <Route path='/loading' element={<Loading />} />
          </Route>
        </Routes>
        </Suspense>
      </BrowserRouter>
    </CookiesProvider>
  );
} ///////////////////// App 컴포넌트 ////////////////////////////


// 랜더링하기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
