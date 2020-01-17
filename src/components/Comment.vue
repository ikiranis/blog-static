<template>
    <div>
        <div class="row">
            <h3 class="mx-auto">Γράψε το σχόλιο σου</h3>
        </div>
        <form @submit.prevent>

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-right">Όνομα</label>
                <div class="col-md-8">
                    <input id="name" type="text" class="form-control"
                           v-model="comment.name" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="email" class="col-md-4 col-form-label text-md-right">email</label>
                <div class="col-md-8">
                    <input id="email" type="email" class="form-control"
                           v-model="comment.email" required>
                </div>
            </div>

            <div class="form-group row">
                <label for="commentText" class="col-md-4 col-form-label text-md-right">Κείμενο</label>
                <div class="col-md-8">
                        <textarea id="commentText" class="form-control"
                                  v-model="comment.text" rows="5" cols="50" required> </textarea>
                </div>
            </div>

            <div class="row">
                <input type="button" id="sendComment"
                       class="btn btn-success col-md-6 col-12 my-3 mx-auto"
                       @click="sendComment" value="Αποστολή">
            </div>

        </form>
    </div>
</template>

<script>
    import axios from "axios";

	export default {
    	data() {
    		return {
    			comment: {
    				name: '',
                    email: '',
                    text: ''
                }
            }
        },

        methods: {
    		//TODO check this https://wordpress.stackexchange.com/questions/333728/how-to-authenticate-wp-rest-api-with-jwt-authentication-using-fetch-api

    		sendComment() {

    			let args = {
    				post: this.$page.wordPressPost.id,
                    author: 1,
					author_name: this.comment.name,
					author_email: this.comment.email,
					content: this.comment.text
                }

				axios.post(process.env.GRIDSOME_WORDPRESSURL + '/wp-json/wp/v2/comments/', args)
					.then((res) => {
						alert('comment posted')
					})
					.catch((err) => {
						console.log(err);
					})
            }
        }

    }

</script>
