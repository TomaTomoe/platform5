import React from "react";
import MoreButton from "./lib/MoreButton";
import MemberCard from "./lib/MemberCard";
import background from "../icons/cross.svg";

export default function MembersList() {
    return (
        <section className="bg-orange pt-20 pb-16" style={{ backgroundImage: `url(${background})`, backgroundPosition: '-150px -170px' }}>
            <h2 className="text-center text-black text-5xl leading-tight font-bold uppercase font-sans mb-16 max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">Our Team</h2>
            <div className="flex flex-row flex-wrap justify-between max-w-[1728px] pb-8 md:px-8 lg:px-16 xl:px-32 mx-auto">
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
            </div>
            <div className="flex justify-center">
                <MoreButton/>
            </div>
        </section>
    );
}
