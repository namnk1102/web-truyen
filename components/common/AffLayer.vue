<script setup>
const linkAds = "https://s.shopee.vn/4KyL9eABIm";

const aff = ref();

const handleAffLayerClick = () => {
    sessionStorage.setItem('aff', 'true');
    aff.value = true;
};

onMounted(() => {
    aff.value = sessionStorage.getItem('aff') !== null;
})
</script>

<template>
    <a v-if="!aff"
       id="affLayer"
       class="transparent-layer"
       :href="linkAds"
       target="_blank"
       @click="handleAffLayerClick"/>
</template>

<style scoped>

</style>
