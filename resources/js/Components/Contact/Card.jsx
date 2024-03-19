import { Link } from "@inertiajs/react";

const Card = ({ icone, titre, texte, link, setIsHover}) => {
    return (
        <Link
            href={link}
            class="hvr-sweep-to-right hvr-grow text-white  min-h-64 max-w-sm p-6 rounded-lg  shadow-xl bg-gunMetal"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <img src={icone} className="w-14" alt="" />

            <h5 class="mb-2 text-2xl font-semibold tracking-tight ">{titre}</h5>

            <p class="mb-3 font-normal ">{texte}</p>
        </Link>
    );
};

export default Card;
