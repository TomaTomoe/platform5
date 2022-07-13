import React from "react";
import logoDesktop from "../../icons/logo.svg";
import logoMobile from "../../icons/logo-mobile.svg";
import {useMediaQuery} from '@react-hook/media-query';

export default function Logo({className}) {
    const isMobile = useMediaQuery('only screen and (max-width: 768px)');
    return (
        <div className={className}>
            <img src={isMobile ? logoMobile : logoDesktop} alt="5peron logo"/>
        </div>
    )
}
