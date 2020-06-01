<template>
    <div>
        <div v-if="displayComment">
            <div class="row">
                <h3 class="mx-auto">Write your comment</h3>
            </div>
            <form @submit.prevent>

                <div class="form-group row">
                    <div class="col-12">
                        <input id="name" type="text" class="form-control"
                               v-model="comment.name" required placeholder="name">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-12">
                        <input id="email" type="email" class="form-control"
                               v-model="comment.email" required placeholder="email">
                    </div>
                </div>

                <div class="form-group row">
                    <div class="col-12">
                            <textarea id="commentText" class="form-control"
                                      v-model="comment.text" rows="5" cols="50"
                                      required placeholder="text"> </textarea>
                    </div>
                </div>

                <div class="row">
                    <input type="button" id="sendComment"
                           class="btn btn-success col-md-6 col-12 my-3 mx-auto"
                           @click="sendComment" value="Send">
                </div>

            </form>

        </div>

        <div class="row fixed-bottom mb-2">
            <display-error class="mx-auto"
                           v-if="response.message"
                           :response="response"/>
        </div>

    </div>
</template>

<script>
    import axios from "axios"
	import DisplayError from '@/components/DisplayError'

	export default {
		components: { DisplayError },

    	data() {
    		return {
    			comment: {
    				name: '',
                    email: '',
                    text: ''
                },

				response: {
					message: ' ',
					status: '',
					errors: []
				},

                displayComment: true,
            }
        },

        methods: {
    		async sendComment() {

				let args = {
					post: this.$page.wordPressPost.id,
					author_name: this.comment.name,
					author_email: this.comment.email,
					content: this.comment.text
				}

				await fetch( process.env.GRIDSOME_WORDPRESSURL + '/wp-json/jwt-auth/v1/token', {
					method: 'POST',
					body: JSON.stringify( {
						// Username of a user on the WordPress website in which the REST API request
						// is being made to.
						username: process.env.GRIDSOME_WP_USERNAME,
						// And the above user's password.
						password: process.env.GRIDSOME_WP_PASSWORD
					} ),
					headers: {
						'Content-Type': 'application/json'
					}
				} )
                    .then( res => res.json() )
					.then( res => {
						axios.defaults.headers.common['Accept'] = 'application/json'
						axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.token
					} )
					.catch((err) => {
						console.log(err);
					})

    			await axios.post(process.env.GRIDSOME_WORDPRESSURL + '/wp-json/wp/v2/comments/', args)
					.then((res) => {
						this.response.message = 'Thank you! Your comment will be posted soon'
						this.response.status = true

                        this.displayComment = false
					})
					.catch(err => {
						this.response.message = err.response.data.message
						this.response.status = false

                        console.log(err.response)
					})
            }
        }

    }

</script>
