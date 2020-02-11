<template>
    <div class="row bg-dark text-light py-3">
        <div class="col-12">
            <div v-if="emailEnabled === 'true'">
                <font-awesome-icon :icon="['fa', 'envelope-open']" />
                {{ email }}
            </div>
            <div v-if="twitterEnabled === 'true'">
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <a :href="twitterUrl"> {{ twitterName }}</a>
            </div>
            <div v-if="facebookEnabled === 'true'">
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
    			emailEnabled: process.env.GRIDSOME_EMAIL_ENABLED,
    			email: process.env.GRIDSOME_EMAIL,
                twitterEnabled: process.env.GRIDSOME_TWITTER_ENABLED,
                twitterUrl: process.env.GRIDSOME_TWITTER_URL,
                twitterName: process.env.GRIDSOME_TWITTER_NAME,
                facebookEnabled: process.env.GRIDSOME_FACEBOOK_ENABLED,
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
