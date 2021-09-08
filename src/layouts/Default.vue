<template>
    <div class="container-fluid wraper">
        <div class="col-xl-6 col-lg-9 col-12 mx-auto">

            <div class="row mb-3 mt-5">
                <g-link to="/" class="mx-auto">
                    <img src="../images/logo.jpg" alt="logo">
                </g-link>
            </div>

            <div v-if="searchEnabled === 'true'" class="row mt-3 mb-3">
                <div class="col-lg-6 col-12 mx-auto">
                    <search/>
                </div>
            </div>

            <slot/>

            <Adsense v-if="adsenseEnabled === 'true'"
                     class="mb-3 mt-3"
                     :adClient="adsenseClient"
                     :adSlot="adsenseSlot"
                     adStyle="display:block"
                     adFormat="auto"
                     data_full_width_responsive="true">
            </Adsense>

        </div>

        <Footer/>

    </div>
</template>

<script>
	import Footer from '~/components/Footer.vue'
	import Search from '~/components/Search.vue'
	import Adsense from '@/components/Adsense.vue'

	export default {
		components: {
			Footer, Search, Adsense
		},

        computed: {
			adsenseEnabled() {
				return process.env.GRIDSOME_GOOGLE_ADSENSE_ENABLED
			},

			adsenseClient() {
				return process.env.GRIDSOME_GOOGLE_ADSENSE_CLIENT
			},

			adsenseSlot() {
				return process.env.GRIDSOME_GOOGLE_ADSENSE_SLOT
			},

			searchEnabled() {
				return process.env.GRIDSOME_GOOGLE_SEARCH_ENABLED
			}
        }
	}
</script>

<style>

    .wraper {
        font-family: "Comfortaa", Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

    img {
        width: 100%;
    }

    nav[role="navigation"] {
        text-align: center;
    }

    nav[role="navigation"] a {
        display: inline-block;
        margin: 1.0em 0.75em 2.0em;
    }

    .header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
    }

    .nav__link {
        margin-left: 20px;
    }

    .post-list {
        list-style: none;
        padding-left: 0;
    }

    .post-list li {
        padding: 1em 0;
    }

    iframe {
        width: 100%;
    }

    code {
        background: #000000;
        border-left: 10px solid grey;
        border-right: 10px solid grey;
        color: #ffffff !important;
        page-break-inside: avoid;
        font-family: monospace;
        font-size: 15px;
        line-height: 1.6;
        margin-bottom: 1.6em;
        max-width: 100%;
        overflow: auto;
        padding: 1em 1.5em;
        display: block;
        word-wrap: break-word;
    }

</style>

