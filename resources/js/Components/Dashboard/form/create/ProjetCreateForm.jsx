import { Link, router, useForm } from "@inertiajs/react";
import React from "react";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import Label from "@/Components/Label";

import InputError from "@/Components/InputError";

const ProjetCreateForm = ({ technologies }) => {
    const { data, setData, post, reset, processing, errors } = useForm({
        titre: "",
        intro: "",
        presentation: "",
        technologies: [],
        objectifs: [""],

        /* thumbnail: "", */
        /* images: [], */
        /* galleryFrontOffice: [], */
        /* galleryBackOffice: [], */
    });

    /* Objectifs treatement */
    const addObjectifs = () => {
        setData((prevData) => ({
            ...prevData,
            objectifs: [...prevData.objectifs, ""], // Add a new empty objective
        }));
    };

    const handleObjectifsChange = (event, index) => {
        const newObjectifs = [...data.objectifs];
        newObjectifs[index] = event.target.value;
        setData((prevData) => ({ ...prevData, objectifs: newObjectifs }));
    };

    const removeObjectifs = (index) => {
        setData((prevData) => ({
            ...prevData,
            objectifs: prevData.objectifs.filter((_, i) => i !== index),
        }));
    };

    const handleTechnologiesChange = (event) => {
        const selectedTechnologies = Array.from(
            event.target.selectedOptions,
            (option) => option.value
        );
        setData((prevData) => ({
            ...prevData,
            technologies: selectedTechnologies,
        }));
    };

    /* Submite */
    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("projets.store", data), { forceFormData: true });
    };
    return (
        <section className="bg-gunMetal text-white">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold">Ajouter un projet</h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {/* titre */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="titre"
                                value="Titre"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <Input
                                value={data.titre}
                                type="text"
                                name="titre"
                                id="titre"
                                placeholder="Intitulé de la formation"
                                onChange={(e) =>
                                    setData("titre", e.target.value)
                                }
                            />
                            <InputError message={errors.titre} />
                        </div>

                        {/* intro */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="intro"
                                value="Introduction"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <TextArea
                                value={data.intro}
                                name="intro"
                                id="intro"
                                placeholder="Introduction"
                                onChange={(e) =>
                                    setData("intro", e.target.value)
                                }
                            />
                            <InputError message={errors.intro} />
                        </div>

                        {/* presentation */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="presentation"
                                value="Présentation"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <TextArea
                                value={data.presentation}
                                name="presentation"
                                id="presentation"
                                placeholder="Présentation"
                                onChange={(e) =>
                                    setData("presentation", e.target.value)
                                }
                            />
                            <InputError message={errors.presentation} />
                        </div>

                        {/* objectifs */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="objectifs"
                                value="Objectifs"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <div className="flex flex-col justify-between lg:gap-x-2 gap-y-3">
                                {data.objectifs.map((objectif, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-x-3 w-full "
                                    >
                                        <button
                                            type="button"
                                            onClick={() =>
                                                removeObjectifs(index)
                                            }
                                            className="flex items-center justify-center w-1/6 p-2 rounded-lg bg-red-600 text-black hvr-grow"
                                        >
                                            X
                                        </button>
                                        <Input
                                            value={objectif}
                                            type="text"
                                            name="objectif"
                                            id="objectif"
                                            placeholder="Objectif ..."
                                            onChange={(e) =>
                                                handleObjectifsChange(e, index)
                                            }
                                        />
                                    </div>
                                ))}
                                <InputError message={errors.objectifs} />
                                <button
                                    type="button"
                                    onClick={addObjectifs}
                                    className="flex items-center justify-center lg:w-1/3 p-2 rounded-lg bg-jonquil text-black hvr-grow"
                                >
                                    + Plus
                                </button>
                            </div>
                        </div>

                        {/* technologies */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="technologies"
                                value="Technologies"
                                className="block mb-2 text-sm font-medium "
                            />
                            <select
                                value={data.technologies}
                                name="technologies"
                                id="technologies"
                                multiple
                                onChange={handleTechnologiesChange}
                                className="block w-full p-2 text-black bg-white rounded-md"
                            >
                                {technologies.map((technologie) => (
                                    <option
                                        key={technologie.id}
                                        value={technologie.id}
                                    >
                                        {technologie.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 mt-4 text-black hvr-grow bg-jonquil rounded-md"
                        >
                            Ajouter
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};
export default ProjetCreateForm;
