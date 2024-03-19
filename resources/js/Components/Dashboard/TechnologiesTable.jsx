import { Link, router } from "@inertiajs/react";
import Button from "../Button";

const TechnologiesTable = ({ technologies }) => {
    
    const handleDelete = (id) => {
        if (confirm("Are you sure?")) {
            router.delete(route("technologies.destroy", id));
        }
    };

    return (
        <section className="mt-10 container mx-auto text-white">
            <Button route={route("technologies.create")}>
                Ajouter une Technologie
            </Button>
            <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table class="w-full text-sm text-left rtl:text-right text-gray-400  ">
                    <thead class="text-xs bg-gray-700 ">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Nom
                            </th>

                            <th scope="col" class="px-6 py-3">
                                Niveau
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
                        {technologies.map((technologie) => (
                            <tr class="border-b hover:bg-gray-600 bg-gray-800 border-gray-700">
                                <td class="px-6 py-4">{technologie.name}</td>

                                <td class="px-6 py-4">{technologie.niveau}</td>

                                <td class="px-6 py-4">
                                    {technologie.updated_at}
                                </td>
                                <td class="px-6 py-4 text-right flex gap-x-3">
                                    <Link
                                        href={route(
                                            "technologies.edit",
                                            technologie.id
                                        )}
                                        class="font-medium text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>

                                    <Link
                                        as="button"
                                        onClick={(e) => (
                                            e.preventDefault(),
                                            handleDelete(technologie.id)
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

export default TechnologiesTable;
