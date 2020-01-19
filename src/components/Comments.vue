<template>
    <div v-if="comments.length">
        <h4>Comments</h4>

        <ul class="list mt-3 mx-5">
            <li v-for="comment in this.comments" :key="comment.id" >
                <h5>
                    <strong>{{ comment.author_name }}</strong>
                    <small> @ {{ moment(comment.date).format('DD/MM/YYYY hh:mm') }} </small>
                </h5>

                <div v-html="comment.content.rendered"/>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from "axios";
	import moment from "moment";

	export default {
    	data() {
			return {
				comments: []
			}
		},

		mounted() {
			this.getComments()
		},

		methods: {
    		moment,

			getComments() {
				axios.get(process.env.GRIDSOME_WORDPRESSURL + '/wp-json/wp/v2/comments?post='
					+ this.$page.wordPressPost.id
					+ '&orderby=date&order=asc')
					.then((res) => {
						this.comments = res.data
					})
					.catch((err) => {
						console.log(err);
					})
			}
		}
    }
</script>
