<template>
    <div class="see-more">
        <router-link
                :to="to"
                class="see-more-link">
            <p>Більше &rarr;</p>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "SeeMoreLink",
        props: ['to']
    }
</script>

<style scoped lang="scss">
    .see-more {
        text-align: right;

        & p {
            margin: 0;
        }

        &-link {
            text-decoration: none;
            color: #2e2e2e;
        }
    }
</style>