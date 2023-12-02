import { defineStore } from "pinia"
import { useApiFetch } from "~/composable/useApiFetch";

type User = {
    id: number;
    name: string;
    email: string;
}

type Credentials = {
    email: string;
    password: string;
}

type RegistrationInfo = {
    name: string;
    nim: string;
    email: string;
    password: string;
}

export const useAuthStore = defineStore('auth', () => {
    // we won't expose this element directly
    const user = ref<User |  null>()
    const isLoggedIn = computed(() => !!user.value)

    async function logout() {
        await useApiFetch("/logout", {
            method: "POST"
        })

        //clear cookie

        user.value = null;
        navigateTo('/auth/login')
    }

    async function fetchUser() {
        const {data: userData} = await useApiFetch("/api/user")
        user.value = userData.value as  User
    }

    async function register(info: RegistrationInfo) {

        await useApiFetch("/sanctum/csrf-cookie")
    
    
        const register = await useApiFetch("/register", {
            method: "POST",
            body: info,
        })
    
        await fetchUser();

        return register;
    }

    async function login(credentials: Credentials) {

        await useApiFetch("/sanctum/csrf-cookie")
    
    
        const login = await useApiFetch("/login", {
            method: "POST",
            body: credentials,
        })
    
        await fetchUser();

        return login;
    }


    return {
      user, login, isLoggedIn, fetchUser, logout, register
    }
  })