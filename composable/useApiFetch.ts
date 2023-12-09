import type { UseFetchOptions } from 'nuxt/app'
import { useRuntimeConfig } from 'nuxt/app'
import { useRequestHeaders } from 'nuxt/app'


  export function useApiFetch<T> (path: string | (() => string), options: UseFetchOptions<T> = {}) {
    const config: any = useRuntimeConfig()
      
    let headers: any = {
        accept: "application/json",
        referer: config.public.FRONTEND_URL
        // referer: 'http://localhost:3000'
    }
    
    const token = useCookie('XSRF-TOKEN');

    if (token.value) {
        headers['X-XSRF-TOKEN'] = token.value as string
    }

    if(process.server) {
        headers = {
            ...headers, 
            ...useRequestHeaders(['cookie'])
        }
    }
    return useFetch(config.public.API_URL + path, {
        credentials: 'include',
        watch: false,
        ...options,
        headers: {
            ...headers, 
            ...options?.headers
        }
    })
}