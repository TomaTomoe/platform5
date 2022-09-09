import React from "react";
import DonationButton from "../parts/lib/DonationButton";
import imageNPO from "../images/npo.png";
import imageCF from "../images/cf.png";

export default function Donation() {
    return (
        <main className="mt-[73px] md:mt-0 flex items-center justify-items-center">
            <section id="thank_you" className="max-w-[1728px] mx-auto pt-9 pb-9 px-8
                md:px-8 md:pt-12 md:pb-12
                lg:px-16 lg:pt-16
                xl:px-16 xl:pt-16
                2xl:px-24 
                3xl:px-32">
                <h2 className="text-center text-black text-2xl font-bold uppercase font-sans mb-8 max-w-[1728px] mx-auto
                    md:px-8 md:text-3xl
                    lg:px-16 lg:text-4xl lg:mb-8
                    xl:px-16 xl:text-5xl xl:mb-16
                    2xl:px-16 
                    3xl:px-32">Оберіть організацію, яку хотіли б підтримати</h2>
                <div className="md:flex md:flex-row flex-wrap justify-center items-stretch">
                    <div className="md:basis-1/2 text-center min-w-[240px] flex-1 flex flex-col py-12 md:py-8 md:px-6">
                        <h3 className="text-black font-semibold text-xl pb-3 leading-6
                            md:text-xl md:pb-3 md:leading-7 md:h-[100px]
                            lg:text-2xl lg:pb-4
                            xl:text-[32px] xl:leading-10 xl:pb-8">Громадська Організація "5 Перон"</h3>
                        <img src={imageNPO} alt="Громадська Організація '5 Перон'" className="object-contain h-[300px]"/>
                        <p className="text-black text-lg pt-4 pb-6 leading-5
                            md:leading-7 md:h-[152px]
                            lg:text-xl lg:pb-8 lg:h-[140px]
                            xl:text-2xl xl:leading-9 xl:pb-[60px]">Основні напрямки роботи: гуманітарна допомога, соціальні проєкти, просвітництво</p>
                        <DonationButton className="flex-none" title="Пожертвувати" aim="/getPaymentNPO"/>
                    </div>
                    <div className="md:basis-1/2 text-center min-w-[240px] flex-1  flex flex-col py-12 md:py-8 md:px-6">
                        <h3 className="text-black font-semibold text-xl pb-3 leading-6
                            md:text-xl md:pb-3 md:leading-7 md:h-[100px]
                            lg:text-2xl lg:pb-4
                            xl:text-[32px] xl:leading-10 xl:pb-8">Благодійна Організація "Благодійний Фонд "5 Перон""</h3>
                            <img src={imageCF} alt="Благодійна Організація 'Благодійний Фонд 5 Перон'" className="object-contain h-[300px]"/>
                        <p className="text-black text-lg pt-4 pb-6 leading-5
                            md:leading-7 md:h-[152px]
                            lg:text-xl lg:pb-8 lg:h-[140px]
                            xl:text-2xl xl:leading-9 xl:pb-[60px]">Основні напрямки роботи: виконання цільових запитів захисників</p>
                        <DonationButton className="flex-none" title="Пожертвувати" aim="/getPaymentCF"/>
                    </div>
                </div>
            </section>
        </main>
    );
}
