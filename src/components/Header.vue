<template>
    <header class="header">
        <Logo  />
    </header>
</template>

<script>
    import Logo from "@/components/Logo"

    export default {
        name: "Header",
        components: {
            Logo
        }
    }
</script>

<style lang="scss" scoped>
    .header {
        overflow: hidden;
        text-align: left;
        padding: 30px 0;
        width: 100%;

        @include mobile {
            text-align: center;
        }

    }
</style>
