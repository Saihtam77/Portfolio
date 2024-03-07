const ParcourBlog = ({ parcour }) => {
    return (
        <article className="flex flex-col container mx-auto gap-y-5">
            <h1>
                Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Atque iste quos reprehenderit enim inventore
                maxime pariatur, repudiandae repellendus nisi adipisci
                consectetur reiciendis doloremque explicabo officiis, temporibus
                sint perferendis numquam vero accusamus dolorum. Ipsum doloribus
                porro, unde dignissimos quasi ducimus nisi aspernatur asperiores
                quos iusto? Inventore natus maiores, magnam quod exercitationem,
                autem fuga, hic itaque a sed labore accusamus veritatis et.
                Nobis at culpa animi sed, accusantium voluptatum quia, vero
                excepturi, eveniet maiores repellat dicta quisquam dolor quod
                nihil molestiae rerum enim est quos molestias aut doloribus
                dolore! At non laboriosam blanditiis error porro labore
                assumenda quia, rem temporibus saepe minima!
            </h1>

            {/* carousselle */}
            <div id="gallery" class="relative w-full" data-carousel="slide">
                {/* <!-- Carousel wrapper --> */}
                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                    {/* <!-- Item 1 --> */}
                    <div
                        class="hidden duration-700 ease-in-out"
                        data-carousel-item
                    >
                        <img
                            src="https://placehold.co/600x400"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                    {/* <!-- Item 2 --> */}
                    <div
                        class="hidden duration-700 ease-in-out"
                        data-carousel-item="active"
                    >
                        <img
                            src="https://placehold.co/600x400"
                            class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                            alt=""
                        />
                    </div>
                </div>
                {/* <!-- Slider controls --> */}
                <button
                    type="button"
                    class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-prev
                >
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 1 1 5l4 4"
                            />
                        </svg>
                        <span class="sr-only">Previous</span>
                    </span>
                </button>
                <button
                    type="button"
                    class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    data-carousel-next
                >
                    <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                        <svg
                            class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 6 10"
                        >
                            <path
                                stroke="currentColor"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="m1 9 4-4-4-4"
                            />
                        </svg>
                        <span class="sr-only">Next</span>
                    </span>
                </button>
            </div>
        </article>
    );
};

export default ParcourBlog;
