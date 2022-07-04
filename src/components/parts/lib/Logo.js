import React from "react";
import logoImage from "../../images/logo.png";

export default function Logo({className}) {
    return (
        <div className={className}>
            <img src={logoImage} alt="5peron logo"/>
        </div>
    )
}
