import ParcoursTable from "@/Components/Dashboard/ParcoursTable";

import DashboardLayout from "@/Layouts/DashboardLayout";

const ParcourDashboard = ({ parcours,success}) => {
    return (
        <DashboardLayout>
            {/* if success display sucess */}
            {success && (
                <div className="alert alert-success" role="alert">
                    {success}
                </div>
            )}
            <ParcoursTable parcours={parcours} />
        </DashboardLayout>
    );
};

export default ParcourDashboard;
