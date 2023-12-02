<template>
    <Head>
        <Title>E-learning | Dashboard</Title>
    </Head>
    <div>
        <h1 class="text-3xl font-semibold">Dashboard</h1>

        <hr class="mt-4" />
        <div class=" h-52 flex items-end">

            <div class="bg-sky-300 mt-4 w-full h-44 flex gap-4 rounded-xl p-4 items-center justify-center">
                <div class="flex w-1/2">
                    <h1 class="text-2xl font-semibold">Welcome to Beta E-learning Dashboard !</h1>
                </div>
                <div>
                    <img class="h-48 mb-4" src="../assets/img/student.png" alt="">
                </div>
            </div>
        </div>

        <div class="container mt-4 ">
            <div class="flex h-fit gap-4 flex-wrap">
                <div class="w-1/6 bg-green-400 h-40 flex-grow p-4 rounded-lg shadow-xl">
                    <div class="flex justify-between h-16 items-center">
                        <span class="text-3xl font-semibold">12</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M6 22q-.825 0-1.412-.587T4 20V4q0-.825.588-1.412T6 2h12q.825 0 1.413.588T20 4v16q0 .825-.587 1.413T18 22H6Zm0-2h12V4h-2v7l-2.5-1.5L11 11V4H6v16Zm0 0V4v16Zm5-9l2.5-1.5L16 11l-2.5-1.5L11 11Z"/></svg>
                    </div>
                    <p class="mb-4">IPK</p>
                    <hr class="border-black" />
                    <span class="italic">Meningkat dari semester lalu</span>
                    <div>

                    </div>
                </div>
                <div class="w-1/6 bg-yellow-300 h-40 flex-grow p-4 rounded-lg shadow-xl">
                    <div class="flex justify-between h-16 items-center">
                        <span class="text-3xl font-semibold">5</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 15 15"><path fill="currentColor" d="M1.5.5V0a.5.5 0 0 0-.5.5h.5Zm0 13H1a.5.5 0 0 0 .5.5v-.5ZM4 0v15h1V0H4ZM1.5 1h10V0h-10v1ZM13 2.5v9h1v-9h-1ZM11.5 13h-10v1h10v-1Zm-9.5.5V.5H1v13h1Zm11-2a1.5 1.5 0 0 1-1.5 1.5v1a2.5 2.5 0 0 0 2.5-2.5h-1ZM11.5 1A1.5 1.5 0 0 1 13 2.5h1A2.5 2.5 0 0 0 11.5 0v1ZM7 5h4V4H7v1Z"/></svg>
                    </div>
                    <p class="mb-4">Semester</p>
                    <hr class="border-black" />
                    <span class="italic">Batas masa studi : 14 </span>
                    <div>

                    </div>
                </div>
                <div class="w-1/6 bg-red-500 h-40 flex-grow p-4 rounded-lg shadow-xl">
                    <div class="flex justify-between h-16 items-center">
                        <span class="text-3xl font-semibold">Rp. 500000</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a7 7 0 1 0 14 0a7 7 0 1 0-14 0M4 4l3 3m13-3l-3 3M4 20l3-3m13 3l-3-3"/></svg>
                    </div>
                    <p class="mb-4">Tagihan</p>
                    <hr class="border-black" />
                    <span class="italic">Total tagihan yang belum dibayar</span>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>



</script>

<style scoped>

</style>