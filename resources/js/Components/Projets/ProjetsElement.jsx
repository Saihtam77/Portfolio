import { Link } from "@inertiajs/react";

const ProjetsElement = ({
    id,
    img,
    completion,
    titre,
    desc,
    texte,
    competence,
}) => {
    return (
        <>
            <article
                className="flex flex-col items-center lg:gap-x-5 lg:flex-row"
                key={id}
            >
                <img
                    src="https://placehold.co/600x400"
                    className="w-48"
                    alt=""
                />
                <div className="flex flex-col gap-y-2 items-center lg:items-start">
                    <div className="flex gap-x-5">
                        <h3>
                            <b>{titre}</b>
                        </h3>
                    </div>
                    <hr />
                    <p>{desc}</p>
                </div>
            </article>
            <Link href={`portfolio/projets/${id}_${titre}`} className="mx-auto">
                savoir plus
            </Link>
        </>
    );
};

export default ProjetsElement;
