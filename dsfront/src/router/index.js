import { createRouter, createWebHistory } from 'vue-router';

import Login            from '../views/Login.vue';
import TotalSearch      from '../views/TotalSearch.vue';
import Home             from '../views/Home.vue';

import AttackResearch   from '../views/AttackReSearch.vue';
import DefenseResearch  from '../views/DefenseResearch.vue';
import Board            from '../views/board/Free.vue';
import InformUser       from '../views/InformUser.vue';
import InformMonster    from '../views/InformMonster.vue';

import ResearchLayout   from '../layout/Research/ResearchLayout.vue'

// 라우터 목록
const routes = [
    { path: "/", component: Login },
    { path: "/Home", component: Home },
    { path: "/TotalSearch", component: TotalSearch },

    {
        path: "/Research",
        component: ResearchLayout,
        children: [
            {
                path: "AttackResearch",
                component: AttackResearch
            },
            {
                path: "DefenseResearch",
                component: DefenseResearch
            },
            {
                path: "Board",
                component: Board
            },
            {
                path: "User",
                component: InformUser
            },
            {
                path: "Monster",
                component: InformMonster
            },
        ],
    },
];


// 라우터 인스턴스 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});


// 라우터 추출
export { router }