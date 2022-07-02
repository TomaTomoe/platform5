import React from "react";
import memberImage from "../../images/member.png";

export default function MemberCard() {
    return (
        <div>
            <img src={memberImage} alt="Member illustration"/>
            <a href="/">Member name</a>
        </div>
    )
}
