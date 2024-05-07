<script setup lang='ts'>
const formStore = useMyFormStore()
const { social: state, step } = storeToRefs(formStore)
</script>

<template>
    <form class="grid gap-5">
        <UFormGroup label="Facebook" name="facebook">
            <UInput v-model="state.facebook" />
        </UFormGroup>
        <UFormGroup label="Instagram" name="instagram">
            <UInput v-model="state.instagram" />
        </UFormGroup>
        <UFormGroup label="LinkedIn" name="linkedin">
            <UInput v-model="state.linkedin" />
        </UFormGroup>
        <UFormGroup label="Others" name="othersHandles">
            <UInput v-model="state.others" />
        </UFormGroup>

        <div class="flex items-center justify-between gap-5">
            <UButton label="Prev" @click="() => formStore.changeStep(3)" />
            <UButton label="Next" @click="() => formStore.changeStep(5)" />
        </div>
    </form>
</template>