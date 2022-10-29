import React from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./lib/ProjectCard";

export default function ProjectsList({id, showButton, projectsList, projectsTitle}) {
    if (projectsList.length === 0) {
        return null;
    };
    return (
        <section id={id} className="pt-14 pb-0 max-w-[1728px] mx-auto
            md:px-8 
            lg:px-16
            xl:px-16 xl:pt-16 xl:pb-16
            2xl:px-16 2xl:pt-20
            3xl:px-32">
            {!!projectsTitle && <h2 className="text-center text-black leading-tight font-bold uppercase font-sans mb-4 text-2xl
                md:text-3xl md:mb-0
                lg:text-4xl lg:mb-4
                xl:text-5xl xl:mb-16">{projectsTitle}</h2>}
            <div className="mb-8
                lg:flex lg:flex-row lg:flex-wrap lg:justify-around
                xl:justify-between
                2xl:justify-around
                3xl:justify-between">
                {!!projectsList && projectsList.map((projectCard, index) => (
                    <ProjectCard key={index} content={{
                        key: index,
                        slug: projectCard.slug,
                        header: projectCard.title,
                        description: projectCard.description,
                        projectUrl: projectCard.slug,
                        cardImgSrc: projectCard.cardImage.asset.url,
                        cardImageAlt: projectCard.cardImage.alt}}/>
                ))}
            </div>
            {!!showButton && <Link to="/projects"
                        className="block text-white bg-orange uppercase font-bold pt-0 pb-2.5 px-[40px] h-12 text-lg max-w-[270px] m-auto sm:py-5 sm:px-[50px] sm:h-16 sm:text-xl text-center"
                        >Більше</Link>}
        </section>
    );
}
