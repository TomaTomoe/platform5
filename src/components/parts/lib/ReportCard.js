import React from "react";
import reportImage from "../../images/report-img.png";

export default function ReportCard() {
    return (
        <article className="max-w-[326px] ">
            <a href="/">
                <img className="h-[186px] w-full" src={reportImage} alt="Report illustration"/>
                <p className="text-2xl text-black font-medium pt-5 px-1">Soldiers of the Armed Forces of Ukraine</p>
            </a>
        </article>
    )
}
