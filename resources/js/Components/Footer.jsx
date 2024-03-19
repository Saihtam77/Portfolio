import { Link } from "@inertiajs/react";
import { useState } from "react";

import whiteGithub from "@/Components/icones/white/Github.png";
import whiteLinkedln from "@/Components/icones/white/Linkedln.png";

import yellowGithub from "@/Components/icones/yellow/GitHub.png";
import yellowLinkedln from "@/Components/icones/yellow/Linkedln.png";

const Footer = () => {
    const [isHoveredGithub, setIsHoveredGithub] = useState(false);
    const [isHoveredLinkedln, setIsHoveredLinkedln] = useState(false);

    return (
        <footer className="shadow p-4 bg-gunMetal text-white ">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="flex flex-col gap-y-7 lg:flex-row items-center justify-between">
                    <div className="flex gap-x-5">
                        <a
                            href="https://github.com/Saihtam77"
                            className="hvr-grow"
                            onMouseEnter={() => setIsHoveredGithub(true)}
                            onMouseLeave={() => setIsHoveredGithub(false)}
                        >
                            <img
                                src={
                                    isHoveredGithub ? yellowGithub : whiteGithub
                                }
                                className="w-7"
                                alt=""
                            />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/geroffroy-m-524092232/"
                            className="hvr-grow"
                            onMouseEnter={() => setIsHoveredLinkedln(true)}
                            onMouseLeave={() => setIsHoveredLinkedln(false)}
                        >
                            <img
                                src={
                                    isHoveredLinkedln
                                        ? yellowLinkedln
                                        : whiteLinkedln
                                }
                                className="w-7"
                                alt=""
                            />
                        </a>
                    </div>

                    <div className="flex flex-wrap text-sm font-medium ">
                        <Link
                            href={route("contact")}
                            className="hvr-grow hover:underline hover:text-[#F5CC00] me-4 md:me-6 "
                        >
                            Contact
                        </Link>

                        <Link
                            href={route("portfolio")}
                            className="hvr-grow hover:underline hover:text-[#F5CC00] me-4 md:me-6 "
                        >
                            Projets
                        </Link>

                        <Link
                            href={route("Copyright")}
                            className="hvr-grow hover:underline hover:text-[#F5CC00] me-4 md:me-6 "
                        >
                            Copyright
                        </Link>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2023{" "}
                    <a href="https://flowbite.com/" class="hover:underline">
                        Flowbite™
                    </a>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
