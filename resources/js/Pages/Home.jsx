import React from "react";
import { Link, Head } from "@inertiajs/react";

import Layout from "@/Layouts/GuestLayout";
import Presentation from "@/Components/Home/Presentation";
import Competence from "@/Components/Home/Competence";
import Parcours from "@/Components/Home/Parcours";

const Home = ({parcours, projets, competences}) => {
    return (
        <Layout>
            <Head title="Home" />

            <Presentation />
            <Competence competences={competences} />
            <Parcours parcours={parcours} />
            
        </Layout>
    );
};
export default Home;
