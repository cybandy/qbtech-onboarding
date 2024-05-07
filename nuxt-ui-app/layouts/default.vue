<script setup lang='ts'>

const headerRef = ref()
const { height } = useElementSize(headerRef)
const { menuHeaderHeight } = storeToRefs(useThemeStore())
onMounted(() => {
    menuHeaderHeight.value = height.value
})


const { width } = useWindowSize()

const { step, steps, id } = storeToRefs(useMyFormStore())

function changeButtonFunc() {
    useMyFormStore().changeStep(id.value - 1)
}
</script>

<template>
    <div class="relative w-screen h-screen">
        <header ref="headerRef" class="absolute top-0 w-full z-[1]">
            <UContainer>
                <TemplateHeaderMain />
            </UContainer>
        </header>
        <main class="w-full h-full z-0">
            <div class="grid lg:grid-cols-2 gap-x-5 gap-y-8 w-full h-full">
                <div class="relative h-full w-full">
                    <NuxtImg src="welcome.jpg" format="webp" class="w-full h-full " />
                    <div class="absolute inset-0 w-full h-full bg-primary-600/70"></div>
                </div>
                <UCard class="h-full w-full overflow-y-auto"
                    :style="{ paddingTop: width > 768 ? menuHeaderHeight + 'px' : '20px' }"
                    :ui="{ base: 'flex flex-col', body: { base: 'flex-grow w-full' } }">
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

                    <div v-show="id > 1" class="mb-10 font-NunitoSans">
                        <h2 class="text-2xl capitalize font-semibold">{{ step.title }}</h2>
                        <p class="text-wrap w-full lg:w-2/3">{{ step.description }}</p>
                    </div>
                    <slot />
                </UCard>
            </div>
        </main>
    </div>
</template>