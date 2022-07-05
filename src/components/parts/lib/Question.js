import React from "react";

export default function Question({content}) {
    return (
        <article>
            <h3 className="text-[32px] text-black leading-10 font-semibold pb-8">{content.question}</h3>
            <p className="text-2xl leading-9 text-black pb-[60px]">{content.answear}</p>
        </article>
    )
}