import { defineStore } from 'pinia'

import type { CompanyData, PersonalData, MiscData, socialMedia } from '~/types'
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

    }
  }
})
