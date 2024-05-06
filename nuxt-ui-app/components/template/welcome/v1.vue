<script setup lang='ts'>

const formStore = useMyFormStore()

function changeStep() {
    formStore.changeStep(2)
}
onKeyStroke('Enter', () => {
    changeStep()
})
</script>

<template>

    <div class="w-full h-full flex flex-col gap-5 text-center lg:justify-center">
        <h1 class="text-4xl lg:text-5xl font-NunitoSans font-semibold capitalize">Welcome on board!</h1>
        <div class="space-y-1">
            <p class="text-lg">We're excited to start working with you</p>
            <p>But first, let's get the boring stuff out of the way, shall we?</p>
            <p class="text-primary">(Feel free to skip any question you want.)</p>
        </div>

        <div class="space-y-2">
            <UButton @click="changeStep" label="Let's do it" class="w-fit" />

            <div class="flex items-center justify-center w-full gap-2">
                <UIcon name="ph:clock-fill" dynamic class="w-4 h-4" />
                <span>Takes 8+ minutes</span>
            </div>
        </div>
    </div>

</template>