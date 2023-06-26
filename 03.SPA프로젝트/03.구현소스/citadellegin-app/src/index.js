// public/index.html 페이지에 적용되는 컴포넌트

import React, { Suspense, lazy, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie';
import scrollbar from 'smooth-scrollbar';
import { Scrollbar } from "smooth-scrollbar-react";

// CSS 불러오기
import './index.css';
// import './citadellegin/css/smooth-scroll.css';

import Layout from './citadellegin/components/modules/Layout';
import Main from './citadellegin/components/pages/Main';
import Original from './citadellegin/components/pages/Original';
import Dete from './citadellegin/components/pages/Dete';
import Rouge from './citadellegin/components/pages/Rouge';
import Limited from './citadellegin/components/pages/Limited';
import ScrollTop from './citadellegin/components/modules/ScrollTop';
import Loading from './citadellegin/components/common/Loading';


// npm i smooth-scrollbar-react 👉 스무스스크롤 설치
// scrollbar.init(document.querySelector('#smooth-scroll'));
// npm install react-scroll-parallax 👉 패럴랙스 설치!

// 라우트 기반 코드 분할하기
// const Layout = lazy(() => import('./citadellegin/components/modules/Layout'));
// const Main = lazy(() => import('./citadellegin/components/pages/Main'));
// const Original = lazy(() => import('./citadellegin/components/pages/Original'));
// const Dete = lazy(() => import('./citadellegin/components/pages/Dete'));
// const Rouge = lazy(() => import('./citadellegin/components/pages/Rouge'));
// const Limited = lazy(() => import('./citadellegin/components/pages/Limited'));
// const ScrollTop = lazy(() => import('./citadellegin/components/modules/ScrollTop'));
// const Loading = lazy(() => import('./citadellegin/components/common/Loading'));





/*
  Promise의 상태
  1.Pending(대기) 비동기 로직 처리의 미완료 상태
  2,Fulfilled(이행) 비동기 로직 처리가 완료된 상태로 Promise 결과값 반환 상태
  3.Rejected(실패) 비동기 로직 처리의 실패 또는 오류 상태

  [Pending]
  new Promise();
  new Promise((resolve, reject)=>{});
  ->Promise 객체 생성하면 대기 상태임
  -인자는 resolve(실행), reject(실패)를 가짐

  [Fulfilled]
  // [Fulfilled]
  function getData(){
    // resolve()를 통해 Promise 실행함
    return new Promise ((resolve, reject)=>{
      let data = 10;
      resolve(data);
    })
  }
  getData().then((resolveedData)=> console.log(resolveedData));
  // Promise 객체를 생성하고 resolve에 파라미터를 넣어주면 Promise가 이행상태로 넘어감. 이후 then()을 활용하면 결과 값을 받을 수 있음.

*/
















// 라우터 구성 컴포넌트 : 스스로 내보내기 세팅 필수
export default function App(){

  // const scrollbar = useRef(null);
  




  // 내보내기
  return(
    <CookiesProvider> {/* 쿠키 provider : 모든 컴포넌트에서 쿠키 관리가 가능해짐 */}
    {/* <Scrollbar
      // ref={scrollbar}
      damping={0.1}
      thumbMinSize={20}
      renderByPixels={true}
      alwaysShowTracks={false}
      continuousScrolling={true}
      wheelEventTarget={null}
    > */}
      {/* 배포 위해 basename 속성 사용 */}
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      {/* <BrowserRouter> */}
      {/* <Suspense fallback={<Loading />}> */}
        {/* 👇 라우터 링크 이동할 때 스크롤 최상단으로 이동하기 */}
        <ScrollTop />
        {/* 리액트 suspens를 사용하여 로딩페이지 구현해보기(?) */}
        <Routes>
          {/* 레이아웃 컴포넌트를 루트로 잡기 */}
          <Route path='/' element={<Layout />}>
            <Route index element={<Main />} />
            <Route path='/main' element={<Main />} />
            <Route path="/original" element={<Original />} />
            <Route path="/dete" element={<Dete />} />
            <Route path='/rouge' element={<Rouge />} />
            <Route path='/limited' element={<Limited />} />
          </Route>
        </Routes>
      {/* </Suspense> */}
      </BrowserRouter>
    {/* </Scrollbar> */}
    </CookiesProvider>
  );
} ///////////////////// App 컴포넌트 ////////////////////////////


// 랜더링하기
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
