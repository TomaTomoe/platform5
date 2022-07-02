import React from "react";
import reportImage from "../../images/report-img.jpg";

export default function ReportCard() {
    return (
        <article>
            <img src={reportImage} alt="Report illustration"/>
            <a href="/">Report description.</a>
        </article>
    )
}
