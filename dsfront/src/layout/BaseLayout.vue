<template>

    <Navigate></Navigate>

    <div>Content</div>

    <FooterVue></FooterVue>

</template>

<script>

import Navigate     from '@/layout/Navigate.vue';
import FooterVue    from '@/layout/Footer.vue';

export default {
    components: {
        Navigate,
        FooterVue
    }
}

</script>

<style>

</style>