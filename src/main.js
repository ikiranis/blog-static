import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default function (Vue, { head }) {
  Vue.component('Layout', DefaultLayout)

  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Comfortaa'
  })

  head.script.push(
      {
        type: 'text/javascript',
        src: 'https//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true
      }
  )

}
