import React from "react";
import { ReactComponent as IconHeart } from "../icons/heart.svg";
import { ReactComponent as IconPeople } from "../icons/people.svg";
import { ReactComponent as IconPlus } from "../icons/plus.svg";

export default function AboutUs() {
    return (
        <section>
            <div className="wrapper">
                <div className="column">
                    <div>
                        <IconHeart/>
                    </div>
                    <div>
                        <p>250 000 +</p>
                        <p>people helped</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <IconPeople/>
                    </div>
                    <div>
                        <p>300</p>
                        <p>volunteers</p>
                    </div>
                </div>
                <div className="column">
                    <div>
                        <IconPlus/>
                    </div>
                    <div>
                        <p>100+</p>
                        <p>tons of humanitarian aid</p>
                    </div>
                </div>
            </div>
            <p>Since the beginning of the full-scale war, our activities have been aimed at solving the problems of wartime. We are united by a common goal - to make our contribution to the preservation of modern Ukraine and ensuring its future</p>
        </section>
    );
}
