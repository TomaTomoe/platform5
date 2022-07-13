import React from "react";

export default function Question({content}) {
    return (
        <article>
            <h3 className="text-black font-semibold text-xl pb-3 leading-6
                md:text-xl md:pb-3 md:leading-7
                lg:text-2xl lg:pb-4
                xl:text-[32px] xl:leading-10 xl:pb-8">{content.question}</h3>
            <p className="text-black text-lg pb-8 leading-5
                md:leading-7
                lg:text-xl lg:pb-8
                xl:text-2xl xl:leading-9 xl:pb-[60px]">{content.answear}</p>
        </article>
    )
}