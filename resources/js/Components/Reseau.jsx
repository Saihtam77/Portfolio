import { Link } from "@inertiajs/react";

import whiteGithub from "@/Components/icones/white/Github.png";
import whiteLinkedln from "@/Components/icones/white/Linkedln.png";

import yellowGithub from "@/Components/icones/yellow/GitHub.png";
import yellowLinkedln from "@/Components/icones/yellow/Linkedln.png";
import { useState } from "react";

const Reseau = () => {
    const [isHoveredGithub, setIsHoveredGithub] = useState(false);
    const [isHoveredLinkedln, setIsHoveredLinkedln] = useState(false);

    return (
        <div className="hidden z-30 lg:flex flex-col items-center justify-center p-5 gap-y-7 fixed lg:top-28 lg:right-10 ">
            <a
                href="https://github.com/Saihtam77"
                className="hvr-grow"
                onMouseEnter={() => setIsHoveredGithub(true)}
                onMouseLeave={() => setIsHoveredGithub(false)}
            >
                <img
                    src={isHoveredGithub ? yellowGithub : whiteGithub}
                    className="w-10"
                    alt=""
                />
            </a>

            <a
                href="https://www.linkedin.com/in/geroffroy-m-524092232/"
                className="hvr-grow"
                onMouseEnter={() => setIsHoveredLinkedln(true)}
                onMouseLeave={() => setIsHoveredLinkedln(false)}
            >
                <img
                    src={isHoveredLinkedln ? yellowLinkedln : whiteLinkedln}
                    className="w-10"
                    alt=""
                />
            </a>
        </div>
    );
};

export default Reseau;
