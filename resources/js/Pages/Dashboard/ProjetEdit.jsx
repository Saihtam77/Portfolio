import ProjetEditForm from "@/Components/Dashboard/form/edit/ProjetEditForm";
import DashboardLayout from "@/Layouts/DashboardLayout";

const ProjetEdit = ({projet}) => {
    return (
        <DashboardLayout>
            <ProjetEditForm projet={projet}/>
        </DashboardLayout>
    );
}

export default ProjetEdit;