import { Link } from "@inertiajs/react";

const ParcourTimeline = ({ data }) => {
    return (
        <ol class="relative border-s border-gray-200 dark:border-gray-700">
            <li class="mb-10 ms-4">
                <div class="absolute w-3 h-3 bg-jonquil rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time class="mb-1 text-sm font-normal leading-none text-gray-400">
                    {data.date_debut} - {data.date_fin}
                </time>
                <h2 class="text-xl font-semibold text-white">{data.titre}</h2>
                <h3 className="font-semibold text-white">
                    <b>{data.entreprise}</b>
                </h3>
                <p class="mb-4 text-base font-normal text-gray-400">
                    {data.desc}
                </p>
                <Link
                    href={`portfolio/parcours/${data.id}_${data.titre}`}
                    class="hvr-icon-forward hvr-sweep-to-right hvr-grow inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg focus:z-10 "
                >
                    En savoir plus{" "}
                    <svg
                        class="w-3 h-3 ms-2 rtl:rotate-180 hvr-icon"
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
            </li>
        </ol>
    );
};

export default ParcourTimeline;
