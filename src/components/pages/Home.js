import React from "react";
import Hero from "../parts/Hero";
import AboutUs from "../parts/AboutUs";
import Activity from "../parts/Activity";
import ProjectsList from "../parts/ProjectsList";
import ReportsList from "../parts/ReportsList";
import MembersList from "../parts/MembersList";
import FAQ from "../parts/FAQ";


export default function Home() {
    return (
        <main className="mt-[73px] md:mt-0">
            <Hero/>
            <AboutUs />
            <Activity/>
            <ProjectsList/>
            <ReportsList/>
            <FAQ/>
            <MembersList/>
        </main>
    );
}
