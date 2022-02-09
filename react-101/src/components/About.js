import React from "react"
import MainImage from "../image/MainImage.jpg"
import Icon from "../image/Icon.png"
import linkedin from "../image/linkedin.png"

export default function About (){
    return(
        <div className="container-about">
            <img src={MainImage} className="main-image" alt="Main"/>
            <h3>Oma Anosike</h3>
            <p>Frontend Developer</p>
            <div className="website">Omaamosike.website</div>
            <div className="button-wrapper">
                <button className="email-wrapper">
                    <div className="text-wrapper">
                        <img src={Icon} alt="email icon" />
                        <div className="email-text">Email</div>
                    </div>
                </button>
                <button className="linkedln-wrapper">
                    <div className="text-wrapper">
                        <img src={linkedin} alt="linkedln icon" />
                        <div className="linkedln-text">Linkedln</div>
                    </div>
                </button>
            </div>
        </div>
    )
}