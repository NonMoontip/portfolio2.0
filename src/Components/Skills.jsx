import React from 'react'
import "../Style/Skills.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


export default function Skills() {
    return (
        <div className="skills">
            <div className="s-content">
                <h1>Skills</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, esse.</p>
                <hr />
            </div>
            <div className="all-box">
                <div className="box-1">
                    <div className="s-1"
                    // data-aos="flip-left"
                    // data-aos-delay=""
                    // data-aos-duration="1000"
                    >
                        <img src="./img/html_logo.png" alt="" />
                    </div>
                    <div className="box-2">
                        <div className="s-2"
                        // data-aos="flip-left"
                        // data-aos-delay="200"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/css_logo.png" alt="" />
                        </div>
                        <div className="s-3"
                        // data-aos="flip-left"
                        // data-aos-delay="200"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/js_logo.png" alt="" />
                        </div>
                    </div>
                    <div className="box-3">
                        <div className="s-4"
                        // data-aos="flip-left"
                        // data-aos-delay="500"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/react.png" alt="" />
                        </div>
                        <div className="s-5"
                        // data-aos="flip-left"
                        // data-aos-delay="500"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/next-logo.png" alt="" />
                        </div>
                        <div className="s-6"
                        // data-aos="flip-left"
                        // data-aos-delay="500"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/tw-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="box-4">
                        <div className="s-7"
                        // data-aos="flip-left"
                        // data-aos-delay="500"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/boostrap.png" alt="" />
                        </div>
                        <div className="s-8"
                        // data-aos="flip-left"
                        // data-aos-delay="500"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/nodejs_logo.png" alt="" />
                        </div>
                        <div className="s-9"
                        // data-aos="flip-left"
                        // data-aos-delay="500"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/php-icon.png" alt="" />
                        </div>
                    </div>
                    <div className="box-5">
                        <div className="s-10"
                        // data-aos="flip-left"
                        // data-aos-delay="200"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/spb-icon.png" alt="" />
                        </div>
                        <div className="s-11"
                        // data-aos="flip-left"
                        // data-aos-delay="200"
                        // data-aos-duration="1000"
                        >
                            <img src="./img/mongodb_logo.png" alt="" />
                        </div>
                    </div>
                    <div className="s-12"
                    // data-aos="flip-left"
                    // data-aos-delay=""
                    // data-aos-duration="1000"
                    >
                        <img src="./img/sql_logo.png" alt="" />
                    </div>
                </div>
            </div>
            {/* <div className="bg-show"></div> */}
        </div>
    )
}
