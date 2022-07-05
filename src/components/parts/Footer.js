import React from "react";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as IconFacebook } from "../icons/facebook.svg";
import { ReactComponent as IconInstagram } from "../icons/instagram.svg";
import DonationButton from "./lib/DonationButton";
import Logo from "./lib/Logo";

export default function Footer() {
    return (
        <footer id="contacts" className="bg-darkBlue min-w-[768px]">
            <div className="flex flex-row flex-wrap justify-between max-w-[1728px] px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
                <Logo className="flex-none lg:h-full py-8"/>
                <div className="flex-none text-white pl-10 pt-8 pr-24">
                    <address className="text-base leading-5 not-italic pb-4">
                        Громадська Організація "5 Перон"<br/>
                        <a href="mailto:5peronnpo@gmail.com" className="underline">5peronnpo@gmail.com</a>.<br/>
                        <a href="tel:+380957875384">+380 95 787 53 84</a><br/>
                    </address>
                    <address className="text-base leading-5 not-italic pb-4">
                        Благодійний Фонд "5 Перон"<br/>
                        <a href="mailto:5peronnpo@gmail.com" className="underline">5peroncf@gmail.com</a>.<br/>
                        <a href="tel:+380972141517">+380 97 214 15 17</a><br/>
                    </address>
                </div>
                <ul className="flex-1 text-white pt-7 text-xl">
                    <li>
                        <HashLink smooth to="/#home" >Головна</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#about" >Про нас</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#projects" >Наші проекти</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#faq" >FAQ</HashLink>
                    </li>
                    <li>
                        <HashLink smooth to="/#contacts" >Контакти</HashLink>
                    </li>
                </ul>
                <div className="flex-none lg:w-56 text-center">
                    <DonationButton className={"mt-8"} style={{paddingLeft: '60px', paddingRight: '60px'}}/>
                    <div className="flex flex-row flex-wrap justify-end items-center h-[110px]">
                        <a href="https://www.facebook.com/5peronUA" target="_blank" rel="noreferrer">
                            <IconFacebook className="w-14 mr-2" />
                        </a>
                        <a href="https://www.instagram.com/5peronua" target="_blank" rel="noreferrer">
                            <IconInstagram className="w-14 mr-2" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
