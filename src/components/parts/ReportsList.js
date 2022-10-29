import React from "react";
// import MoreButton from "./lib/MoreButton";
import ReportCard from "./lib/ReportCard";

export default function ReportsList(reportsData) {
    const {reportsTitle, reportsList} = reportsData.reportsData;
    if (reportsList.length === 0) {
        return null;
    };

    return (
        <section className="bg-grey">
            <div className="pt-9 pb-0 max-w-[1728px] mx-auto
                md:px-8 md:pb-4 md:pt-16
                lg:px-16 lg:pb-4 
                xl:px-16 xl:pb-20
                2xl:px-16 
                3xl:px-32">
                {!!reportsTitle && <h2 className="text-center text-black leading-tight font-bold uppercase font-sans mb-8 text-2xl
                    md:text-3xl
                    lg:text-4xl 
                    xl:mb-16 xl:text-5xl">{reportsTitle}</h2>}
                <div className="flex flex-row flex-wrap justify-around pb-9
                    md:pb-12">
                        {!!reportsData && reportsList.map((report, index) => (
                            <ReportCard key={index} content={{
                                reportTitle: report.reportTitle,
                                reportCover: report.reportCover.asset.url,
                                reportCoverAlt: report.reportCover.alt,
                                reportFile: report.reportFile
                            }}/>
                        ))}
                </div>
                {/* <div className="flex justify-center">
                    <MoreButton/>
                </div> */}
            </div>
        </section>
    );
}
