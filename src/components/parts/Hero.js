import React from "react";
import LinkButton from "./lib/LinkButton";
import heroImage from "../images/hero-bg.jpg";
import heroImageMobile from "../images/hero-bg_mobile.jpg";

export default function Hero() {
    return (
        <section id="home" className="w-full relative h-[400px]
            lg:h-[500px]">
            <img srcSet={`${heroImageMobile} 300w, ${heroImage} 768w`} alt="hero background" className="absolute object-cover w-full h-[inherit] z-0"/>
            <div className="relative z-10 h-full flex flex-col flex-wrap content-center items-center pt-8 pb-12
                lg:pt-16 lg:pb-16">
                <h1 className="flex flex-auto text-white font-bold items-center text-center text-2xl max-w-[300px] pb-2
                    sm:text-3xl sm:max-w-xl sm:pb-0
                    lg:text-4xl lg:leading-[48px] lg:max-w-2xl
                    xl:text-5xl xl:leading-[58px] xl:max-w-3xl">ДОБРОВІЛЬНЕ ОБ’ЄДНАННЯ <br/> В ТИЛУ УКРАЇНИ</h1>
                <p className="flex-auto px-4 text-white font-semibold text-center text-lg leading-6 max-w-[300px]
                    sm:text-xl sm:max-w-2xl
                    lg:text-2xl lg:max-w-4xl
                    xl:text-3xl xl:max-w-7xl">Робимо соціальні проекти, надихаючись <a href="https://ukraine.un.org/uk/sdgs" target="_blank" rel="noreferrer"><u>цілями сталого розвитку</u></a>, в умовах російської військової агресії</p>
                <LinkButton id="link_to_donation" className="flex-none" url="/donation" title="ПІДТРИМАТИ" />
            </div>
        </section>
    );
}
