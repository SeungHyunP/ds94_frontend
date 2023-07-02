<template>
    <h1>Offense Editor</h1>

    <!-- Header (Info) -->
    <BContainer>
        <div style="width: 100%; display:inline-flex; justify-content: space-between;">
            <h6>작성자 : {{ writer }}</h6>
            <div style="display:inline-flex; align-items: baseline;">
                <b-button pill size="sm" variant="outline-secondary"  v-b-tooltip.hover title="인증" @click="AuthorClickEvent">
                    <font-awesome-icon icon="fa-solid fa-stamp"/>
                </b-button>
                <h6 style="margin-left: 5px;" >( 인증날짜 : {{ auth_dt }} )</h6>
            </div>
        </div>
    </BContainer>

    <!-- Utility Button Group -->
    <BContainer>
        <div class="utility__area">
            <b-button class="utility__btn" variant="primary" >수정</b-button>
            <b-button class="utility__btn" variant="success" >저장</b-button>
            <b-button class="utility__btn" variant="danger" >삭제</b-button>
        </div>
    </BContainer>

    <!-- Editor -->
    <BContainer fluid>
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
    </BContainer>
</template>

<script>
import MonsterCard from '@/components/Card/MonsterCard.vue';

export default {

/*  TODO ::
    1. 라우팅 인자값에 따라, 출력여부/활성화여부 값들을 결정함. (권한 체크 로직 필요.)
     - 편집자가 본인의 게시글을 들어가는 경우.
     - 마스터 권한을 소유한 유저가 들어가는 경우.
    2. 
*/
    name: "OffenseEditor",

    compatConfig: { MODE: 3 },

    components: {
        MonsterCard
    },

    props:{
        name: {type: String, default: ""},
        monsterCode1: {type: String, default: ""},
        author: {type: String, default: ""}
    },

    data() {
        return {
            writer: '김동현',
            auth_dt: '2023-02-02'
        }
    },

    created(){
        console.log(this.$router);

        console.log(this.$props.name);
        

    },

    methods:{
        AuthorClickEvent(){
            console.log('Author Click Event ...');
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


.utility__area{
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;
    padding-right: 10px;
}

.utility__btn {
    margin: 5px;
}

</style>