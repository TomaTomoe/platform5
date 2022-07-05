import React from "react";
import { Link } from "react-router-dom";
import reportImage from "../../images/report-img.png";

export default function ReportCard() {
    return (
        <article className="max-w-[326px] ">
            <Link to="/reports/peron.pdf" target={"_blank"}>
                <img className="h-[186px] w-full" src={reportImage} alt="Report illustration"/>
                <p className="text-2xl text-black font-medium pt-5 px-1">5 перон. Проєктний звіт</p>
            </Link>
        </article>
    )
}
