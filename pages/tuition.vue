<template>
    <Head>
        <Title>E-learning | Tuition</Title>
    </Head>
    <div>
        <div>
        <h1 class="text-3xl font-semibold">Tuition</h1>

        <hr class="mt-4" />

        <div class="container mt-4">

            <div class="table-container p-8">
                <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3">
                                    No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Component
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Semester Period
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Amount
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="tuition, index in tuitionData"
                                class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4">
                                    {{ index+1 }}
                                </td>
                                <td class="px-6 py-4">
                                    {{ tuition.description }}
                                </td>
                                <th scope="row"
                                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {{ tuition.semester }}
                                </th>
                                <td class="px-6 py-4">
                                    Rp.{{ tuition.amount }}
                                </td>
                            </tr>

                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                <td class="px-6 py-4 text-center" colspan="3">Total</td>
                                <td class="px-6 py-4">Rp. {{ totalTuitionData }}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    </div>
    </div>
</template>

<script setup>
import { useRuntimeConfig } from 'nuxt/app';
import { useApiFetch } from '~/composable/useApiFetch';

definePageMeta({
    middleware: 'auth'
})

const config = useRuntimeConfig();

const { data } = await useApiFetch('/api/tuition');

const tuitionData = data.value.data
// console.log(data.value.data);

let totalTuitionData = 0;
tuitionData.forEach(element => {
    totalTuitionData += element.amount

});
</script>

<style lang="scss" scoped>

</style>