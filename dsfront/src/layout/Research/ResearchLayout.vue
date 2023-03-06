<template>
    <Header></Header>
    <Navigate></Navigate>
    <Content></Content>
    <FooterVue></FooterVue>
</template>

<script>
import Header       from '@/layout/Header.vue';
import Navigate     from '@/layout/Navigate.vue';
import Content      from '@/layout/Research/Content.vue';
import FooterVue    from '@/layout/Footer.vue';

export default {
    components: {
        Header,
        Navigate,
        Content,
        FooterVue
    }
}

</script>

<style>

</style>