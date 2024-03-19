import Slide from "../Slide";
import Avatar from "./Avatar";
import HeroSection from "./HeroSection";
import { AvatarGroup } from "flowbite-react";

const Presentation = () => {
    return (
        <section className="bg-gunMetal flex flex-col gap-y-10">
            <div className="lg:hidden flex justify-center">
                <Avatar />
            </div>
            <HeroSection />
            <div className="flex justify-center">
                <p class="md:text-lg lg:text-xl text-gray-300 font-light">
                    From checkout to global sales tax compliance, companies around
                    the world use Flowbite to simplify their payment stack.
                </p>
            </div>
            <hr className="border-white w-1/2 mx-auto mt-5" />
        </section>
    );
};

export default Presentation;
