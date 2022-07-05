import React from "react";
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { ReactComponent as IconFacebook } from "../icons/facebook.svg";
import { ReactComponent as IconInstagram } from "../icons/instagram.svg";
// import DonationButton from "./lib/DonationButton";
import Logo from "./lib/Logo";

export default function NavBar() {

    let location = useLocation();

    return (
        <header className="bg-darkBlue min-w-[768px]">
            <div className="flex flex-row flex-wrap justify-between max-w-[1728px] px-8
                lg:px-16 
                xl:px-24 
                2xl:px-32 mx-auto">
                <Logo className="flex-none w-12 py-2 
                    lg:w-16 lg:py-6"/>
                <nav className="flex flex-1 text-white font-medium font-sans uppercase justify-end items-end pb-4
                    lg:text-lg lg:leading-6 lg:pb-8
                    xl:text-xl xl:leading-6 xl:pb-8">
                    <NavHashLink 
                        smooth
                        to="/#about"
                        className={`pr-6 lg:pr-12 ${location.hash === "#about" ? "text-orange" : ""}`}
                    >ПРО НАС</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#projects"
                        className={`pr-6 lg:pr-12 ${location.hash === "#projects" ? "text-orange" : ""}`}
                    >НАШІ ПРОЕКТИ</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#faq"
                        className={`pr-6 lg:pr-12 ${location.hash === "#faq" ? "text-orange" : ""}`}
                    >FAQ</NavHashLink>
                    <NavHashLink 
                        smooth
                        to="/#contacts"
                        className={`pr-6 lg:pr-12 ${location.hash === "#contacts" ? "text-orange" : ""}`}
                    >КОНТАКТИ</NavHashLink>
                </nav>
                <div className="flex-none text-center w-28
                    lg:w-36
                    xl:w-56">
                    <div className="flex flex-row flex-wrap justify-end items-end h-full pb-4
                        lg:pb-8">
                        <a href="https://www.facebook.com/5peronUA" target="_blank" rel="noreferrer">
                            <IconFacebook className="w-12 mr-2
                                lg:w-14" />
                        </a>
                        <a href="https://www.instagram.com/5peronua" target="_blank" rel="noreferrer">
                            <IconInstagram className="w-12 mr-2
                                lg:w-14" />
                        </a>
                    </div>
                    {/* <DonationButton style={{paddingLeft: '60px', paddingRight: '60px'}}/> */}
                </div>
            </div>
        </header>
    );
}
