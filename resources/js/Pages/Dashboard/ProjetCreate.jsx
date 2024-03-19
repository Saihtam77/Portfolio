import ProjetCreateForm from "@/Components/Dashboard/form/create/ProjetCreateForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

const ProjetCreate = ({technologies}) => {
    return (
        <section>
            <DashboardLayout>
                <ProjetCreateForm technologies={technologies} />
            </DashboardLayout>
        </section>
    );
};

export default ProjetCreate;