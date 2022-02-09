import React from "react"
import FacebookIcon from "../image/FacebookIcon.png"
import GitHubIcon from "../image/GitHubIcon.png"
import InstagramIcon from "../image/InstagramIcon.png"
import TwitterIcon from "../image/TwitterIcon.png"

export default function Footer() {
    return (
        <div className="container-footer">
            <img src ={TwitterIcon} alt="twitter icon" />
            <img src ={FacebookIcon} alt="facebook icon" />
            <img src ={InstagramIcon} alt="instagram icon" />
            <img src = {GitHubIcon} alt="github icon" />
        </div>
    )
}