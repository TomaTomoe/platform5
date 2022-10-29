import React from "react";
import { Link } from "react-router-dom";
// import DonationButton from "./DonationButton";
import projectImage from "../../images/project-img.jpg";

export default function ProjectCard({content}) {
    return (
        <article key={content.key} className="mx-auto my-8 max-w-[400px]
            lg:mx-0 lg:my-8 lg:basis-1/2
            xl:my-4 xl:basis-1/3
            2xl:my-4 2xl:max-w-[458px]
            3xl:my-4 3xl:max-w-[458px]">
            <Link to={"/project/" + content.slug.current} key={content.slug.current}>
                <div className="bg-darkBlue p-10 rounded-2xl flex flex-col flex-wrap content-between h-full
                    xl:mx-1 xl:p-6
                    2xl:mx-0 2xl:p-10">
                    <h3 className="text-white font-semibold text-2xl leading-8 text-center font-sans mb-4 flex-none
                        lg:text-2xl lg:leading-8
                        xl:text-2xl xl:leading-8
                        2xl:text-3xl 2xl:leading-8
                        3xl:text-[32px] 3xl:leading-10">{content.header}</h3>
                    <p className="flex-auto text-white text-base mb-4
                        lg:text-base lg:mb-4
                        xl:text-lg xl:leading-6 xl:mb-4
                        2xl:text-xl 2xl:leading-7 2xl:mb-8
                        3xl:text-2xl 3xl:leading-9">{content.description}</p>
                    <img src={content.cardImgSrc || projectImage} className="flex-none rounded-[22px]" alt={content.cardImageAlt}/>
                    {/* <DonationButton className={"flex-none mt-8 mx-auto"}  title="DONATE" aim="/getPaymentNPO"/> */}
                </div>
            </Link>
        </article>
    )
}
