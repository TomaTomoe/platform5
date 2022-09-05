import React from "react";
import Question from "./lib/Question";

export default function FAQ() {
    return (
        <section id="faq" className="max-w-[1728px] mx-auto pt-12 pb-9 px-8
            md:px-8 md:pt-12 md:pb-12
            lg:px-16 lg:pt-12
            xl:px-16 xl:pt-16
            2xl:px-24 
            3xl:px-32">
            <h2 className="text-center text-black text-2xl font-bold uppercase font-sans mb-8 max-w-[1728px] mx-auto
                md:px-8 md:text-3xl
                lg:px-16 lg:text-4xl lg:mb-8
                xl:px-16 xl:text-5xl xl:mb-16
                2xl:px-16 
                3xl:px-32">F.A.Q.</h2>
            <div>
                <Question content={{
                    question: 'Хочу допомогти. Яким чином?',
                    answear: 'Напишіть нам на почту або зателефонуйте.'
                }} />
                <Question content={{
                    question: 'Кому ви допомагаєте?',
                    answear: 'Нашими бенефіціарами є внутрішньо переміщені особи, незахищені верстви населення, ЗСУ, тварини та інші.'
                }} />
                <Question content={{
                    question: 'Маю ідею проекту, чиї цілі співпадають з вашими. Чи ви готові до співпраці?',
                    answear: 'Така можливість є. Просимо направити вводну інформацію на пошту 5peron.npo@gmail.com'
                }} />
            </div>
        </section>
    );
}
