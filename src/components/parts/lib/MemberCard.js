import React from "react";

export default function MemberCard({content}) {
    return (
        <div className="pt-4 pb-5 px-4
            md:px-4 md:pt-8 md:pb-8
            lg:px-0
            xl:pt-0">
            <img className="rounded-full w-[100px]
                md:w-[150px]
                lg:w-[150px]
                xl:w-[170px]
                2xl:w-[200px]
                3xl:w-[200px]" src={content.photo} alt="Member illustration"/>
            <p className="text-black text-base text-center pt-2 w-[100px]
                md:text-lg md:w-[150px] md:pt-4
                lg:text-xl lg:w-[150px] lg:pt-4
                xl:text-2xl xl:leading-10 xl:w-[170px] xl:pt-4
                2xl:text-2xl 2xl:leading-8 2xl:w-[200px] 2xl:pt-8
                3xl:text-[32px] 3xl:leading-10 3xl:w-[200px] 3xl:pt-8">{content.name}</p>
        </div>
    )
}
