import { Link } from "@inertiajs/react";
import ProjetCard from "../Projets/ProjetCard";
import { useState } from "react";
import { useRef } from "react";

const Projets = ({ projets }) => {
    
    const scrollRef = useRef();
    const scrollRight = (e) => {
        e.preventDefault();
        scrollRef.current.scroll({
            left: scrollRef.current.scrollLeft + 500,
            behavior: "smooth",
        })
    };

    const scrollLeft = (e) => {
        e.preventDefault();
        scrollRef.current.scroll({
            left: scrollRef.current.scrollLeft - 500,
            behavior: "smooth",
        })
    }

   

    return (
        <section id="" className="relative container mx-auto">
            <Link as="button" className="hidden lg:block absolute h-full px-3 left-0  opacity-30 hover:bg-[#F5CC00] hover:opacity-60 z-20" onClick={scrollLeft}>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </Link>

            <Link as="button" className="hidden lg:block absolute px-3 right-0 h-full  opacity-30 hover:bg-[#F5CC00] hover:opacity-60 z-20" onClick={scrollRight}>
                <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                    />
                </svg>
            </Link>

            <article
                ref={scrollRef}
                className="w-full h-full flex items-center gap-x-9 overflow-x-scroll scroll scroll-smooth p-9 scrollbar-hidden snap-x"
            >
                {projets.map((projet) => (
                    <ProjetCard projet={projet} />
                ))}
            </article>
        </section>
    );
};
export default Projets;
