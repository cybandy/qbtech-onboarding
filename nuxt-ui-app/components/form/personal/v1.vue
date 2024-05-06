<script setup lang="ts">

const formStore = useMyFormStore()
const { personal: state, step } = storeToRefs(formStore)
// const state = reactive({
//     email: undefined,
//     name: undefined,
//     address: undefined,
//     phone: undefined,
// })



async function onSubmit() {
    // Do something with data

}
</script>

<template>
    <form class="grid gap-5">

        <UFormGroup label="Name" name="name">
            <UInput v-model="state.name" type="name" />
        </UFormGroup>
        <UFormGroup label="Email" name="email">
            <UInput v-model="state.email" />
        </UFormGroup>
        <UFormGroup label="Address" name="address">
            <UInput v-model="state.address" />
        </UFormGroup>
        <UFormGroup label="Phone" name="phone">
            <UInput v-model="state.phone" />
        </UFormGroup>

        <div class="flex items-center justify-between gap-5">
            <UButton label="Prev" @click="() => formStore.changeStep(1)" />
            <UButton label="Next" @click="() => formStore.changeStep(3)" />
        </div>
    </form>
</template>
