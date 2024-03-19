import { Link } from "@inertiajs/react";

const TechnologiesGrid = ({ technologies, setNiveau }) => {
    return (
        <article className="grid grid-cols-3 gap-7 lg:w-1/2 text-white">
            {technologies.map((technologie) => (
                <Link
                    as="button"
                    key={technologie.id}
                    onClick={(e) => (
                        e.preventDefault(), setNiveau(technologie.niveau)
                    )}
                    className="hvr-grow hover:text-[#F5CC00]"
                >
                    <img
                        src="https://placehold.co/600x400/png"
                        alt=""
                        className="h-auto max-w-full rounded-lg"
                    />
                    {technologie.name}
                </Link>
            ))}
        </article>
    );
};

export default TechnologiesGrid;
