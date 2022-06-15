import React from 'react'
import "../Style/Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Home() {
    return (
        <div className="home">
            <img src="./img/hero-guy-3.png" alt="" className='hero-guy' />
            <img src="./img/blog-girl-1.png" alt="" className='blog-girl' />
            <div className="home-content">
                <h1
                    data-aos="fade-down"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                >NonDev</h1>
                <h5
                    data-aos="fade-left"
                    data-aos-delay="1000"
                    data-aos-duration="1000"
                >Let me introduce myself my name is <span>Nattanon Moontip</span>. I'm studying at Rangsit University.<br />
                    Faculty of Engineering, Computer Engineer Branch.</h5>
            </div>
            <img src="./img/hero-guy-1-lg.png" alt="" className='hero-man' />
        </div>
    )
}
