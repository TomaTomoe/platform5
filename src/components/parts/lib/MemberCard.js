import React from "react";
import memberImage from "../../images/member.png";

export default function MemberCard() {
    return (
        <div>
            <img className="w-[200px] rounded-full" src={memberImage} alt="Member illustration"/>
            <p className="text-black text-[32px] leading-10 w-[200px] text-center pt-8">Member name</p>
        </div>
    )
}
