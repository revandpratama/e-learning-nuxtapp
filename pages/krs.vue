<template>
    <Head>
        <Title>E-learning | KRS</Title>
    </Head>

    <div>
        <h1 class="text-3xl font-semibold">KRS</h1>

        <hr class="mt-4" />

        <div class="container mt-4">
            <h3 class="text-xl">Taken course</h3>

            <div class="table-container p-8">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Code
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Subject Name
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Credits
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Class
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Schedule
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="krs, index in dataKRS"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4">
                                    {{ index+1 }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ krs.id }}
                                </td>
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ krs.subject.name }}
                                </th>
                                <td class="px-6 py-4">
                                    {{ krs.subject.credits }}
                                </td>
                                <td class="px-6 py-4">
                                    Class
                                </td>
                                <td class="px-6 py-4">
                                    Schedule
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div></template>

<script setup>
import { useRuntimeConfig } from 'nuxt/app';
import { useApiFetch } from '~/composable/useApiFetch';
definePageMeta({
    middleware: 'auth'
})

const config = useRuntimeConfig();

const { data } = await useApiFetch('/api/krs');

const dataKRS = data.value.data

// console.log(data);

</script>

