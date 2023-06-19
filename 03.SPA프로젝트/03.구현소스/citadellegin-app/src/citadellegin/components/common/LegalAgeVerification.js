// 법적 나이 확인 팝업창 모듈 컴포넌트 - LegalAgeVerification.js

import React, { useEffect } from 'react';
import $ from 'jquery';
import Modal from 'react-modal';
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import '../../css/legalAgeVerification.css';
import Loading from './Loading';
import { faL } from '@fortawesome/free-solid-svg-icons';


// npm install react-cookie -> 리액트 쿠키 라이브러리 설치


const LegalAgeVerification = (props)=>{
    // props.modalIsOpen - 모달창 열기 (true / false)

    // 💥💥npm install react-modal 👉 모달 라이브러리 설치!!

    // 마우스 오버시 상태값 변경!
    const [isHover, setIsHover] = useState(false);

    // useState를 이용하여 모달팝업창 상태값 변경! : 초기값 true = 창 뜨게 만들기
    const [modalIsOpen, setModalIsOpen] = useState(true);

    // 쿠키 존재 여부 체크하는 state 생성 : true면 이미 쿠키 존재함
    const [hasCookie, setHasCookie] = useState(true);

    // 쿠키 관리
    const [cookies, setCookie] = useCookies();


    // 쿠키 만료 시기를 설정하는 함수 : pm에 일 수를 넣으면 현재 시간에서 해당 일 수를 더한 시기를 반환함
    const getExpiredDate = (days)=>{
        // Date 객체 만들기 : 왜 Date객체를 가져와서 날짜를 설정했을까? 👉 데이터 타입때문에 그런것 같다고 쌤이 그러셨음...!
        const date = new Date();
        // 날짜 설정하기(?)
        date.setDate(date.getDate() + days);
        // 날짜 리턴하기
        return date;
    }; ////////////////// getExpiredDate 함수 //////////////////


    // 유효기간이 1일인 쿠키 생성하고 모달 닫는 함수
    const closeModalUntilExpires = ()=>{
        // 쿠키가 false상태라면(?) 이 함수 들어가지 말고 나가기(?)
        if(!cookies) return;
        
        console.log("쿠키 설정하고 창 닫았어!");

        // 유효기간 1일 설정
        const expires = getExpiredDate(1);
        // 유효기간이 1일인 쿠키 생성
        setCookie("MODAL_EXPIRES", true, {path: "/", expires: expires});

        // 모달창 Hook변수 상태 바꾸기
        setModalIsOpen(false);
    }; ////////////////// closeModalUntilExpires 함수 //////////////////

    // useEffect로 해당 쿠키가 존재하하면 모달이 안 뜨고, 쿠키가 존재하지 않으면 모달이 뜨도록 하기
    useEffect(()=>{
        // 만약 쿠키에 "MODAL_EXPIRES"라는 쿠키가 있으면 돌아나가기
        if(cookies["MODAL_EXPIRES"]) return;

        // "MODAL_EXPIRES"라는 쿠키 없는 것(?) 확인해보기
        console.log(cookies["MODAL_EXPIRES"]);

        // 쿠키 존재 체크하는 Hook 변수 false로 바꾸기(?)
        setHasCookie(false);
    }, []);
    // hasCookie라는 state를 추가로 생성해서 관리함
    // 그리고 Modal 컴포넌트에 closeModalUntilExpires 함수를 prop으로 넘겨서 "오늘 하루 더이상 보지 않기" 문구의 onClick 이벤트에 지정해주기



    // 모달창 바깥 화면 스크롤 이동 금지하기
    // useEffect(() => {

    //     document.body.style.cssText = `
    //         position: fixed; 
    //         top: -${window.scrollY}px;
    //         overflow-y: scroll;
    //         width: 100%;`;
    //     return () => {
    //         const scrollY = document.body.style.top;
    //         document.body.style.cssText = '';
    //         window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    //     };

    // }, []);
    


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
    const closeModal = ()=> {
        setModalIsOpen(false);
    };

    // no 버튼 클릭시 메시지 박스 출력하기
    const no_pick = ()=>{
        console.log("아니! 나 미자얌! 그리고 쿠키 지울거야!!");

        // 메시지 띄우기
        $(".no_pick_bx").css({display: "block"});

        // 쿠키 지우기
        // $.cookie("mypop", "OK", {expires: -1});
    };




    return(
        <>
            <section className='legal_age_container'>
                {/* isOpen 속성(필수)이 true가 되어야 팝업창이 뜸! */}
                {
                    modalIsOpen && !hasCookie && (

                    <Modal
                        isOpen={modalIsOpen}
                        closeModal={()=> setModalIsOpen(false)}
                        closeModalUntilExpires={closeModalUntilExpires}
                        className="legal_age_modal" 
                        overlayClassName="legal_age_overlay" 
                        closeTimeoutMS={500} 
                        >
                        {/* 
                            1. 닫기 버튼뿐만 아니라 오버레이가 되어 있는 부분을 선택하거나 esc키보드 버튼을 눌렀을 경우에도 창이 닫힐 수가 있음. 그것을 사용하는 방법이 onRequsetClose={callback}임! onRequestClose의 속성값으로 isOpen 속성 값을 false로 바꿔주는 콜백 함수를 넣으면 됨
                            2. 열고 닫을 때 애니메이션을 추가하고 싶다면 CSS로 클래스를 세팅해주면 되고, 트랜지션을 주는데 이때 주의할 점은 애니메이션 되는 시간과 모달 요소의 'closeTimeoutMS'의 속성에 넣을 시간이 같아야 함!
                        */}
                        
                        <div>
                            {/* 1. 로고 */}
                            <div className="logo_bx">
                                <img src="./images/logo.png" alt="로고 이미지" />
                            </div>
                            {/* 2. 타이틀 */}
                            <div className='title_bx'>
                                <h2 className='title'>
                                    <p className='txt' >
                                        <span data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">Citadelle Gin,</span>
                                    </p>
                                    <p className='txt' >
                                        <span data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">THE french gin.</span>
                                    </p>
                                </h2>
                            </div>
                            {/* 3. 나이 질문 */}
                            <div className='verification_bx'>
                                <div className='query_desc'>
                                    <p data-aos="fade" data-aos-duration="800" data-aos-delay="800">
                                        Are you of legal age to access our website?
                                    </p>
                                </div>
                            </div>
                            {/* 4. y/n 선택 박스 */}
                            <div className='YoN_bx'>
                                <div className='yes_bx' onClick={closeModal}>
                                    <h3>Yes</h3>
                                </div>
                                <div className='no_bx' onClick={no_pick}>
                                    <h3>No</h3>
                                </div>
                            </div>
                            {/* 4-1. no 박스 선택시 보이는 메시지 */}
                            {

                            }
                            <div className='no_pick_bx'>
                                <div className='msg'>
                                    <p>
                                        😥 You are not old enough to view this content
                                    </p>
                                </div>
                            </div>
                            {/* 5. 일주일동안 안보이기 체크박스 */}
                            <div className='cookieChk_bx'>
                                {/* 체크박스 */}
                                <div className='chk_bx' >
                                    <input type='checkbox' id='checker' className='noShowChk' onClick={closeModalUntilExpires} ></input>
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
                    )
                }
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



