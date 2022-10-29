import React, { useState, useEffect } from "react";
import { Blocks } from  "react-loader-spinner";
import sanityClient from "../../client";
import ProjectsList from "../parts/ProjectsList";

export default function Projects() {
    const [projectCardData, setProjectCard] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "project"]{
                title,
                slug,
                description,
                cardImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                startedAt
            } | order(startedAt desc)`)
            .then((data) => setProjectCard(data))
            .catch(console.error);
    }, []);

    if (projectCardData === null) {
        return (
            <main className="mt-[73px] md:mt-0 h-[60vh] flex items-center justify-center">
                <Blocks 
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                />
            </main>
        );
    };

    return (
        <main className="mt-[73px] md:mt-0">
            <ProjectsList projectsList={projectCardData} projectsTitle="Всі проєкти" />
        </main>
    );
}
