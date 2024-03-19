import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import { Navbar } from "flowbite-react";
import whiteHome from "@/Components/icones/white/Home.png";
import yellowHome from "@/Components/icones/yellow/Home.png";
import React from "react";

const BasicNavbar = () => {
    const { auth } = usePage().props;
    const [Dropdown, setDropdown] = useState(false);

    const [isHovered, setIsHovered] = useState(false);

    return (
        <nav className="bg-gunMetal sticky top-0 z-50">
            <div className=" flex flex-wrap items-center justify-between mx-auto p-4 lg:px-10">
                <div className="flex gap-x-">
                    <Link
                        href={route("home")}
                        className="hvr-grow"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <img
                            src={isHovered ? yellowHome : whiteHome}
                            className="w-7"
                            alt=""
                        />
                    </Link>
                    {/* home icon */}
                </div>

                <Link
                    as="button"
                    onClick={(e) => {
                        e.preventDefault();
                        setDropdown(!Dropdown);
                    }}
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden "
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </Link>
                <div
                    className={
                        Dropdown
                            ? "w-full md:block md:w-auto"
                            : "hidden w-full md:block md:w-auto"
                    }
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col items-center p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 ">
                        <li>
                            <Link
                                href={route("portfolio")}
                                className="block py-2 px-3 text-white rounded md:p-0 hvr-grow hover:text-[#F5CC00]"
                                aria-current="page"
                            >
                                Projets
                            </Link>
                        </li>
                        <hr className="w-full lg:hidden" />

                        <li>
                            <Link
                                href={route("contact")}
                                className="block py-2 px-3 text-white rounded md:p-0 hvr-grow hover:text-[#F5CC00] "
                                aria-current="page"
                            >
                                Contact
                            </Link>
                        </li>

                        {/* if auth */}

                        {auth.user && (
                            <>
                                <hr className="w-full lg:hidden" />
                                <li>
                                    <Link
                                        href={route("dashboard")}
                                        className="block py-2 px-3 text-white rounded md:p-0 hvr-grow hover:text-[#F5CC00] "
                                        aria-current="page"
                                    >
                                        Dashboard
                                    </Link>
                                </li>
                                <hr className="w-full lg:hidden" />
                            
                                <li>
                                    <Link
                                        as="button"
                                        method="post"
                                        href={route("logout")}
                                        className="block py-2 px-3 text-white rounded md:p-0 hvr-grow hover:text-[#F5CC00] "
                                        aria-current="page"
                                    >
                                        Logout
                                    </Link>
                                </li>
                                <hr className="w-full lg:hidden" />
                            </>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default BasicNavbar;
