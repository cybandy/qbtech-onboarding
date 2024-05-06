<script setup lang="ts">

const formStore = useMyFormStore()
const { company: state, step } = storeToRefs(formStore)
// const state = reactive({
//     companyName: undefined,
//     position: undefined,
//     companyDescription: undefined,

// })

const services = reactive([''] as Array<string | undefined>)
const num_services = ref(1)

watch(services, () => {


    const last_service = services[services.length - 1]

    if (typeof last_service == 'undefined' || last_service.length == 0) {
        if (services.length < 2) return

        const last_but_two_service = services[services.length - 2]
        if (last_but_two_service?.length == 0) {
            services.splice(services.length - 1, 1)
        }
    }

    else if (last_service.length > 0) {
        services.push(undefined)

    }
    // else if (last_service.length == 0) {

    // }

    state.value.services = services
}, { deep: true })

async function onSubmit() {
    // Do something with data

}



</script>

<template>
    <form class="space-y-5 h-full overflow-y-auto">

        <UFormGroup label="Company Name" name="companyName">
            <UInput v-model="state.companyName" />
        </UFormGroup>
        <UFormGroup label="Position" name="position">
            <UInput v-model="state.position" />
        </UFormGroup>
        <UFormGroup label="companyDescription" name="companyDescription">
            <UTextarea :rows="3" v-model="state.companyDescription" />
        </UFormGroup>
        <UFormGroup label="Services" name="services" :ui="{ container: 'flex flex-col gap-2 w-full' }">
            <!-- <div v-for="(serve, ind) of services" class="flex items-center gap-1">
                <span class="p-2 rounded-full">{{ ind + 1 }}</span>
                <UInput v-model="services[ind]" />
            </div> -->
            <UInput v-for="(serve, ind) of services" v-model="services[ind]" />
        </UFormGroup>


        <div class="flex items-center justify-between gap-5">
            <UButton label="Prev" @click="() => formStore.changeStep(2)" />
            <UButton label="Next" @click="() => formStore.changeStep(4)" />
        </div>
    </form>
</template>
