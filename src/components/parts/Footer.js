import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as IconFacebook } from "../icons/facebook.svg";
import { ReactComponent as IconInstagram } from "../icons/instagram.svg";
// import DonationButton from "./lib/DonationButton";
import Logo from "./lib/Logo";

export default function Footer() {
    return (
        <footer id="contacts" className="bg-darkBlue">
            <div className="flex flex-row flex-wrap justify-between max-w-[1728px] px-8 mx-auto
                lg:px-16 
                xl:px-16 
                2xl:px-24
                3xl:px-32">
                <Logo className="hidden flex-none md:block lg:h-full py-8"/>
                <div className="flex-none text-white pl-0 pt-8 pb-4
                    md:pr-14 md:pl-10 md:pb-0
                    lg:pr-24">
                    <address className="text-sm sm:text-base leading-5 not-italic pb-4">
                        Громадська Організація "5 Перон"<br/>
                        <a href="mailto:5peron.npo@gmail.com" className="underline">5peron.npo@gmail.com</a>.<br/>
                        <a href="tel:+380957875384">+380 95 787 53 84</a><br/>
                    </address>
                    <address className="text-sm sm:text-base leading-5 not-italic pb-4">
                        Благодійний Фонд "5 Перон"<br/>
                        <a href="mailto:5peron.cf@gmail.com" className="underline">5peron.cf@gmail.com</a>.<br/>
                        <a href="tel:+380972141517">+380 97 214 15 17</a><br/>
                    </address>
                </div>
                <ul className="hidden flex-1 text-white pt-5
                    md:text-base md:block
                    lg:text-lg lg:leading-6
                    2xl:text-xl 2xl:leading-6
                    3xl:text-xl 3xl:leading-7">
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
                    <li>
                        <Link to="/PublicOffer.pdf" target={"_blank"}>Оферта</Link>
                    </li>
                </ul>
                <div className="hidden flex-none
                    md:block
                    lg:w-56 lg:text-center">
                    {/* <DonationButton className={"mt-8"} style={{paddingLeft: '60px', paddingRight: '60px'}}/> */}
                    <div className="flex flex-row flex-wrap justify-end h-[110px]
                        md:item-start md:pt-4
                        lg:items-center lg:pt-0">
                        <a href="https://www.facebook.com/5peronUA" target="_blank" rel="noreferrer">
                            <IconFacebook className="w-8 mr-2
                                lg:w-10
                                xl:w-14" />
                        </a>
                        <a href="https://www.instagram.com/5peronua" target="_blank" rel="noreferrer">
                            <IconInstagram className="w-8 mr-2
                                lg:w-10
                                xl:w-14" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
