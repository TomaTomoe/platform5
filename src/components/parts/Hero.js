import React from "react";
import DonationButton from "./lib/DonationButton";
import heroImage from "../images/hero-bg.jpg";

export default function Hero() {
    return (
        <section>
            <img src={heroImage} alt="hero background"/>
            <h1>BACKLINE VOLUNTEERS IN UKRAINE</h1>
            <p>We manage projects, inspired by <a href="https://ukraine.un.org/uk/sdgs">SDGs</a>, during russian invasion</p>
            <DonationButton />
        </section>
    );
}
