import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useOutsideClick } from './useOutsideClick';
import { ReactComponent as CloseButton } from "../../icons/close.svg";
import { ReactComponent as IconFacebook } from "../../icons/facebook.svg";
import { ReactComponent as IconInstagram } from "../../icons/instagram.svg";

export default function Menu({ isOpen, onClose, location }) {
    const wrapperRef = useRef(null);
    useOutsideClick({ ref: wrapperRef, onClick: onClose });

    if (!isOpen) return null;

    return (
        <aside ref={wrapperRef} className="fixed top-0 right-0 bg-grey z-30 pb-[20px]">
            <div onClick={onClose} className="px-9 py-7 flex flex-row justify-end">
                <CloseButton className="h-[16px]"/>
            </div>
            <nav className="text-black font-medium font-sans uppercase pb-4 text-xl leading-7 pl-[50px] pr-11">
                <NavHashLink 
                    smooth
                    to="/#about"
                    onClick={onClose}
                    className={`block pb-5 ${location.hash === "#about" ? "text-orange" : ""}`}
                >ПРО НАС</NavHashLink>
                <NavHashLink 
                    smooth
                    to="/#projects"
                    onClick={onClose}
                    className={`block pb-5 ${location.hash === "#projects" ? "text-orange" : ""}`}
                >НАШІ ПРОЕКТИ</NavHashLink>
                <NavHashLink 
                    smooth
                    to="/#faq"
                    onClick={onClose}
                    className={`block pb-5 ${location.hash === "#faq" ? "text-orange" : ""}`}
                >FAQ</NavHashLink>
                <NavHashLink 
                    smooth
                    to="/#contacts"
                    onClick={onClose}
                    className={`block pb-5 ${location.hash === "#contacts" ? "text-orange" : ""}`}
                >КОНТАКТИ</NavHashLink>
                <Link className="block pb-5"
                    to="/PublicOffer.pdf" target={"_blank"}>Оферта</Link>
            </nav>
            <div className="flex flex-row flex-wrap justify-end h-[60px] pr-4">
                <a href="https://www.facebook.com/5peron.npo" target="_blank" rel="noreferrer">
                    <IconFacebook className="w-11 mr-2" />
                </a>
                <a href="https://www.instagram.com/5_peron/" target="_blank" rel="noreferrer">
                    <IconInstagram className="w-11 mr-2"/>
                </a>
            </div>
        </aside>
    )
};