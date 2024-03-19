import { Link } from "@inertiajs/react";

const ProjetsElement = ({ projet }) => {
    return (
        <>
            <article
                className="flex flex-col h-auto items-center justify-between text-white  lg:flex-row p-7 lg:gap-x-5"
                key={projet.id}
            >
                <img src={projet.thumbnail} className="w-[20rem] " alt="" />
                <div className="w-full h-full flex flex-col gap-y-3">
                    <div className="flex gap-x-5 justify-center">
                        <h3>
                            <b>{projet.titre}</b>
                        </h3>
                    </div>
                    <hr className="border-white border w-full" />
                    <p>{projet.intro}</p>

                    <div className="self-center lg:self-start">
                        <Link
                            href={`portfolio/projets/${id}_${titre}`}
                            class="hvr-icon-forward hvr-grow hvr-sweep-to-right inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg focus:z-10"
                        >
                            En savoir plus{" "}
                            <svg
                                class="w-3 h-3 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </article>
        </>
    );
};

export default ProjetsElement;
