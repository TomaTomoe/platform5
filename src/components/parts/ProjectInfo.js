import React from "react";
import DonationButton from "./lib/DonationButton";

export default function ProjectInfo(content) {
    const {title, description, budgetBtnTitle, budgetBtnLink, donationBtnTitle, donationTo, mainImage} = content.content;
    return (
        <section className="max-w-[1728px] mx-auto pt-12 pb-9 px-8
            md:px-8 md:pt-12 md:pb-12
            lg:px-16 lg:pt-12
            xl:px-16 xl:pt-16
            2xl:px-24 
            3xl:px-32">
            <div className="flex flex-row flex-wrap md:flex-nowrap">
                <div className="md:pr-6 basis-full pb-12 md:pb-0 md:basis-1/2">
                    <h1 className="text-center text-black text-2xl font-bold uppercase font-sans max-w-[1728px] mx-auto
                        md:px-8 md:text-3xl
                        lg:px-16 lg:text-4xl lg:mb-8
                        xl:px-16 xl:text-5xl xl:mb-16
                        2xl:px-16 
                        3xl:px-32">{title}</h1>
                    <p className="text-black mx-auto pt-4 pb-4 text-base
                        sm:text-base sm:pb-4
                        md:text-lg md:leading-9 md:pb-4
                        lg:text-xl
                        xl:text-2xl">{description}</p>
                    {(!!budgetBtnTitle && !!budgetBtnLink) && <a href={budgetBtnLink} target={"_blank"} rel="noreferrer" className="underline block text-black mx-auto pt-4 pb-4 text-base
                        sm:text-base sm:pb-4
                        md:text-lg md:leading-9 md:pb-4
                        lg:text-xl
                        xl:text-2xl">{budgetBtnTitle}</a>}
                    {(!!donationTo && !!donationBtnTitle) && <DonationButton className="flex-none" aim={donationTo} title={donationBtnTitle} />}
                </div>
                <img srcSet={mainImage.asset.url || mainImage} alt={mainImage.alt || "Representative image of the project"} className="w-[50vw] h-[inherit] md:pl-6 basis-full md:basis-1/2 md:h-full md:max-w-[816px]"/>
            </div>
        </section>
    )
}
