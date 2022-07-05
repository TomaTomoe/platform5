import React from "react";
// import MoreButton from "./lib/MoreButton";
import ReportCard from "./lib/ReportCard";

export default function ReportsList() {
    return (
        <section className="bg-grey pt-16 pb-20 max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
            <h2 className="text-center text-black text-5xl leading-tight font-bold uppercase font-sans mb-16">ЗВІТИ</h2>
            <div className="flex flex-row flex-wrap justify-between mb-12">
                <ReportCard/>
                {/* <ReportCard/>
                <ReportCard/>
                <ReportCard/> */}
            </div>
            {/* <div className="flex justify-center">
                <MoreButton/>
            </div> */}
        </section>
    );
}
