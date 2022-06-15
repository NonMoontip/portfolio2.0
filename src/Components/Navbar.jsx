import React from 'react';
import { Link } from 'react-scroll';
import "../Style/Navbar.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Navbar() {
    return (
        <header
            data-aos="fade"
            data-aos-delay="1000"
            data-aos-duration="2000"
        >
            <div className="logo"><img src="./img/nondev-wt.png" alt="" /></div>
            <ul>
                <li><Link activeClass="active" to="home" spy={true} smooth={true} offset={50} duration={500} >Home</Link></li>
                <li><Link activeClass="active" to="about" spy={true} smooth={true} offset={-50} duration={500}>About Me</Link></li>
                <li><Link activeClass="active" to="skills" spy={true} smooth={true} offset={-50} duration={500} >Skills</Link></li>
                <li><Link activeClass="active" to="portfolio" spy={true} smooth={true} offset={-50} duration={500} >Portfolio</Link></li>
                <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-50} duration={500} >Contact</Link></li>
            </ul>
        </header>
    )
}

