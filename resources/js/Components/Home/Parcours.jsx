import ParcourTimeline from "../Parcours/ParcourTimeline";


const Parcours = ({ parcours }) => {
    return (
        <section className="container mx-auto">
            {/* map each Formation */}
            {parcours.map((parcour) => (
                <ParcourTimeline data={parcour} />
            ))}
        </section>
    );
};

export default Parcours;
