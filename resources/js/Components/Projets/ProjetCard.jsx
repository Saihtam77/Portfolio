import { Link } from "@inertiajs/react";

const ProjetCard = ({ projet }) => {
    return (
        <Link
            href={`portfolio/projets/${projet.id}_${projet.titre}`}
            key={projet.id}
            class="snap-center hvr-grow max-w-sm lg:max-w-md flex-none bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700"
        >
            <a href="#">
                <img
                    class="rounded-t-lg"
                    src={projet.thumbnail}
                    alt=""
                />
            </a>
            <div class="p-5 ">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {projet.titre}
                </h5>

                <p class="mb-3 text-sm lg:text-base font-normal h-16 text-gray-700  dark:text-gray-400">
                    {projet.intro.length > 200
                        ? projet.intro.substring(0, 100) + "..."
                        : projet.intro}
                </p>
            </div>
        </Link>
    );
};

export default ProjetCard;
