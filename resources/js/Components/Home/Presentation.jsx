import Slide from "../Slide";
import Avatar from "./Avatar";
import HeroSection from "./HeroSection";
import { AvatarGroup } from "flowbite-react";

const Presentation = () => {
    return (
        <section className="">
            <div className="lg:hidden flex justify-center">
                <Avatar />
            </div>
            <HeroSection />
        </section>
    );
};

export default Presentation;
