import ProjetBlog from '@/Components/Projets/ProjetBlog';
import ProjetContentSection from '@/Components/Projets/ProjetContentSection';
import Layout from '@/Layouts/GuestLayout';
import React from 'react';

const Projet = ({projet}) => {
    return (
        <Layout>
            <ProjetContentSection projet={projet} />
            <ProjetBlog projet={projet} />
        </Layout>
    );
};

export default Projet;
