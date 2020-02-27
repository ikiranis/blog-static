import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// fontawesome
// Install
// $ npm i --save @fortawesome/fontawesome-svg-core
// $ npm i --save @fortawesome/free-solid-svg-icons
// $ npm i --save @fortawesome/vue-fontawesome
// $ npm i --save @fortawesome/free-brands-svg-icons
import {library, config} from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import {faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons'
import {faRss} from '@fortawesome/free-solid-svg-icons'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {faTwitter} from '@fortawesome/free-brands-svg-icons'
import {faFacebook} from '@fortawesome/free-brands-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false;
library.add(faTwitter, faFacebook, faEnvelopeOpen, faRss, faHome)

export default function (Vue, {head}) {
	Vue.component('Layout', DefaultLayout)

	Vue.use(BootstrapVue)

	head.link.push({
		rel: 'stylesheet',
		href: 'https://fonts.googleapis.com/css?family=Comfortaa'
	})

	head.link.push({
		rel: 'alternate',
		type: 'application/rss+xml',
		title: process.env.GRIDSOME_SITE_NAME,
		href: process.env.GRIDSOME_SITE_URL + '/rss.xml'
	})

	head.script.push(
		{
			type: 'text/javascript',
			src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
			async: true
		}
	)

	head.script.push(
		{
			type: 'text/javascript',
			src: process.env.GRIDSOME_GOOGLE_SEARCH_URL,
			async: true
		}
	)

	Vue.component('font-awesome-icon', FontAwesomeIcon)

}
