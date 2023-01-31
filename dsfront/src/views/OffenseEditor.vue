<template>
    <h1>Offense Editor</h1>
    <b-container fluid="md">
        <b-row class="custom__row">
            <b-col class="sm__monster__card">
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="8">
                <b-form-textarea style="height:100%"></b-form-textarea>
            </b-col>
        </b-row>
        <b-row class="custom__row" >
            <b-col class="sm__monster__card">
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="8">
                <b-form-textarea style="height:100%"></b-form-textarea>
            </b-col>
        </b-row>
        <b-row class="custom__row" >
            <b-col class="sm__monster__card">
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="8">
                <b-form-textarea style="height:100%"></b-form-textarea>
            </b-col>
        </b-row>
        <b-row>
            <h5 style="text-align:left"><font-awesome-icon icon="fa-regular fa-lightbulb"/> 운영법</h5>
            <b-form-textarea style="height:100%"></b-form-textarea>
        </b-row>
    </b-container>
</template>

<script>
import MonsterCard from '@/components/Card/MonsterCard.vue';

export default {

    components: {
        MonsterCard
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