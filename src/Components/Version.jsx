import React from 'react'
import "../Style/Version.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebook,
    faLine,
    faInstagram,
    faLinkedin
} from "@fortawesome/free-brands-svg-icons";

export default function Version() {
    return (
        <div className="version">
            <p>&copy; 2022 Design by Nattanon Moontip</p>
            <div className="social">
                <a href="https://www.facebook.com/non.moontip/"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
                <a href="https://line.me/ti/p/iJYR5nV-4J"><FontAwesomeIcon icon={faLine} href=""></FontAwesomeIcon></a>
                <a href="https://www.instagram.com/non_moontip/"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a>
                <a href="https://www.linkedin.com/in/nattanon-moontip-5629a223a/"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></a>
            </div>
            <div className="v-box">
                <p>V2.0.0</p>
            </div>
        </div>
    )
}
