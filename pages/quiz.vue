<template>
    <Head>
        <Title>E-learning | Quiz</Title>
    </Head>
    <div>
        <div class="container flex justify-center items-center h-screen">
            <button v-show="!start" @click="startQuiz()" class="bg-green-400 text-white p-4 rounded-lg hover:bg-green-500 active:bg-green-600">
                Start Quiz
            </button>


            <div  class="w-3/4 h-2/3 bg-green-300">
                <div class="h-14 p-4 w-full bg-red-100 text-center">
                    <span>Timer : </span>{{ timer }}
                </div>

                <div class="w-full bg-slate-400 h-fit p-5">
                    <span class="text-xl">Question : </span>

                    <div class="mt-12">
                        <p class="text-xl text-center">HOw do you do?</p>
                    </div>
                    <div class="grid grid-cols-2 text-center mt-12">
                        <button @click="chooseAnswer()" class="p-3 border border-black hover:bg-slate-500">
                            
                        </button>
                        <button class="p-3">
                            aaaa
                        </button>
                        <button class="p-3">
                            iasbdihasbd
                        </button>
                        <button class="p-3">
                            wwawww
                        </button>
                    </div>
                </div>

                <div class="h-fill bg-sky-200">
                    adas
                </div>

            </div>
        </div>

    </div>
</template>

<script setup>

definePageMeta({
    middleware: ['guest']
})

const start = ref(false)
const timer = ref(10)

function startQuiz() {
    start.value = true;
    
    const timerInterval = setInterval(() => {
        timer.value = timer.value-1;
        if(timer.value == 0) {
            start.value = false;
            clearInterval(timerInterval)
        }
    }, 1000);
}

let data = [
    {
        "question": "asdasdas?",
        "answer": "option1",
        "option1": "option1",
        "option2": "option2",
        "option3": "option3",
        "option5": "option4"
    },
    [

    ],
]
let answerChoosen = [];
function chooseAnswer(value = "abc") {
    answerChoosen = [...answerChoosen, value];
}

</script>

<style lang="scss" scoped>

</style>