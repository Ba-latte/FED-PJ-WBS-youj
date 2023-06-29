// 범위 슬라이더 모듈용 컴포넌트 JS - RangeSlider.js

// CSS
import { useState } from 'react';
import '../../css/RangeSlider.css';


// 컴포넌트
function RangeSlider({handleOnChange}){    // props.handleChangeValue 함수

    // 슬라이더 값 관리 : 리액트에서 input의 range 타입 슬라이더 드래그 기능 적용되게 하려면 useState를 써서 값 반영시키면 됨!
    const [rangeValue, setRangeValue] = useState(0);

    const slider_rail = document.querySelector("#RangeSlider");

    // 레인지 슬라이더 값 변경시 적용 함수
    const slider_output = (e)=>{
        setRangeValue(e.target.value);
        console.log("자식요소 값 : ", e.target.value);

        let val = e.target.value;
        handleOnChange(val);
    };

    // 타이틀 클릭시 화면 전환 함수
    const handleTitClick = (sortation)=>{
        // console.log("타이틀 클릭했어!", sortation);

        if(sortation == "front"){
            // 슬라이더 값 0으로 바꿔서 thumb 위치 설정하기
            setRangeValue(0);

            // 부모 컴포넌트에 0 보내기
            handleOnChange(0);
        }
        else if(sortation == "back"){
            // 슬라이더 값 0으로 바꿔서 thumb 위치 설정하기
            setRangeValue(180);

            // 부모 컴포넌트에 180 보내기
            handleOnChange(180);
        }
    };

    return(
        <>
        <section className="rangeSlider_container">
            <div className='flxbx'>
                {/* 앞면 이름 */}
                <div className='wrap'>
                    <div className='front_side tit' onClick={()=>handleTitClick("front")}>Work</div>
                </div>
                {/* 슬라이더 박스 */}
                <div className="slider_box">
                    <input type={"range"} min="0" max="180" value={rangeValue} className="slider" id="RangeSlider" onChange={slider_output} />
                </div>
                {/* 뒷면 이름 */}
                <div className='wrap'>
                    <div className='back_side tit'onClick={()=>handleTitClick("back")}>Description</div>
                </div>
            </div>
        </section>
        </>
    );
} ////////////////////// RangeSlider 컴포넌트 //////////////////////

// 내보내기
export default RangeSlider;