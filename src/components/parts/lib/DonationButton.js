import React from "react";

export default function DonationButton() {
        
    function makeDonation() {
        alert("Thank You!");
    }

    return (
        <button onClick={makeDonation}>DONATE</button>
    );
}
