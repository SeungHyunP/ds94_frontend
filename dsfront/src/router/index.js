import { createRouter, createWebHistory } from 'vue-router';

import Login            from '../views/Login.vue';
import TotalSearch      from '../views/TotalSearch.vue';
import Home             from '../views/Home.vue';
import AttackResearch   from '../views/AttackReSearch.vue';
import InformUser       from '../views/InformUser.vue';
import InformMonster    from '../views/InformMonster.vue';


// 라우터 목록
const routes = [

    { path: '/', component: Login},
    { path: '/Home', component: Home},
    { path: '/TotalSearch', component: TotalSearch},
    { path: '/AttackResearch', component: AttackResearch},
    { path: '/Inform/User', component: InformUser},
    { path: '/Inform/Monster', component: InformMonster}

]


// 라우터 인스턴스 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});


// 라우터 추출
export { router }