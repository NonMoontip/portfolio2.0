import React from 'react'
import "../Style/About.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function About() {
    return (
        <div className="about">
            <div className="circle"
                data-aos="fade-right"
                data-aos-duration="500"
            ></div>
            <div className="circle1"
                data-aos="fade-left"
                data-aos-duration="500"
            ></div>
            <div className="container">
                <img src="./img/contact-page-man.png" alt="" className='contact-page-man' />
                <div className="img-box"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                >
                    <img src="./img/home-img.png" alt="" />
                </div>
                <div className="content"
                    data-aos="fade"
                    data-aos-duration="1000"
                >
                    <h5>About Me</h5>
                    <p>My name is Nattanon Moontip. I'm currntly studying Rangsit University, <br /> 4th year, Faculty of Computer Engineering. In my spare time , I like to sit on the computer , writecode,design work computer</p>
                </div>
                <div className="contact-box">
                    <div className="box1">
                        <img src="./img/21-avatar-flat.gif" alt="" />
                        <p>Nattanon Mooontip</p>
                    </div>
                    <div className="box2">
                        <img src="./img/18-location-pin-flat.gif" alt="" />
                        <p>12/79 Klongsong , Klongluang , Pathumthani 12120</p>
                    </div>
                    <div className="box3">
                        <img src="./img/177-envelope-mail-send-flat.gif" alt="" />
                        <p>opor-2543@hotmail.com<br />nattanon.m62@rsu.ac.th</p>
                    </div>
                    <div className="box4">
                        <img src="./img/1676-telephone-call-hand-flat.gif" alt="" />
                        <p>(+66) 83-473-3036</p>
                    </div>
                    {/* <div className="box5"></div> */}
                </div>
            </div>
        </div>
    )
}
