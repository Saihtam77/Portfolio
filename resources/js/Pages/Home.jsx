import React from "react";
import { Link, Head } from "@inertiajs/react";

import Layout from "@/Layouts/GuestLayout";
import Presentation from "@/Components/Home/Presentation";
import Technologies from "@/Components/Home/Technologies";
import Parcours from "@/Components/Home/Parcours";
import Projets from "@/Components/Home/Projets";
import Reseau from "@/Components/Reseau";

const Home = ({parcours, projets, technologies}) => {
    return (
        <Layout>
            <Head title="Home" />
            <Reseau />
            <Presentation />
            <Technologies technologies={technologies} />
            <Parcours parcours={parcours} />
            <Projets projets={projets} />
            
        </Layout>
    );
};
export default Home;
