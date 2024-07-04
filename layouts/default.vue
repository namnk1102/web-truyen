<script setup>
useSchemaOrg([
    {
        "@context": "http://schema.org",
        "@type": "Organization",
        "url": "https://monkeyd.vn",
        "foundingDate": "2024",
        "founders": [
            {
                "@type": "Person",
                "name": "MonkeyD"
            }],
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "customer support",
            "telephone": "[0938 71 7000]",
            "email": "monkeyd.contact@gmail.com"
        },
        "sameAs": ["https://www.facebook.com/fanpage/"],
        "@id": "#organization",
        "name": "MonkeyD",
        "logo": "https://monkeyd.vn/images/logo/Logo-MonkeyD.png"
    }
])

import menu from "@/constants/menu.js";

const route = useRoute();

const tabValue = ref("/");

watch(() => route.path, () => {
    if (route?.path) {
        menu.forEach((item) => {
            if (route.path.includes(item.path)) {
                tabValue.value = item.path;
            }
        });
    }
}, {immediate: true, deep: true});
</script>

<template>
    <!--ads-->
    <CommonAffLayer/>
    <!--wrapper-->
    <div class="wrapper">
        <!--start header wrapper-->
        <div class="header-wrapper">
            <!--start header -->
            <CommonHeader/>
            <!--end header -->
            <!--navigation-->
            <CommonNavigation/>
            <!--end navigation-->
        </div>
        <!--end header wrapper-->
        <!--start page wrapper -->
        <div class="page-wrapper">
            <div class="page-content">
                <slot/>
            </div>
        </div>
        <!-- search modal -->
        <CommonSearchModal/>
        <!-- end search modal -->
        <!-- Report Modal -->
        <CommonReportModal/>
        <!--start overlay-->
        <CommonOverlay/>
        <!--end overlay-->
        <!--Start Back To Top Button-->
        <CommonBackToTop/>
        <!--End Back To Top Button-->
        <CommonFooter/>
    </div>
    <!--loading-->
    <CommonLoadingModal/>
</template>
