<script setup lang='ts'>
const { width } = useWindowSize()

const { menuHeaderHeight } = storeToRefs(useThemeStore())
const { step, steps, id } = storeToRefs(useMyFormStore())

function changeButtonFunc() {
    useMyFormStore().changeStep(id.value - 1)
}

</script>

<template>
    <div class="grid md:grid-cols-2 gap-x-5 gap-y-8 w-full h-full">
        <div class="relative h-full w-full">
            <NuxtImg src="welcome.jpg" format="webp" class="w-full h-full " />
            <div class="absolute inset-0 w-full h-full bg-primary-600/70"></div>
        </div>
        <!-- <UCard> -->
        <UCard class="h-full" :style="{ paddingTop: menuHeaderHeight + 'px' }"
            :ui="{ base: 'flex flex-col', body: { base: 'flex-grow' } }">
            <template #header>
                <div v-if="id > 1" class="py-4 flex items-center justify-between gap-5">
                    <UButton @click="changeButtonFunc" v-show="id > 1" label="Back" color="gray"
                        icon="i-heroicons-arrow-uturn-left" />
                    <div class="text-end flex flex-col gap-1">
                        <span class="uppercase font-light">step {{ id }}/{{ steps.length + 1 }} </span>
                        <span class="capitalize font-medium">{{ step.title }}.</span>
                    </div>
                </div>
            </template>
            <slot name="right">
                <h1 class="text-5xl font-Poppins">Heading 1</h1>
            </slot>
        </UCard>
        <!-- </UCard> -->
    </div>
</template>