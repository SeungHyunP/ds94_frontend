<template>

    <Navigate></Navigate>
    <Content></Content>
    <FooterVue></FooterVue>

</template>

<script>

import Content      from '@/layout/Research/Content.vue';
import Navigate     from '@/layout/Navigate.vue';
import FooterVue    from '@/layout/Footer.vue';

export default {
    components: {
        Navigate,
        Content,
        FooterVue
    }
}

</script>

<style>

</style>