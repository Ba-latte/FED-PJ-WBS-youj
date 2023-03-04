/* challenge JS - challenge.js */


////////////////////// 로딩 구역 ///////////////////
window.addEventListener("DOMContentLoaded", ()=>{


    /* 1.로그인 기능 */
    const loginForm = document.querySelector("#login-form");
    const loginInput = document.querySelector("#login-form .idbx");
    const greeting = document.querySelector("#greeting");

    // 자주 사용하게되는 string을 변수에 담아 저장하기
    const HIDDEN_CLASSNAME = "hidden";
    const USERNAME_KEY = "username";

    function onLoginSubmit(e){
        e.preventDefault();

        const username = loginInput.value;

        loginForm.classList.add(HIDDEN_CLASSNAME);

        localStorage.setItem(USERNAME_KEY, username);

        sayGreetings(username);

    } //////////// onLoginSubmit 함수 ////////////////

    function sayGreetings(username){
        greeting.innerText = `안녕하세요😊 ${username}님!`;
        greeting.classList.remove(HIDDEN_CLASSNAME);
    } ////////////// sayGreetings 함수 //////////////

    const savedUsername = localStorage.getItem(USERNAME_KEY);
    // console.log(savedUsername);

    if(savedUsername === null){
        loginForm.classList.remove(HIDDEN_CLASSNAME);
        loginForm.addEventListener("submit", onLoginSubmit);
        // console.log("제출 버튼 작동하니?");
    }
    else{
        sayGreetings(savedUsername);
    }

    
    /* 2.자동 시계 만들기 */
    const clock = document.querySelector("#clock");
    
    function getClock(){
        const date = new Date();
        const hours = String(date.getHours()).padStart(2, "0");
        const minutes = String(date.getMinutes()).padStart(2, "0");
        const seconds = String(date.getSeconds()).padStart(2, "0");
        
        clock.innerText = `${hours}:${minutes}:${seconds}`;
    }
    
    getClock();
    
    setInterval(getClock, 1000);


    /* 3.랜덤 배경이미지 */
    const bg = document.body;
    const imgs = [
        "01.jpg",
        "02.jpg",
        "03.jpg",
        "04.jpg",
    ];


    function randomImg(){
        console.log("랜덤이미지");

        const todaysImg = imgs[0];
        
        bg.style.background = `url(../img/${imgs[1]}) no-repeat center/cover`;
    }

    randomImg();
    
    
    
}); ////////////// 로딩 구역 ////////////////////