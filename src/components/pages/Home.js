import React, { useState, useEffect } from "react";
import { Blocks } from  "react-loader-spinner";
import sanityClient from "../../client";
import Hero from "../parts/Hero";
import AboutUs from "../parts/AboutUs";
import Activity from "../parts/Activity";
import ProjectsList from "../parts/ProjectsList";
import ReportsList from "../parts/ReportsList";
import MembersList from "../parts/MembersList";
import FAQ from "../parts/FAQ";


export default function Home() {

    const [homeData, setHomeData] = useState(null);
    useEffect(() => {
        sanityClient
            .fetch(`*[_type == "homePage"]{
                "heroData": {
                    header,
                    subHeader,
                    mainImageDesktop{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                    mainImageMobile{
                        asset->{
                            _id,
                            url
                        },
                        alt
                    },
                    buttonTitle
                },
                aboutUs,
                "activityData": {
                    activityTitle,
                    activityList
                },
                "projectsData": {
                    projectsTitle,
                    projectsList[]->{
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
                },
                "reportsData": {
                    reportsTitle,
                    reportsList[]->{
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
                    }
                },
                "faqData": {
                    faqTitle,
                    faqList[]{
                        question,
                        answear
                    }
                },
                "membersData": {
                    allMembersSectionTitle,
                    allMembers[]->{
                        name,
                        image{
                            asset->{
                                _id,
                                url
                            },
                            alt 
                        }
                    }
                }
            }`)
            .then((data) => setHomeData(data[0]))
            .catch(console.error);
    }, []);

    if (homeData === null) {
        return (
            <main className="mt-[73px] md:mt-0 h-[60vh] flex items-center justify-center">
                <Blocks 
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="blocks-loading"
                />
            </main>
        );
    };

    return (
        <main className="mt-[73px] md:mt-0">
            <Hero heroData={homeData.heroData}/>
            <AboutUs aboutUsData={homeData.aboutUs}/>
            <Activity activityData={homeData.activityData}/>
            <ProjectsList id="projects" showButton={true}
                projectsList={homeData.projectsData.projectsList} 
                projectsTitle={homeData.projectsData.projectsTitle}/>
            <ReportsList reportsData={{
                reportsTitle: homeData.reportsData.reportsTitle,
                reportsList: homeData.reportsData.reportsList
            }}/>
            <FAQ faqData={homeData.faqData}/>
            <MembersList membersData={{
                membersSectionTitle: homeData.membersData.allMembersSectionTitle,
                members: homeData.membersData.allMembers
                }}/>
        </main>
    );
}
