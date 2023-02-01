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
import { faUserSecret, faMagnifyingGlass, faPenToSquare, faEnvelope, faList } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb  } from '@fortawesome/free-regular-svg-icons'
import { faBlogger } from '@fortawesome/free-brands-svg-icons'


/** Grid Library : Handsontable */
import 'handsontable/dist/handsontable.full.css';
import { registerAllModules }   from 'handsontable/registry';
import { registerCellType, NumericCellType, DateCellType }     from 'handsontable/cellTypes';
import { registerPlugin, UndoRedo } from 'handsontable/plugins';



/** Hansonetable */
registerAllModules();
registerCellType(NumericCellType);
registerCellType(DateCellType);
registerPlugin(UndoRedo);


/** Fontawesome */
library.add(faUserSecret);
library.add(faMagnifyingGlass);     // 검색 아이콘
library.add(faPenToSquare);         // 글쓰기 아이콘
library.add(faLightbulb);           // 전구 아이콘
library.add(faList);                // 리스트 아이콘


library.add(faEnvelope);            // 메일 아이콘
library.add(faBlogger);             // 블로그 아이콘

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layer-text', FontAwesomeLayersText)
app.mount('#app');