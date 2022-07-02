import React from "react";
import MoreButton from "./lib/MoreButton";
import ProjectCard from "./lib/ProjectCard";

export default function ProjectsList() {
    return (
        <section>
            <h2>Our Projects</h2>
            <div>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </div>
            <MoreButton/>
        </section>
    );
}
