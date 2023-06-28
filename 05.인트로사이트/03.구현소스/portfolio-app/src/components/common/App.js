// index 페이지에 뿌릴 화면 JS - App.js

import '../../css/App.css';
import MouseTracking from '../plugins/MouseTracking';
import SwiperCard from '../plugins/SwiperCards';

function App() {
  return (
    <>
      <div className="App">
      {/* 카드 넘기는 형식의 배너 */}
      <SwiperCard />
      {/* 마우스 따라서 기울어지는 박스 모듈 */}
      {/* <MouseTracking /> */}
      {/* 앞면/뒷면 넘기는 바 모듈 (범위 슬라이더 : range slider) */}
      </div>
    </>
  );
}

export default App;
