import GallerySection from "@/Components/Projets/GallerySection";
import PresentationSection from "@/Components/Projets/PresentationSection";
import TechSection from "@/Components/Projets/TechSection";
import Layout from "@/Layouts/GuestLayout";

import React from "react";

const Projet = ({ projet }) => {
    return (
        <Layout>
            <PresentationSection projet={projet} />
            <TechSection projet={projet} />
            <GallerySection />
        </Layout>
    );
};

export default Projet;
