const PresentationSection = ({ projet }) => {
    return (
        <section class="">
            <div class="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <div class="font-light  sm:text-lg text-gray-400">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold  text-white">
                        {projet.titre}
                    </h2>
                    <p class="mb-4">{projet.presentation}</p>

                    <h3 class="mb-2 text-lg font-semibold text-white">
                        Objectifs :
                    </h3>
                    <ul class="max-w-lg space-y-1 list-disc list-inside text-gray-400 pl-10">
                        {projet.objectifs.map((objectif) => (
                            <li className="hover:text-[#F5CC00] hover:scale-110 ease-in-out duration-300">
                                {objectif}
                            </li>
                        ))}
                        
                    </ul>
                </div>
                <div class="grid grid-cols-2 gap-4 mt-8">
                    <img
                        class="w-full rounded-lg"
                        src="https://placehold.co/600x400"
                        alt="office content 1"
                    />
                    <img
                        class="mt-4 w-full lg:mt-10 rounded-lg"
                        src="https://placehold.co/600x400"
                        alt="office content 2"
                    />
                </div>
            </div>
        </section>
    );
};

export default PresentationSection;
