<template>
    <h1>Offense Editor</h1>
    <b-container>
        <b-row style="display:inline-flex; width:100%;" >
            <b-col>
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="8">
                <b-form-textarea style="height:100%"></b-form-textarea>
            </b-col>
        </b-row>
        <b-row style="display:inline-flex; width:100%;" >
            <b-col>
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="8">
                <b-form-textarea style="height:100%"></b-form-textarea>
            </b-col>
        </b-row>
        <b-row style="display:inline-flex; width:100%;" >
            <b-col>
                <MonsterCard></MonsterCard>
            </b-col>
            <b-col cols="8">
                <b-form-textarea style="height:100%"></b-form-textarea>
            </b-col>
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

<style>

</style>