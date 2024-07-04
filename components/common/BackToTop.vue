<script setup>
const showBackToTop = ref(false);

const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <a v-if="showBackToTop" href="javaScript:;" class="back-to-top" style="display: inline;" @click="scrollToTop">
        <i class="bx bxs-up-arrow-alt"/>
    </a>
</template>
