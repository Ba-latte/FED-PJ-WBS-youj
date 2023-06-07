// public/index.html 페이지에 적용되는 컴포넌트

import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import Layout from './citadellegin/components/modules/Layout';
import Main from './citadellegin/components/pages/Main';
import Original from './citadellegin/components/pages/Original';
import Dete from './citadellegin/components/pages/Dete';
import Rouge from './citadellegin/components/pages/Rouge';
import Limited from './citadellegin/components/pages/Limited';


// 라우터 구성 컴포넌트 : 스스로 내보내기 세팅 필수
export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        {/* 레이아웃 컴포넌트 루트로 잡기 */}
        <Route path='/' element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="/original" element={<Original />} />
          <Route path="/dete" element={<Dete />} />
          <Route path='/rouge' element={<Rouge />} />
          <Route path='/limited' element={<Limited />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
} ///////////////////// App 컴포넌트 ////////////////////////////


// 랜더링하기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
