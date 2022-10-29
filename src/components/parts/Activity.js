import React from "react";
import { ReactComponent as IconAid } from "../icons/aid.svg";
import { ReactComponent as IconPerson } from "../icons/person.svg";
import { ReactComponent as IconCircle } from "../icons/circle.svg";
import { ReactComponent as IconShield } from "../icons/shield.svg";
import background from "../icons/cross.svg";

export default function Activity({activityData}) {
    const {activityList, activityTitle} = activityData;

    return (
        <section style={{ backgroundImage: `url(${background})`, backgroundPosition: '-150px -170px' }} 
            className="bg-orange pt-9 pb-0
                md:pt-14
                xl:pt-16 xl:pb-16
                2xl:pt-20">
            <h2 className="text-center text-black leading-tight font-bold uppercase font-sans mb-9 max-w-[1728px] mx-auto text-2xl
                md:px-8 md:text-3xl md:mb-16
                lg:px-16 lg:text-4xl
                xl:px-16 xl:text-5xl 
                2xl:px-16
                3xl:px-32">{activityTitle}</h2>
            <div className="max-w-[1728px] mx-auto
                md:px-8 md:flex md:flex-row md:flex-wrap md:justify-between
                lg:px-16 
                xl:px-16 
                2xl:px-16 
                3xl:px-32">
                <div className="text-center pb-20
                    md:basis-1/2
                    lg:basis-1/2 
                    xl:basis-1/4 xl:pb-0">
                    <div className="flex flex-col items-center h-[175px]">
                        <IconAid className="m-auto" />
                    </div>   
                    <p className="text-black font-semibold uppercase font-sans px-6 pt-8
                        xl:text-xl xl:leading-6 xl:pt-10
                        2xl:text-2xl 2xl:leading-7 2xl:pt-14">Гуманітарна <br/>допомога</p>
                </div>
                <div className="text-center pb-20
                    md:basis-1/2
                    lg:basis-1/2 
                    xl:basis-1/4 xl:pb-0"> 
                    <div className="h-[175px]">
                        <IconPerson className="m-auto" />
                    </div>   
                    <p className="text-black font-semibold uppercase font-sans px-6 pt-8
                        xl:text-xl xl:leading-6 xl:pt-10
                        2xl:text-2xl 2xl:leading-7 2xl:pt-14">Культурні, освітні <br/>та спортивні проекти</p>
                </div>
                <div className="text-center pb-20
                    md:basis-1/2
                    lg:basis-1/2 
                    xl:basis-1/4 xl:pb-0">
                    <div className="h-[175px]">
                        <IconCircle className="m-auto" />
                    </div>
                    <p className="text-black font-semibold uppercase font-sans px-6 pt-8
                        xl:text-xl xl:leading-6 xl:pt-10
                        2xl:text-2xl 2xl:leading-7 2xl:pt-14">Розвиток громад та <br/>соціальне підприємництво</p>
                </div>
                <div className="text-center pb-20
                    md:basis-1/2
                    lg:basis-1/2 
                    xl:basis-1/4 xl:pb-0">
                    <div className="h-[175px]">
                        <IconShield className="m-auto" />
                    </div>   
                    <p className="text-black font-semibold uppercase font-sans px-6 pt-8
                        xl:text-xl xl:leading-6 xl:pt-10
                        2xl:text-2xl 2xl:leading-7 2xl:pt-14">Допомога <br/>ЗСУ</p>
                </div>
            </div>
        </section>
    );
}
