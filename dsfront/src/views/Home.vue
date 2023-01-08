<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <Navigate></Navigate>

    <!-- Contents -->
    <h1> Hi</h1>

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