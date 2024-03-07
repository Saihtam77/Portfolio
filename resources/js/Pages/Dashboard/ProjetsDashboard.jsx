import ProjetsTable from "@/Components/Dashboard/ProjetsTable";
import DashboardLayout from "@/Layouts/DashboardLayout";

const ProjetsDashboard = ({projets}) => {
    return(
        <DashboardLayout>
            <ProjetsTable projets={projets} />  
        </DashboardLayout> 
    );
};

export default ProjetsDashboard;  