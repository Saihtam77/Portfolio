import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import TextArea from "@/Components/TextArea";
import { useForm } from "@inertiajs/react";

const TechnologieCreateForm = () => {
    const { data, setData, post, reset, processing, errors } = useForm({
        name: "",
        niveau: "",
        desc: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("technologies.store", data), { forceFormData: true });
    };

    return (
        <section className="bg-gunMetal text-white">
            <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
                <h2 className="mb-4 text-xl font-bold">
                    Ajouter une Technologie
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                        {/* Name */}
                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="name"
                                value="Nom de la technologie"
                                className="block mb-2 text-sm font-medium"
                            />
                            <Input
                                value={data.name}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Nom de la technologie ..."
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                            />
                            <InputError message={errors.name} />
                        </div>

                        {/* niveau*/}
                        <div className="sm:col-span-1">
                            <Label
                                htmlfor="niveau"
                                value="Niveau"
                                className="block mb-2 text-sm font-medium"
                            />
                            <Input
                                value={data.niveau}
                                type="number"
                                name="niveau"
                                id="niveau"
                                placeholder="niveau ..."
                                onChange={(e) =>
                                    setData("niveau", e.target.value)
                                }
                            />
                            <InputError message={errors.niveau} />
                        </div>

                        <div className="sm:col-span-2">
                            <Label
                                htmlfor="desc"
                                value="Description"
                                className="block mb-2 text-sm font-medium "
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

export default TechnologieCreateForm;
