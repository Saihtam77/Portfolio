import ParcourBlog from "@/Components/Parcours/ParcourBlog";
import ParcourContentSection from "@/Components/Parcours/ParcourContentSection";
import Layout from "@/Layouts/GuestLayout";

const Parcour = ({parcour}) => {
    return (
        <Layout>
            <ParcourContentSection parcour={parcour} />
            <ParcourBlog parcour={parcour} />
        </Layout>
    );
};

export default Parcour;