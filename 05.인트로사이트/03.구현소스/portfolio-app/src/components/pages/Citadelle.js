// Citadelle 모듈용 컴포넌트 JS - Citadelle.js

import React, { useEffect, useState } from 'react';
// CSS
import '../../css/Citadelle.css';
import RangeSlider from '../modules/RangeSlider';
import MouseTracking from '../plugins/MouseTracking';



// 컴포넌트
function Citadelle(){
    // 관리할 레인지 슬라이더 값
    const [value, setValue] = useState(0);
    // const [rangeValue, setRangeValue] = useState(1);

    // 변수에 대상 담기
    const flip_box = document.querySelector(".flip_box");

    // 슬라이더 값 담을 함수
    const handleChangeValue = (val)=>{
        console.log("부모로 올라온 값 : ", val);
        setValue(val);
    };
    
    // 슬라이더 값에 맞춰 플립 박스 돌리기
    let flip_value = { transform:'rotateY('+  value + 'deg)'};

    return(
        <>
        <section className='citadelle_pj_container'>
            <div className='flip_container wrap'>
                <div className='flip_box' style={ flip_value }>
                {/* 앞면 */}
                <section className='front_side_container'>
                    <MouseTracking />
                </section>
                {/* 뒷면 */}
                <section className='back_side_container'>
                <h1 style={{textAlign:"center", fontSize:"50px"}}>뒷면</h1>
                </section>
                </div>
            </div>
            {/* 앞/뒷면 뒤집는 레인지 슬라이더 */}
            <RangeSlider handleOnChange={handleChangeValue} />
            {/* 배경 */}
            <section className='background_container'>
                <h1>😎배경😎</h1>
            </section>
        </section>
        </>
    );
} ////////////////////// Citadelle 컴포넌트 //////////////////////

// 내보내기
export default Citadelle;