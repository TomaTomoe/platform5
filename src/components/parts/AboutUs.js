import React from "react";
import { ReactComponent as IconHeart } from "../icons/heart.svg";
import { ReactComponent as IconPeople } from "../icons/people.svg";
import { ReactComponent as IconPlus } from "../icons/plus.svg";

export default function AboutUs() {
    return (
        <section id="about" className="bg-white z-10 w-full">
            <div className="flex flex-col flex-wrap justify-around max-w-[1728px] mx-auto px-8 pb-0 pt-9
                md:px-32 md:pb-0 md:pt-16
                lg:px-16 lg:flex-row lg:pb-12
                xl:px-16 
                2xl:px-16
                3xl:px-32 3xl:justify-between">
                <div className="flex flex-row flex-wrap justify-start font-sans pb-9
                    md:pb-12
                    lg:pb-0">
                    <div className="h-[43px] w-auto mt-2
                        md:h-[70px] md:w-[85px] md:mt-0
                        lg:w-auto lg:h-[50px]
                        xl:h-[70px]">
                        <IconHeart className="h-full w-auto m-auto"/>
                    </div>
                    <div className="pl-8
                        md:pl-12 
                        lg:pl-4">
                        <p className="text-black font-bold text-3xl
                            md:text-5xl 
                            lg:text-3xl 
                            xl:text-5xl">250 000 +</p>
                        <p className="text-black font-bold text-base
                            md:text-2xl md:leading-6 
                            lg:text-xl 
                            xl:text-2xl">бенефіціарів</p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start font-sans pb-9
                    md:pb-12
                    lg:pb-0">
                    <div className="h-[43px] w-auto mt-2
                        md:h-[70px] md:w-[85px] md:mt-0
                        lg:w-auto lg:h-[50px]
                        xl:h-[70px]">
                        <IconPeople className="h-full w-auto m-auto"/>
                    </div>
                    <div className="pl-8
                        md:pl-12 
                        lg:pl-4">
                        <p className="text-black font-bold text-3xl
                            md:text-5xl 
                            lg:text-3xl 
                            xl:text-5xl">300</p>
                        <p className="text-black font-bold text-base
                            md:text-2xl md:leading-6 
                            lg:text-xl 
                            xl:text-2xl">волонтерів</p>
                    </div>
                </div>
                <div className="flex flex-row flex-wrap justify-start font-sans pb-9
                    md:pb-12
                    lg:pb-0">
                    <div className="h-[55px] w-auto mt-1
                        md:h-[70px] md:w-[85px] md:mt-0
                        lg:w-auto lg:h-[50px]
                        xl:h-[70px]">
                        <IconPlus className="h-full w-auto m-auto"/>
                    </div>
                    <div className="pl-8
                        md:pl-12 
                        lg:pl-4">
                        <p className="text-black font-bold text-3xl
                            md:text-5xl 
                            lg:text-3xl 
                            xl:text-5xl">100+</p>
                        <p className="text-black font-bold text-base
                            md:text-2xl md:leading-6 
                            lg:text-xl 
                            xl:text-2xl">тон гуманітарної допомоги</p>
                    </div>
                </div>
            </div>
            <p className="text-black text-justify max-w-[1728px] px-8 mx-auto pt-4 pb-9 text-base
                md:text-lg md:leading-9 md:pb-16
                lg:px-16 lg:text-xl
                xl:px-16 xl:text-2xl
                2xl:px-24
                3xl:px-32">З початку повномасштабного вторгнення окупанта наша діяльність направлена на вирішення проблем воєнного часу. Нас об'єднує спільна мета - зробити свій внесок до збереження сучасної України і створення  майбутнього України.</p>
        </section>
    );
}
