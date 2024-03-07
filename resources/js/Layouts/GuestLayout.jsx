import Footer from "@/Components/Footer";
import BasicNavbar from "@/Components/Nav/BasicNavbar";

const Layout = ({ children }) => {
    return (
        <>
            <BasicNavbar />
            <main className="flex flex-col gap-y-20 bg-oxford-blue-300">{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
