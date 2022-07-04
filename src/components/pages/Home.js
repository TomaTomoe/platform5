import React from "react";
import Hero from "../parts/Hero";
import AboutUs from "../parts/AboutUs";
import Activity from "../parts/Activity";
import ProjectsList from "../parts/ProjectsList";
import ReportsList from "../parts/ReportsList";
import MembersList from "../parts/MembersList";
import FAQ from "../parts/FAQ";
import Footer from "../parts/Footer";


export default function Home() {
    return (
        <main>
            <Hero/>
            <AboutUs />
            <Activity/>
            <ProjectsList/>
            <ReportsList/>
            <MembersList/>
            <FAQ/>
            <Footer/>
        </main>
    );
}
