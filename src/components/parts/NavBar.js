import React from "react";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { ReactComponent as IconFacebook } from "../icons/facebook.svg";
import { ReactComponent as IconInstagram } from "../icons/instagram.svg";
import DonationButton from "./lib/DonationButton";
import Logo from "./lib/Logo";

export default function NavBar() {

    let location = useLocation();

    return (
        <header>
            <div>
                <Logo/>
                <nav>
                    <NavHashLink 
                        smooth
                        to="/#about"
                        className={`${location.pathname}${location.hash}` === "/#about" ? "isActive" : ""}
                    >About Us</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#projects"
                        className={`${location.pathname}${location.hash}` === "/#projects" ? "isActive" : ""}
                    >Our Projects</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#faq"
                        className={`${location.pathname}${location.hash}` === "/#faq" ? "isActive" : ""}
                    >FAQ</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#contacts"
                        className={`${location.pathname}${location.hash}` === "/#contacts" ? "isActive" : ""}
                    >Contacts</NavHashLink>
                </nav>
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
        </header>
    );
}
