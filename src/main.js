
import  { createApp } from "vue";

import App from "./App.vue";
import componentss from "./components/UI";
import directivess from "./directives/directives";
import router from './router/router'
import store from "./store/store.js";

import './styles/style.scss'

//Player


const app = createApp(App);

directivess.forEach((directive) => {
  app.directive(directive.name, directive);
});
componentss.forEach((component) => {
  app.component(component.name, component);
});

//LIBS -------------------------------------------------------------------------------------
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'


const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
})

import { vue3Debounce } from 'vue-debounce'
//LIBS -------------------------------------------------------------------------------------

app
  .use(store)
  .use(vuetify)
  .directive('debounce', vue3Debounce({ lock: true }))
  .use(router)
  .mount("#app");




