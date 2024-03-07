import ProjetCreateForm from "@/Components/Dashboard/form/create/ProjetCreateForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

const ProjetCreate = () => {
    return (
        <section>
            <DashboardLayout>
                <ProjetCreateForm />
            </DashboardLayout>
        </section>
    );
};

export default ProjetCreate;