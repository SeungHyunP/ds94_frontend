import { router } from './router/index.js'
import { createApp } from 'vue'
import App from './App.vue'

/** Boot Starp */
// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import BootstrapVue3 from 'bootstrap-vue-3'
// import BootstrapVueIcons from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'


/* The fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* font awesome icon component */
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'

/* specific icons */
import { faUserSecret, faMagnifyingGlass, faPenToSquare, faEnvelope, faList, faStamp } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb, faCircleCheck  } from '@fortawesome/free-regular-svg-icons'
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
library.add(faCircleCheck);         // 인증 아이콘 (원형 체크)
library.add(faStamp);               // 인증 아이콘 (도장)


library.add(faEnvelope);            // 메일 아이콘
library.add(faBlogger);             // 블로그 아이콘

const app = createApp(App);

app.use(router);
app.use(BootstrapVue3);
// app.use(BootstrapVue);
// app.use(IconsPlugin);

app.component('font-awesome-icon', FontAwesomeIcon);
app.component('font-awesome-layers', FontAwesomeLayers)
app.component('font-awesome-layer-text', FontAwesomeLayersText)
// app.component('MonsterCard', MonsterCard)


app.mount('#app');