<template>
    <div class="container-fluid wraper">
        <div class="col-xl-6 col-lg-9 col-12 mx-auto">

            <div class="row mb-3 mt-5">
                <g-link to="/" class="mx-auto">
                    <img src="../images/logo.jpg" alt="logo">
                </g-link>
            </div>

            <div class="row mt-3 mb-3">
                <div class="col-lg-6 col-12 mx-auto">
                    <search/>
                </div>
            </div>

            <slot/>

            <Adsense class="mb-3 mt-3"
                     ad-client="ca-pub-4611864067867074"
                     ad-slot="3220919277"
                     ad-style="display:block"
                     ad-format="auto"
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
		}
	}
</script>

<style>

    .wraper {
        font-family: "Comfortaa", cursive;
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

</style>

