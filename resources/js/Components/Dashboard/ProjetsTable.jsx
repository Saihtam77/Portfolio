import { Link } from "@inertiajs/react";

const ProjetsTable = ({projets}) => {
    return (
        <section className="mt-10">
            <span className="p-5 border rounded-lg">
                <Link
                    href={route("projets.create")}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Ajouter un projet
                </Link>
            </span>
            <div class="mt-10 relative overflow-x-auto shadow-md sm:rounded-lg">
                
                <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                
                                <td class="px-6 py-4">{projet.titre}</td>
                                
                                <td class="px-6 py-4">{projet.updated_at}</td>
                                <td class="px-6 py-4 text-right flex gap-x-3">
                                    <Link
                                        href={route("projets.edit", projet.id)}
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>

                                    <Link
                                        as="button"
                                        onClick={() => {
                                            if (confirm("Are you sure?")) {
                                                axios
                                                    .delete(
                                                        route("projets.destroy", projet.id)
                                                    )
                                                    .then(() => {
                                                        window.location.reload();
                                                    });
                                            }
                                        }}
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
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
}

export default ProjetsTable;