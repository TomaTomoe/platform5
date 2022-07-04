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
        <header className="bg-darkBlue">
            <div className="flex flex-row flex-wrap justify-between max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
                <Logo className="flex-none lg:w-16 py-6"/>
                <nav className="flex flex-1 text-white text-xl leading-6 font-medium font-sans uppercase justify-end items-end lg:pb-8">
                    <NavHashLink 
                        smooth
                        to="/#about"
                        className={`pr-12 ${location.hash === "#about" ? "text-orange" : ""}`}
                    >About Us</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#projects"
                        className={`pr-12 ${location.hash === "#projects" ? "text-orange" : ""}`}
                    >Our Projects</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#faq"
                        className={`pr-12 ${location.hash === "#faq" ? "text-orange" : ""}`}
                    >FAQ</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#contacts"
                        className={`pr-12 ${location.hash === "#contacts" ? "text-orange" : ""}`}
                    >Contacts</NavHashLink>
                </nav>
                <div className="flex-none lg:w-56 text-center">
                    <div className="flex flex-row flex-wrap justify-end items-center h-[97px]">
                        <a href="https://www.facebook.com/5peronUA" target="_blank" rel="noreferrer">
                            <IconFacebook className="w-14 mr-2" />
                        </a>
                        <a href="https://www.instagram.com/5peronua" target="_blank" rel="noreferrer">
                            <IconInstagram className="w-14 mr-2" />
                        </a>
                    </div>
                    <DonationButton style={{paddingLeft: '60px', paddingRight: '60px'}}/>
                </div>
            </div>
        </header>
    );
}
