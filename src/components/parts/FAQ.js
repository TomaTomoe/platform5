import React from "react";
import Question from "./lib/Question";

export default function FAQ() {
    return (
        <section id="faq" className="max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto pt-16 pb-12">
            <h2 className="text-center text-black text-5xl leading-tight font-bold uppercase font-sans mb-16 max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">F.A.Q.</h2>
            <div>
                <Question />
                <Question />
                <Question />
            </div>
        </section>
    );
}
