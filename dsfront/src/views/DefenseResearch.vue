<template>
    <h1>방덱 생성기</h1>
    
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
                <b-button variant="secondary">생성</b-button>
            </b-row>
        </b-card>
    </b-container>

    <!-- Create Result Area -->
    <b-container>
        <div style="width:100%; margin-top: 20px; margin-bottom: 10px; display:inline-flex; justify-content: space-between; align-items: center;">
            <h5>생성 결과</h5> 
            <b-buttongroup>
                <b-button size="sm" variant="success">확정</b-button>
            </b-buttongroup>
        </div>

        <hot-table :settings="resultGrid"></hot-table>
        
    </b-container>


    <!-- History Area -->
    <b-container>
        <div style="width:100%; margin-top: 20px; margin-bottom: 10px; display:inline-flex; justify-content: space-between; align-items: center;">
            <h5>생성 이력</h5> 
        </div>
        <hot-table :settings="historyGrid"></hot-table>
    </b-container>

</template>

<script>

import MonsterCard from '@/components/Card/MonsterCard.vue';

/** Grid Library : Handsontable */
import { HotTable } from '@handsontable/vue3';

export default {

    components: {
        MonsterCard,
        HotTable,
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
                columns: [
                    {
                        // column 1
                        title      : '등록일',
                        width      : 150,
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
                        // column 2
                        title      : '몬스터1',
                        width      : '80',
                        data       : 'MST_1',
                        readOnly   : true,
                        className  : 'htCenter htMiddle',
                    },
                    {
                        // column 3
                        title      : '몬스터2',
                        width      : '80',
                        data       : 'MST_2',
                        readOnly   : true,
                        className  : 'htCenter htMiddle',
                    },
                    {
                        // column 4
                        title      : '몬스터3',
                        width      : '80',
                        data       : 'MST_3',
                        readOnly   : true,
                        className  : 'htCenter htMiddle',
                    },
                    {
                        // column 5
                        title      : '총 개수',
                        width      : '50',
                        data       : 'TOTAL_CNT',
                        readOnly   : true,
                        className  : 'htCenter htMiddle',
                    },
                    {
                        // column 6
                        title      : '멤버',
                        width      : '120',
                        data       : 'MEMBER',
                        readOnly   : true,
                        className  : 'htLeft htMiddle'
                    }
                ],
                data: [

                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}, 
                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}, 
                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}, 
                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}, 
                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}
                    
                ],
            },

            historyGrid : {
                licenseKey: 'non-commercial-and-evaluation',
                width: '100%',
                height: 'auto',
                stretchH: 'last',
                manualColumnResize: true,
                rowHeights: 35,
                rowHeaders: true,
                columnHeaderHeight : 35,
                columns: [
                    {
                        // column 1
                        title       : '등록일',
                        width       : 150,
                        type        : 'date',
                        dateFormat  : 'YYYY-MM-DD',
                        data        : 'REG_DT',
                        readOnly    : true,
                        className   : 'htCenter htMiddle',
                        // renderer(instance, td, row, col, prop, value) {
                        //     return td ;
                        // }
                    },
                    {
                        // column 2
                        title       : '몬스터1',
                        width       : '80',
                        data        : 'MST_1',
                        readOnly    : true,
                        className   : 'htCenter htMiddle',
                    },
                    {
                        // column 3
                        title       : '몬스터2',
                        width       : '80',
                        data        : 'MST_2',
                        readOnly    : true,
                        className   : 'htCenter htMiddle',
                    },
                    {
                        // column 4
                        title       : '몬스터3',
                        width       : '80',
                        data        : 'MST_3',
                        readOnly    : true,
                        className   : 'htCenter htMiddle',
                    },
                    {
                        // column 5
                        title       : '총 개수',
                        width       : '50',
                        data        : 'TOTAL_CNT',
                        readOnly    : true,
                        className   : 'htCenter htMiddle',
                    },
                    {
                        // column 6
                        title       : '멤버',
                        width       : '120',
                        data        : 'MEMBER',
                        readOnly    : true,
                        className   : 'htLeft htMiddle'
                    }
                ],
                data: [

                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}, 
                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}, 
                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}, 
                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}, 
                    {REG_DT  : '2023-01-23', MST_1 : '풍 라클', MST_2 : '물 브라', MST_3 : '불 닭', TOTAL_CNT : '6', MEMBER : '고영조, 고영조, 진민구, 김동현'}
                    
                ],
            },

        };
    }
}

</script>

<style>

</style>