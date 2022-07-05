import React from "react";
// import MoreButton from "./lib/MoreButton";
import MemberCard from "./lib/MemberCard";
import background from "../icons/cross.svg";

import memberImage1 from "../images/member1.jpg";
import memberImage2 from "../images/member2.jpg";
import memberImage3 from "../images/member3.jpg";
import memberImage4 from "../images/member4.jpg";
import memberImage6 from "../images/member6.jpg";

export default function MembersList() {
    return (
        <section className="bg-orange pt-20 pb-16" style={{ backgroundImage: `url(${background})`, backgroundPosition: '-150px -170px' }}>
            <h2 className="text-center text-black text-5xl leading-tight font-bold uppercase font-sans mb-16 max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">Our Team</h2>
            <div className="flex flex-row flex-wrap justify-around lg:justify-between max-w-[1728px] pb-8 md:px-8 lg:px-16 xl:px-32 mx-auto">
                <MemberCard content={{
                    photo: memberImage1,
                    name: 'Ірина'
                }}/>
                <MemberCard content={{
                    photo: memberImage2,
                    name: 'Микита'
                }}/>
                <MemberCard content={{
                    photo: memberImage3,
                    name: 'Ала'
                }}/>
                <MemberCard content={{
                    photo: memberImage4,
                    name: 'Оксана'
                }}/>
                <MemberCard content={{
                    photo: memberImage6,
                    name: 'Вікторія'
                }}/>
            </div>
            {/* <div className="flex justify-center">
                <MoreButton/>
            </div> */}
        </section>
    );
}
