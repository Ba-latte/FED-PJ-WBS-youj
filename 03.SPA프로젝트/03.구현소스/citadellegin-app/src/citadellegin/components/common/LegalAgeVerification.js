// 법적 나이 확인 팝업창 모듈 컴포넌트 - LegalAgeVerification.js

import React, { useEffect } from 'react';
import $ from 'jquery';
import Modal from 'react-modal';
import { useState } from 'react';
import '../../css/legalAgeVerification.css';
import Loading from './Loading';



const LegalAgeVerification = (props)=>{
    // props.modalIsOpen - 모달창 열기 (true / false)

    // 💥💥npm install react-modal 👉 모달 라이브러리 설치!!

    // useState를 이용하여 모달팝업창 상태값 변경! : 초기값 false로 창 안뜨게 만들기
    const [modalIsOpen, setModalIsOpen] = useState(true);

    // 마우스 오버시 상태값 변경!
    const [isHover, setIsHover] = useState(false);


    // 모달창 바깥 화면 스크롤 이동 금지하기
    useEffect(() => {

        // document.body.style.cssText = `
        //     position: fixed; 
        //     top: -${window.scrollY}px;
        //     overflow-y: scroll;
        //     width: 100%;`;
        // return () => {
        //     const scrollY = document.body.style.top;
        //     document.body.style.cssText = '';
        //     window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        // };

    }, ["LegalAgeVerification"]);
    


    // 마우스 오버시 상대 박스 투명도 변경하기
    const hoverFn = ()=>{
        $(()=>{

            $(".yes_bx").mouseenter(function(){
                // console.log("나 마우스 엔터함!", $(this).siblings());

                $(this).siblings().find("h3").stop().animate({
                    opacity:"0.5",
                    
                }, 300);
            });
            $(".yes_bx").mouseleave(function(){
                $(this).siblings().find("h3").stop().animate({
                    opacity:"1",
                    
                }, 300);
            });

            $(".no_bx").mouseenter(function(){
                // console.log("나 마우스 엔터함!", $(this).siblings());

                $(this).siblings().find("h3").stop().animate({
                    opacity:"0.5",
                    
                }, 300);
            });
            $(".no_bx").mouseleave(function(){
                $(this).siblings().find("h3").stop().animate({
                    opacity:"1",
                    
                }, 300);
            });
            
        });
    };

    // 모달 오픈
    const openModal = () => {
        setModalIsOpen(true);
    };
    // 모달 닫기
    const closeModal = () => {
        console.log("모달 닫아!");
        
        return setModalIsOpen(false);
    };


    return(
        <>
            <section className='legal_age_container'>
                {/* isOpen 속성(필수)이 true가 되어야 팝업창이 뜸! */}
                <Modal isOpen={modalIsOpen} className="modal" overlayClassName="overlay">
                    {/* 닫기 버튼뿐만 아니라 오버레이가 되어 있는 부분을 선택하거나 esc키보드 버튼을 눌렀을 경우에도 창이 닫힐 수가 있음. 그것을 사용하는 방법이 onRequsetClose={callback}임! onRequestClose의 속성값으로 isOpen 속성 값을 false로 바꿔주는 콜백 함수를 넣으면 됨 */}
                    <div>
                        {/* 1. 로고 */}
                        <div className="logo_bx">
                            <img src="./images/logo.png" alt="로고 이미지" />
                        </div>
                        {/* 2. 타이틀 */}
                        <div className='title_bx'>
                            <h2 className='title'>
                                <p className='txt'>Citadelle Gin,</p>
                                <p className='txt'>THE french gin.</p>
                            </h2>
                        </div>
                        {/* 3. 나이 질문 */}
                        <div className='verification_bx'>
                            <div className='query_desc'>
                                Are you of legal age to access our website?
                            </div>
                        </div>
                        {/* 4. y/n 선택 박스 */}
                        <div className='YoN_bx'>
                            <div className='yes_bx' onClick={()=>closeModal()}>
                                <h3>Yes</h3>
                            </div>
                            <div className='no_bx'>
                                <h3>No</h3>
                            </div>
                        </div>
                        {/* 5. 일주일동안 안보이기 체크박스 */}
                        <div className='cookieChk_bx'>
                            {/* 체크박스 */}
                            <div className='chk_bx' >
                                <input type='checkbox' id='checker' ></input>
                            </div>
                            {/* 라벨박스 */}
                            <div className='desc_bx'>
                                <label htmlFor="checker" >
                                    Remember me for 7 days (Unless Shared)
                                </label>
                            </div>
                        </div>
                    </div>

                </Modal>
            </section>
            {/* 마우스 오버 이벤트 함수 호출 */}
            {hoverFn()}
        </>
    );
}; /////////////// LegalAgeVerification 컴포넌트 ///////////////

// 내보내기
export default LegalAgeVerification;

// 💥 warning.js:34 Warning: react-modal: App element is not defined. Please use `Modal.setAppElement(el)` or set `appElement={el}`. This is needed so screen readers don't see main content when modal is opened. It is not recommended, but you can opt-out by setting `ariaHideApp={false}`. 💥 에러 발생함
// 위의 에러는 모달이 열렸을 때 화면을 바라보고 있는 사용자가 모달창이 아닌 다른 컴포넌트의 content를 바라보지 않도록 하기 위해 숨겨줄 엘리먼트를 정의해주라는 뜻임. 예시에서는 모달이 열렸을 때 #root 엘리먼트를 숨겨주어야 하기 때문에 App.js에 아래의 코드를 적어주면 된다.

// 💥위의 에러 해결을 위해 모달창이 아닌 다른 컴포넌트 숨기기
Modal.setAppElement("#root");



