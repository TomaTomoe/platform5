import React from "react";
import memberImage from "../../images/member.png";

export default function MemberCard() {
    return (
        <div>
            <img className="w-[200px] rounded-full" src={memberImage} alt="Member illustration"/>
            <a href="/">Member name</a>
        </div>
    )
}
