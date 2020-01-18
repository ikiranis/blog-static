<template>
    <div class="text-center">
        <b-alert
                :show="dismissCountDown"
                dismissible
                :variant="response.status ? 'success' : 'danger'"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged">
            <span>{{ response.message }}</span>
            <b-progress
                    :variant="response.status ? 'success' : 'danger'"
                    :max="dismissSecs"
                    :value="dismissCountDown"
                    height="4px"> </b-progress>
        </b-alert>
    </div>
</template>

<script>
	export default {
		data () {
			return {
				dismissSecs: 10,
				dismissCountDown: 0,
				showDismissibleAlert: true
			}
		},
		props: {
			response: Object
		},
		computed: {
			message: function () {
				return this.response.message
			}
		},
		watch: {
			message () {
				this.showAlert()
			},
			/**
			 * On countdown = 0, reset message
			 *
			 * @param value
			 */
			dismissCountDown (value) {
				if (value === 0) {
					this.response.message = ' '
				}
			}
		},
		methods: {
			countDownChanged (dismissCountDown) {
				this.dismissCountDown = dismissCountDown
			},
			showAlert () {
				this.dismissCountDown = this.dismissSecs
			}
		}
	}
</script>
