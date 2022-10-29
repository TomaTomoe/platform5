import React, { useState, useEffect } from "react";
import { Blocks } from  "react-loader-spinner";
import sanityClient from "../../client";
import BlockContent from "@sanity/block-content-to-react";

// import CustomBlockContent from "../parts/lib/CustomBlockContent"
import ProjectInfo from "../parts/ProjectInfo";
import ReportsList from "../parts/ReportsList";
import MembersList from "../parts/MembersList";
import ProjectsList from "../parts/ProjectsList";
import { useNavigate, useParams } from "react-router-dom";

import defaultImg from "../images/hero-bg_mobile.jpg";

export default function Project() {
    const [singleProjectData, setSingleProject] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        sanityClient
            .fetch(`*[slug.current == "${slug}"]{
                title,
                _id,
                slug,
                description,
                budgetBtnTitle,
                budgetBtnLink,
                donationBtnTitle,
                donationTo,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                },
                aimTitle,
                body,
                bodyHTML,
                reportsSectionTitle,
                financialReports[]->{
                    reportTitle,
                    reportFile{
                        asset->{
                            _id,
                            url
                        }
                    },
                    reportCover{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    }
                },
                "membersData": {
                    membersSectionTitle,
                    activeMembers[]->{
                        name,
                        image{
                            asset->{
                                _id,
                                url
                            },
                            alt 
                        }
                    }
                },
                relatedProjectsTitle,
                relatedProjects[]->{
                    title,
                    slug,
                    description,
                    cardImage{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                    startedAt
                }
            }`)
            .then((data) => setSingleProject(data[0]))
            .catch(console.error);
    }, [slug]);

    return (
        <>
            {(singleProjectData === null) && 
                <main className="mt-[73px] md:mt-0 h-[60vh] flex items-center justify-center">
                    <Blocks 
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="blocks-loading"
                    />
                </main>
            }
            {(typeof singleProjectData === "undefined") && navigate("/404")}
            {!!singleProjectData &&
                <main className="mt-[73px] md:mt-0">
                    <ProjectInfo content={{
                        title: singleProjectData.title || "Новий проєкт",
                        description: singleProjectData.description || undefined,
                        budgetBtnTitle: singleProjectData.budgetBtnTitle || undefined,
                        budgetBtnLink: singleProjectData.budgetBtnLink || undefined,
                        donationBtnTitle: singleProjectData.donationBtnTitle || undefined,
                        donationTo: singleProjectData.donationTo || undefined,
                        mainImage: singleProjectData.mainImage || defaultImg
                    }}/>
                    {!!singleProjectData.aimTitle && <h2 className="text-center text-black text-2xl font-bold uppercase font-sans max-w-[1728px] mx-auto
                        md:px-8 md:text-3xl
                        lg:px-16 lg:text-4xl lg:mb-8
                        xl:px-16 xl:text-5xl xl:mb-16
                        2xl:px-16 
                        3xl:px-32">{singleProjectData.aimTitle}</h2>}
                    {!!singleProjectData.body && <BlockContent
                        projectId="r8t4lunq"
                        dataset="production"
                        blocks={singleProjectData.body}
                        className="block-content text-black text-base max-w-[1728px] mx-auto pt-12 pb-9 px-8
                        md:px-8 md:pt-12 md:pb-12 md:text-lg md:leading-9
                        lg:px-16 lg:pt-12 lg:text-xl
                        xl:px-16 xl:pt-16 xl:text-2xl
                        2xl:px-24 
                        3xl:px-32"/>}
                    {/* {!!singleProjectData.body && <CustomBlockContent props={singleProjectData.body}/>} */}
                    {!!singleProjectData.bodyHTML && <section className="max-w-[1728px] mx-auto pt-12 pb-9 px-8
                    md:px-8 md:pt-12 md:pb-12
                    lg:px-16 lg:pt-12
                    xl:px-16 xl:pt-16
                    2xl:px-24 
                    3xl:px-32">
                        <div dangerouslySetInnerHTML={{__html: singleProjectData.bodyHTML.code}} />
                    </section>}
                    {!!singleProjectData.financialReports && <ReportsList reportsData={{
                        reportsTitle: singleProjectData.reportsSectionTitle,
                        reportsList: singleProjectData.financialReports
                        }}/>}
                    {!!singleProjectData.membersData.activeMembers && <MembersList membersData={{
                        membersSectionTitle: singleProjectData.membersData.membersSectionTitle,
                        members: singleProjectData.membersData.activeMembers
                        }}/>}
                    {!!singleProjectData.relatedProjects && <ProjectsList 
                        projectsList={singleProjectData.relatedProjects} 
                        projectsTitle={singleProjectData.relatedProjectsTitle}/>}
                </main>
            }
        </>
    );
}
