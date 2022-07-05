import React from "react";
// import DonationButton from "./DonationButton";
import projectImage from "../../images/project-img.jpg";

export default function ProjectCard({content}) {
    console.log('content', content)
    return (
        <article className="bg-darkBlue max-w-[458px] p-10 rounded-2xl flex flex-col flex-wrap content-between">
            <h3 className="text-white font-semibold text-[32px] leading-10 text-center font-sans mb-4 flex-none">{content.header}</h3>
            <p className="flex-auto text-white text-2xl leading-9 mb-8">{content.description}</p>
            <img src={content.cover || projectImage} className="flex-none rounded-[22px]" alt="Project illustration"/>
            {/* <DonationButton className={"flex-none mt-8 mx-auto"}/> */}
        </article>
    )
}
