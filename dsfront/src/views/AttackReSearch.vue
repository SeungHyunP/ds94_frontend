<template>
  <!-- Search Filter -->
  <b-container>
    <b-card>
      <b-row style="display:inline-flex;">
        <b-col>
            <MonsterCard></MonsterCard>
        </b-col>
        <b-col>
            <MonsterCard></MonsterCard>
        </b-col>
        <b-col>
            <MonsterCard></MonsterCard>
        </b-col>
      </b-row>
      <b-row>
          <b-button variant="primary" @click="SearchClickEvent">검색</b-button>
      </b-row>
    </b-card>
  </b-container> 
    
    <!-- Create Result Area -->
    <b-container>
        <div style="width:100%; margin-top: 20px; margin-bottom: 10px; display:inline-flex; justify-content: space-between; align-items: center;">
            <h5><font-awesome-icon icon="fa-solid fa-list" /> 게시글</h5> 
            <b-button-group>
                <b-button size="sm" variant="success" v-b-tooltip.hover title="글쓰기" @click="CreateClickEvent">
                  <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </b-button>

                <!-- <div class="text-center my-3">
                  <b-button v-b-tooltip.hover title="Tooltip content">Hover Me</b-button>
                </div> -->
            </b-button-group>
        </div>
        <b-table  
                  sticky-header
                  hover 
                  :items="items" 
                  :fields="fields" 
                  :busy="isBusy" 
                  style="background-color: #fff;"
                  @row-dbl-clicked="tableDbClickEventCallBack"
                  >
        </b-table>
    </b-container>
  
</template>

<script>

import MonsterCard from '@/components/Card/MonsterCard.vue';

export default {

  compatConfig: { MODE: 3 },

  components: {
    MonsterCard
  },

  methods: {
    CreateClickEvent() {
      this.$router.push('/Research/OffenseEditor');
    },

    SearchClickEvent() {
      this.isBusy = !this.isBusy;
      console.log('Clicked');
    },

    tableDbClickEventCallBack(item, index, event){

      console.log('item', item);
      console.log('index', index);
      console.log('event', event);

      this.$router.push({
        name:'OffenseEditor',
        params: { name: "test", monsterCode1: "temp", author: "writer" }
      });
      
    }
  },

  data() {
    return {
        isBusy: false,

        fields: [
            {  key: 'SEQ'          ,    label: '순번'      , thStyle: { background: '#AEBDCA', color: '#495057' }  },
            {  key: 'REG_NO'       ,    label: '작성자'    , thStyle: { background: '#AEBDCA', color: '#495057' }  },
            {  key: 'MST_1'        ,    label: '몬스터1'   , thStyle: { background: '#AEBDCA', color: '#495057' }  },
            {  key: 'MST_2'        ,    label: '몬스터2'   , thStyle: { background: '#AEBDCA', color: '#495057' }  },
            {  key: 'MST_3'        ,    label: '몬스터3'   , thStyle: { background: '#AEBDCA', color: '#495057' }  },
            {  key: 'SIGN_YN'      ,    label: '인증여부'  , thStyle: { background: '#AEBDCA', color: '#495057' }  },
            {  key: 'SIGN_DT'      ,    label: '인증일자'  , thStyle: { background: '#AEBDCA', color: '#495057' }  },
            {  key: 'REG_DT'       ,    label: '작성일자'  , thStyle: { background: '#AEBDCA', color: '#495057' }  },
            {  key: 'COMMNET_CNT'  ,    label: '댓글'      , thStyle: { background: '#AEBDCA', color: '#495057' }  },
        ],

        /* 데이터 포맷 */

        // TODO: 몬스터 이름/코드 형태로 모두 받아야 함. 각 행 별 PK값이 있어야함.
        // 행 더블 클릭 시, 화면전환 되기 때문.
        items: [
          { SEQ : '1',    REG_NO : '김동현',    MST_1   : '풍 라클',    MST_2   : '물 브라',    MST_3   : '불 닭',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' },
          { SEQ : '2',    REG_NO : '박영서',    MST_1   : '불 스나',    MST_2   : '빛 쿵푸',    MST_3   : '풍 웨폰',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' },
          { SEQ : '3',    REG_NO : '오재상',    MST_1   : '암 에전',    MST_2   : '빛 쿵푸',    MST_3   : '불 이프',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' },
          { SEQ : '4',    REG_NO : '황정용',    MST_1   : '풍 라클',    MST_2   : '물 브라',    MST_3   : '불 닭',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' },
          { SEQ : '5',    REG_NO : '박승현',    MST_1   : '풍 라클',    MST_2   : '물 브라',    MST_3   : '불 닭',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' }
        ]
    }
  }
}
</script>

<style scoped>


</style>