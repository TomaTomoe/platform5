import React from "react";
// import memberImage from "../../images/member.png";

export default function MemberCard({content}) {
    return (
        <div>
            <img className="w-[200px] rounded-full" src={content.photo} alt="Member illustration"/>
            <p className="text-black text-[32px] leading-10 w-[200px] text-center pt-8">{content.name}</p>
        </div>
    )
}
