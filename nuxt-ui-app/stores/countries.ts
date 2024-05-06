import { defineStore } from 'pinia'
import { } from "#ui/types"

export const useCountriesStore = defineStore({
  id: 'CountriesStore',
  state: () => ({
    countries: [] as any
  }),
  actions: {
    async getCountries() {
      const data = await $fetch('/api/countries')
      this.countries = data
    }
  }
})
