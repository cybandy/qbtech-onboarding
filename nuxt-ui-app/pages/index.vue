<script setup lang='ts'>
useHead({
    title: 'Homepage'
})

const formStore = useMyFormStore()
const { id } = storeToRefs(formStore)

async function submit() {
    const status = await formStore.submit()
    const toast = useToast()
    if (status) {
        toast.add({
            title: 'Thank you',
            description: 'We will reach out to you soon after processing the information',
            timeout: 6000,
            icon: 'i-heroicons-bell-20-solid'
        })
        formStore.$reset()

    }
}


</script>

<template>
    <div class="h-full w-full">
        <TransitionGroup name="slide-fade">
            <TemplateWelcomeV1 v-show="id == 1" :key="Date.now() + 1" />
            <FormPersonalV1 v-show="id == 2" :key="Date.now() + 2" />
            <FormCompanyV1 v-show="id == 3" :key="Date.now() + 3" />
            <FormSocialMediaV1 v-show="id == 4" :key="Date.now() + 4" />
            <FormMiscV1 v-show="id == 5" :key="Date.now() + 5" @send="submit" />
        </TransitionGroup>

    </div>
</template>

<style setup>
.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease-out;
}

/* .slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
} */

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}
</style>