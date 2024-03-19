import { Link, router } from "@inertiajs/react";
import Button from "../Button";

const ProjetsTable = ({ projets }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure?")) {
            router.delete(route("projets.destroy", id));
        }
    };
    return (
        <section className="mt-10 container mx-auto text-white">
            <Button route={route("projets.create")}>Ajouter un projet</Button>
            <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-400  ">
                    <thead class="text-xs bg-gray-700 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Titre
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Modifié le :
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Edit
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {projets.map((projet) => (
                            <tr class="border-b hover:bg-gray-600 bg-gray-800 border-gray-700">
                                <td class="px-6 py-4">{projet.titre}</td>

                                <td class="px-6 py-4">{projet.updated_at}</td>
                                <td class="px-6 py-4 text-right flex gap-x-3">
                                    <Link
                                        href={route("projets.edit", projet.id)}
                                        class="font-medium text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>

                                    <Link
                                        href={`/portfolio/projets/${projet.id}_${projet.titre}`}
                                        class="font-medium text-blue-500 hover:underline"
                                    >
                                        Show
                                    </Link>

                                    <Link
                                        as="button"
                                        onClick={(e) => (
                                            e.preventDefault(),
                                            handleDelete(projet.id)
                                        )}
                                        class="font-medium text-blue-500 hover:underline"
                                    >
                                        Delete
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default ProjetsTable;
