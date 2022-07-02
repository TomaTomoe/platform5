import React from "react";
import DonationButton from "./DonationButton";
import projectImage from "../../images/project-img.jpg";

export default function ProjectCard() {
    return (
        <article>
            <h3>Project Name</h3>
            <p>Project description. Since the start of the full-scale war, the Ukrainian Red Cross sent to the regions of Ukraine over 5,418 tonnes.</p>
            <img src={projectImage} alt="Project illustration"/>
            <DonationButton/>
        </article>
    )
}
