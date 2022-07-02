import React from "react";

export default function MoreButton() {
        
    function showMore() {
        console.log("Download more items!");
    }

    return (
        <button onClick={showMore}>MORE</button>
    );
}