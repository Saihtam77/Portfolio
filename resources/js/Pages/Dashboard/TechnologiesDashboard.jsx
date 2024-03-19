import TechnologiesTable from "@/Components/Dashboard/TechnologiesTable";
import DashboardLayout from "@/Layouts/DashboardLayout";

const TechnologiesDashboard = ({technologies}) => {
    return (
        <DashboardLayout>
            <TechnologiesTable technologies={technologies} />
        </DashboardLayout>
);
}
    
export default TechnologiesDashboard;