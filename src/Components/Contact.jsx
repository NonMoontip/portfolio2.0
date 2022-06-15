import React from 'react'
import "../Style/Contact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"

export default function Contact() {
    return (
        <div className="contact">

            <div className="con-flex">
                <div className="address">
                    <div className="address-1">
                        <h1>Contact</h1>
                        <p>
                            <FontAwesomeIcon icon={faUser}></FontAwesomeIcon> Nattanon Moontip <br />
                            <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> opor-2543@hotmail.com <br />
                            nattanon.m62@rsu.ac.th <br />
                            <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon> (+66) 83-473-3036 <br />
                            <FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon> 12/79 Klongsong , Klongluang , Pathumthani 12120 <br />
                            <img src="./img/fly-robot.png" alt="" className='fly-robot' />
                        </p>
                    </div>
                    <img src="./img/lifecycle-works.png" alt="" className='img-contact' />
                </div>

            </div>
        </div>
    )
}
