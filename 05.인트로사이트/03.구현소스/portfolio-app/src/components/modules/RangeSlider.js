// 범위 슬라이더 모듈용 컴포넌트 JS - RangeSlider.js

// CSS
import '../../css/RangeSlider.css';


// 컴포넌트
function RangeSlider(){
    return(
        <>
        <section className="rangeSlider_container">
        <div className="slidecontainer">
            <p>Custom range slider:</p>
            <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />
            </div>
        </section>
        </>
    );
} ////////////////////// RangeSlider 컴포넌트 //////////////////////

// 내보내기
export default RangeSlider;