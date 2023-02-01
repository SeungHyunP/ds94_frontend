<template>
  <h1>Attack Research</h1>

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
          <b-button variant="primary">검색</b-button>
      </b-row>
    </b-card>
  </b-container>
    
    <!-- Create Result Area -->
    <b-container>
        <div style="width:100%; margin-top: 20px; margin-bottom: 10px; display:inline-flex; justify-content: space-between; align-items: center;">
            <h5><font-awesome-icon icon="fa-solid fa-list" /> 게시글</h5> 
            <b-buttongroup>
                <b-button size="sm" variant="success"  v-b-tooltip.hover title="글쓰기" @click="CreateClickEvent">
                  <font-awesome-icon icon="fa-solid fa-pen-to-square" />
                </b-button>
            </b-buttongroup>
        </div>
        <hot-table :settings="resultGrid"></hot-table>
    </b-container>
  
</template>

<script>

/** Grid Library : Handsontable */
import { HotTable } from '@handsontable/vue3';

import MonsterCard from '@/components/Card/MonsterCard.vue';

export default {

  components: {
    MonsterCard,
    HotTable,
  },

  methods: {
    CreateClickEvent() {
      this.$router.push('/Research/OffenseEditor');
    }
  },

  data() {
    return {
      resultGrid : {
          licenseKey: 'non-commercial-and-evaluation',
          width: '100%',
          height: 'auto',
          stretchH: 'last',
          manualColumnResize: true,
          rowHeights: 35,
          rowHeaders: true,
          columnHeaderHeight : 35,
          afterGetRowHeader: (col, TH) => {
              TH.className = 'htCenter htMiddle'
          },
          afterGetColHeader: (col, TH) => {
              TH.className = 'htCenter htMiddle'
          },
          columns: [
              {
                  // column 1
                  title      : '순번',
                  width      : '80',
                  data       : 'SEQ',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
              },
              {
                  // column 2
                  title      : '작성자',
                  width      : '100',
                  data       : 'REG_NO',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
              },
              {
                  // column 3
                  title      : '몬스터1',
                  width      : '80',
                  data       : 'MST_1',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
              },
              {
                  // column 4
                  title      : '몬스터2',
                  width      : '80',
                  data       : 'MST_2',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
              },
              {
                  // column 5
                  title      : '몬스터3',
                  width      : '80',
                  data       : 'MST_3',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
              },
              {
                  // column 6
                  title      : '인증여부',
                  width      : '80',
                  data       : 'SIGN_YN',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
              },
              {
                  // column 7
                  title      : '인증일자',
                  width      : '150',
                  type       : 'date',
                  dateFormat : 'YYYY-MM-DD',
                  data       : 'SIGN_DT',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
                  // renderer(instance, td, row, col, prop, value) {
                  //     return td ;
                  // }
              },
              {
                  // column 8
                  title      : '작성일자',
                  width      : '150',
                  type       : 'date',
                  dateFormat : 'YYYY-MM-DD',
                  data       : 'REG_DT',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
                  // renderer(instance, td, row, col, prop, value) {
                  //     return td ;
                  // }
              },
              {
                  // column 9
                  title      : '댓글',
                  width      : '50',
                  data       : 'COMMNET_CNT',
                  readOnly   : true,
                  className  : 'htCenter htMiddle',
              }
          ],
          data: [
            { SEQ : '1',    REG_NO : '김동현',    MST_1   : '풍 라클',    MST_2   : '물 브라',    MST_3   : '불 닭',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' },
            { SEQ : '2',    REG_NO : '박영서',    MST_1   : '불 스나',    MST_2   : '빛 쿵푸',    MST_3   : '풍 웨폰',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' },
            { SEQ : '3',    REG_NO : '오재상',    MST_1   : '암 에전',    MST_2   : '빛 쿵푸',    MST_3   : '불 이프',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' },
            { SEQ : '4',    REG_NO : '황정용',    MST_1   : '풍 라클',    MST_2   : '물 브라',    MST_3   : '불 닭',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' },
            { SEQ : '5',    REG_NO : '박승현',    MST_1   : '풍 라클',    MST_2   : '물 브라',    MST_3   : '불 닭',    SIGN_YN : 'Y',    SIGN_DT : '2023-01-31',    REG_DT : '2023-01-20',    COMMNET_CNT : '5' }
          ],
      },
    }
  }
}
</script>

<style>

</style>