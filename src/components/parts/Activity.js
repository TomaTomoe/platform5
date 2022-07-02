import React from "react";
import { ReactComponent as IconAid } from "../icons/aid.svg";
import { ReactComponent as IconPerson } from "../icons/person.svg";
import { ReactComponent as IconCircle } from "../icons/circle.svg";
import { ReactComponent as IconWindow } from "../icons/window.svg";

export default function Activity() {
    return (
        <section>
            <h2>Activity</h2>
            <div className="wrapper">
                <div className="cell">    
                    <IconAid />
                    <p>Humanitarian aid</p>
                </div>
                <div className="cell">    
                    <IconPerson />
                    <p>Cultural, educational and sports projects</p>
                </div>
                <div className="cell">    
                    <IconCircle />
                    <p>Community development and social responsibility</p>
                </div>
                <div className="cell">    
                    <IconWindow />
                    <p>Promotion of social entrepreneurship</p>
                </div>
            </div>
        </section>
    );
}
