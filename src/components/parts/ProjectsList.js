import React from "react";
// import MoreButton from "./lib/MoreButton";
import ProjectCard from "./lib/ProjectCard";

import projectCover1 from "../images/project-img-1.jpg";
import projectCover2 from "../images/project-img.jpg";
import projectCover3 from "../images/project-img-3.jpg";

export default function ProjectsList() {
    return (
        <section id="projects" className="pt-20 pb-16 max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
            <h2 className="text-center text-black text-5xl leading-tight font-bold uppercase font-sans mb-16">наші проекти</h2>
            <div className="lg:flex lg:flex-row lg:flex-wrap lg:justify-between mb-12">
                <ProjectCard content={{
                    header: '5 Перон',
                    description: 'Наш перший і найбільший проєкт - забезпечення і функціонування волонтерської точки з надання допомоги і харчування на 5 пероні Львівського залізничного вокзалу під час масової міграції до Польші у лютому-березні',
                    cover: projectCover1}}/>
                <ProjectCard content={{
                    header: 'Весна допомоги',
                    description: 'Пошук, сортування і направлення гуманітарної допомоги. Забезпечення необхідним ~600 осіб у 6 прихистках, залучення внутрішньо переміщених осіб до волонтерства, цільові посилки у прифронтові та постраждалі регіони',
                    cover: projectCover2}}/>
                <ProjectCard content={{
                    header: 'Благодійний ярмарок у парку Франка',
                    description: 'Квест у форматі "пошук скарбів", безкоштовні майстер-класи для дітей з оригамі, психологічна підтримка, роздано більше 250 іграшок',
                    cover: projectCover3}}/>
            </div>
            {/* <div className="flex justify-center">
                <MoreButton/>
            </div> */}
        </section>
    );
}
