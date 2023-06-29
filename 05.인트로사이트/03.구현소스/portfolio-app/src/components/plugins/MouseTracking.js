// MouseTracking 플러그인 모듈 JS - MouseTracking.js


import React from "react";
import $ from "jquery";

// CSS
import "../plugins/MouseTracking.css";




// 컴포넌트
class MouseTracking extends React.Component {
    constructor(props) {
        super(props);
        this.init();
    }
    init() {
        this.state = {
            offsetX: "",
            offsetY: "",
            friction: 1 / 32,
        };
        this.mouseMove = this.mouseMove.bind(this);
    }
    componentDidMount() {
        document.addEventListener("mousemove", this.mouseMove);
    }
    componentWillUnmount() {
        document.removeEventListener("mousemove", this.mouseMove);
    }

    mouseMove(e) {
        let followX = window.innerWidth / 2 - e.clientX;
        let followY = window.innerHeight / 2 - e.clientY;

        let x = 0,
            y = 0;
        x += (-followX - x) * this.state.friction;
        y += (followY - y) * this.state.friction;
        this.setState({
            offsetX: x,
            offsetY: y,
        });
    }
    render() {
        // // 원본
        // let offset = {
        //     transform: `translate(-50%, -50%) perspective(600px)
        //         rotateY(${this.state.offsetX}deg)
        //         rotateX(${this.state.offsetY}deg)`,
        // };

        let offset = {
            transform: `translate(-50%, -50%) perspective(600px)
                rotateY(${this.state.offsetX}deg)
                rotateX(${this.state.offsetY}deg)`,
        };

        return (
            <section className="mouseTracking_container" >
                <div className="mouseTracking_box" style={offset}>
                    <img className="phoneImg" src='./images/phone02.png' alt='핸드폰' />
                    <img className="pjImg" src='./images/pj01.png' alt='프로젝트 이미지' />
                </div>
                {/* <p className="pop link">www.D.SHRIG.com</p> */}
                {/* <p className="pop min">-</p> */}
                {/* <p className="pop close">x</p> */}
                {/* <div className="shape"></div> */}
                {/* <div className="shape2"></div> */}
                {/* <div className="shape3"></div> */}
            </section>
        );
    }
} ////////////////// MouseTracking Class ///////////////////////

export default MouseTracking;
