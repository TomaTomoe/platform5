import React from "react";

export default function DonationButton({style, className}) {
        
    function makeDonation() {
        alert("Ви можете долучитися до проекту зателефонувавши нам чи написавши на імейл вказані у розділі 'Контакти'");
    }

    return (
        <button
            onClick={makeDonation}
            style={style}
            className={`text-white bg-orange uppercase font-bold px-[50px] h-16 text-xl text-center ${className}`}
            >ДОЛУЧИТИСЯ</button>
    );
}
