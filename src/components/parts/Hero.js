import React from "react";
import DonationButton from "./lib/DonationButton";
import heroImage from "../images/hero-bg.jpg";

export default function Hero() {
    return (
        <section className="h-[500px] w-full">
            <img src={heroImage} alt="hero background" className="absolute object-cover w-full h-fit z-0"/>
            <div className="relative z-10 h-full flex flex-col flex-wrap content-center items-center py-16">
                <h1 className="flex flex-auto text-5xl leading-[58px] text-white font-bold font-sans items-center max-w-2xl text-center">BACKLINE VOLUNTEERS IN UKRAINE</h1>
                <p className="flex-auto text-3xl text-white font-semibold font-sans text-center">We manage projects, inspired by <a href="https://ukraine.un.org/uk/sdgs" target="_blank" rel="noreferrer">SDGs</a>, during russian invasion</p>
                <DonationButton className={"flex-none"} />
            </div>
        </section>
    );
}
