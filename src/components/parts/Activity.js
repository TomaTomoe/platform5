import React from "react";
import { ReactComponent as IconAid } from "../icons/aid.svg";
import { ReactComponent as IconPerson } from "../icons/person.svg";
import { ReactComponent as IconCircle } from "../icons/circle.svg";
import { ReactComponent as IconWindow } from "../icons/window.svg";
import background from "../icons/cross.svg";

export default function Activity() {
    return (
        <section className="bg-orange pt-20 pb-16" style={{ backgroundImage: `url(${background})`, backgroundPosition: '-150px -170px' }}>
            <h2 className="text-center text-black text-5xl leading-tight font-bold uppercase font-sans mb-16 max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">Діяльність</h2>
            <div className="flex flex-row flex-wrap justify-between max-w-[1728px] md:px-8 lg:px-16 xl:px-24 2xl:px-32 mx-auto">
                <div className="basis-1/4 text-center">    
                    <IconAid className="m-auto h-[175px]" />
                    <p className="text-black text-2xl leading-7 font-semibold uppercase font-sans px-6 pt-14">Гуманітарна допомога</p>
                </div>
                <div className="basis-1/4 text-center">    
                    <IconPerson className="m-auto h-[175px]" />
                    <p className="text-black text-2xl leading-7 font-semibold uppercase font-sans px-6 pt-14">Культурні, освітні та спортивні проекти</p>
                </div>
                <div className="basis-1/4 text-center">    
                    <IconCircle className="m-auto h-[175px]" />
                    <p className="text-black text-2xl leading-7 font-semibold uppercase font-sans px-6 pt-14">Розвиток громад та соціальної відповідальності</p>
                </div>
                <div className="basis-1/4 text-center">    
                    <IconWindow className="m-auto h-[175px]" />
                    <p className="text-black text-2xl leading-7 font-semibold uppercase font-sans px-6 pt-14">Сприяння соціальному підприємництву</p>
                </div>
            </div>
        </section>
    );
}
