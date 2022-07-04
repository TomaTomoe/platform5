import React from "react";
import Question from "./lib/Question";

export default function FAQ() {
    return (
        <section>
            <h2>F.A.Q.</h2>
            <div>
                <Question />
                <Question />
                <Question />
            </div>
        </section>
    );
}
