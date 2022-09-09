import React from "react";
import DonationButton from "../parts/lib/DonationButton";
import imageNPO from "../images/npo.png";
import imageCF from "../images/cf.png";

export default function Donation() {
    return (
        <main className="mt-[73px] md:mt-0 flex items-center justify-items-center">
            <section id="thank_you" className="max-w-[1728px] mx-auto pt-9 pb-9 px-4
                md:px-8 md:pt-8 md:pb-12
                lg:px-16
                xl:px-16
                2xl:px-24 
                3xl:px-32">
                <h2 className="text-center text-black text-2xl font-bold uppercase font-sans mb-8 mx-auto max-w-[600px]
                    md:mb-4">Оберіть організацію, яку хотіли б підтримати</h2>
                <div className="md:flex md:flex-row flex-wrap justify-center items-stretch">
                    <div className="md:basis-1/2 text-center min-w-[240px] max-w-[400px] m-auto flex-1 flex flex-col mb-12 border border-[#77b9f2] p-4 md:py-4 md:px-6 md:mb-0 md:border-0">
                        <h3 className="text-black font-semibold text-xl pb-3 leading-6
                            md:text-lg md:pb-3 md:leading-7 md:h-[70px]">Громадська Організація "5 Перон"</h3>
                        <img src={imageNPO} alt="Громадська Організація '5 Перон'" className="object-contain h-[200px]"/>
                        <p className="text-black text-base pt-4 pb-6 leading-5 md:h-[100px]">Основні напрямки роботи: гуманітарна допомога, соціальні проєкти, просвітництво</p>
                        <DonationButton className="flex-none" title="Пожертвувати" aim="/getPaymentNPO"/>
                    </div>
                    <div className="md:basis-1/2 text-center min-w-[240px] max-w-[400px] m-auto flex-1 flex flex-col border border-[#77b9f2] p-4 md:py-4 md:px-6  md:border-0">
                        <h3 className="text-black font-semibold text-xl pb-3 leading-6
                            md:text-lg md:pb-3 md:leading-7 md:h-[70px]">Благодійна Організація "Благодійний Фонд "5 Перон""</h3>
                            <img src={imageCF} alt="Благодійна Організація 'Благодійний Фонд 5 Перон'" className="object-contain h-[200px]"/>
                        <p className="text-black text-base pt-4 pb-6 leading-5 md:h-[100px]">Основні напрямки роботи: виконання цільових запитів захисників</p>
                        <DonationButton className="flex-none" title="Пожертвувати" aim="/getPaymentCF"/>
                    </div>
                </div>
            </section>
        </main>
    );
}
