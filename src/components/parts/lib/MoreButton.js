import React from "react";

export default function MoreButton({className}) {
        
    function showMore() {
        console.log("Download more items!");
    }

    return (
        <button
            onClick={showMore}
            className={`text-white bg-darkBlue uppercase font-bold px-[60px] h-16 text-xl text-center ${className}`}
            >LOAD MORE</button>
    );
}