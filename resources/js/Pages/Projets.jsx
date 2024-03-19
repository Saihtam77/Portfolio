import Layout from "@/Layouts/GuestLayout";
import React from "react";
import ProjetsElement from "../Components/Projets/ProjetsElement";

const Projets = ({ projets }) => {
    return (
        <Layout>
            <section className="container flex flex-col mx-auto gap-y-20    ">
                {/* map projets */}
                {projets.map((projet) => (
                    <ProjetsElement projet={projet} />
                ))}
            </section>
        </Layout>
    );
};

export default Projets;
