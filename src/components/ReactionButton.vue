<template>
    <div class="reaction">
        <!-- TODO: clickable image -->
        <img src="../assets/icons/fire2.png" class="reaction-icon" />
        
        <p class="reaction-count" v-if="reactions == 1">
            {{reactions}} Реакція
        </p>
        <p class="reaction-count" v-else-if="reactions >= 2 && reactions <= 4">
            {{reactions}} Реакції
        </p>
        <p class="reaction-count" v-else-if="reactions >= 5">
            {{reactions}} Реакцій
        </p>
         <p class="reaction-count" v-else>
            Оціни цей editt першим!
        </p>
    </div>
</template>

<script>
    export default {
        name: "ReactionButton",
        props: ["reactions"],
    }
</script>

<style scoped lang="scss">
    .reaction {
        display: flex;
        justify-content: space-between;
        align-items: baseline;

        @include tablet {
            flex-direction: column;
            margin-bottom: 20px;
            align-items: center;
        }

        &-count {
            box-sizing: border-box;
        }

        &-icon {
            box-sizing: border-box;
            $size: 60px;
            width: $size;
            height: $size;
            padding: 0;
            margin: 0;
        }
    }
</style>