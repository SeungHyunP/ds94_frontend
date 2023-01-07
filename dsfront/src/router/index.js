import { createRouter, createWebHistory } from 'vue-router';

import Login        from '../views/Login.vue';
import TotalSearch  from '../views/TotalSearch.vue';
import Home         from '../views/Home.vue';


// 라우터 목록
const routes = [

    { path: '/', component: Login},
    { path: '/Home', component: Home},
    { path: '/TotalSearch', component: TotalSearch}
]


// 라우터 인스턴스 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});


// 라우터 추출
export { router }