import { Link, router, useForm } from "@inertiajs/react";
import React from "react";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import Label from "@/Components/Label";

import InputError from "@/Components/InputError";

const ProjetEditForm = ({ projet }) => {
    const { data, setData, post, reset, processing, errors } = useForm({
        _method: "put",

        titre: projet.titre,
        
        desc: projet.desc,
        texte: projet.texte,
        // image: projet.image,
        competences: projet.competences,
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        post(route("projets.update", projet.id), {
            forceFormData: true,
        });
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Modifier les infos du projet
                </h2>
                <form onSubmit={handleUpdate}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {/* titre */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="titre"
                                name="Titre"
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
                    

                        

                        {/* desc */}

                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="desc"
                                name="Description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <TextArea
                                value={data.desc}
                                name="desc"
                                id="desc"
                                placeholder="Description du projet"
                                onChange={(e) => setData("desc", e.target.value)}
                            />
                            <InputError message={errors.desc} />
                        </div>

                        {/* texte */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="texte"
                                name="Texte"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <TextArea
                                value={data.texte}
                                name="texte"
                                id="texte"
                                placeholder="Texte du projet"
                                onChange={(e) => setData("texte", e.target.value)}
                            />
                            <InputError message={errors.texte} />
                        </div>

                        {/* image */}

                        {/* <div className="sm:col-span-2">
                            <Label
                                htmlfor="image"
                                name="Image"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <Input
                                value={data.image}
                                type="text"
                                name="image"
                                id="image"
                                placeholder="Image du projet"
                                onChange={(e) => setData("image", e.target.value)}
                            />
                            <InputError message={errors.image} />
                        </div> */}
                    </div>

                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ProjetEditForm;
