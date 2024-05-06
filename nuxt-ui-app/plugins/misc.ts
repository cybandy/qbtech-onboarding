export default defineNuxtPlugin((nuxtApp) => {

    nuxtApp.hook('app:beforeMount', () => {
        useAsyncData(async () => {
            await useCountriesStore().getCountries()
        })
    })
})
