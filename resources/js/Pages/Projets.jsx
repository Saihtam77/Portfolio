import Layout from "@/Layouts/GuestLayout";
import React from "react";
import ProjetsElement from "../Components/Projets/ProjetsElement";

const Projets = ({ projets }) => {
    return (
        <Layout>
            <section className="container flex flex-col mx-auto gap-y-5">
                {/* map projets */}
                {projets.map((projet) => (
                    <ProjetsElement
                        id={projet.id}
                        img={projet.img}
                        completion={projet.completion}
                        titre={projet.titre}
                        desc={projet.desc}
                        texte={projet.texte}
                        competence={projet.competences}
                    />
                ))}
            </section>
        </Layout>
    );
};

export default Projets;
