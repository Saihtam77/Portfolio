import { Link } from "@inertiajs/react";
import React, { useState } from "react";
import ProgressBar from "../ProgressBar";
import CompetencesElements from "../Competences/ComptencesElements";
import CompetencesLevel from "../Competences/CompetencesLevel";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
const Competence = ({ competences }) => {
    const [level, setLevel] = useState(competences[0].niveau);

    return (
        <section className="container mx-auto flex flex-col gap-y-10 lg:flex-row lg:justify-between">
            <article className="grid grid-cols-3 justify-center w-full gap-5 px-5">
                {competences.map((competence) => (
                    
                    <Link
                        as="button"
                        key={competence.id}
                        onClick={(e) => (
                            e.preventDefault(), setLevel(competence.niveau)
                        )}
                        className="bg-slate-50 p-3"
                    >
                        {competence.titre}
                    </Link>
                    
                ))}
            </article>

            <div className="flex justify-center items-center w-full">
                <div className="w-1/2">
                    <CircularProgressbar value={level} text={`${level}%`} />
                </div>
            </div>
        </section>
    );
};

export default Competence;
