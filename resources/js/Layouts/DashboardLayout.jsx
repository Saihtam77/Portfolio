import DashboardNavbar from '@/Components/Nav/DashboardNavbar';
import React from 'react';

const DashboardLayout = ({ children }) => {
   return (
      <>
         
         <DashboardNavbar />
         <main class="p-4 sm:ml-64 bg-gunMetal min-h-screen">
            {children}
         </main>

      </>
   );
};

export default DashboardLayout;