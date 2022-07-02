import React from "react";
import MoreButton from "./lib/MoreButton";
import MemberCard from "./lib/MemberCard";

export default function MembersList() {
    return (
        <section>
            <h2>Our Team</h2>
            <div>
                <MemberCard/>
                <MemberCard/>
                <MemberCard/>
            </div>
            <MoreButton/>
        </section>
    );
}
