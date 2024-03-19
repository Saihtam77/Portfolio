import TechnologieEditForm from "@/Components/Dashboard/form/edit/TechnologieEditForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

const TechnologieEdit = ({technologie}) => {
    return (
        <DashboardLayout>
            <TechnologieEditForm technologie={technologie} />
        </DashboardLayout>
    );
}

export default TechnologieEdit;