import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router/index.js'


import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'

// import BootstrapVueIcons from 'bootstrap-vue-3'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
// import { faUserSecret } from '@fortawesome/free-regular-svg-icons'
// import { faUserSecret } from '@fortawesome/free-brands-svg-icons'


library.add(faUserSecret);
library.add(faMagnifyingGlass);     // 검색 아이콘


const app = createApp(App);


app.use(router);
app.use(BootstrapVue3);
// app.use(BootstrapVueIcons);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layer-text', FontAwesomeLayersText)
app.mount('#app');
