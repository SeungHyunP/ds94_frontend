import { createRouter, createWebHistory } from 'vue-router';


import TotalSearch from '../views/TotalSearch.vue';


// 라우터 목록
const routes = [

    { path: '/', component:TotalSearch},

]


// 라우터 인스턴스 생성
const router = createRouter({
    history: createWebHistory(),
    routes
});


// 라우터 추출
export { router }