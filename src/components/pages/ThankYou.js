import React from "react";
import { Link } from "react-router-dom";

export default function ThankYou() {
    return (
        <main className="mt-[73px] md:mt-0 flex full-height items-center justify-items-center">
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
                    3xl:px-32">Дякуємо за Вашу підтримку!</h2>
                <div>
                    <Link to="/#home"
                        className="block text-white bg-orange uppercase font-bold py-2.5 px-[40px] h-12 text-lg max-w-[270px] m-auto sm:py-5 sm:px-[50px] sm:h-16 sm:text-xl text-center"
                        >На головну</Link>
                </div>
            </section>
        </main>
    );
}
