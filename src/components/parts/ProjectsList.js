import React from "react";
import MoreButton from "./lib/MoreButton";
import ProjectCard from "./lib/ProjectCard";

export default function ProjectsList() {
    return (
        <section className="pt-20 pb-16 max-w-[1728px] md:px-8 lg:px-16 xl:px-32 mx-auto">
            <h2 className="text-center text-black text-5xl leading-tight font-bold uppercase font-sans mb-16">Our Projects</h2>
            <div className="flex flex-row flex-wrap justify-between mb-12">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <div className="flex justify-center">
                <MoreButton/>
            </div>
        </section>
    );
}
