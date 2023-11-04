<template>
    <Head>
        <Title>E-learning | Score</Title>
    </Head>
    <div>
        <h1 class="text-3xl font-semibold">Score</h1>

        <hr class="mt-4" />

        <div class="container mt-4">
            <div class=" mb-4" v-for="data in newDatas">
                <button class="w-full text-start border border-sky-400 pb-4 pt-4 rounded-lg bg-sky-100 hover:bg-sky-200 " @click="toggleStatus(data)">
                    <h1 class=" p-4 text-xl">Semester {{ data.semester }}</h1>
                    <hr class="border-black" />  
                </button>
                <div v-if="data.status.value"  class="w-full bg-slate-200 mt-1">      
                    <div class="relative overflow-x-auto">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" class="px-6 py-3">
                                        Code
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Lecturer
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Subject
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Credit
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Score
                                    </th>
                                    <th scope="col" class="px-6 py-3">
                                        Index
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="score in data.scores" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ score.code }}
                                    </th>
                                    <td class="px-6 py-4">
                                        {{ score.lecturer }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ score.subject }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ score.credit }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ score.score }}
                                    </td>
                                    <td class="px-6 py-4">
                                        {{ score.index }}
                                    </td>
                                </tr>
                                <!-- <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Microsoft Surface Pro
                                    </th>
                                    <td class="px-6 py-4">
                                        White
                                    </td>
                                    <td class="px-6 py-4">
                                        Laptop PC
                                    </td>
                                    <td class="px-6 py-4">
                                        $1999
                                    </td>
                                </tr>
                                <tr class="bg-white dark:bg-gray-800">
                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        Magic Mouse 2
                                    </th>
                                    <td class="px-6 py-4">
                                        Black
                                    </td>
                                    <td class="px-6 py-4">
                                        Accessories
                                    </td>
                                    <td class="px-6 py-4">
                                        $99
                                    </td>
                                </tr> -->
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
            
        </div>
    </div>
</template>

<script setup>

// const alterra = ref(false);

const datas = [
    {
        "semester": 1,
        "scores": {
            "chemistry": {
                "code": "MKBB12",
                "lecturer": "Ms.Andy",
                "subject": "chemistry",
                "credit": 3,
                "score": 92,
                "index": "A"
            },
            "biology": {
                "code": "MKBB13",
                "lecturer": "Mr.Ben",
                "subject": "biology",
                "credit": 3,
                "score": 85,
                "index": "B"
            },
        },
    },
    {
        "semester": 2,
        "scores": {
            "biology": {
                "code": "MKBB13",
                "lecturer": "Mr.Benten",
                "subject": "biology",
                "credit": 3,
                "score": 85,
                "index": "B"
            }
        },
    },
];


const newDatas = datas.map((data) => {
    return {
        ...data,
        status: toRef(ref(false), 'value'),
    }
})

function toggleStatus(data) {
  data.status.value = !data.status.value; // Access the reactive reference using .value
}

// Update the status property of each object in the datas array
// watch(status, (newValue, oldValue) => {
//   datas.forEach(data => {
//     data.status = newValue;
//   });
// });

console.log(newDatas);
</script>

<style lang="scss" scoped>

</style>