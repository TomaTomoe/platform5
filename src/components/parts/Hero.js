import React from "react";
import DonationButton from "./lib/DonationButton";
import heroImage from "../images/hero-bg.jpg";

export default function Hero() {
    return (
        <section id="home" className="w-full relative h-[400px] mt-[73px]
            md:mt-0
            lg:h-[500px]">
            <img src={heroImage} alt="hero background" className="absolute object-cover w-full h-[inherit] z-0"/>
            <div className="relative z-10 h-full flex flex-col flex-wrap content-center items-center pt-8 pb-16
                lg:pt-16 lg:pb-16">
                <h1 className="flex flex-auto text-white font-bold items-center text-center text-3xl max-w-xl
                    lg:text-4xl lg:leading-[48px] lg:max-w-2xl
                    xl:text-5xl xl:leading-[58px] xl:max-w-3xl">ДОБРОВІЛЬНЕ ОБ’ЄДНАННЯ <br/> В ТИЛУ УКРАЇНИ</h1>
                <p className="flex-auto px-4 text-white font-semibold text-center text-xl max-w-2xl
                    lg:text-2xl lg:max-w-4xl
                    xl:text-3xl xl:max-w-7xl">Робимо соціальні проекти, надихаючись <a href="https://ukraine.un.org/uk/sdgs" target="_blank" rel="noreferrer">цілями сталого розвитку</a>, в умовах російської військової агресії</p>
                <DonationButton className={"flex-none"} />
            </div>
        </section>
    );
}
