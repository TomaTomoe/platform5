import React from "react";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as IconFacebook } from "../icons/facebook.svg";
import { ReactComponent as IconInstagram } from "../icons/instagram.svg";
import DonationButton from "./lib/DonationButton";
import Logo from "./lib/Logo";

export default function Footer() {
    return (
        <footer>
            <div>
                <Logo/>
                <div>
                    <address>
                        Громадська Організація "5 Перон"<br/>
                        <a href="mailto:5peronnpo@gmail.com">5peronnpo@gmail.com</a>.<br/>
                        <a href="tel:+380957875384">+380 95 787 53 84</a><br/>
                    </address>
                    <address>
                        Благодійний Фонд "5 Перон"<br/>
                        <a href="mailto:5peronnpo@gmail.com">5peroncf@gmail.com</a>.<br/>
                        <a href="tel:+380972141517">+380 97 214 15 17</a><br/>
                    </address>
                </div>
                <ul>
                    <li>
                        <HashLink smooth to="/#home" >Home</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#about" >About Us</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#projects" >Our Projects</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#faq" >FAQ</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#contacts" >Contacts</HashLink>
                    </li>
                </ul>
                <div>
                    <div>
                        <a href="https://www.facebook.com/5peronUA" target="_blank" rel="noreferrer">
                            <IconFacebook />
                        </a>
                        <a href="https://www.instagram.com/5peronua" target="_blank" rel="noreferrer">
                            <IconInstagram />
                        </a>
                    </div>
                    <DonationButton/>
                </div>
            </div>
        </footer>
    );
}
