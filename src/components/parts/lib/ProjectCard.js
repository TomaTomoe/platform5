import React from "react";
import DonationButton from "./DonationButton";
import projectImage from "../../images/project-img.jpg";

export default function ProjectCard() {
    return (
        <article className="bg-darkBlue max-w-[458px] p-10 rounded-2xl flex flex-col flex-wrap content-between">
            <h3 className="text-white font-semibold text-[32px] leading-10 text-center font-sans mb-4 flex-none">Project Name</h3>
            <p className="flex-auto text-white text-2xl leading-9 text-justify mb-8">Project description. Since the start of the full-scale war, the Ukrainian Red Cross sent to the regions of Ukraine over 5,418 tonnes.</p>
            <img src={projectImage} className="flex-none rounded-[22px]" alt="Project illustration"/>
            <DonationButton className={"flex-none mt-8 mx-auto"}/>
        </article>
    )
}
