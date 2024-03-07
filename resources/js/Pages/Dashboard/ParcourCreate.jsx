import ParcourCreateForm from "@/Components/Dashboard/form/create/ParcourCreateForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

const ParcourCreate = () => {
    return (
        <section>
            <DashboardLayout>
                <ParcourCreateForm />
            </DashboardLayout>
        </section>
    );
};
export default ParcourCreate;