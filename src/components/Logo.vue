<template>
    <h1 class="logo">
        <router-link to="/" class="link">editt.</router-link>
    </h1>
</template>

<script>
    export default {
        name: "Logo"
    }
</script>

<style scoped lang="scss">
    .logo {
        font-size: 48px;
        font-weight: bold;
        padding-left: 100px;
        margin: 0;
        user-select: none;

        @include mobile {
            max-width: 100%;
            padding: 0;
        }
    }

    .link {
        text-decoration: none;
        color: #2e2e2e;
    }

</style>