<template>
    <Head>
        <Title>E-learning | Login</Title>
    </Head>
    <div class="flex justify-center items-center h-screen">
        
        <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-6" @submit.prevent="handleLogin">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Sign in</h5>
                <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input v-model="form.email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="lurline.sipes@example.com" required>
                </div>
                <div>
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input v-model="form.password" type="password" name="password" id="password" placeholder="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required>
                </div>
                <!-- <div class="flex items-start">
                    <div class="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required>
                        </div>
                        <label for="remember" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                    </div>
                    <a href="#" class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
                </div> -->
                <button type="submit" class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                    Not registered? <NuxtLink to="/auth/register" class="text-blue-700 hover:underline dark:text-blue-500">Create account</NuxtLink>
                </div>
            </form>
        </div>

    </div>
</template>

<script setup>
import { useApiFetch } from '~/composable/useApiFetch';
import { useAuthStore } from "~/stores/useAuthStore";

definePageMeta({
    layout: "empty",
    middleware: ['guest']
});


const form = ref({
    email: "lurline.sipes@example.com",
    password: "password"
})

const auth = useAuthStore()

async function handleLogin() {
    if(auth.isLoggedIn) {
        return navigateTo('/');
    };
    const {error} = await auth.login(form.value)

    if(!error.value) {
        return navigateTo('/');
    }

    console.log(error);
}

console.log(auth.isLoggedIn);
</script>

<style lang="scss" scoped>

</style>