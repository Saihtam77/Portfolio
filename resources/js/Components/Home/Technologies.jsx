import React, { useState } from "react";

import TechnologiesLevels from "../Technologies/TechnologiesLevels";
import TechnologiesGrid from "../Technologies/TechnologiesGrid";

const Technologies = ({ technologies }) => {
    const [niveau, setNiveau] = useState(technologies[0].niveau);

    return (
        <section className="lg:container lg:mx-auto flex flex-col lg:flex-row-reverse justify-between gap-7 lg:p-0 px-7">
            <TechnologiesLevels niveau={niveau} />
            <TechnologiesGrid
                technologies={technologies}
                setNiveau={setNiveau}
            />
        </section>
    );
};

export default Technologies;
