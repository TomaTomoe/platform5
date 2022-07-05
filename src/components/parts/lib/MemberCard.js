import React from "react";
// import memberImage from "../../images/member.png";

export default function MemberCard({content}) {
    return (
        <div>
            <img className="w-28 lg:w-[200px] rounded-full" src={content.photo} alt="Member illustration"/>
            <p className="text-black text-2xl lg:text-[32px] leading-10 w-28 lg:w-[200px] text-center pt-8">{content.name}</p>
        </div>
    )
}
