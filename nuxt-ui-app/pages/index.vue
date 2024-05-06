<script setup lang='ts'>
useHead({
    title: 'Homepage'
})

const { id } = storeToRefs(useMyFormStore())
</script>

<template>
    <div class="h-full w-full">
        <TemplateWelcomeV1 v-show="id == 1" />
        <FormPersonalV1 v-show="id == 2" />
        <FormCompanyV1 v-show="id == 3" />
        <FormSocialMediaV1 v-show="id == 4" />
        <FormMiscV1 v-show="id == 5" />

    </div>
</template>