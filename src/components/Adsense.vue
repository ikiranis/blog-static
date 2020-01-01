<template>
    <ins class="adsbygoogle"
         :style="adStyle"
         :data-ad-client="adClient"
         :data-ad-slot="adSlot"
         :data-ad-format="adFormat"
         :data-full-width-responsive="data_full_width_responsive" />
</template>

<script>
	export default {
		props: {
			adClient: {
				type: String,
				required: true
			},
			adSlot: {
				type: String,
				required: true
			},
			adFormat: {
				type: String,
				required: false,
				default: 'auto'
			},
			adStyle: {
				type: String,
				required: false,
				default: 'display: block'
			},
			data_full_width_responsive: {
				type: String,
				required: false,
				default: 'true'
			}
		},
		mounted() {
			(window.adsbygoogle = window.adsbygoogle || []).push({});
		}
	}
</script>
