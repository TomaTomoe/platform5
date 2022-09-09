import React from "react";
import { Link } from "react-router-dom";

export default function LinkButton({style, className, url, title}) {

    return (
        <button type="submit"
            style={style}
            className={`text-white bg-orange uppercase font-bold px-[40px] h-12 text-lg sm:px-[50px] sm:h-16 sm:text-xl text-center ${className}`}
            >
            <Link to={url}>{title}</Link>
        </button>
    );
}
