import DashboardNavbar from '@/Components/Nav/DashboardNavbar';
import React from 'react';

const DashboardLayout = ({ children }) => {
   return (
      <>
         
         <DashboardNavbar />

         <div class="p-4 sm:ml-64">
            {children}
         </div>

      </>
   );
};

export default DashboardLayout;