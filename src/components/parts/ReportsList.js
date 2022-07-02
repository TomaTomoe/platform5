import React from "react";
import MoreButton from "./lib/MoreButton";
import ReportCard from "./lib/ReportCard";

export default function ReportsList() {
    return (
        <section>
            <h2>Reports</h2>
            <div>
                <ReportCard/>
                <ReportCard/>
                <ReportCard/>
            </div>
            <MoreButton/>
        </section>
    );
}
