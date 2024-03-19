const TechSection = ({ projet }) => {
    return (
        <section class="">
            <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div class="max-w-screen-lg mb-8 lg:mb-16 text-center">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-white">
                        Technologies
                    </h2>
                    <p class=" sm:text-xl text-gray-400">
                        
                    </p>
                </div>
                <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ">
                    <div className="border p-5 rounded-lg hvr-grow">
                        <div class="flex justify-center items-center mb-4 w-full rounded-full bg-primary-900">
                            <svg
                                class="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </div>
                        <h3 class="mb-2 text-xl font-bold text-white text-center">
                            Marketing
                        </h3>
                        <p class=" text-gray-400 text-center">
                            Plan it, create it, launch it. Collaborate
                            seamlessly with all the organization and hit your
                            marketing goals every month with our marketing plan.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechSection;
