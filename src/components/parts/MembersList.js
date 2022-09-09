import React from "react";
// import MoreButton from "./lib/MoreButton";
import MemberCard from "./lib/MemberCard";
import background from "../icons/cross.svg";

import memberImage1 from "../images/member1.jpg";
import memberImage2 from "../images/member2.jpg";
import memberImage3 from "../images/member3.jpg";
import memberImage4 from "../images/member4.jpg";
import memberImage5 from "../images/member5.png";
import memberImage6 from "../images/member6.jpg";

export default function MembersList() {
    return (
        <section style={{ backgroundImage: `url(${background})`, backgroundPosition: '-150px -170px' }}
            className="bg-orange pt-9 pb-4
                md:pt-20 md:pb-16
                lg:pt-16 lg:pb-8
                xl:pt-20 xl:pb-16">
            <h2 className="text-center text-black leading-tight font-bold uppercase font-sans mb-4 max-w-[1728px] mx-auto text-2xl
                md:px-8 md:text-3xl
                lg:px-16 lg:text-4xl lg:mb-4
                xl:px-16 xl:text-5xl xl:mb-16
                2xl:px-16
                3xl:px-32">Наша команда</h2>
            <div className="flex flex-row flex-wrap justify-around max-w-[1728px] mx-auto
                md:px-8 
                lg:px-16 
                xl:px-16
                2xl:px-32">
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
                    name: 'Алла'
                }}/>
                <MemberCard content={{
                    photo: memberImage4,
                    name: 'Оксана'
                }}/>
                <MemberCard content={{
                    photo: memberImage5,
                    name: 'Сергій'
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
