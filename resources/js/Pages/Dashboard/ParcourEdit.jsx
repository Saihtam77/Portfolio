import ParcourEditForm from "@/Components/Dashboard/form/edit/ParcourEditForm";
import DashboardLayout from "@/Layouts/DashboardLayout";
const ParcourEdit = ({parcour}) => {
    return(
        <DashboardLayout>
            <ParcourEditForm parcour={parcour}/>
        </DashboardLayout>
    );
};
export default ParcourEdit;