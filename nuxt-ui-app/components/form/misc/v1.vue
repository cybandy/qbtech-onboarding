<script setup lang='ts'>
const formStore = useMyFormStore()
const { misc: state, step } = storeToRefs(formStore)



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

    state.value.competitors = services
}, { deep: true })


const { countries } = storeToRefs(useCountriesStore())
const selectedCountries = ref([])

const files = ref([] as File[])
</script>

<template>
    <form action="" class="grid gap-5">
        <UFormGroup label="Do you have any competitors / companies you look up to? List them" name="services"
            :ui="{ container: 'flex flex-col gap-2 w-full' }">
            <UInput v-for="(serve, ind) of services" v-model="services[ind]" />
        </UFormGroup>

        <UFormGroup label="Target Audience" name="target">
            <UInput v-model="state.target" />
        </UFormGroup>

        <UFormGroup label="Select your companies geographical target" name="geoTarget">
            <USelectMenu v-model="selectedCountries" :options="countries" searchable multiple />
        </UFormGroup>

        <ElementImageDropZone v-model:files="files" multiple />

        <div class="flex items-center justify-between gap-5">
            <UButton label="Prev" @click="() => formStore.changeStep(4)" />
            <UButton label="Submit" @click="() => formStore.submit()" />
        </div>
    </form>
</template>