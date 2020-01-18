<template>
    <div class="row bg-dark text-light py-3">
        <div class="col-12">
            <div>
                <font-awesome-icon :icon="['fa', 'envelope-open']" />
                {{ email }}
            </div>
            <div>
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <a :href="twitterUrl"> {{ twitterName }}</a>
            </div>
            <div>
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <a :href="facebookUrl"> {{ facebookName }}</a>
            </div>
            <div>
                <font-awesome-icon :icon="['fa', 'rss']" />
                <a :href="siteUrl"> feed</a>
            </div>
        </div>

    </div>

</template>

<script>
    export default {
    	data() {
    		return {
    			email: process.env.GRIDSOME_EMAIL,
                twitterUrl: process.env.GRIDSOME_TWITTER_URL,
                twitterName: process.env.GRIDSOME_TWITTER_NAME,
                facebookUrl: process.env.GRIDSOME_FACEBOOK_URL,
                facebookName: process.env.GRIDSOME_FACEBOOK_NAME,
                siteUrl: process.env.GRIDSOME_SITE_URL + '/rss.xml'
            }
        }
    }
</script>

<style scoped>
    /* unvisited link */
    a:link {
        color: white;
    }

    /* visited link */
    a:visited {
        color: white;
    }

    /* mouse over link */
    a:hover {
        color: white;
    }

    /* selected link */
    a:active {
        color: white;
    }
</style>
