import { defineStore } from 'pinia'
import type { CompanyData, PersonalData, MiscData, socialMedia } from '~/types'
import type { Database } from '~/types/supabase'


export const useMyFormStore = defineStore({
  id: 'myFormStore',
  state: () => ({
    step: { title: 'welcome', description: '' },
    steps: [
      { title: 'welcome', description: '' },
      { title: 'Personal Info', description: 'Tell us about yourself' },
      { title: 'company Info', description: 'What company are you representing?' },
      { title: 'Social Media', description: 'We will like to know more about what you do' },
      { title: 'Misc', description: 'Tell us anything we need to know' },

    ],
    personal: {} as PersonalData,
    company: {} as CompanyData,
    misc: {} as MiscData,
    social: {} as socialMedia,
    id: 1
  }),
  actions: {
    changeStep(id: number) {
      if (id > 0 && id <= this.steps.length) {
        this.step = this.steps[id - 1]
        this.id = id
      }
    },
    async submit() {
      const client = useSupabaseClient<Database>()

      if (this.misc.competitors) {
        this.misc.competitors = this.misc.competitors.filter(x => x)
      }
      if (this.company.services) {
        this.company.services = this.company.services.filter(x => x)
      }

      const payload: Database['public']['Tables']['onboardingForm']['Insert'] = {
        address: this.personal.address,
        companyDescription: this.company.companyDescription,
        companyName: this.company.companyName,
        competitors: this.misc.competitors as string[],
        email: this.personal.email,
        facebook: this.social.facebook,
        geography: this.misc.geography,
        instagram: this.social.instagram,
        linkedin: this.social.linkedin,
        name: this.personal.name,
        others: this.social.others,
        position: this.company.position,
        services: this.company.services as string[],
        target: this.misc.target
      }


      const { data, error } = await client.from('onboardingForm').insert({ ...payload }).select()

      if (data && !error) {
        return true
      } else {
        return false
      }
    }
  }
})
