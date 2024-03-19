import Card from "@/Components/Contact/Card";
import Layout from "@/Layouts/GuestLayout";

import whiteGithub from "@/Components/icones/white/Github.png";
import whiteLinkedln from "@/Components/icones/white/Linkedln.png";
import whiteMail from "@/Components/icones/white/Mail.png";

import darkGithub from "@/Components/icones/dark/GitHub.png";
import darkLinkedln from "@/Components/icones/dark/Linkedln.png";
import darkMail from "@/Components/icones/dark/Mail.png";

import { useState } from "react";

const Contact = () => {
    const [IsHoverGit, setIsHoverGit] = useState(false);
    const [IsHoverLinkedln, setIsHoverLinkedln] = useState(false);
    const [IsHoverMail, setIsHoverMail] = useState(false);

    return (
        <Layout>
            <section class="flex items-center justify-center">
                <div class="py-8 px-4 sm:py-16 lg:px-6 ">
                    <div class="max-w-screen-lg mb-8 lg:mb-16">
                        <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white ">
                            Contact
                        </h2>
                        <p class="text-gray-400">
                            Here at Flowbite we focus on markets where
                            technology, innovation, and capital can unlock
                            long-term value and drive economic growth.
                        </p>
                    </div>
                    <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                        {/* Github */}
                        <a
                            href="https://github.com/Saihtam77"
                            class="hvr-sweep-to-right hvr-grow text-white space-y-5 min-h-64 max-w-sm p-6 rounded-lg shadow-xl bg-gunMetal "
                            onMouseEnter={() => setIsHoverGit(true)}
                            onMouseLeave={() => setIsHoverGit(false)}
                        >
                            <img
                                src={IsHoverGit ? darkGithub : whiteGithub}
                                className="w-14"
                                alt=""
                            />

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight ">
                                Github
                            </h5>

                            <p class="mb-3 font-normal ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur, ea!
                            </p>
                        </a>
                        {/* Linkedln */}
                        <a
                            href="https://www.linkedin.com/in/geroffroy-m-524092232/"
                            class="hvr-sweep-to-right hvr-grow text-white space-y-5  min-h-64 max-w-sm p-6 rounded-lg  shadow-xl bg-gunMetal"
                            onMouseEnter={() => setIsHoverLinkedln(true)}
                            onMouseLeave={() => setIsHoverLinkedln(false)}
                        >
                            <img
                                src={
                                    IsHoverLinkedln
                                        ? darkLinkedln
                                        : whiteLinkedln
                                }
                                className="w-14"
                                alt=""
                            />

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight ">
                                Linkedln
                            </h5>

                            <p class="mb-3 font-normal ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur, ea!
                            </p>
                        </a>
                        {/* Mai */}
                        <div
                            class="hvr-sweep-to-right hvr-grow text-white space-y-5 min-h-64 max-w-sm p-6 rounded-lg  shadow-xl bg-gunMetal"
                            onMouseEnter={() => setIsHoverMail(true)}
                            onMouseLeave={() => setIsHoverMail(false)}
                        >
                            <img
                                src={IsHoverMail ? darkMail : whiteMail}
                                className="w-14"
                                alt=""
                            />

                            <h5 class="mb-2 text-2xl font-semibold tracking-tight ">
                                Geroffroym777@gmail.com{" "}
                            </h5>

                            <p class="mb-3 font-normal ">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Pariatur, ea!
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
