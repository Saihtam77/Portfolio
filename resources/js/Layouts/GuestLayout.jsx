import Footer from "@/Components/Footer";
import BasicNavbar from "@/Components/Nav/BasicNavbar";

const Layout = ({ children }) => {
    return (
        <>
            <BasicNavbar />

            <main className="relative flex flex-col gap-y-20 bg-gunMetal pt-10 min-h-screen">
                {children}
            </main>
            <Footer />
        </>
    );
};

export default Layout;
