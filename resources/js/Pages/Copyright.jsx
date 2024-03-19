import Layout from "@/Layouts/GuestLayout";
import React from "react";

const Copyright = () => {
    const year = new Date().getFullYear();
    return (
        <Layout>
            <section className="min-h-screen flex flex-col gap-y-7 justify-center items-center">
                <div className="text-center py-5 text-white">
                    <p className="mb-2">
                        © {year} GEROFFROY Mathias. All rights reserved.
                    </p>
                    <p>
                        The content of this website is protected by copyright
                        and may not be reproduced without permission.
                    </p>
                    <p>Website designed and developed by GEROFFROY Mathias.</p>
                </div>
                <hr className="w-1/3" />
            </section>
        </Layout>
    );
};

export default Copyright;
