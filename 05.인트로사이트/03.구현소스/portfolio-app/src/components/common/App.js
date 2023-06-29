// index 페이지에 뿌릴 화면 JS - App.js

import '../../css/App.css';
import {BrowserRouter, Route, Routes, HashRouter} from 'react-router-dom';
import MouseTracking from '../plugins/MouseTracking';
import SwiperCard from '../plugins/SwiperCards';
import Loading from './Loading';
import Citadelle from '../pages/Citadelle';

function App() {
  return (
    <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          {/* 루트 : 카드 넘기는 형식의 배너 */}
          <Route path='/' element={<SwiperCard />}></Route>
          {/* 로딩화면(?) */}
          <Route path='/loading' element={<Loading />}></Route>
          {/* 시타델 페이지 */}
          <Route path='/citadelle' element={<Citadelle />}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* 마우스 따라서 기울어지는 박스 모듈 */}
      {/* <MouseTracking /> */}
      {/* 앞면/뒷면 넘기는 바 모듈 (범위 슬라이더 : range slider) */}
      </div>
    </>
  );
}

export default App;
