import { Link, router, useForm } from "@inertiajs/react";
import React from "react";
import Input from "@/Components/Input";
import TextArea from "@/Components/TextArea";
import Label from "@/Components/Label";

import InputError from "@/Components/InputError";

const ParcourEditForm = ({ parcour }) => {
    const { data, setData, post, reset, processing, errors } = useForm({
        _method: "put",

        titre: parcour.titre,
        niveau_etude: parcour.niveau_etude,
        entreprise: parcour.entreprise,
        competences: parcour.competences,
        date_debut: parcour.date_debut,
        date_fin: parcour.date_fin,
        desc: parcour.desc,
        texte: parcour.texte,
    });

    const handleUpdate = (e) => {
        e.preventDefault();
        post(route("parcours.update", parcour.id), {
            forceFormData: true,
        });
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
                    Ajouter un parcour
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

                        {/* niveau_etude */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="niveau_etude"
                                name="Niveau d'étude"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <Input
                                value={data.niveau_etude}
                                type="text"
                                name="niveau_etude"
                                id="niveau_etude"
                                placeholder="niveau d'étude"
                                onChange={(e) =>
                                    setData("niveau_etude", e.target.value)
                                }
                            />
                            <InputError message={errors.niveau_etude} />
                        </div>

                        {/* entreprise */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="entreprise"
                                name="Entreprise"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <Input
                                value={data.entreprise}
                                type="text"
                                name="entreprise"
                                id="entreprise"
                                placeholder="entreprise"
                                onChange={(e) =>
                                    setData("entreprise", e.target.value)
                                }
                            />
                            <InputError message={errors.entreprise} />
                        </div>

                        {/* compétence */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="competences"
                                name="Compétences"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <Input
                                value={data.competences}
                                type="text"
                                name="competences"
                                id="competences"
                                placeholder="Compétences"
                                onChange={(e) =>
                                    setData("competences", e.target.value)
                                }
                            />
                            <InputError message={errors.competences} />
                        </div>

                        {/* date debut */}

                        <div className="flex justify-between w-full">
                            <div className="sm:col-span-2">
                                <Label
                                    htmlfor="date_debut"
                                    name="Date de début"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                />
                                <Input
                                    value={data.date_debut}
                                    type="date"
                                    name="date_debut"
                                    id="date_debut"
                                    placeholder="date de début"
                                    onChange={(e) =>
                                        setData("date_debut", e.target.value)
                                    }
                                />
                                <InputError message={errors.date_debut} />
                            </div>
                            {/* date fin */}
                            <div className="sm:col-span-2">
                                <Label
                                    htmlfor="date_fin"
                                    name="Date de fin"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                />
                                <Input
                                    value={data.date_fin}
                                    type="date"
                                    name="date_fin"
                                    id="date_fin"
                                    placeholder={"date de fin"}
                                    onChange={(e) =>
                                        setData("date_fin", e.target.value)
                                    }
                                />
                                <InputError message={errors.date_fin} />
                            </div>
                        </div>

                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="desc"
                                name="Description"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <TextArea
                                value={data.desc}
                                name="desc"
                                type="text"
                                id="desc"
                                placeholder={"description ..."}
                                onChange={(e) =>
                                    setData("desc", e.target.value)
                                }
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
                                type="text"
                                id="texte"
                                placeholder="texte ..."
                                onChange={(e) =>
                                    setData("texte", e.target.value)
                                }
                            />
                            <InputError message={errors.texte} />
                        </div>

                        {/* thumbnail */}
                        {/* <div className="sm:col-span-2">
                            <Label
                                htmlfor="thumbnail"
                                name="Thumbnail"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <Input
                                type="file"
                                name="thumbnail"
                                id="thumbnail"
                                onChange={(e) =>
                                    setData("thumbnail", e.target.files[0])
                                }
                            />
                            <InputError message={errors.thumbnail} />
                        </div> */}
                        {/* img */}
                        {/* <div className="sm:col-span-2">
                            <Label
                                htmlfor="image"
                                name="Image"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            />
                            <Input
                                type="file"
                                name="image"
                                id="image"
                                onChange={(e) =>
                                    setData("image", e.target.files[0])
                                }
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

export default ParcourEditForm;
