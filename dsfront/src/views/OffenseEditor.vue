<template>
    <h1>Offense Editor</h1>

    <!-- Header (Info) -->
    <b-container>
        <div style="width: 100%; display:inline-flex; justify-content: space-between;">
            <h6>작성자 : {{ writer }}</h6>
            <div style="display:inline-flex; align-items: baseline;">
                <b-button pill size="sm" variant="outline-secondary"  v-b-tooltip.hover title="인증" @click="CreateClickEvent">
                    <font-awesome-icon icon="fa-solid fa-stamp"/>
                </b-button>
                <h6 style="margin-left: 5px;" >( 인증날짜 : {{ auth_dt }} )</h6>
            </div>
        </div>
    </b-container>

    <!-- Editor -->
    <b-container fluid="md">
        <b-row class="custom__row">
            <b-col class="sm__monster__card">
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="9">
                <b-form-textarea placeholder="룬, 아티펙트 설정방법" style="height:100%"></b-form-textarea>
            </b-col>
        </b-row>
        <b-row class="custom__row" >
            <b-col class="sm__monster__card">
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="9">
                <b-form-textarea placeholder="룬, 아티펙트 설정방법" style="height:100%"></b-form-textarea>
            </b-col>
        </b-row>
        <b-row class="custom__row" >
            <b-col class="sm__monster__card">
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="9">
                <b-form-textarea placeholder="룬, 아티펙트 설정방법" style="height:100%"></b-form-textarea>
            </b-col>
        </b-row>
        <b-row>
            <h5 style="text-align:left"><font-awesome-icon icon="fa-regular fa-lightbulb"/> 운영법</h5>
            <b-form-textarea placeholder="운영방법" style="height:100%"></b-form-textarea>
        </b-row>
    </b-container>
</template>

<script>
import MonsterCard from '@/components/Card/MonsterCard.vue';

export default {

    components: {
        MonsterCard
    },

    data() {
        return {
            writer: '김동현',
            auth_dt: '2023-02-02'
        }
    }

}
</script>

<style scoped>
.custom__row {
    display: inline-flex;
    width: 100%;
    padding: 12px;
}


.sm__monster__card {

    max-width: 240px;

}

</style>