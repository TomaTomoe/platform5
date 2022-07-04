import React from "react";
import { ReactComponent as IconHeart } from "../icons/heart.svg";
import { ReactComponent as IconPeople } from "../icons/people.svg";
import { ReactComponent as IconPlus } from "../icons/plus.svg";

export default function AboutUs() {
    return (
        <section>
            <div className="flex flex-row flex-wrap justify-between max-w-[1728px] md:px-8 lg:px-16 xl:px-32 mx-auto pt-16 pb-12">
                <div className="flex flex-row flex-wrap justify-start font-sans">
                    <div className="h-[70px]">
                        <IconHeart className="h-full w-auto"/>
                    </div>
                    <div className="pl-4">
                        <p className="text-black text-5xl font-bold">250 000 +</p>
                        <p className="text-black text-2xl leading-6 font-bold">people helped</p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start font-sans">
                    <div className="h-[70px]">
                        <IconPeople className="h-full w-auto"/>
                    </div>
                    <div className="pl-4">
                        <p className="text-black text-5xl font-bold">300</p>
                        <p className="text-black text-2xl leading-6 font-bold">volunteers</p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start font-sans">
                    <div className="h-[70px]">
                        <IconPlus className="h-full w-auto"/>
                    </div>
                    <div className="pl-4">
                        <p className="text-black text-5xl font-bold">100+</p>
                        <p className="text-black text-2xl leading-6 font-bold">tons of humanitarian aid</p>
                    </div>
                </div>
            </div>
            <p className="text-black text-2xl text-justify leading-9 max-w-[1728px] md:px-8 lg:px-16 xl:px-32 mx-auto pt-4 pb-16">Since the beginning of the full-scale war, our activities have been aimed at solving the problems of wartime. We are united by a common goal - to make our contribution to the preservation of modern Ukraine and ensuring its future</p>
        </section>
    );
}
