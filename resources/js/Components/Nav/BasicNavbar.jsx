import { Link, usePage } from "@inertiajs/react";
import { Navbar } from "flowbite-react";
import React from "react";

const BasicNavbar = () => {
    const { auth } = usePage().props;
    return (
        <Navbar fluid rounded className="sticky top-0 bg-oxford-blue-300">
            <div></div>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link
                    as={Link}
                    href={route("home")}
                    active
                    className="lg:text-xl"
                >
                    Home
                </Navbar.Link>
                <Navbar.Link
                    as={Link}
                    href={route("portfolio")}
                    className="lg:text-xl"
                >
                    Projets
                </Navbar.Link>
                <Navbar.Link as={Link} href={route("contact")} className="lg:text-xl">
                    Contact
                </Navbar.Link>

                {auth.user && (
                    <Navbar.Link as={Link} href={route("dashboard")} className="text-lg">
                        Dashboard
                    </Navbar.Link>
                )}

                {auth.user && (
                    <Navbar.Link href="#" className="text-xl">
                        <Link href="/logout" method="post" as="button">
                            Logout
                        </Link>
                    </Navbar.Link>
                )}
            </Navbar.Collapse>
        </Navbar>
    );
};

export default BasicNavbar;
