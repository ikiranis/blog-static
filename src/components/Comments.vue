<template>
    <div>
        <h4>Comments</h4>

        <ul class="list mx-5">
            <li v-for="comment in this.comments" :key="comment.id" >
                <h5>{{ comment.author_name }}</h5>
                <div v-html="comment.content.rendered"/>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
    	props: {
    		comments: {
				type: Object,
				required: true
            }
        }
    }
</script>
