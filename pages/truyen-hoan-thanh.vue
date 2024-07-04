<script setup>
const config = useRuntimeConfig()

useHead({
    title: '',
    meta: [
        {
            name: 'description',
            content: ''
        },
        {
            name: 'title',
            content: ''
        },
    ],
})

useSeoMeta({
    title: '',
    ogTitle: '',
    description: '',
    ogDescription: '',
    ogImage: '',
    ogUrl: `${config.public.SITE_URL}/`,
})
</script>

<template>

</template>
