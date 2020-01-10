<template>
    <div class="row bg-dark text-light py-3">
        <div class="col-12">
            <div>
                <font-awesome-icon :icon="['fa', 'envelope-open']" />
                rocean (at) error.gr</div>
            <div>
                <font-awesome-icon :icon="['fab', 'twitter']" />
                <a href="https://twitter.com/rocean"> rocean</a>
            </div>
            <div>
                <font-awesome-icon :icon="['fab', 'facebook']" />
                <a href="https://www.facebook.com/error.gr"> error.gr</a>
            </div>
        </div>

    </div>

</template>

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

