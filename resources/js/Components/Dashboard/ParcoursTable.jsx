import React from "react";

import { Link, router, useForm } from "@inertiajs/react";

const ParcoursTable = ({ parcours }) => {
    const handleDelete = (id) => {
        if (confirm("Are you sure?")) {
            router.delete(route("parcours.destroy", id));
        }
    };

    return (
        <section className="mt-10">
            <span className="p-5 border rounded-lg">
                <Link
                    href={route("parcours.create")}
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Ajouter un parcour
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
                                Date de debut
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Date de fin
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
                        {parcours.map((parcour) => (
                            <tr
                                key={parcour.id}
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                            >
                                <td class="px-6 py-4">{parcour.titre}</td>

                                <td class="px-6 py-4">{parcour.date_debut}</td>
                                <td class="px-6 py-4">{parcour.date_fin}</td>
                                <td class="px-6 py-4">{parcour.updated_at}</td>
                                <td class="px-6 py-4 text-right flex gap-x-3">
                                    <Link
                                        href={route(
                                            "parcours.edit",
                                            parcour.id
                                        )}
                                        class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                    >
                                        Edit
                                    </Link>

                                    <Link
                                        as="button"
                                        onClick={(e) =>(
                                            e.preventDefault(),
                                            handleDelete(parcour.id)
                                        )
                                        }
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
};

export default ParcoursTable;
