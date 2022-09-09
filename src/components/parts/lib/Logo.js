import React, {useLayoutEffect, useState} from "react";
import logoDesktop from "../../icons/logo.svg";
import logoMobile from "../../icons/logo-mobile.svg";

function useWindowWidth() {
    const [deviseWidth, setDeviceWidth] = useState(0);
    useLayoutEffect(() => {
        function updateDeviceWidth() {
            setDeviceWidth(window.innerWidth);
        }
        window.addEventListener('resize', updateDeviceWidth);
        updateDeviceWidth();
        return () => window.removeEventListener('resize', updateDeviceWidth);
    },[]);
    return deviseWidth;
}

export default function Logo({className}) {
    const currentDeviceWidth = useWindowWidth();
    const isMobile = currentDeviceWidth < 768;
    return (
        <div className={className}>
            <img src={isMobile ? logoMobile : logoDesktop} alt="5peron logo"/>
        </div>
    )
}
