import React from "react";
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { ReactComponent as IconFacebook } from "../icons/facebook.svg";
import { ReactComponent as IconInstagram } from "../icons/instagram.svg";
import { ReactComponent as MenuIcon } from "../icons/menu.svg";
// import DonationButton from "./lib/DonationButton";
import Menu from "./lib/Menu";
import Logo from "./lib/Logo";

export default function NavBar() {
    let location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="bg-darkBlue fixed top-0 right-0 left-0 z-20 md:relative">
            <div className="flex flex-row flex-wrap justify-between max-w-[1728px] pr-4 pl-8 mx-auto
                md:px-8
                lg:px-16 
                xl:px-16 
                2xl:px-24
                3xl:px-32">
                <Logo className="flex-none py-[15px]
                    md:w-9 md:py-4 
                    lg:w-10 lg:py-4
                    xl:w-12
                    2xl:w-14
                    3xl:w-16"/>
                <div className="flex flex-col self-center p-4
                    md:hidden" onClick={openMenu}>
                    <MenuIcon/>
                </div>
                <Menu isOpen={isMenuOpen} onClose={closeMenu} location={location}/>
                <nav className="hidden md:flex flex-1 text-white font-medium font-sans uppercase justify-end items-end pb-4
                    lg:text-base lg:leading-6 lg:pb-4
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
                <div className="hidden md:block flex-none text-center w-20
                    lg:w-24
                    xl:w-28
                    2xl:w-32
                    3xl:w-56">
                    <div className="flex flex-row flex-wrap justify-end items-end h-full pb-3
                        lg:pb-4
                        xl:pb-8">
                        <a href="https://www.facebook.com/5peronUA" target="_blank" rel="noreferrer">
                            <IconFacebook className="w-8 mr-2
                                lg:w-9
                                xl:w-10
                                2xl:w-12" />
                        </a>
                        <a href="https://www.instagram.com/5peronua" target="_blank" rel="noreferrer">
                            <IconInstagram className="w-8 mr-2
                                lg:w-9
                                xl:w-10
                                2xl:w-12" />
                        </a>
                    </div>
                    {/* <DonationButton style={{paddingLeft: '60px', paddingRight: '60px'}}/> */}
                </div>
            </div>
        </header>
    );
}
