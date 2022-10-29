import React from "react";
// import MoreButton from "./lib/MoreButton";
import MemberCard from "./lib/MemberCard";
import background from "../icons/cross.svg";

export default function MembersList({membersData}) {
    const {membersSectionTitle, members} = membersData;
    if (members.length === 0) {
        return null;
    };
    return (
        <section style={{ backgroundImage: `url(${background})`, backgroundPosition: '-150px -170px' }}
            className="bg-orange pt-9 pb-4
                md:pt-20 md:pb-16
                lg:pt-16 lg:pb-8
                xl:pt-20 xl:pb-16">
            {!!membersSectionTitle && <h2 className="text-center text-black leading-tight font-bold uppercase font-sans mb-4 max-w-[1728px] mx-auto text-2xl
                md:px-8 md:text-3xl
                lg:px-16 lg:text-4xl lg:mb-4
                xl:px-16 xl:text-5xl xl:mb-16
                2xl:px-16
                3xl:px-32">{membersSectionTitle}</h2>}
            <div className="flex flex-row flex-wrap justify-around max-w-[1728px] mx-auto
                md:px-8 
                lg:px-16 
                xl:px-16
                2xl:px-32">
                {!!membersData && members.map((member, index) => (
                    <MemberCard key={index} content={{
                        photo: member.image.asset.url,
                        photoAlt: member.image.alt,
                        name: member.name
                    }}/>
                ))}
            </div>
            {/* <div className="flex justify-center">
                <MoreButton/>
            </div> */}
        </section>
    );
}
