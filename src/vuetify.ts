import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
// import '@mdi/font/css/materialdesignicons.css';
import '@fortawesome/fontawesome-free/css/all.css'
import { aliases, fa } from 'vuetify/iconsets/fa';
import { ja } from 'vuetify/locale';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    // defaultSet: 'mdi',
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  locale: {
    locale: 'ja',
    messages: { ja },
  },
})

export default vuetify;
