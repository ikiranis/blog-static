<template>
    <div>
        <div class="row">
            <h1 class="mx-auto">Σχόλιο</h1>
        </div>
        <form @submit.prevent>

            <div class="form-group row">
                <label for="name" class="col-md-4 col-form-label text-md-center">Όνομα</label>
                <div class="col-md-8">
                    <input id="name" type="date" class="form-control"
                           v-model="comment.name">
                </div>
            </div>

            <div class="form-group row">
                <label for="commentText" class="col-md-4 col-form-label text-md-center">Σχόλιο</label>
                <div class="col-md-8">
                        <textarea id="commentText" class="form-control"
                                  v-model="comment.text" required> </textarea>
                </div>
            </div>

        </form>
    </div>
</template>

<script>
    export default {
    	data() {
    		return {
    			comment: {
    				name: '',
                    text: ''
                }
            }
        }

    }

</script>
