import React from "react";


export default function ReportCard(content) {
    const {reportTitle, reportCover, reportCoverAlt, reportFile} = content.content;
    return (
        <article className="max-w-[326px] ">
            <a href={reportFile.asset.url} target={"_blank"} rel="noreferrer">
                <img className="h-[186px] w-full" src={reportCover} alt={reportCoverAlt}/>
                <p className="text-black font-medium pt-5 px-1
                    lg:text-xl
                    xl:text-2xl">{reportTitle}</p>
            </a>
        </article>
    )
}
